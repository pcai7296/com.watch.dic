---
url: "https://iot.mi.com/vela/quickapp/zh/features/data/file.html"
title: "文件存储 file | Xiaomi Vela JS 应用开发文档"
---

# [\#](https://iot.mi.com/vela/quickapp/zh/features/data/file.html\#%E6%96%87%E4%BB%B6%E5%AD%98%E5%82%A8-file) 文件存储 file

## [\#](https://iot.mi.com/vela/quickapp/zh/features/data/file.html\#%E6%8E%A5%E5%8F%A3%E5%A3%B0%E6%98%8E) 接口声明

```
{ "name": "system.file" }

```

## [\#](https://iot.mi.com/vela/quickapp/zh/features/data/file.html\#%E5%AF%BC%E5%85%A5%E6%A8%A1%E5%9D%97) 导入模块

```
import file from '@system.file'
// 或
const file = require('@system.file')

```

## [\#](https://iot.mi.com/vela/quickapp/zh/features/data/file.html\#%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89) 接口定义

### [\#](https://iot.mi.com/vela/quickapp/zh/features/data/file.html\#file-move-object) file.move(OBJECT)

将源文件移动到指定位置，接口中使用的 URI 描述请参考 [文件组织](https://iot.mi.com/vela/quickapp/zh/guide/framework/project-structure.html#uri)

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/data/file.html\#%E5%8F%82%E6%95%B0) 参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| srcUri | String | 是 | 源文件的 uri，不能是应用资源路径和 tmp 类型的 uri |
| dstUri | String | 是 | 目标文件的 uri，不能是应用资源路径和 tmp 类型的 uri |
| success | Function | 否 | 成功回调，返回目标文件的 uri |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/data/file.html\#fail-%E8%BF%94%E5%9B%9E%E9%94%99%E8%AF%AF%E4%BB%A3%E7%A0%81) fail 返回错误代码：

| 错误码 | 说明 |
| --- | --- |
| 202 | 参数错误 |
| 300 | I/O 错误 |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/data/file.html\#%E7%A4%BA%E4%BE%8B) 示例：

```
file.move({
  srcUri: 'internal://cache/path/to/file',
  dstUri: 'internal://files/path/to/file',
  success: function(uri) {
    console.log(`move success: ${uri}`)
  },
  fail: function(data, code) {
    console.log(`handling fail, code = ${code}`)
  }
})

```

### [\#](https://iot.mi.com/vela/quickapp/zh/features/data/file.html\#file-copy-object) file.copy(OBJECT)

将源文件复制一份并存储到指定位置，接口中使用的 URI 描述请参考 [文件组织](https://iot.mi.com/vela/quickapp/zh/guide/framework/project-structure.html#uri)

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/data/file.html\#%E5%8F%82%E6%95%B0-2) 参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| srcUri | String | 是 | 源文件的 uri |
| dstUri | String | 是 | 目标文件的 uri，不能是应用资源路径和 tmp 类型的 uri |
| success | Function | 否 | 成功回调，返回目标文件的 uri |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/data/file.html\#fail-%E8%BF%94%E5%9B%9E%E9%94%99%E8%AF%AF%E4%BB%A3%E7%A0%81-2) fail 返回错误代码：

| 错误码 | 说明 |
| --- | --- |
| 202 | 参数错误 |
| 300 | I/O 错误 |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/data/file.html\#%E7%A4%BA%E4%BE%8B-2) 示例：

```
file.copy({
  srcUri: 'internal://cache/path/to/file',
  dstUri: 'internal://files/path/to/file',
  success: function(uri) {
    console.log(`copy success: ${uri}`)
  },
  fail: function(data, code) {
    console.log(`handling fail, code = ${code}`)
  }
})

```

### [\#](https://iot.mi.com/vela/quickapp/zh/features/data/file.html\#file-list-object) file.list(OBJECT)

获取指定目录下的文件列表，接口中使用的 URI 描述请参考 [文件组织](https://iot.mi.com/vela/quickapp/zh/guide/framework/project-structure.html#uri)

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/data/file.html\#%E5%8F%82%E6%95%B0-3) 参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uri | String | 是 | 目录 uri |
| success | Function | 否 | 成功回调，返回{fileList:\[{uri:'file1', lastModifiedTime:1234456, length:123456} ...\]} |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/data/file.html\#success-%E8%BF%94%E5%9B%9E%E5%80%BC) success 返回值：

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| fileList | Array | 文件列表，每个文件的格式为{uri:'file1', lastModifiedTime:1234456, length:123456} |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/data/file.html\#%E6%AF%8F%E4%B8%AA%E6%96%87%E4%BB%B6%E7%9A%84%E5%85%83%E4%BF%A1%E6%81%AF) 每个文件的元信息：

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| uri | String | 文件的 uri，该 uri 可以被其他组件或 Feature 访问 |
| length | Number | 文件大小，单位 B |
| lastModifiedTime | Number | 文件的保存是的时间戳，从 1970/01/01 00:00:00 GMT 到当前时间的毫秒数 |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/data/file.html\#fail-%E8%BF%94%E5%9B%9E%E9%94%99%E8%AF%AF%E4%BB%A3%E7%A0%81-3) fail 返回错误代码：

| 错误码 | 说明 |
| --- | --- |
| 202 | 参数错误 |
| 300 | I/O 错误 |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/data/file.html\#%E7%A4%BA%E4%BE%8B-3) 示例：

```
file.list({
  uri: 'internal://files/movies/',
  success: function(data) {
    console.log(data.fileList)
  },
  fail: function(data, code) {
    console.log(`handling fail, code = ${code}`)
  }
})

```

### [\#](https://iot.mi.com/vela/quickapp/zh/features/data/file.html\#file-get-object) file.get(OBJECT)

获取本地文件的文件信息，接口中使用的 URI 描述请参考 [文件组织](https://iot.mi.com/vela/quickapp/zh/guide/framework/project-structure.html#uri)

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/data/file.html\#%E5%8F%82%E6%95%B0-4) 参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uri | String | 是 | 文件的 uri，不能是应用资源路径和 tmp 类型的 uri |
| recursive | Boolean | 否 | 是否递归获取子目录文件列表。默认 false |
| success | Function | 否 | 成功回调，返回{uri:'file1', length:123456, lastModifiedTime:1233456} |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/data/file.html\#success-%E8%BF%94%E5%9B%9E%E5%80%BC-2) success 返回值：

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| uri | String | 文件的 uri，该 uri 可以被其他组件或 Feature 访问 |
| length | Number | 文件大小，单位 B。当 type = dir 时，返回0 |
| lastModifiedTime | Number | 文件的保存时的时间戳，从 1970/01/01 08:00:00 到当前时间的毫秒数 |
| type | String | 文件类型，dir：目录；file：文件 |
| subFiles | Array | 当 type = dir 时，返回目录中的文件列表，recursive 为 true 时，同时返回其子目录中的文件信息 |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/data/file.html\#fail-%E8%BF%94%E5%9B%9E%E9%94%99%E8%AF%AF%E4%BB%A3%E7%A0%81-4) fail 返回错误代码：

| 错误码 | 说明 |
| --- | --- |
| 202 | 参数错误 |
| 300 | I/O 错误 |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/data/file.html\#%E7%A4%BA%E4%BE%8B-4) 示例：

```
file.get({
  uri: 'internal://files/path/to/file',
  success: function(data) {
    console.log(data.uri)
    console.log(data.length)
    console.log(data.lastModifiedTime)
  },
  fail: function(data, code) {
    console.log(`handling fail, code = ${code}`)
  }
})

```

### [\#](https://iot.mi.com/vela/quickapp/zh/features/data/file.html\#file-delete-object) file.delete(OBJECT)

删除本地存储的文件，接口中使用的 URI 描述请参考 [文件组织](https://iot.mi.com/vela/quickapp/zh/guide/framework/project-structure.html#uri)

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/data/file.html\#%E5%8F%82%E6%95%B0-5) 参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uri | String | 是 | 需要删除的文件 uri，不能是应用资源路径和 tmp 类型的 uri |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/data/file.html\#fail-%E8%BF%94%E5%9B%9E%E9%94%99%E8%AF%AF%E4%BB%A3%E7%A0%81-5) fail 返回错误代码：

| 错误码 | 说明 |
| --- | --- |
| 202 | 参数错误 |
| 300 | I/O 错误 |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/data/file.html\#%E7%A4%BA%E4%BE%8B-5) 示例：

```
file.delete({
  uri: 'internal://files/path/to/file',
  success: function(data) {
    console.log('handling success')
  },
  fail: function(data, code) {
    console.log(`handling fail, code = ${code}`)
  }
})

```

### [\#](https://iot.mi.com/vela/quickapp/zh/features/data/file.html\#file-writetext-object) file.writeText(OBJECT)

写文本到文件

注意

当您使用文件写入接口时，请务必注意及时清理无用的文件，特别是在 IoT 设备内存较小的情况下，可以避免内存过载和应用崩溃的问题。

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/data/file.html\#%E5%8F%82%E6%95%B0-6) 参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uri | String | 是 | 本地文件路径，不支持资源文件路径和 tmp 分区，如果文件不存在会创建文件 |
| text | String | 是 | 需要写入的字符串 |
| encoding | String | 否 | 编码格式，默认 UTF-8 |
| append | Boolean | 否 | 是否追加模式，默认 false |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/data/file.html\#fail-%E8%BF%94%E5%9B%9E%E9%94%99%E8%AF%AF%E4%BB%A3%E7%A0%81-6) fail 返回错误代码：

| 错误码 | 说明 |
| --- | --- |
| 202 | 参数错误 |
| 300 | I/O 错误 |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/data/file.html\#%E7%A4%BA%E4%BE%8B-6) 示例：

```
file.writeText({
  uri: 'internal://files/work/demo.txt',
  text: 'test',
  success: function() {
    console.log('handling success')
  },
  fail: function(data, code) {
    console.log(`handling fail, code = ${code}`)
  }
})

```

### [\#](https://iot.mi.com/vela/quickapp/zh/features/data/file.html\#file-writearraybuffer-object) file.writeArrayBuffer(OBJECT)

写 Buffer 到文件

注意

当您使用文件写入接口时，请务必注意及时清理无用的文件，特别是在 IoT 设备内存较小的情况下，可以避免内存过载和应用崩溃的问题。

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/data/file.html\#%E5%8F%82%E6%95%B0-7) 参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uri | String | 是 | 本地文件路径，不支持资源文件路径和 tmp 分区，如果文件不存在会创建文件 |
| buffer | Uint8Array | 是 | 需要写入的 Buffer |
| position | Number | 否 | 指向文件开始写入数据的位置的偏移量，默认 0 |
| append | Boolean | 否 | 是否追加模式，默认 false。当为 true 时，position 参数无效 |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/data/file.html\#fail-%E8%BF%94%E5%9B%9E%E9%94%99%E8%AF%AF%E4%BB%A3%E7%A0%81-7) fail 返回错误代码：

| 错误码 | 说明 |
| --- | --- |
| 202 | 参数错误 |
| 300 | I/O 错误 |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/data/file.html\#%E7%A4%BA%E4%BE%8B-7) 示例：

```
file.writeArrayBuffer({
  uri: 'internal://files/work/demo',
  buffer: buffer,
  success: function() {
    console.log('handling success')
  },
  fail: function(data, code) {
    console.log(`handling fail, code = ${code}`)
  }
})

```

### [\#](https://iot.mi.com/vela/quickapp/zh/features/data/file.html\#file-readtext-object) file.readText(OBJECT)

从文件中读取文本

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/data/file.html\#%E5%8F%82%E6%95%B0-8) 参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uri | String | 是 | 本地文件路径，支持应用资源路径，例如：'/Common/demo.txt' |
| encoding | String | 否 | 编码格式，默认 UTF-8 |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/data/file.html\#success-%E8%BF%94%E5%9B%9E%E5%80%BC-3) success 返回值：

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| text | String | 读取的文本 |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/data/file.html\#fail-%E8%BF%94%E5%9B%9E%E9%94%99%E8%AF%AF%E4%BB%A3%E7%A0%81-8) fail 返回错误代码：

| 错误码 | 说明 |
| --- | --- |
| 202 | 参数错误 |
| 300 | I/O 错误 |
| 301 | 文件不存在 |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/data/file.html\#%E7%A4%BA%E4%BE%8B-8) 示例：

```
file.readText({
  uri: 'internal://files/work/demo.txt',
  success: function(data) {
    console.log('text: ' + data.text)
  },
  fail: function(data, code) {
    console.log(`handling fail, code = ${code}`)
  }
})

```

### [\#](https://iot.mi.com/vela/quickapp/zh/features/data/file.html\#file-readarraybuffer-object) file.readArrayBuffer(OBJECT)

从文件中读取 Buffer

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/data/file.html\#%E5%8F%82%E6%95%B0-9) 参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uri | String | 是 | 本地文件路径，支持应用资源路径，例如：'/Common/demo.txt' |
| position | Number | 否 | 读取的起始位置，默认值为文件的起始位置 |
| length | Number | 否 | 读取的长度，不填写则读取到文件结尾 |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/data/file.html\#success-%E8%BF%94%E5%9B%9E%E5%80%BC-4) success 返回值：

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| buffer | Uint8Array | 读取的文件内容 |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/data/file.html\#fail-%E8%BF%94%E5%9B%9E%E9%94%99%E8%AF%AF%E4%BB%A3%E7%A0%81-9) fail 返回错误代码：

| 错误码 | 说明 |
| --- | --- |
| 202 | 参数错误 |
| 300 | I/O 错误 |
| 301 | 文件不存在 |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/data/file.html\#%E7%A4%BA%E4%BE%8B-9) 示例：

```
file.readArrayBuffer({
  uri: 'internal://files/work/demo',
  position: 100,
  length: 100,
  success: function(data) {
    console.log('buffer.length: ' + data.buffer.length)
  },
  fail: function(data, code) {
    console.log(`handling fail, code = ${code}`)
  }
})

```

### [\#](https://iot.mi.com/vela/quickapp/zh/features/data/file.html\#file-access-object) file.access(OBJECT)

判断文件或目录是否存在

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/data/file.html\#%E5%8F%82%E6%95%B0-10) 参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uri | String | 是 | 目录或文件 uri |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/data/file.html\#fail-%E8%BF%94%E5%9B%9E%E9%94%99%E8%AF%AF%E4%BB%A3%E7%A0%81-10) fail 返回错误代码：

| 错误码 | 说明 |
| --- | --- |
| 202 | 参数错误 |
| 300 | I/O 错误 |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/data/file.html\#%E7%A4%BA%E4%BE%8B-10) 示例：

```
file.access({
  uri: 'internal://files/test',
  success: function(data) {
    console.log(`handling success`)
  },
  fail: function(data, code) {
    console.log(`handling fail, code = ${code}`)
  }
})

```

### [\#](https://iot.mi.com/vela/quickapp/zh/features/data/file.html\#file-mkdir-object) file.mkdir(OBJECT)

创建目录

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/data/file.html\#%E5%8F%82%E6%95%B0-11) 参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uri | String | 是 | 目录的 uri，不能是应用资源路径和 tmp 类型的 uri |
| recursive | Boolean | 否 | 是否递归创建该目录的上级目录后再创建该目录。默认 false |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/data/file.html\#fail-%E8%BF%94%E5%9B%9E%E9%94%99%E8%AF%AF%E4%BB%A3%E7%A0%81-11) fail 返回错误代码：

| 错误码 | 说明 |
| --- | --- |
| 202 | 参数错误 |
| 300 | I/O 错误 |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/data/file.html\#%E7%A4%BA%E4%BE%8B-11) 示例：

```
file.mkdir({
  uri: 'internal://files/dir/',
  success: function(data) {
    console.log(`handling success`)
  },
  fail: function(data, code) {
    console.log(`handling fail, code = ${code}`)
  }
})

```

### [\#](https://iot.mi.com/vela/quickapp/zh/features/data/file.html\#file-rmdir-object) file.rmdir(OBJECT)

删除目录

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/data/file.html\#%E5%8F%82%E6%95%B0-12) 参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uri | String | 是 | 目录的 uri，不能是应用资源路径和 tmp 类型的 uri |
| recursive | Boolean | 否 | 是否递归删除子文件和子目录。默认 false |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/data/file.html\#fail-%E8%BF%94%E5%9B%9E%E9%94%99%E8%AF%AF%E4%BB%A3%E7%A0%81-12) fail 返回错误代码：

| 错误码 | 说明 |
| --- | --- |
| 202 | 参数错误 |
| 300 | I/O 错误 |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/data/file.html\#%E7%A4%BA%E4%BE%8B-12) 示例：

```
file.rmdir({
  uri: 'internal://files/dir/',
  success: function(data) {
    console.log(`handling success`)
  },
  fail: function(data, code) {
    console.log(`handling fail, code = ${code}`)
  }
})

```

←
[数据存储 storage](https://iot.mi.com/vela/quickapp/zh/features/data/storage.html)[网络信息 network](https://iot.mi.com/vela/quickapp/zh/features/system/network.html)
→


快速导航

[接口声明](https://iot.mi.com/vela/quickapp/zh/features/data/file.html#%E6%8E%A5%E5%8F%A3%E5%A3%B0%E6%98%8E "接口声明")

[导入模块](https://iot.mi.com/vela/quickapp/zh/features/data/file.html#%E5%AF%BC%E5%85%A5%E6%A8%A1%E5%9D%97 "导入模块")

[接口定义](https://iot.mi.com/vela/quickapp/zh/features/data/file.html#%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89 "接口定义")

[file.move(OBJECT)](https://iot.mi.com/vela/quickapp/zh/features/data/file.html#file-move-object "file.move(OBJECT)")

[file.copy(OBJECT)](https://iot.mi.com/vela/quickapp/zh/features/data/file.html#file-copy-object "file.copy(OBJECT)")

[file.list(OBJECT)](https://iot.mi.com/vela/quickapp/zh/features/data/file.html#file-list-object "file.list(OBJECT)")

[file.get(OBJECT)](https://iot.mi.com/vela/quickapp/zh/features/data/file.html#file-get-object "file.get(OBJECT)")

[file.delete(OBJECT)](https://iot.mi.com/vela/quickapp/zh/features/data/file.html#file-delete-object "file.delete(OBJECT)")

[file.writeText(OBJECT)](https://iot.mi.com/vela/quickapp/zh/features/data/file.html#file-writetext-object "file.writeText(OBJECT)")

[file.writeArrayBuffer(OBJECT)](https://iot.mi.com/vela/quickapp/zh/features/data/file.html#file-writearraybuffer-object "file.writeArrayBuffer(OBJECT)")

[file.readText(OBJECT)](https://iot.mi.com/vela/quickapp/zh/features/data/file.html#file-readtext-object "file.readText(OBJECT)")

[file.readArrayBuffer(OBJECT)](https://iot.mi.com/vela/quickapp/zh/features/data/file.html#file-readarraybuffer-object "file.readArrayBuffer(OBJECT)")

[file.access(OBJECT)](https://iot.mi.com/vela/quickapp/zh/features/data/file.html#file-access-object "file.access(OBJECT)")

[file.mkdir(OBJECT)](https://iot.mi.com/vela/quickapp/zh/features/data/file.html#file-mkdir-object "file.mkdir(OBJECT)")

[file.rmdir(OBJECT)](https://iot.mi.com/vela/quickapp/zh/features/data/file.html#file-rmdir-object "file.rmdir(OBJECT)")