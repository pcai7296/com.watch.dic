// 一次性分析脚本：把 5 个开发仓的 <style> 规则按选择器对齐，统计"各列到底差多少"。
// 只读，不改任何文件。输出 Markdown 报告到 stdout（可重定向）。
//
// 用法：node scripts/analyze_columns.js [输出路径]
//
// 关键约定：
// - 每列取"该仓当前设备真实渲染用的那套值" = 基础规则 + 该仓自身 profile 的变体规则
//   （192→pill-compact，212→pill-standard，336/432→rect，466→circle）。
//   这样合并后的结果与今天逐仓出包所见一致，不会引入"顺手调参"。
// - 形状变体选择器（-pill-standard/-pill-compact/-rect/-circle）本身不进合并结果，
//   它们只作为覆盖叠加到基础规则上。

const fs = require("fs")
const path = require("path")

const WS = path.resolve(__dirname, "..", "..")
const REPOS = [
  { column: "192", dir: path.join(WS, "com.watch.dic.w192"), profile: "pill-compact" },
  { column: "212", dir: path.join(WS, "com.watch.dic.w212"), profile: "pill-standard" },
  { column: "336", dir: path.join(WS, "com.watch.dic.w336"), profile: "rect" },
  { column: "432", dir: path.join(WS, "com.watch.dic.w432"), profile: "rect" },
  { column: "466", dir: path.join(WS, "com.watch.dic.w466"), profile: "circle" }
]

const PROFILE_SUFFIXES = ["-pill-standard", "-pill-compact", "-rect", "-circle"]

function stripHtmlComments(text) {
  return text.replace(/<!--[\s\S]*?-->/g, "")
}

function extractStyleBlocks(source) {
  const blocks = []
  const re = /<style[^>]*>([\s\S]*?)<\/style>/g
  let m
  while ((m = re.exec(source)) !== null) {
    blocks.push(m[1])
  }
  return blocks
}

