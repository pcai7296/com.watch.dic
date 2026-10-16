# 腕上词典 (w336) — AGENTS.md

> **⚠️ Vela 相关改动（.ux / manifest / build / deploy / API）前先加载 `vela-dev` skill。**
> 本仓**没有** `.opencode/`（`vela.md`、`conventions.md`、`poster-qc.md` 在本仓不存在；仅 w432/w466 有）。分层文档：本文件 + `src/common/AGENTS.md` + `src/pages/AGENTS.md` + `src/components/InputMethod/AGENTS.md` + `scripts/AGENTS.md`。

## 这是什么

**腕上词典** — 小米手环上的离线 Vela 快应用，aiot-toolkit 构建。
本仓是 **w336 分辨率分支**：336×480 矩形屏（shape `rect`），包名 `com.watch.dic.w336`。
`buildTarget.js` 是**多目标 + 条件编译**（与 w212 同构），且**默认值已修正为 W336**——此前它是 w212 那份的字节副本，默认值是 W212，导致不带 `TARGET_*` 时 `npm run build`/`release` 会按 W212 编译。**改动该文件时务必确认默认值仍是 W336。**

## 版本

`src/manifest.json`：`versionName` **3.2.0** / `versionCode` **8**（`package.json` 同）。
`scripts/build_resolution_packages.ps1` 现已从 `src/manifest.json` 读取包名与版本（不再硬编码）；`release_resolution_packages.ps1` 仍可能写死版本，改动版本号时留意。

## 词库（实测 `src/common/dict/meta.json`）

**standard 档**：headwords **70,408**、`wordShards` **728**（26 字母 + 676 双字母 + 26 head）、`cnIndexMode` balanced、`entryShards` 141、cn phrases 119,542、zhChars 5,817。
目录共 **1,082 个文件**（728 words + 141 entries + 96 cn_index + 64 zh_index + 26 inflect + 26 inflect_reverse + meta.json）。
运行时由 `src/common/dictProfile.js` 按 meta 的 `wordTwoShards`/`wordHeadShards` 选片。

**不要在本仓重生成词库**：本仓**没有 `data/` 目录**，生成器跑不起来。要在 w212（唯一有完整语料集）生成后复制过来。

## 关键配置

| 文件 | 内容 |
|------|------|
| `.prettierrc.js` | 无分号、双引号、无尾逗号、`bracketSpacing: false`、printWidth 100、2 空格；`.ux` 按 Vue 解析 |
| `.stylelintrc.js` | 允许 Vela 自定义 CSS 属性与 `:blur` 伪类 |
| `commitlint.config.js` | Conventional commits（**未挂钩**：无 `.husky/`，实际不生效） |
| `.eslintignore` | 忽略 `dist/`、`build/`、`sign/`、`node_modules/` |
| `.gitignore` | 忽略 `/build/`、`/dist/`、`*.rpk`、`node_modules/`、`.husky/`、`.codegraph/`、`.omo/`、`.tmp/`（**`dict/` 与 `sign/` 才入库**） |
| `.gitattributes` | `src/common/dict/** -text` —— **不要删**，删了 git 会规范化换行，全库假 diff |
| `quickapp.config.js` | 启用 JSC + `scripts/conditionalCompilationPlugin.js` |

`.eslintrc.js` 只提供解析用的 `env`/`parserOptions`，`rules` 留空；`npm run lint` **只报告不改文件**（`.ux` 没有 parser，不参与检查），`npm run lint:fix` 才写回。

## 命令

| 命令 | 说明 |
|------|------|
| `npm run start` | 开发服务器（`aiot start --watch`） |
| `npm run build` | 默认目标 RPK |
| `npm run build:192 … build:466` | 各目标构建（cross-env + 条件编译） |
| `npm run build:resolutions` / `release:resolutions` | 批量构建 / 发布 5 个目标 |
| `npm run release` | 发布构建 |
| `npm run lint` | ESLint 检查 `.js`（只报告）；`lint:fix` 才改文件 |
| `npm run deploy:watch` / `deploy:watch:fast` | 构建 + ADB 推送到 emulator-5554 / 只推送 |

## 部署

