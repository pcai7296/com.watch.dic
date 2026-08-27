import file from "@system.file"

let _profile = null
let _loading = false
const _pending = []

export function getDictionaryProfile() {
  return _profile
}

export function isTwoLetterShardsEnabled() {
  return !!(_profile && _profile.wordTwoShards > 0)
}

export function isHeadShardsEnabled() {
  return !!(_profile && _profile.wordHeadShards > 0)
}

export function loadDictionaryProfile(done) {
  if (_profile) {
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
      const pending = _pending.splice(0)
      if (done) done(_profile)
      for (let i = 0; i < pending.length; i++) {
        pending[i](_profile)
      }
    },
    fail: () => {
      _loading = false
      _profile = null
      const pending = _pending.splice(0)
      if (done) done(_profile)
      for (let i = 0; i < pending.length; i++) {
        pending[i](_profile)
      }
    },
    complete: () => {}
  })
}
