# 腕上词典 3.2.0 更新日志

> 统计范围：5 个分支各自「3.1.0 版本号提交」之后 → 当前 HEAD。
>
> | 分支 | 3.1.0 版本提交 | 当前 HEAD |
> |---|---|---|
> | w192 | `b482b4d` | `6c825a9` |
> | w212 | `5466c6d` | `4f98111` |
> | w336 | `068c6bd` | `09a42ac` |
> | w432 | `1d41414` | `6463a71` |
> | w466 | `bf22d62` | `3dacd51` |
>
> 同一项改动在 5 个分支上的提交哈希不同、内容等价；分支特有项已单独标注。

## 一、开发者版本

### 新功能

- **屏幕常亮**（全分支）：新增 `src/common/keepScreenOn.js`，导出 `applyKeepScreenOnSetting(done)` / `setKeepScreenOnEnabled(enabled)`；偏好键 `dic_keep_screen_on`（`"1"` 开 / `"0"` 关，默认关）。应用启动（`app.ux`）与各页面 `onShow` 重新下发 `brightness.setKeepScreenOn`，设置页新增开关；设置页模板改为 `scroll` 容器（内容超高时可滚动）。
- **首页时间刷新**（全分支）：`_updateTime()` 改为按分钟对齐的 `setTimeout`（首次延迟 `60000 - Date.now() % 60000`，之后每 60s），`onShow` 先同步一次；`onHide` / `onDestroy` 停 ticker；仅数字变化时才写 `tc0..tc4`；删除失效的 `currentTime`（w192）/ `timeTimer`（w336/w432/w466）死字段。
- **关于页版本号**（全分支）：由硬编码改为运行时读取 `app.getInfo().versionName`。
- **应用图标**（全分支）：新增 `src/common/icon.png`（192×192）并在 `manifest.json` 指向；白圆 + 3D 书本，先后调整白圆占画布 60%、满铺 + 书标占圆直径 72%，最终以参考稿为准。
- **首页侧滑退出**（全分支）：`onBackPress` 不再 `return true`（保留 `app.terminate()` 兜底），新增根节点 `ontouchstart` / `ontouchend` 识别「左缘起手（≤25% 宽）、右移过半（≥75% 宽）、纵向偏移 ≤25% 高」并 `app.terminate()`；阈值取 `global.buildTarget`。
- **返回按钮尺寸**（w336/w432，w466 仅样式）：w336/w432 返回按钮统一 72px 原生尺寸（w432 搜索页顶栏对齐 76px）；w466 补 about 页 `.back-btn` 规则。
- **首页静态节点标记**（w212 独有，`8f84d91`）：22 个无绑定叶子节点（13 image + 9 text）加 `static`，不参与动态 diff。

### 性能 / 内存

- **冷启动峰值**（全分支，主提交 `4f98111`）：首页 4 个图标 512×512 → 64×64（解码内存 ~4MB → 64KB）；赞助页首启/每 10 次延后 1.5s，`dic_launch_count` 读失败不再导航；`dic_button_scale` 300ms、历史清理 4s 延后到首帧后；`dictProfile` / `keepScreenOn` 改为走 `global` 共享；`system.brightness` 缺失时先守卫；删除未引用图片资源；`config.logLevel` 改为 `warn`。
- **w212 `8f84d91`**：删除首页与 `app.ux` 重复的 `device.getInfo`（及 `@system.device` import）；历史清理从 `onInit` 延后；删除无调用方的 `isTwoLetterShardsEnabled` / `isHeadShardsEnabled`；`logo.png` 160 → 116；删除启动时拼接字符串的 `console.log`。
- **词库档位**（w192/w336/w466）：`src/common/dict/` 切到 standard（70,408 词头）；w212 保持 dev（1,400）用于调试。

### 修复

- **根页面侧滑被吃掉**（3.1.0 引入）：此前 `onBackPress` 用 `return true` 接管返回，但 `app.terminate()` 在部分真机（小米手环 9）不生效，侧滑变成无响应。现改为不拦截系统默认返回，并自行识别侧滑。
- **首页时间停更**：此前只在 `onInit` 刷新，从其他页返回或长时间挂后台后仍显示冷启动时间。
- **storage 回调**（归档提交）：detail / filter / records / search / results / sponsor / about 等页面补齐 `complete` / 失败回调，减少 `finish_callback` 报错。
- **误提交凭据**（w432/w466）：删除 `litellm_config.yaml`、`opencode.json`、`start_litellm.bat`、`start_litellm.ps1`、`.claude/`（含 Figma API key），`.claude/` 加入 `.gitignore`；从仓库移除 `.vscode/`（w432/w466 同时移除 `.opencode/`）。

### 工程

- 版本：`3.2.0` / `versionCode` 8 → 9；`package.json`、README 徽章、about 页同步。
- lint：`eslint` 去掉 `--format codeframe`，`.ux` 不再参与 ESLint，新增 `lint:fix`；`lint-staged` 拆分 `.js` / `.ux`；新增 `.eslintrc.js` / `.eslintignore`。
- 构建：`build_resolution_packages.ps1` 从 `manifest.json` 读取包名与版本，不再硬编码。
- 文档：`AGENTS.md` 同步 `icon.png` / `keepScreenOn.js` 的实际状态。

## 二、发行版本

- 新增“屏幕常亮”：看单词时屏幕不会自己熄灭，可在设置里开关。
- 首页时间更准：到点自动更新，从别的页面回到首页也会立刻校正。
- 换了新图标（白底书本），在桌面上更好认。
- 首页侧滑退出更稳：部分机型之前侧滑没反应，现在能正常退出。
- 关于页显示的版本号改为自动读取，不会再和实际版本对不上。
- 部分机型返回按钮更大，更好点。
- 设置页内容多了也能上下滚动。
- 打开更快、更省内存：首页图标不再加载超大图；启动时的清理任务推迟到页面出现之后；删掉不用的图片。
- 不会一进首页就跳到打赏页，而是稍等再出现；出错时也不会强行跳转。
- 修复个别机型打开“屏幕常亮”时出现的报错。
- 更安全：删除了误提交的密钥与配置文件。
