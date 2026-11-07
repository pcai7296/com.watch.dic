// 分辨率列：与 5 个构建目标一一对应（192 / 212 / 336 / 432 / 466）。
//
// 为什么是"列"而不是"形状"：形状桶把 192 与 212 合并、把 336 与 432 合并，
// 正是历史上数值错位的来源。列与目标一一对应，可枚举、可单独编译掉。
//
// 为什么列只能以"元素后缀类"表达：Vela 不支持后代选择器
// （@aiot-toolkit/parser .../StyleToTypescript.js 对 COMBINATOR 直接丢弃，
// 构建日志为 "Selector type unsupport Descendant Selector"），
// 所以 `.r192 .card{}` 不成立，只能写 `.card-192{}`。
// 详见 docs/design/multi-device-ui-porting.md §5.0。

export const COLUMNS = [192, 212, 336, 432, 466]

import buildTarget from "./buildTarget"

// 页面/组件取当前列的唯一入口。
// 发布包：global.__screenClass 不存在，直接返回编译期写死的 buildTarget.width。
// 调试包：app.onCreate 里的探测会写 global.__screenClass，页面每次 onShow 重取一次即可跟上。
export function currentScreenClass() {
  return global.__screenClass || String(buildTarget.width)
}

const MIN_WIDTH = 100
const MAX_WIDTH = 800

// 粗筛：挡住 0 / undefined / 负数 / 明显不是屏幕宽度的值。
// 注意它挡不住 dp 量级（96 / 106 / 160 / 216 / 233），单位必须以实机探针为准；
// 若确认 getInfo 返回的是 dp，这里改成 width * screenDensity 再判。
export function isPlausibleWidth(width) {
  const w = Number(width)
  return isFinite(w) && w >= MIN_WIDTH && w <= MAX_WIDTH
}

// 就近取列；取不到返回 null（调用方保持原来的默认列）
export function pickColumn(width) {
  const w = Number(width)
  if (!isPlausibleWidth(w)) {
    return null
  }
  let best = COLUMNS[0]
  for (let i = 1; i < COLUMNS.length; i++) {
    if (Math.abs(COLUMNS[i] - w) < Math.abs(best - w)) {
      best = COLUMNS[i]
    }
  }
  return best
}

// 返回可直接拼进类名的字符串（"192"…"466"），取不到时返回空串
export function columnClass(width) {
  const column = pickColumn(width)
  return column === null ? "" : String(column)
}