`scripts/deploy_watch.ps1`（`$ErrorActionPreference = "Stop"`）：构建 → 取 `dist/` 最新 `*.rpk` → `adb push` → `pm install` → `am start` → `am dump` 验证 `[resumed]`。
`-Serial 192.168.x.x:5555` 换设备；`-NoBuild` 跳过构建（**不要用**，会推旧包）。

## 结构

```
src/
  app.ux / global.js / manifest.json   —— 入口（无 app.js）、global DI、路由与 features
  pages/                               —— 9 个页面（index/search/results/detail/records/filter/about/sponsor/settings）
  components/InputMethod/              —— 唯一组件：QWERTY/T9 键盘 + assets/{full,arc,horizontal,t9}
  common/                              —— buildTarget / dictCodec / dictProfile / navGuard / suggestionState + dict/ + icons/
  i18n/                                —— defaults/en/zh-CN.json（占位内容）
scripts/                               —— generate_watch_dict.py（旧版，无 argparse）+ PS1 构建/部署 + JS webpack loader
```
**不存在**：`data/`、`omo/`、`tests/`、`docs/`、`research_cn_index_trim/`、`work_astrobox/`、`opencode.json`。

## 屏幕与样式

- 画布 336×480，`designWidth: "device-width"`、`minPlatformVersion: 1000`。**不要覆盖 designWidth**。
- 背景 `#020813`（about 页 `#000000`）。
- 文字**最小 18px**，除非用户同意截断。
- 自适应三层：编译期条件编译（`buildTarget.js` 的 `// if true:` / `// endif`）+ 运行期 `app.ux` 算 `screenProfile` + CSS 类名后缀 `page-{{screenProfile}}`。**无 rem/vw/rpx**。
- **Vela CSS 不支持 `@keyframes`**（日志 `Unknown style - keyframes`），按压反馈用 `transition: transform 120ms ease-out`。本仓 `src/pages/index/index.ux` 已按此修正——**不要再用 `@keyframes`**。

## Storage（`@system.storage`）

| Key | 上限 | 用途 |
|-----|------|------|
| `dic_history` | 20 | 搜索历史 |
| `dic_favorites` | **150** | 收藏（代码 `detail.ux` 中为 150，`about.ux` 文案同） |

## Router

`manifest.json` features：`system.router`、`system.vibrator`、`system.device`、`system.file`、`system.storage`、`system.prompt`；entry = `pages/index`，共 9 页。
**所有交互跳转必须过 `navGuard()`**（500ms 锁）；`router.back()` 在滑动返回手势里按设计不包。

## ANTI-PATTERNS

- **永不手改 `src/common/dict/**`** —— 生成器产物，`rmtree` 整体替换，front-code / delta / 行号强耦合。
- **永不手改 `src/common/dictCodec.js`** —— 它是生成器侧 codec 的镜像，单改一边即破坏格式。
- **不要绕过 `navGuard()`**。
- **不要硬编码屏幕尺寸**，用 `global.buildTarget` / `screenProfile`。
- **不要移除滑动手势返回**，新增页面必须照抄。
- **不要跨分辨率构建**（本仓编译自己的目标）。
- **不要写通用 AI 套话** —— 保持电报体、无废话。
- **无 `as any` / `@ts-ignore` / `@ts-expect-error`；无分号；无空 catch**。

## 坑

- `npm run lint` 只查 `.js`（`.ux` 无 parser）；`commitlint` / `lint-staged` 因缺 `.husky/` 而不生效。
- `dictProfile.isTwoLetterShardsEnabled` / `isHeadShardsEnabled` 是死代码（无调用者）。
- 生成器里的 `key_for()` 也是死代码（两字母分片实际用 `word[:2]`），旧文档说它「驱动两字母分片」是错的。
- 各页存在大量 `screenWidth || 212` 兜底与按 466/192/336/432 分支的 JS 魔数表，与「不要硬编码尺寸」冲突——不要扩大。
- `detail.ux`、`filter.ux`、`records.ux`、`settings.ux` 的 storage/file 调用**缺 `complete` 回调**（success/fail 齐全），会刷 `finish_callback` 报错。

## 测试 / CI

无测试框架、无 CI。仅有 w212 才有的离线校验（`profile_audit.py`、`bench_search.py`、`check_ids.py`、`check_phrases.py`）——本仓 `scripts/` 里没有。
