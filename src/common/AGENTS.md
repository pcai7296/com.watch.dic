# src/common/ — 共享模块与静态资源（w432）

跨页面的 ES 模块、应用图标、共享图标。页面/组件里的相对路径都从这里解析。

## 结构

```
common/
├── buildTarget.js       # 编译期屏幕目标 {id,width,height,profile,shape} —— 本仓为单目标硬编码
├── dictCodec.js         # compact-v3 运行时解码（parseBase36 / decodePrefixField / decodeDeltaIds）
├── dictProfile.js       # 读 /common/dict/meta.json 的档位单例（决定选 26 还是 728 个分片）
├── navGuard.js          # 500ms 导航防连点锁（由 src/global.js 挂到 global）
├── suggestionState.js   # 联想状态的模块级单例（search ↔ IME）
├── dict/                # 生成的分片 —— 已入库，禁止手改
├── icons/               # 36 个按钮/UI PNG
└── logo.png / search-icon.png / sponsor-code.png / deco-icon*.png / deco-icon-about.png
```

本仓**没有** `keepScreenOn.js`（只有 w212 有）。`app.ux`、`global.js`、`manifest.json`、这些 `common/*.js`、`*.png` 在 `variants/*` 里都是**独立副本**，改完必须跑 `..\scripts\sync_source.ps1`；而 `common/dictProfile.js`、`common/keepScreenOn.js`、`common/AGENTS.md` **不在该脚本白名单里**，只能手工同步。

## buildTarget.js

本仓是**单目标硬编码**（无 `// if true:` 条件块，也没有 `conditionalCompilationPlugin.js`）：

```js
var TARGET_ID = "W432"; TARGET_WIDTH = 432; TARGET_HEIGHT = 514
TARGET_PROFILE = "rect"; TARGET_SHAPE = "rect"
```

由 `src/global.js` 挂到 `global`，页面写 `const {buildTarget} = global`（**不要 import**）。
**不要用 w212 的多目标版本覆盖本文件**。

## dictCodec.js — 运行时解码（生成器的镜像）

| 导出 | 用途 |
|------|------|
| `parseBase36(value)` | 严格 base36 → 数字（非法返回 -1） |
| `decodePrefixField(value, previous)` | 前编码词复原；**前缀长 > previous.length 时返回 null 且不更新 previous** |
| `decodeDeltaIds(value)` | 严格递增 delta ULEB128 → 无填充 url-safe Base64 → entry ID 数组；**非递增直接返回 `[]`** |

**生成器侧（`scripts/generate_watch_dict.py` 的 `encode_*`）与这里必须同构改**，单改一边即破坏 wire format。

## dictProfile.js — 档位单例

`loadDictionaryProfile()` 读 `/common/dict/meta.json` → 模块级 `_profile` 单例 + 回调队列；**读失败静默 `_profile=null`**，全部退化为 26 字母分片（安全降级）。
真正判据只有 `wordTwoShards > 0` / `wordHeadShards > 0`——**没有任何分支在 `profile` 字符串上**。
`isTwoLetterShardsEnabled` / `isHeadShardsEnabled` 在 `src/` 内**无调用者（死代码）**。

## suggestionState.js — 为什么是模块单例

**通过组件 props 传 seed/suggestions 会在 Vela 原生 DOM 创建期崩溃**，所以状态放在模块级单例：

| 导出 | 用途 |
|------|------|
| `getSuggestionSeed()` / `setSuggestionSeed(v)` | 当前 IME 输入缓冲 |
| `getSuggestions()` / `setSuggestions(v)` | 候选词；setter 会触发回调 |
| `onSuggestionsChange(cb)` | 订阅（单槽注册） |

用法：`import { setSuggestions, onSuggestionsChange } from '../../common/suggestionState.js'`。

## navGuard.js

`navGuard()` 在距上次放行 500ms 内返回 `false`。包住每个交互触发的 `router.push/replace`。
**滑动返回手势里的 `router.back()` 按设计不包**。绕过它会连点堆叠多个页面实例，返回键要多按几次。

## dict/ — 生成的分片（禁止手改）

**standard 档**：`headwords` 70,408、`wordShards` 728（26 字母 + 676 双字母 + 26 head）、`cnIndexMode` balanced、`entryShards` 141，共 **1,082 个文件**。
布局：`words/`、`entries/`、`zh_index/`、`cn_index/`、`inflect/`、`inflect_reverse/`、`meta.json`。

- **必须用 `python scripts/generate_watch_dict.py` 重生成**（生成器先写临时目录再 `rmtree` + move，手改必丢）。生成器与运行时**强耦合**：entries 的 eid = `分片号×500 + 0 基行号`，删插一行即全片错位；front-code 依赖文件内行序；cn/zh 的 delta ID 必须严格递增。
- **绝对不要在 w432 重生成**：本仓 `data/` **缺少 `phrases.csv` 与 `words_ccedict.csv`**，生成器**不会报错**，只会把 70,408 条的 standard **静默缩水成 14,942 条**。词库只在 w212（唯一有完整语料集）生成后复制过来。
- **本仓生成器是旧版**（896 行，**无 argparse**，输出目录硬编码，无 `--profile`/`--output`）——与 w212 的新版不兼容。
- **`.gitattributes` 的 `src/common/dict/** -text` 不要删**：删了 git 会开始规范化换行 → 全库假 diff。
- **CRLF 不统一，不能靠目录推断**：本仓 `entries/`、`cn_index/`、`inflect/`、`inflect_reverse/` 有 CRLF，`zh_index/` 没有，`words/` 部分有。任何读分片的代码都要 `.replace(/\r/g, "")`。

## icons/ — 36 个 PNG

按钮/状态图标，命名以 `btn_` 前缀为主。新增图标：放 PNG 进来 + 在页面里引用，**保持命名约定**，不要内联图标引用。

## WHERE TO LOOK

| 任务 | 位置 | 备注 |
|------|------|------|
| 跨页面/组件共享状态 | `suggestionState.js` | 只能模块级，不要污染 global |
| 页面里拿屏幕尺寸/形态 | `global.buildTarget` | 不要硬编码像素 |
| 守卫一次路由跳转 | `global.navGuard()` | 交互按钮上必须 |
| 解码分片数据 | `dictCodec.js` | 不要每页重写解码 |
| 判断当前词库档位 | `dictProfile.js` | 只读它，不要自己解析 meta |
| 重生成词库 | w212 的 `scripts/generate_watch_dict.py` | 不要在本仓跑 |
| 加按钮图标 | `icons/` | 保持 `btn_` 命名 |

## ANTI-PATTERNS

- **永不手改 `dict/**`**，也**永不手改 `meta.json`**（运行时靠它决定读 26 还是 728 分片）。
- **永不单改 `dictCodec.js`** —— 与生成器 codec 是一对。
- **不要在本仓重生成词库**（见上，会静默缩水）。
- **不要用 props 传联想数据**，也不要给 `suggestionState.js` 引入 Vitest / react context 模式。
- **不要内联图标引用**，保持 `icons/` 可整体替换。
- **不要删 `.gitattributes` 的那一行**。
