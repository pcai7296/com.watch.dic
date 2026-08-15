// 导航防连点：时间窗口内只放行一次页面跳转，防止连点打开多个重复页面
// （连点同一按钮会 push 多个页面实例，导致返回键需要多按几次才能回上一级）
var lastNavAt = 0
var NAV_LOCK_MS = 500

export function navGuard() {
  const now = Date.now()
  if (now - lastNavAt < NAV_LOCK_MS) {
    return false
  }
  lastNavAt = now
  return true
}