// 发布裁剪：从暂存源码里删掉"不属于本分辨率"的列规则。
//
// 为什么需要它：aiot 2.0.5 的 .ux 不经过 webpack loader，条件编译只能作用于 .js
// （见 docs/design/multi-device-ui-porting.md §5.0）。所以"发布包只含一列"不能靠
// 条件编译，只能在发布脚本的暂存副本上物理删除。
//
// 用法：node scripts/strip_columns.js --target 466 --src <暂存目录>\src
//
// 判定：选择器以 -192/-212/-336/-432/-466 结尾且不等于 target → 整条删除。
// 其余（无后缀的基础规则、@media、其他类名）原样保留并重排。

const fs = require("fs")
const path = require("path")

const COLUMN_SUFFIX = /-(192|212|336|432|466)$/

function splitSelectors(raw) {
  const text = raw.replace(/\s+/g, " ").trim()
  if (text.startsWith("@")) return [text]
  const parts = []
  let depth = 0
  let current = ""
  for (let i = 0; i < text.length; i++) {
    const ch = text[i]
    if (ch === "(") depth++
    else if (ch === ")") depth--
    if (ch === "," && depth === 0) {
      parts.push(current.trim())
      current = ""
    } else {
      current += ch
    }
  }
  if (current.trim()) parts.push(current.trim())
  return parts
}

function parseRules(css) {
  const rules = []
  let i = 0
  while (i < css.length) {
    const open = css.indexOf("{", i)
    if (open === -1) break
    const rawSelector = css.slice(i, open)
    let depth = 0
    let j = open
    for (; j < css.length; j++) {
      if (css[j] === "{") depth++
      else if (css[j] === "}") {
        depth--
        if (depth === 0) break
      }
    }
    rules.push({ selectors: splitSelectors(rawSelector), body: css.slice(open + 1, j) })
    i = j + 1
  }
  return rules
}

function serializeRule(rule) {
  return rule.selectors.join(",\n") + " {" + rule.body.replace(/\s+$/, "") + "\n}"
}

function stripCss(css, target) {
  const rules = parseRules(css)
  if (rules.length === 0) return css
  const kept = []
  let removed = 0
  for (const rule of rules) {
    const isAtRule = rule.selectors[0].startsWith("@")
    if (isAtRule) {
      kept.push(serializeRule(rule))
      continue
    }
    const survivors = rule.selectors.filter((selector) => {
      const m = selector.match(COLUMN_SUFFIX)
      if (!m) return true
      return m[1] === target
    })
    if (survivors.length === rule.selectors.length) {
      kept.push(serializeRule(rule))
    } else if (survivors.length > 0) {
      kept.push(serializeRule({ selectors: survivors, body: rule.body }))
      removed += rule.selectors.length - survivors.length
    } else {
      removed += rule.selectors.length
    }
  }
  return { css: "\n" + kept.join("\n\n") + "\n", removed }
}

function walk(dir, out) {
  fs.readdirSync(dir, { withFileTypes: true }).forEach((entry) => {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      if (["node_modules", "dict", "icons"].includes(entry.name)) return
      walk(full, out)
    } else if (entry.name.endsWith(".ux")) {
      out.push(full)
    }
  })
  return out
}

function main() {
  const args = process.argv.slice(2)
  const targetIndex = args.indexOf("--target")
  const srcIndex = args.indexOf("--src")
  if (targetIndex === -1 || srcIndex === -1) {
    console.error("usage: node scripts/strip_columns.js --target <192|212|336|432|466> --src <src dir>")
    process.exit(1)
  }
  const target = args[targetIndex + 1]
  const srcDir = args[srcIndex + 1]
  if (!COLUMN_SUFFIX.test("-" + target)) {
    console.error("bad target: " + target)
    process.exit(1)
  }

  let files = 0
  let removedTotal = 0
  walk(srcDir, []).forEach((file) => {
    const source = fs.readFileSync(file, "utf8")
    let touched = false
    let removed = 0
    const rebuilt = source.replace(/<style[^>]*>([\s\S]*?)<\/style>/g, (whole, css) => {
      const result = stripCss(css, target)
      if (typeof result === "string") return whole
      removed += result.removed
      touched = true
      return "<style>" + result.css + "</style>"
    })
    if (touched) {
      fs.writeFileSync(file, rebuilt, "utf8")
      files++
      removedTotal += removed
    }
  })
  console.log("stripped " + files + " files, removed " + removedTotal + " rules for -" + target)
}

main()
