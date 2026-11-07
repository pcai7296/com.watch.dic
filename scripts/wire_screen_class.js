// 一次性 codemod：给每个页面/组件接上 screenClass 数据。
//
// 模板已经由 merge_columns.js 改成 `class="x x-{{screenClass}}"`，但 Vela 模板只能读
// 页面自己的 data，所以每个页面都要有 screenClass 字段，并在 onShow 时重新取一次
// （调试包的 getInfo 是异步的，晚于 onCreate）。
//
// 幂等：文件里已有 `screenClass:` 就跳过。

const fs = require("fs")
const path = require("path")

const ROOT = path.resolve(__dirname, "..", "src")
const TARGETS = [
  "pages/about/about.ux",
  "pages/detail/detail.ux",
  "pages/filter/filter.ux",
  "pages/index/index.ux",
  "pages/records/records.ux",
  "pages/results/results.ux",
  "pages/search/search.ux",
  "pages/settings/settings.ux",
  "pages/sponsor/sponsor.ux",
  "components/InputMethod/InputMethod.ux"
]

const IMPORT_LINE = 'import {currentScreenClass} from "../../common/screenColumn"'

function indentationOf(line) {
  const m = line.match(/^(\s*)/)
  return m ? m[1] : ""
}

function patchData(source) {
  const dataMatch = source.match(/^(\s*)(?:data|private):\s*\{\s*$/m)
  if (!dataMatch) return { source, changed: false }
  const afterData = source.slice(dataMatch.index + dataMatch[0].length)
  const firstLine = afterData.split("\n").find((line) => line.trim().length > 0) || ""
  const indent = indentationOf(firstLine) || "    "
  const insertAt = dataMatch.index + dataMatch[0].length
  const insert = "\n" + indent + "screenClass: currentScreenClass(),"
  return { source: source.slice(0, insertAt) + insert + source.slice(insertAt), changed: true }
}

function patchLifecycle(source) {
  // onShow 优先（每次进页面都会刷新），没有就退化到 onInit
  const candidates = ["onShow", "onInit"]
  for (const name of candidates) {
    const re = new RegExp("^(\\s*)" + name + "\\(\\)\\s*\\{\\s*$", "m")
    const m = source.match(re)
    if (!m) continue
    const indent = m[1] + "  "
    const insertAt = m.index + m[0].length
    const insert = "\n" + indent + "this.screenClass = currentScreenClass()"
    return { source: source.slice(0, insertAt) + insert + source.slice(insertAt), ok: true, hook: name }
  }
  return { source, ok: false }
}

function patchImport(source) {
  if (source.includes("currentScreenClass} from") || source.includes("currentScreenClass} from")) {
    return source
  }
  const scriptMatch = source.match(/^<script>\s*$/m)
  if (!scriptMatch) return source
  const insertAt = scriptMatch.index + scriptMatch[0].length
  return source.slice(0, insertAt) + "\n" + IMPORT_LINE + source.slice(insertAt)
}

let changed = 0
TARGETS.forEach((rel) => {
  const file = path.join(ROOT, rel)
  let source = fs.readFileSync(file, "utf8")
  if (/^\s*screenClass:/m.test(source)) {
    console.log("skip (already wired): " + rel)
    return
  }
  source = patchImport(source)
  const dataResult = patchData(source)
  source = dataResult.source
  const lifeResult = patchLifecycle(source)
  source = lifeResult.source
  if (!dataResult.changed || !lifeResult.ok) {
    console.error("FAILED partial: " + rel + " data=" + dataResult.changed + " hook=" + lifeResult.ok)
    return
  }
  fs.writeFileSync(file, source, "utf8")
  changed++
  console.log("wired: " + rel + " (hook=" + lifeResult.hook + ")")
})
console.log("files changed: " + changed)
