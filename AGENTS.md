# 腕上词典 — AGENTS.md

> 分层文档：本文件（仓级）+ `src/common/AGENTS.md`（共享模块/资源）+ `scripts/AGENTS.md`（词库生成 + 部署）+ `src/pages/AGENTS.md`。

## What this is

**腕上词典**（Wrist Dictionary）—— 离线小米 Vela 快应用词典，跑在手环/手表上。aiot-toolkit 2.0.5 构建，单文件组件 `.ux`（`<template>` + `<script>` + `<style>`）。

**2026-11-07 起：本仓是唯一源码。** 历史上的 5 个分仓（w192/w212/w336/w432/w466）已合并到根目录这一份 `src/`，差异全部由「列」表达：

| 列 | 屏幕 | 形状 | 包名 | 布局 |
|---|---|---|---|---|
| 192 | 192×490 | pill-shaped | com.watch.dic.w192 | 简约 / 经典 |
| 212 | 212×520 | pill-shaped | com.watch.dic.w212 | 简约 / 经典 |
| 336 | 336×480 | rect | com.watch.dic.w336 | **只有经典** |
| 432 | 432×514 | rect | com.watch.dic.w432 | **只有经典** |
| 466 | 466×466 | circle | com.watch.dic.w466 | **只有经典** |

旧仓库与 variants 已移到仓外 `..\com.watch.dic-archive\`（另有全量 7z 备份），本仓不再引用。

## 源码模型（列 / 构建模式 / 词库档位 三轴正交）

### 轴一：屏幕列

- `designWidth: "device-width"`，**px 就是物理 px**（466 模拟器实测 `use default screen width:466`）。永远不要再改 designWidth。
- 形状桶（pill-standard / pill-compact / rect / circle）已废弃，语义换成**分辨率桶**：`"192"`…`"466"`。
- CSS 只能写**元素自身后缀类**：`.grid-button-466`，模板写 `class="grid-button grid-button-{{screenClass}}"`。
  - Vela 不支持后代选择器：`@aiot-toolkit/parser/.../StyleToTypescript.js:101-107` 对 COMBINATOR 直接丢弃（日志 `Selector type unsupport Descendant Selector`）。
  - **ID 选择器不能加后缀**（`#keyboard67` → 报 `SyntaxError .#keyboard67`）；逗号分组必须先拆成单选择器。
- 取列的唯一入口是 `src/common/screenColumn.js`：
  - `appScreenClass(this)` —— 页面/组件里用这个（走 `this.$app.$def.data.screenClass`）。
  - `currentScreenClass()` —— 仅用于 `private:` 初始值；模块求值阶段 `$app` 还不可用。
  - `pickColumn()` 同时按物理 px 与 dp 两种口径解释 `device.getInfo().screenWidth`，取相对误差小的（466 实测返回 466 px，但官方文档写 dp，两种都留）。
  - **不要用 `global.__screenClass`**：app 与页面是两个 bundle，调试包实测页面里读不到（这正是 466 曾误显示 212 布局的原因）。
- `supportsMinimalLayout(cls)`：只有 192/212 有简约布局的设计稿；336/432/466 一律经典，settings 页的布局开关对它们隐藏。

### 轴二：构建模式（同一份源码，两种包）

- **调试包（IDE 默认）**：不设 `TARGET_*` → `buildTarget.js` 取默认块；`screenProbe.js` 与 `app.ux` 里的探测代码**保留**，运行时用 `device.getInfo()` 定列。
- **发布包**：`TARGET_ID/TARGET_WIDTH/TARGET_HEIGHT` 由脚本注入 → 探测整段被条件编译删除（实测 `app.jsc` 里 `getInfo`=0、`@system.device`=0），列在编译期写死，无异步、无闪烁。
- **条件编译只对 `.js` 生效**。`.ux` 的 `<style>` / `<script>` 不走 webpack loader（aiot 2.0.5 用 `@aiot-toolkit/parser` 自己解析），写 `/* if true: … */` 会被原样保留。⇒ **凡发布包必须消失的代码，只能放 `.js`**；CSS 永远五列全进包。
- `src/global.js` 把 `buildTarget` 与 `navGuard` 挂到 `global`；页面里 `const {buildTarget, navGuard} = global` 是有效的。

### 轴三：词库档位