function stripCssComments(css) {
  return css.replace(/\/\*[\s\S]*?\*\//g, "")
}

// 顶层：按大括号配对切出 "选择器 { 声明 }" 或 "@media … { … }"
function parseRules(css) {
  const rules = []
  let i = 0
  while (i < css.length) {
    const open = css.indexOf("{", i)
    if (open === -1) break
    const selector = css.slice(i, open).trim()
    let depth = 0
    let j = open
    for (; j < css.length; j++) {
      if (css[j] === "{") depth++
      else if (css[j] === "}") {
        depth--
        if (depth === 0) break
      }
    }
    const body = css.slice(open + 1, j)
    rules.push({ selector: selector.replace(/\s+/g, " "), body })
    i = j + 1
  }
  return rules
}

function normalizeBody(body) {
  return body
    .split(";")
    .map((d) => d.replace(/\s+/g, " ").trim())
    .filter(Boolean)
    .join("; ")
}

function declarationsOf(body) {
  const map = new Map()
  body
    .split(";")
    .map((d) => d.trim())
    .filter(Boolean)
    .forEach((decl) => {
      const idx = decl.indexOf(":")
      if (idx === -1) return
      const prop = decl.slice(0, idx).trim()
      const value = decl.slice(idx + 1).trim()
      map.set(prop, value)
    })
  return map
}

function readFileMaybe(p) {
  try {
    return fs.readFileSync(p, "utf8")
  } catch (e) {
    return null
  }
}

function collectFiles(repo) {
  const srcRoot = path.join(repo.dir, "src")
  const out = []
  const walk = (dir) => {
    let entries
    try {
      entries = fs.readdirSync(dir, { withFileTypes: true })
    } catch (e) {
      return
    }
    for (const entry of entries) {
      const full = path.join(dir, entry.name)
      if (entry.isDirectory()) {
        if (entry.name === "node_modules" || entry.name === "dict" || entry.name === "icons") continue
        walk(full)
      } else if (entry.name.endsWith(".ux")) {
        out.push(path.relative(srcRoot, full).replace(/\\/g, "/"))
      }
    }
  }
  walk(srcRoot)
  return out.sort()
}

function analyzeFile(repoFiles, relPath) {
  // 返回 { selector -> { perColumn: Map<col, "prop:value; …">, variants[] } }
  const perRepo = []
  for (let r = 0; r < REPOS.length; r++) {
    const file = repoFiles[r][relPath]
    if (!file) {
      perRepo.push(null)
      continue
    }
    const cssText = extractStyleBlocks(file).map(stripCssComments).join("\n")
    const rules = parseRules(cssText).filter((rule) => !rule.selector.startsWith("@"))
    const bySelector = new Map()
    rules.forEach((rule) => {
      const prev = bySelector.get(rule.selector)
      const map = prev || new Map()
      declarationsOf(rule.body).forEach((value, prop) => map.set(prop, value))
      bySelector.set(rule.selector, map)
    })
    perRepo.push(bySelector)
  }

  const selectors = new Set()
  perRepo.forEach((m) => {
    if (m) m.forEach((_v, k) => selectors.add(k))
  })

  const rows = []
  selectors.forEach((sel) => {
    const isVariant = PROFILE_SUFFIXES.some((suf) => sel.endsWith(suf))
    if (isVariant) return
    const perColumn = new Map()
    REPOS.forEach((repo, r) => {
      const m = perRepo[r]
      if (!m) return
      const merged = new Map()
      const base = m.get(sel)
      if (base) base.forEach((v, p) => merged.set(p, v))
      const variant = m.get(sel + "-" + repo.profile)
      if (variant) variant.forEach((v, p) => merged.set(p, v))
      if (merged.size === 0) return
      perColumn.set(repo.column, normalizeMap(merged))
    })
    if (perColumn.size === 0) return
    const values = Array.from(perColumn.values())
    const allSame = values.every((v) => v === values[0])
    const presentInAll = perColumn.size === REPOS.length
    rows.push({ selector: sel, perColumn, allSame, presentInAll })
  })
  return rows
}

function normalizeMap(map) {
  return Array.from(map.entries())
    .map(([prop, value]) => prop + ": " + value)
    .sort()
    .join("; ")
}

function main() {
  const repoFiles = REPOS.map((repo) => {
    const files = {}
    collectFiles(repo).forEach((rel) => {
      files[rel] = readFileMaybe(path.join(repo.dir, "src", rel))
    })
    return files
  })

  const allPaths = new Set()
  repoFiles.forEach((files) => Object.keys(files).forEach((p) => allPaths.add(p)))
  const relPaths = Array.from(allPaths).sort()

  const lines = []
  let totalSelectors = 0
  let diffSelectors = 0
  let partialSelectors = 0

  lines.push("# 五仓选择器对齐报告")
  lines.push("")
  lines.push("每列取值 = 该仓基础规则 + 该仓 profile 变体（192→pill-compact，212→pill-standard，336/432→rect，466→circle）。")
  lines.push("")
  lines.push("| 文件 | 选择器总数 | 五列一致 | 有差异 | 仅部分仓存在 |")
  lines.push("|---|---|---|---|---|")
  const detail = []

  relPaths.forEach((rel) => {
    const rows = analyzeFile(repoFiles, rel)
    if (rows.length === 0) return
    const diff = rows.filter((r) => !r.allSame)
    const partial = rows.filter((r) => !r.presentInAll)
    totalSelectors += rows.length
    diffSelectors += diff.length
    partialSelectors += partial.length
    lines.push(
      "| `" + rel + "` | " + rows.length + " | " + (rows.length - diff.length) + " | " + diff.length + " | " + partial.length + " |"
    )
    diff.forEach((r) => {
      detail.push({ rel, ...r })
    })
  })

  lines.push("")
  lines.push(
    "**合计**：" + totalSelectors + " 个基础选择器，" + diffSelectors + " 个在五列间不同（" +
      Math.round((diffSelectors / Math.max(totalSelectors, 1)) * 100) + "%），" +
      partialSelectors + " 个仅部分仓存在。"
  )
  lines.push("")

  const byFile = new Map()
  detail.forEach((d) => {
    if (!byFile.has(d.rel)) byFile.set(d.rel, [])
    byFile.get(d.rel).push(d)
  })

  lines.push("## 有差异的选择器明细")
  lines.push("")
  byFile.forEach((items, rel) => {
    lines.push("### `" + rel + "`")
    lines.push("")
    lines.push("| 选择器 | 192 | 212 | 336 | 432 | 466 |")
    lines.push("|---|---|---|---|---|---|")
    items.forEach((item) => {
      const cells = REPOS.map((repo) => {
        const v = item.perColumn.get(repo.column)
        return v ? "`" + v + "`" : "—"
      })
      lines.push("| `" + item.selector + "` | " + cells.join(" | ") + " |")
    })
    lines.push("")
  })

  const out = lines.join("\n")
  const target = process.argv[2]
  if (target) {
    fs.writeFileSync(target, out, "utf8")
    console.log("written: " + target)
    console.log("selectors=" + totalSelectors + " diff=" + diffSelectors + " partial=" + partialSelectors)
  } else {
    console.log(out)
  }
}

main()
