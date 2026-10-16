// Shared "屏幕常亮" state for the whole app.
//
// brightness.setKeepScreenOn 的生效范围官方文档未说明（是否跨页面保持属未定义行为），
// 因此这里缓存偏好值，由每个页面在 onShow 重新下发一次，保证整个 App 期间表现一致。
// 偏好存于 dic_keep_screen_on（"1" 开 / "0" 关，默认关）。

import brightness from "@system.brightness"
import storage from "@system.storage"

const KEY = "dic_keep_screen_on"

let _enabled = false
let _loaded = false

function apply(enabled) {
  brightness.setKeepScreenOn({
    keepScreenOn: enabled,
    fail: function(data, code) {
      console.log("keepScreenOn set failed: " + code)
    },
    complete: function() {}
  })
}

// 页面 onShow / 应用启动时调用：首次读存储，之后直接用缓存值重新下发
export function applyKeepScreenOnSetting(done) {
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
      apply(_enabled)
      if (done) done(_enabled)
    },
    fail: function(data, code) {
      console.log("keepScreenOn storage.get failed: " + code)
      _enabled = false
      _loaded = true
      apply(false)
      if (done) done(false)
    }
  })
}

// 设置页开关切换时调用：立即生效并同步缓存
export function setKeepScreenOnEnabled(enabled) {
  _enabled = !!enabled
  _loaded = true
  apply(_enabled)
}
