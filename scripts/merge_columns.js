// 五列合并：以 w212 为结构真源，把其余 4 仓的数值搬成 `.sel-NNN` 覆盖块。
//
// 规则（与 docs/design/multi-device-ui-porting.md §5.0/§5.2 一致）：
// - 基准列 = 212（w212 自己的基础规则，并折叠进它的 -pill-standard 变体）。
// - 每个选择器 S 对 192/336/432/466 算一份"有效值"：
//       base212 ∪ w212 的 S-<profile(N)> ∪ 仓 N 的 S ∪ 仓 N 的 S-<profile(N)>
//   与基准列不同才输出 `.S-NNN { … }`，等于基准列则省掉。
// - 形状变体选择器（-pill-* / -rect / -circle）一律不保留：它们的值已折进对应列。
// - 模板里 `class="S S-{{screenProfile}}"` → `S S-{{screenClass}}`；
//   `class="S"` → `S S-{{screenClass}}`（仅当 S 有覆盖块）。
//
// 用法：
//   node scripts/merge_columns.js --dry src/pages/sponsor/sponsor.ux
//   node scripts/merge_columns.js src/pages/sponsor/sponsor.ux
//   node scripts/merge_columns.js --all

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

function extractStyleBlocks(source) {
  const blocks = []
  const re = /<style[^>]*>([\s\S]*?)<\/style>/g
  let m
  while ((m = re.exec(source)) !== null) {
    blocks.push({ start: m.index, end: re.lastIndex, css: m[1], full: m[0] })
  }
  return blocks
}

function stripCssComments(css) {
  return css.replace(/\/\*[\s\S]*?\*\//g, "")
}

// Vela 支持 `.a, .b { }` 这种逗号分组；必须拆开，否则选择器键会变成 "a, b"
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

// 返回 [{ selector, props: Map, raw }]，保持出现顺序；重复选择器按属性合并（后者覆盖）。
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
    const body = css.slice(open + 1, j)
    const props = declarationsOf(body)
    splitSelectors(rawSelector).forEach((selector) => {
      rules.push({ selector, props, atRule: selector.startsWith("@") })
    })
    i = j + 1
  }
  return rules
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
      map.set(decl.slice(0, idx).trim(), decl.slice(idx + 1).trim())
    })
  return map
}

function readMaybe(p) {
  try {
    return fs.readFileSync(p, "utf8")
  } catch (e) {
    return null
  }
}

function profileSuffixOf(selector) {
  for (const suffix of PROFILE_SUFFIXES) {
    if (selector.endsWith(suffix)) {
      return { base: selector.slice(0, selector.length - suffix.length), suffix }
    }
  }
  return null
}

// 单仓模型：base Map<selector, Map<prop,value>>，variant Map<baseSelector+suffix, Map>
function buildModel(source) {
  let cssText = ""
  if (source) {
    cssText = extractStyleBlocks(source)
      .map((b) => stripCssComments(b.css))
      .join("\n")
  }
  const rules = parseRules(cssText).filter((r) => !r.atRule)
  const base = new Map()
  const variant = new Map()
  for (const rule of rules) {
    const target = profileSuffixOf(rule.selector) ? variant : base
    const prev = target.get(rule.selector) || new Map()
    rule.props.forEach((value, prop) => prev.set(prop, value))
    target.set(rule.selector, prev)
  }
  return { base, variant }
}

function mergeProps(...maps) {
  const out = new Map()
  maps.forEach((m) => {
    if (m) m.forEach((value, prop) => out.set(prop, value))
  })
  return out
}

function propsEqual(a, b) {
  if (a.size !== b.size) return false
  for (const [k, v] of a) {
    if (b.get(k) !== v) return false
  }
  return true
}

// 计算基准列(212)与其余列的有效值
function computeColumns(models) {
  const m212 = models[1]
  const selectors = new Set()
  models.forEach((model) => model.base.forEach((_v, k) => selectors.add(k)))

  const result = []
  selectors.forEach((selector) => {
    // 只保留 w212 这页真正拥有的选择器（基础或变体之一）。
    // 其余仓多出来的选择器属于它们自己的旧布局，合并进来就是死规则。
    const ownedBy212 = m212.base.has(selector) || PROFILE_SUFFIXES.some((s) => m212.variant.has(selector + s))
    if (!ownedBy212) return
    const baseProps = mergeProps(m212.base.get(selector), m212.variant.get(selector + "-pill-standard"))
    const perColumn = new Map()
    perColumn.set("212", baseProps)
    REPOS.forEach((repo, index) => {
      if (repo.column === "212") return
      const model = models[index]
      const eff = mergeProps(
        m212.base.get(selector),
        m212.variant.get(selector + "-" + repo.profile),
        model.base.get(selector),
        model.variant.get(selector + "-" + repo.profile)
      )
      if (eff.size === 0) return
      perColumn.set(repo.column, eff)
    })
    result.push({ selector, baseProps, perColumn })
  })
  return result
}

