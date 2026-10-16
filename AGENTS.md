# 腕上词典 (w432) — AGENTS.md

> **⚠️ Vela 相关改动（.ux / manifest / build / deploy / API）前先加载 `vela-dev` skill**，并读 `.opencode/instructions/vela.md`。
> 注意：`.opencode/instructions/` 下有 5 个 md（AGENTS/conventions/dictionary-coverage/poster-qc/vela），但**本仓没有 `opencode.json`**，没有任何配置声明它们被自动加载——按需主动读。
> 分层文档：本文件 + `src/common/AGENTS.md` + `src/pages/AGENTS.md` + `src/components/InputMethod/AGENTS.md` + `data/AGENTS.md` + `omo/AGENTS.md` + `scripts/AGENTS.md`。

## 这是什么

**腕上词典** — 小米手环上的离线 Vela 快应用，aiot-toolkit 构建。
本仓是 **w432 分辨率分支**：432×514 矩形屏（shape `rect`），包名 `com.watch.dic.w432`。

**本仓是单目标仓**：`src/common/buildTarget.js` 是 12 行硬编码（无 `// if true:` 条件块），且**没有** `conditionalCompilationPlugin.js` / `conditionalCompilationLoader.js`，`package.json` 也**没有** `build:192..466` 脚本。它的 `package.json` 只有 `start` / `build` / `deploy:watch` / `deploy:watch:fast` / `release` / `lint`。

## 版本

`src/manifest.json`：`versionName` **3.2.0** / `versionCode` **8**（`package.json` 同）。

## 词库（实测 `src/common/dict/meta.json`）

**standard 档**：headwords **70,408**、`wordShards` **728**、`cnIndexMode` balanced、`entryShards` 141、cn phrases 119,542。
共 **1,082 个文件**。运行时由 `src/common/dictProfile.js` 按 meta 的 `wordTwoShards`/`wordHeadShards` 选片。

**不要在本仓重生成词库——会静默毁掉它**：本仓 `data/` **缺少 `phrases.csv` 与 `words_ccedict.csv`**，生成器会「成功」但把 70,408 条的 standard 缩水成 14,942 条。必须在 w212（唯一有完整语料集）生成后复制过来。

## 关键配置

| 文件 | 内容 |
|------|------|
| `.prettierrc.js` | 无分号、双引号、无尾逗号、`bracketSpacing: false`、printWidth 100、2 空格；`.ux` 按 Vue 解析 |
| `.stylelintrc.js` | 允许 Vela 自定义 CSS 属性与 `:blur` 伪类 |
| `commitlint.config.js` | Conventional commits（**未挂钩**：无 `.husky/`） |
| `.eslintignore` | 忽略 `dist/`、`build/`、`sign/`、`node_modules/` |
| `.gitignore` | 忽略 `/build/`、`/dist/`、`*.rpk`、`node_modules/`、`.husky/`、`.codegraph/`、`.omo/`、`.tmp/`、`/fork_astrobox/` |
| `.gitattributes` | `src/common/dict/** -text` —— **不要删** |
| `quickapp.config.js` | 有，但**不注册**条件编译 plugin |

`.eslintrc.js` 只提供解析用的 `env`/`parserOptions`，`rules` 留空；`npm run lint` **只报告不改文件**（`.ux` 没有 parser，不参与检查），`npm run lint:fix` 才写回。

## 命令

| 命令 | 说明 |
|------|------|
| `npm run start` | 开发服务器 |
| `npm run build` | 构建 RPK（432×514） |
| `npm run release` | 发布构建 |
| `npm run lint` | ESLint 检查 `.js`（只报告）；`lint:fix` 才改文件 |
| `npm run deploy:watch` / `deploy:watch:fast` | 构建 + ADB 推送 / 只推送 |

没有批量构建脚本，也没有 `scripts/build_resolution_packages.ps1` / `release_resolution_packages.ps1`。

## 部署

`scripts/deploy_watch.ps1`（`$ErrorActionPreference = "Stop"`）：构建 → `dist/` 最新 `*.rpk` → `adb push` → `pm install` → `am start` → `am dump` 验证 `[resumed]`。`-Serial` 换设备，`-NoBuild` 跳过构建（**不要用**）。

