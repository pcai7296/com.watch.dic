import file from "@system.file"

let _profile = null
let _loading = false
const _pending = []

// app 与页面各自打包，模块级变量不跨包；共享状态只能走 global（ferry global）。
function adoptSharedProfile() {
  if (!_profile && typeof global !== "undefined" && global.__dictProfile) {
    _profile = global.__dictProfile
  }
  return _profile
}

function publishProfile() {
  if (typeof global !== "undefined") {
    global.__dictProfile = _profile
  }
}

export function getDictionaryProfile() {
  return _profile || adoptSharedProfile()
}

export function loadDictionaryProfile(done) {
  if (adoptSharedProfile()) {
    if (done) done(_profile)
    return
  }
  if (_loading) {
    if (done) _pending.push(done)
    return
  }
  _loading = true
  file.readText({
    uri: "/common/dict/meta.json",
    encoding: "utf-8",
    success: (data) => {
      _loading = false
      try {
        const text = data && data.text ? data.text : ""
        _profile = text ? JSON.parse(text) : null
      } catch (e) {
        _profile = null
      }
      publishProfile()
      const pending = _pending.splice(0)
      if (done) done(_profile)
      for (let i = 0; i < pending.length; i++) {
        pending[i](_profile)
      }
    },
    fail: () => {
      _loading = false
      _profile = null
      publishProfile()
      const pending = _pending.splice(0)
      if (done) done(_profile)
      for (let i = 0; i < pending.length; i++) {
        pending[i](_profile)
      }
    },
    complete: () => {}
  })
}