function formatRule(selector, props) {
  const name = /^[.#]/.test(selector) ? selector : "." + selector
  const lines = [name + " {"]
  props.forEach((value, prop) => {
    lines.push("  " + prop + ": " + value + ";")
  })
  lines.push("}")
  return lines.join("\n")
}

function rewriteTemplate(template, varyingSelectors) {
  let changed = []
  const out = template.replace(/class="([^"]*)"/g, (whole, value) => {
    const tokens = value.split(/(\s+)/)
    const names = tokens.filter((t) => t && !/^\s+$/.test(t))
    const hasProfileToken = names.some((t) => t.includes("{{screenProfile}}"))
    let touched = false
    const nextTokens = tokens.map((token) => {
      if (!token || /^\s+$/.test(token)) return token
      if (token.includes("{{screenProfile}}")) {
        const baseName = token.replace("-{{screenProfile}}", "")
        if (varyingSelectors.has(baseName) || true) {
          touched = true
          changed.push(token + " → " + baseName + "-{{screenClass}}")
          return baseName + "-{{screenClass}}"
        }
        return token
      }
      if (token.includes("{{") || token.includes("}}")) return token
      if (varyingSelectors.has(token) && !hasProfileToken) {
        touched = true
        changed.push(token + " → " + token + " + suffix")
        return token + " " + token + "-{{screenClass}}"
      }
      return token
    })
    if (!touched) return whole
    return 'class="' + nextTokens.join("") + '"'
  })
  return { out, changed }
}

function processFile(relPath, dry) {
  const target = path.join(REPOS[1].dir, "src", relPath)
  const source = readMaybe(target)
  if (!source) {
    console.error("skip (no such file): " + relPath)
    return false
  }
  const models = REPOS.map((repo) => buildModel(readMaybe(path.join(repo.dir, "src", relPath))))
  const columns = computeColumns(models)

  // 有覆盖块的选择器
  const varyingSelectors = new Set()
  const overrideRules = []
  columns.forEach(({ selector, baseProps, perColumn }) => {
    // ID 选择器不能加后缀（id="keyboard67" 没法变成 keyboard67-192），一律只保留基准值
    const isIdSelector = selector.startsWith("#")
    const blocks = []
    if (!isIdSelector) {
      perColumn.forEach((props, column) => {
        if (column === "212") return
        if (propsEqual(props, baseProps)) return
        if (props.size === 0) return
        blocks.push({ column, props })
      })
    }
    if (blocks.length === 0) return
    varyingSelectors.add(selector.replace(/^\./, ""))
    blocks.forEach((block) => {
      overrideRules.push(formatRule(selector + "-" + block.column, block.props))
    })
  })

  // 重建 style：基础规则折叠 pill-standard 变体，追加覆盖块
  const blocks = extractStyleBlocks(source)
  if (blocks.length === 0) {
    console.error("skip (no <style>): " + relPath)
    return false
  }
  const rebuiltCssParts = []
  columns.forEach(({ selector, baseProps }) => {
    if (baseProps.size === 0) return
    rebuiltCssParts.push(formatRule(selector, baseProps))
  })
  const newCss = "\n" + rebuiltCssParts.join("\n\n") + (overrideRules.length ? "\n\n" + overrideRules.join("\n\n") : "") + "\n"

  const first = blocks[0]
  const last = blocks[blocks.length - 1]
  let rebuilt = source.slice(0, first.start) + "<style>" + newCss + "</style>" + source.slice(last.end)

  // 模板补后缀
  const { out: rewritten, changed } = rewriteTemplate(rebuilt, varyingSelectors)

  console.log("\n=== " + relPath + " ===")
  console.log("selectors=" + columns.length + " varying=" + varyingSelectors.size + " overrideRules=" + overrideRules.length)
  if (changed.length) {
    console.log("template changes:")
    changed.forEach((c) => console.log("  " + c))
  }
  if (varyingSelectors.size) {
    console.log("varying selectors: " + Array.from(varyingSelectors).join(", "))
  }
  if (dry) return true
  fs.writeFileSync(target, rewritten, "utf8")
  console.log("written: " + target)
  return true
}

function main() {
  const args = process.argv.slice(2)
  const dry = args.includes("--dry")
  const all = args.includes("--all")
  const files = args.filter((a) => !a.startsWith("--"))
  if (all) {
    const srcRoot = path.join(REPOS[1].dir, "src")
    const walk = (dir, out) => {
      fs.readdirSync(dir, { withFileTypes: true }).forEach((entry) => {
        const full = path.join(dir, entry.name)
        if (entry.isDirectory()) {
          if (["node_modules", "dict", "icons"].includes(entry.name)) return
          walk(full, out)
        } else if (entry.name.endsWith(".ux")) {
          out.push(path.relative(srcRoot, full).replace(/\\/g, "/"))
        }
      })
      return out
    }
    walk(srcRoot, []).forEach((rel) => processFile(rel, dry))
    return
  }
  if (files.length === 0) {
    console.error("usage: node scripts/merge_columns.js [--dry] <src/relative/path.ux> | --all")
    process.exit(1)
  }
  files.forEach((rel) => processFile(rel.replace(/\\/g, "/").replace(/^src\//, ""), dry))
}

main()