## 结构

```
src/
  app.ux / global.js / manifest.json   —— 入口（无 app.js）；app.ux 硬编码 rect，不调 device.getInfo
  pages/                               —— 9 个页面
  components/InputMethod/              —— 唯一组件
  common/                              —— buildTarget / dictCodec / dictProfile / navGuard / suggestionState + dict/ + icons/
  i18n/                                —— 占位内容
scripts/                               —— generate_watch_dict.py（旧版，无 argparse）+ deploy_watch.ps1
data/                                  —— 语料（**缺 phrases.csv / words_ccedict.csv**），详见 data/AGENTS.md
omo/                                   —— 41 个文件（34 个 .py）：素材生成、海报、覆盖率测试，详见 omo/AGENTS.md
.vscode/mcp.json                       —— velajs-mcp
```
**不存在**：`tests/`、`docs/`、`research_cn_index_trim/`、`work_astrobox/`、`opencode.json`。

## 屏幕与样式

- 画布 **432×514**，`designWidth: "device-width"`、`minPlatformVersion: 1000`。**不要覆盖 designWidth**。
- 背景 `#020813`（about 页 `#000000`）；文字**最小 18px**。
- 自适应：本仓 `app.ux` 硬编码 rect、不做运行期 `screenProfile` 修正（与 w212 不同）；但页面 CSS 仍带 `page-{{screenProfile}}` 类名。
- **Vela CSS 不支持 `@keyframes`**，用 `transition`。本仓 `src/pages/index/index.ux` 已从 `@keyframes dicPressIn/Out` 改为 `transition: transform 120ms ease-out`（与 w212 一致）——**不要再用 `@keyframes`**。

## Storage

| Key | 上限 | 用途 |
|-----|------|------|
| `dic_history` | 20 | 搜索历史 |
| `dic_favorites` | **150** | 收藏（旧文档写 20 是错的） |

## Router

features：`system.router`、`system.vibrator`、`system.device`、`system.file`、`system.storage`、`system.prompt`；entry = `pages/index`，共 9 页。
**交互跳转必须过 `navGuard()`**；滑动返回手势里的 `router.back()` 按设计不包。

## ANTI-PATTERNS

- **永不手改 `src/common/dict/**`**；**永不手改 `dictCodec.js`**（生成器 codec 的镜像）。
- **不要在本仓重生成词库**（见上，会缩水）。
- **不要绕过 `navGuard()`**；**不要移除滑动手势返回**。
- **不要用 w212 的多目标 `buildTarget.js` 覆盖本仓**（本仓是单目标）。
- **不要把发布产物放别处**；`omo/` 脚本里不要留一次性脚本、不要提交生成物。
- **无 `as any` / `@ts-ignore` / `@ts-expect-error`；无分号；无空 catch**；文档保持电报体。

## 坑

- `npm run lint` 已修复（新增 `.eslintrc.js`，只查 `.js`，不改文件）；`commitlint`/`lint-staged` 因缺 `.husky/` 不生效。
- `omo/` 下脚本的绝对路径**已从旧单仓** `J:\code\MI band\腕上词典\...` **改指当前工作区**（`com.watch.dic\release_repo` 与本仓 `src\common\`）；仍是绝对路径，跨机器需先改。
- `src/config-watch.json` 是空对象 `{}`；`src/i18n/*.json` 是占位符——都是死配置。
- `dictProfile.isTwoLetterShardsEnabled` / `isHeadShardsEnabled`、生成器 `key_for()` 均为死代码。
- `detail.ux` / `filter.ux` / `records.ux` / `settings.ux` 的异步调用缺 `complete` 回调。
- `.opencode/instructions/*.md` 是历史文档，部分内容（如 `work_astrobox/`、`opencode.json`）在本仓并不存在。

## 测试 / CI

`omo/` 下有离线脚本（`dict_coverage_test.py`、`dict_compaction_test.py`、`dict_semantic_validator.py`）。**无测试框架、无 CI**。
`profile_audit.py` / `bench_search.py` 只在 w212 有。
