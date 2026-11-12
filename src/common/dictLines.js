/**
 * 词典分片的分块流式读取。
 *
 * 背景：设备堆常年在 13.33MB / 剩余不到 10KB 的状态下运行（见三次 panic dump），
 * 任何一次大于最大空闲块的连续分配都会触发 mm_heap 断言重启。
 * file.readText 会把整个文件一次性读成一个 String（entry 分片 ~41KB、word_t.txt 67KB），
 * 正好是最容易踩线的那一种分配；file.readArrayBuffer 支持 position/length 分段，
 * 因此这里改成 4KB 一段循环读，逐行回调，永远不 materialize 整个文件。
 */

import file from "@system.file"

const CHUNK_SIZE = 4096

// 兼容三种返回形态：{buffer: Uint8Array}、直接返回 Uint8Array、ArrayBuffer
function asBytes(data) {
  if (!data) {
    return null
  }
  var buf = data.buffer !== undefined ? data.buffer : data
  if (!buf) {
    return null
  }
  if (typeof buf.length === "number") {
    return buf
  }
  if (typeof buf.byteLength === "number") {
    return new Uint8Array(buf)
  }
  return null
}

// UTF-8 解码：按行切分后再解码，因此不会出现半个字符跨段的问题
// （0x0A 不会出现在任何多字节序列内部）。
function decodeRange(bytes, start, end) {
  if (end <= start) {
    return ""
  }
  const codes = []
  let i = start
  while (i < end) {
    const b = bytes[i]
    if (b < 0x80) {
      codes.push(b)
      i += 1
    } else if ((b & 0xe0) === 0xc0 && i + 1 < end) {
      codes.push(((b & 0x1f) << 6) | (bytes[i + 1] & 0x3f))
      i += 2
    } else if ((b & 0xf0) === 0xe0 && i + 2 < end) {
      codes.push(((b & 0x0f) << 12) | ((bytes[i + 1] & 0x3f) << 6) | (bytes[i + 2] & 0x3f))
      i += 3
    } else if ((b & 0xf8) === 0xf0 && i + 3 < end) {
      var cp = ((b & 0x07) << 18) | ((bytes[i + 1] & 0x3f) << 12) | ((bytes[i + 2] & 0x3f) << 6) | (bytes[i + 3] & 0x3f)
      cp -= 0x10000
      codes.push(0xd800 + (cp >> 10))
      codes.push(0xdc00 + (cp & 0x3ff))
      i += 4
    } else {
      i += 1
    }
  }
  if (codes.length === 0) {
    return ""
  }
  var out = ""
  for (var c = 0; c < codes.length; c += 512) {
    out += String.fromCharCode.apply(null, codes.slice(c, c + 512))
  }
  return out
}

/**
 * 分块读取文本文件，逐行回调。
 * onLine(line, index) 返回 false 时立即停止读取（用于「找到就够了」的场景）。
 * done(lineCount) 在读完后调用；fail(code) 在首段就 I/O 失败时调用。
 */
export function readLines(uri, onLine, done, fail) {
  var position = 0
  var tail = []
  var lineIndex = 0
  var finished = false
  var stopped = false
  var retriedEof = false
  var chunkCount = 0

  var finish = function () {
    if (finished) {
      return
    }
    finished = true
    if (!stopped && tail.length > 0) {
      var last = decodeRange(tail, 0, tail.length)
      if (last.charAt(last.length - 1) === "\r") {
        last = last.slice(0, last.length - 1)
      }
      lineIndex += 1
      stopped = onLine(last, lineIndex - 1) === false
    }
    if (done) {
      done(lineIndex)
    }
  }

  var abort = function (code) {
    if (finished) {
      return
    }
    finished = true
    console.log("dictLines readArrayBuffer failed: " + uri + " code " + code)
    if (fail) {
      fail(code)
    }
  }

  // 处理一段字节：切行、回调、把最后半行留到下一段
  var consume = function (buf) {
    var total = tail.length + buf.length
    var combined = new Uint8Array(total)
    for (var t = 0; t < tail.length; t++) {
      combined[t] = tail[t]
    }
    combined.set(buf, tail.length)

    var start = 0
    var lastBreak = -1
    for (var i = 0; i < total; i++) {
      if (combined[i] === 10) {
        lastBreak = i
        var end = i
        if (end > start && combined[end - 1] === 13) {
          end -= 1
        }
        var line = decodeRange(combined, start, end)
        lineIndex += 1
        if (onLine(line, lineIndex - 1) === false) {
          stopped = true
          finish()
          return
        }
        start = i + 1
      }
    }
    tail = []
    for (var j = lastBreak + 1; j < total; j++) {
      tail.push(combined[j])
    }
  }

  var step = function () {
    if (finished || stopped) {
      return
    }
    file.readArrayBuffer({
      uri: uri,
      position: position,
      length: CHUNK_SIZE,
      success: function (data) {
        var buf = asBytes(data)
        if (!buf || buf.length === 0) {
          finish()
          return
        }
        position += buf.length
        consume(buf)
        if (finished || stopped) {
          return
        }
        // 每一段都会在 native 侧留下一个 4KB buffer（等 GC 回收）。
        // 崩 4 时 free 只有 48B，读一整个 67KB 分片要连开 17 个，不能让它们叠着等 GC。
        chunkCount += 1
        if (chunkCount % 8 === 0 && typeof global !== "undefined" && typeof global.runGC === "function") {
          global.runGC()
        }
        if (buf.length < CHUNK_SIZE) {
          // 短块 = 已到文件末尾
          finish()
          return
        }
        step()
      },
      fail: function (data, code) {
        if (finished) {
          return
        }
        // 读到一半才失败：多半是最后一次短读被实现成 I/O 错误，
        // 补一次「读到结尾」的读，避免丢掉尾部几行。
        if (position > 0 && !retriedEof) {
          retriedEof = true
          file.readArrayBuffer({
            uri: uri,
            position: position,
            success: function (data2) {
              var rest = asBytes(data2)
              if (rest && rest.length > 0) {
                position += rest.length
                consume(rest)
              }
              finish()
            },
            fail: function () {
              finish()
            }
          })
          return
        }
        if (position > 0) {
          finish()
          return
        }
        abort(code)
      }
    })
  }

  step()
}
