// Shared "屏幕常亮" state for the whole app.
//
// brightness.setKeepScreenOn 的生效范围官方文档未说明（是否跨页面保持属未定义行为），
// 因此这里缓存偏好值，由每个页面在 onShow 重新下发一次，保证整个 App 期间表现一致。
// 偏好存于 dic_keep_screen_on（"1" 开 / "0" 关，默认关）。
//
// app 与页面各自打包，模块级缓存不跨包；共享值走 global，避免冷启动重复读 storage，
// 也让设置页切换后其它页面能立刻读到新值。

import brightness from "@system.brightness"
import storage from "@system.storage"

const KEY = "dic_keep_screen_on"

let _enabled = false
let _loaded = false

function shared() {
  return typeof global !== "undefined" ? global : null
}

// 部分平台没有 system.brightness（模拟器日志：can not find feature），
// 直接解引用会抛 TypeError，并让 storage 的 success 回调半途中断。
function hasBrightness() {
  return !!brightness && typeof brightness.setKeepScreenOn === "function"
}

function publish(enabled) {
  const g = shared()
  if (g) {
    g.__keepScreenOnLoaded = true
    g.__keepScreenOn = !!enabled
  }
}

function apply(enabled) {
  if (!hasBrightness()) {
    return
  }
  brightness.setKeepScreenOn({
    keepScreenOn: enabled,
    fail: function(data, code) {
      console.log("keepScreenOn set failed: " + code)
    },
    complete: function() {}
  })
}

// 页面 onShow / 应用启动时调用：优先用 global 共享值，其次读一次 storage，之后直接用缓存重下发
export function applyKeepScreenOnSetting(done) {
  const g = shared()
  if (g && g.__keepScreenOnLoaded) {
    _enabled = !!g.__keepScreenOn
    _loaded = true
    apply(_enabled)
    if (done) done(_enabled)
    return
  }
  if (_loaded) {
    apply(_enabled)
    if (done) done(_enabled)
    return
  }
  storage.get({
    key: KEY,
    default: "0",
    success: function(data) {
      const value = data && (data.value || data)
      _enabled = value === "1"
      _loaded = true
      publish(_enabled)
      apply(_enabled)
      if (done) done(_enabled)
    },
    fail: function(data, code) {
      console.log("keepScreenOn storage.get failed: " + code)
      _enabled = false
      _loaded = true
      publish(false)
      apply(false)
      if (done) done(false)
    },
    complete: function() {}
  })
}

// 设置页开关切换时调用：立即生效并同步缓存
export function setKeepScreenOnEnabled(enabled) {
  _enabled = !!enabled
  _loaded = true
  publish(_enabled)
  apply(_enabled)
}
