// 调试包的屏幕探测。
//
// 发布包（设置了 TARGET_ID）里本文件是空的：import 与函数体都被条件编译整段删除，
// 因此发布 RPK 里既没有 @system.device，也没有 getInfo 调用——这正是 A3 的判据。
//
// 为什么不用 .ux 里的条件编译：实测 aiot 2.0.5 构建时 .ux 不经过 webpack loader
// （`/* if true: … *​/` 在 TARGET_ID=W336 与未设置时都会原样留下），只有 .js 会被处理。
// 所以凡是"发布包里必须消失"的代码，一律只能放在 .js 里。

// if true: process.env.TARGET_ID === undefined
import device from "@system.device"
// endif

export function probeScreenInfo(onInfo) {
  // if true: process.env.TARGET_ID === undefined
  device.getInfo({
    success: (data) => {
      onInfo(data)
    },
    fail: (data, code) => {
      console.log("screen probe failed; keep compiled column: " + code)
    },
    complete: () => {}
  })
  // endif
}
