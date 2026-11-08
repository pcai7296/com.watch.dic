import storage from "@system.storage"

// 与设置页共用的键：1 = 开（默认），0 = 关
const KEY = "dic_page_transition"

let loaded = false
let enabled = true

// 每个页面 bundle 各自求值一次；未知时先问 storage
function readSetting(callback) {
  storage.get({
    key: KEY,
    default: "1",
    success: function(data) {
      const value = data && (data.value || data)
      enabled = value !== "0"
      loaded = true
      callback(enabled)
    },
    fail: function() {
      // 读失败按默认开处理，至少不影响页面显示
      enabled = true
      loaded = true
      callback(true)
    },
    complete: function() {}
  })
}

// private 初始值：设置未知时先挂 pending，回调返回后再决定动画或直接显示
export function pageTransitionClass() {
  if (!loaded) {
    return "page-enter-pending"
  }
  return enabled ? "page-enter" : ""
}

// 每个页面 onInit 调用：设置已缓存则同步回调，否则读完再回调
// 淡入结束后把 class 清掉，让页面恢复自己的黑色背景（否则根节点一直透明，
// 会露出下层页面/窗口，形成"半透明"或"纯黑"的观感）
export function applyPageTransition(callback) {
  function apply(on) {
    if (!on) {
      callback("")
      return
    }
    callback("page-enter")
    setTimeout(function() {
      callback("")
    }, 260)
  }
  if (loaded) {
    apply(enabled)
    return
  }
  readSetting(function(on) {
    apply(on)
  })
}

// 设置页开关：同步更新缓存并持久化
export function setPageTransitionEnabled(on) {
  enabled = !!on
  loaded = true
  storage.set({
    key: KEY,
    value: enabled ? "1" : "0",
    fail: function(data, code) {
      console.log("page transition save failed: " + code)
    },
    complete: function() {}
  })
}

// 设置页首次读取开关状态
export function loadPageTransitionSetting(callback) {
  if (loaded) {
    callback(enabled)
    return
  }
  readSetting(callback)
}