- 三档词库在 **`dict_repo\`**（仓内，dev / lite / standard，独立 git 仓、被根仓 ignore）。`src/common/dict/` 被 gitignore，用 `.\scripts\use-dict.ps1 dev|lite|standard` 秒级切换（robocopy /MIR）。
- 生成：`npm run dict:dev|lite|standard` → 先写 `dict_repo/<tier>`，再 `use-dict.ps1`。**只在 w212 语料集下生成**（`data/` 必须完整：`phrases.csv` + `words_ccedict.csv`，缺了会静默缩水到 14,942 条）。
- 运行时只读 `meta.json` 选片（`dictProfile.js`），判据只有 `wordTwoShards > 0` / `wordHeadShards > 0`，**没有任何代码分支看 profile 字符串**。
- 不要手改 `src/common/dict/` 下任何分片——生成器每次 `rmtree` 输出目录。

## 版本

`src/manifest.json` 的 `versionName` / `versionCode` 是唯一真源（当前 3.2.0），`package.json` 同步。发布仓 `..\release_repo` 另有 resolutions-manifest。

## 命令

| 命令 | 作用 |
|---|---|
| `npm run build` | 默认目标（212）调试包 |
| `npm run build:192` … `build:466` | 单目标发布包（注入 TARGET_*，探测被编译掉） |
| `npm run start` | aiot 开发服务器（watch） |
| `npm run deploy:watch` | 构建 + adb 推包到 emulator-5554 |
| `npm run lint` | eslint src/（不带 --fix） |
| `npm run dict:dev\|lite\|standard` | 生成并切换词库档位 |
| `npm run audit:dict` / `bench:dict` | 词库只读审计 / 基准 |
| `npm run build:resolutions` | 5 目标批量出开发包（PowerShell，不换词库、不删列） |
| `npm run build:products` | **10 个产品包**（5 分辨率 × lite/standard）→ `release_packages/<tier>/` |
| `.\scripts\verify_products.ps1` | 校验 10 个包：包名 / 无 getInfo / 无其它列规则 / 词库档位 |

**模拟器**：IDE 的「调试」只给它当前选中的那一台推包，多选时其它机器会停在 `Startup home app failure`。要实测多台就手工：

```powershell
adb devices
adb -s emulator-5554 push dist\com.watch.dic.w212.debug.3.2.0.rpk /data/app/com.watch.dic.w212.rpk
adb -s emulator-5554 shell pm install /data/app/com.watch.dic.w212.rpk
adb -s emulator-5554 shell am start com.watch.dic.w212
```

## 目录

```
src/
  app.ux / global.js / manifest.json
  pages/            9 页（index / search / results / filter / detail / records / about / sponsor / settings）
  components/InputMethod/
  common/           buildTarget.js screenColumn.js screenProbe.js navGuard.js dictCodec.js dictProfile.js …
  common/dict/      三档词库（gitignored，见 use-dict.ps1）
  i18n/ icons/ logo/…
scripts/            词库生成、列合并、发布、部署（见 scripts/AGENTS.md）
data/               语料（62 MB，gitignored，只在生成词库时需要）
docs/design/        多设备 UI 方案与执行计划（改列/改布局前先读）
tests/              离线校验
dict_repo/          三档词库独立仓（gitignored）
```

## 硬约束 / 反模式

- **不要把带 `.ux` / `manifest.json` 的临时目录放在本仓根下**：aiot 的 feature 检测会扫描工程根，工程里若躺着别的快应用源码（例如 `.tmp\bandtwine\`），构建会报 `missing feature: system.interconnect` 之类莫名其妙的错。临时目录一律放 `..\`。
- **不要用 `global` 传跨包状态**；用 `this.$app.$def`。
- **不要绕过 `navGuard()`** 做页面跳转（500ms 防连点）。
- **不要移除滑动手势返回**；新增页面照抄既有模式。
- **不要硬编码屏幕尺寸**；用 `screenClass` / `buildTarget`。
- **不要写 `@media`**：手环 8 Pro 不支持，手环 9 可能只有 `shape`；多列一律后缀类。全仓现只有 w466 时代的 InputMethod 一处历史遗留。
- **不要用 `@keyframes`**：手环 10 的 AIOTJS CSS 解析器报 `[to_css_key:140] Unknown style - keyframes`；真机 3.6.1 上会导致页面根节点 `classList` 为 null，紧接 miwear rapidjson `document.h:1154` assert 重启。页面过渡已整体移除（真机 `classList null` → rapidjson assert），不要再加。
- **文本最小 18px**；背景纯黑 `#000000`。
- `storage`/`file`/`device` 异步调用要写 `success`/`fail`/`complete`。
- `ready` 是框架保留事件名，别 `$emit("ready")`。
- 词库文本可能带 CRLF —— 读完 `.replace(/\r/g, "")`。
- **不要动 UI 模板/样式**，除非用户明确要求。
- 无类型抑制（`as any` / `@ts-ignore`）；无分号；无空 catch。
- **模拟器：用户没要求就不要动**（验证是用户的事；但 adb 推包排障属于排障）。

## 已知待办

- **InputMethod**（P7）：112 处静态内联 px + 键盘五列尺寸，最后一块大活。
- 其余页面（about / records / detail / search / settings / filter / results / sponsor）在 336/432/466 上字号/内边距仍是 212 的值；宽度多半由 JS 按 `screenWidth` 算，需逐页目测调参。
- 首页时钟：192/212/466 用弧形排布（466 整体 `transform: scale(1.5)`，几何仍是 212 的）；336/432 是圆角很小的矩形屏，改用水平直线 `<text class="time-flat">`，待实机确认观感。
- `scripts/merge_columns.js` 会覆盖手写的列块，需要把手调值挪进独立数据文件后才可重跑。

**静态内联 px 已清零**（除 InputMethod 112 处）：七页 back-btn 102×72、search 的 nav-arrow/clear-btn/check-btn、detail 的 sync-icon/fav-icon、index 的时钟数字全部进 `<style>`。页面里剩下的 61 处 `style="...{{var}}px"` 是 JS 按屏宽算出来的动态宽度，属设计。
