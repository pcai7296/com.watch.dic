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

// 页面/组件里取当前列的推荐入口（传 this）。
//
// 为什么不能只靠 global：app 与页面是各自打包的 bundle，调试包实测
// app.ux 已经探测到 466、页面里读 global.__screenClass 却仍是 undefined，
// 于是页面回退到 buildTarget.width（调试默认 212），整页套成 212 的布局。
// 跨包共享状态要走 this.$app.$def（旧仓 d6db0ef 的单包多屏就是这么做的）。
export function appScreenClass(vm) {
  try {
    const def = vm && vm.$app && vm.$app.$def
    const cls = def && def.data && def.data.screenClass
    if (cls) {
      return String(cls)
    }
  } catch (e) {
    // $app 取不到时静默回退，不能让首帧崩掉
  }
  return currentScreenClass()
}

const MIN_WIDTH = 80
const MAX_WIDTH = 800

// 同 5 个目标的 dp 宽度（= 物理宽度 / DPR）。
// 官方文档说 screenWidth 是 dp，但 466 圆表实测返回 raw=466（物理 px），
// 所以两种口径都算一遍、取相对误差更小的那个，避免设备间单位不一致。
export const COLUMN_DP = [96, 106, 160, 216, 233]

export function isPlausibleWidth(width) {
  const w = Number(width)
  return isFinite(w) && w >= MIN_WIDTH && w <= MAX_WIDTH
}

function nearestIndex(list, value) {
  let best = 0
  let bestError = Math.abs(list[0] - value)
  for (let i = 1; i < list.length; i++) {
    const error = Math.abs(list[i] - value)
    if (error < bestError) {
      best = i
      bestError = error
    }
  }
  return { index: best, error: bestError }
}

// 同时按"物理 px"和"dp"两种口径解释这个宽度，取相对误差更小的那一种。
// 例：233 → px 口径最接近 212（误差 21），dp 口径正好命中 233 → 取 466 列；
//     466 → px 口径正好命中 → 取 466 列；106 → dp 口径命中 → 212 列。
export function pickColumn(width) {
  const w = Number(width)
  if (!isPlausibleWidth(w)) {
    return null
  }
  const byPx = nearestIndex(COLUMNS, w)
  const byDp = nearestIndex(COLUMN_DP, w)
  if (w > 0 && byDp.error / w < byPx.error / w) {
    return COLUMNS[byDp.index]
  }
  return COLUMNS[byPx.index]
}

// 返回可直接拼进类名的字符串（"192"…"466"），取不到时返回空串
export function columnClass(width) {
  const column = pickColumn(width)
  return column === null ? "" : String(column)
}
