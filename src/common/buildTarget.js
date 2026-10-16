var TARGET_ID = "W336"
var TARGET_WIDTH = 336
var TARGET_HEIGHT = 480
var TARGET_PROFILE = "rect"
var TARGET_SHAPE = "rect"

// 上面的默认值必须匹配**本仓**（W336）。此前这里是 W212——因为本文件曾是 w212 那份的
// 字节副本，导致不带 TARGET_* 环境变量直接 `npm run build` / `npm run release` 时，
// 本仓会被编译成 W212 目标（分辨率/profile/shape 全错，只有包名是 w336）。
//
// 下面这些块由 scripts/conditionalCompilationPlugin.js 在构建期按 TARGET_* 环境变量
// 剥离，只保留命中的那一个；块的配对（// if true: … // endif）不能破坏。
// 注意：若不经过条件编译直接执行本文件，是「最后赋值胜出」，会得到 W466。

// if true: process.env.TARGET_ID === "W192" && process.env.TARGET_WIDTH === "192" && process.env.TARGET_HEIGHT === "490"
TARGET_ID = "W192"
TARGET_WIDTH = 192
TARGET_HEIGHT = 490
TARGET_PROFILE = "pill-compact"
TARGET_SHAPE = "pill-shaped"
// endif

// if true: process.env.TARGET_ID === "W212" && process.env.TARGET_WIDTH === "212" && process.env.TARGET_HEIGHT === "520"
TARGET_ID = "W212"
TARGET_WIDTH = 212
TARGET_HEIGHT = 520
TARGET_PROFILE = "pill-standard"
TARGET_SHAPE = "pill-shaped"
// endif

// if true: process.env.TARGET_ID === "W432" && process.env.TARGET_WIDTH === "432" && process.env.TARGET_HEIGHT === "514"
TARGET_ID = "W432"
TARGET_WIDTH = 432
TARGET_HEIGHT = 514
TARGET_PROFILE = "rect"
TARGET_SHAPE = "rect"
// endif

// if true: process.env.TARGET_ID === "W466" && process.env.TARGET_WIDTH === "466" && process.env.TARGET_HEIGHT === "466"
TARGET_ID = "W466"
TARGET_WIDTH = 466
TARGET_HEIGHT = 466
TARGET_PROFILE = "circle"
TARGET_SHAPE = "circle"
// endif

export default {
  id: TARGET_ID,
  width: TARGET_WIDTH,
  height: TARGET_HEIGHT,
  profile: TARGET_PROFILE,
  shape: TARGET_SHAPE
}
