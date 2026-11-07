# 腕上词典 — 经验记忆

> 跨仓库工作区 `J:\code\MI band\com.watch.dic` 的长期经验记录。
> 精简摘要见根目录 `AGENTS.md`，本文件是更完整的版本。

## 仓库与词库现状

| 仓库 | 分支 | 词库 |
|------|------|------|
| w192 | w192 | standard（大词库） |
| w212 | w212 | dev（1,400 词） |
| w212-lite | lite | lite（19,942 词） |
| w212-standard | standard | standard（70,408 词） |
| w336 | w336 | standard |
| w432 | w432 | standard |
| w466 | w466 | standard |

- 当前版本：3.2.0 / versionCode 8
- 发布仓库 `release_repo`：5 个 RPK **全部是 lite 档**（解包读 `common/dict/meta.json` 确认），不是「w212 只放 lite」

## 词典数据 / 编码

- 词典文件在 Git 里是 **CRLF** 行尾。
- JS 读取后必须去 `\r`，否则 `split("\n")` 会在最后一个字段残留 `\r`，`decodeDeltaIds` 的正则校验失败 → 中文搜索“未找到”。
- 统一在 `results.ux` 的 `readText()` 里做 `text.replace(/\r/g, "")`。
- `meta.json` 是运行时唯一事实来源：`profile`、`wordTwoShards`、`wordHeadShards`、`cnIndexMode`。
- dev/lite：只有 26 个字母分片；standard：26 + 676 + 26 = 728 个 word 分片。
- 不要直接编辑 `src/common/dict/`，用 `scripts/generate_watch_dict.py` 重新生成。

## Vela / QuickApp 坑

- **CSS 不支持 `@keyframes`**：构建/运行日志出现 `Unknown style - keyframes`。动画改用 `transition`。
- **`ready` 是保留事件名**：InputMethod 里 `$emit("ready")` 会触发 `TypeError: not a function`。改用页面 `onReady` 生命周期。
- **异步 API 回调**：`storage.get/set`、`file.readText`、`device.getInfo` 尽量同时给 `success`、`fail`、`complete`，否则框架日志出现 `finish_callback: invoke complete callback failed` / `invoke success callback failed`。
- **`app.terminate()` 退出应用**：需要 `manifest.json` 声明 `system.app` feature，否则构建报 `missing feature`。
- **主页系统滑动返回不可靠**：部分设备根页面滑动返回不退出；已在所有主页加 `onBackPress()` 调 `app.terminate()`；w192 额外支持长按词典图标 2 秒退出。

## 性能 / 内存

- 双字中文搜索压力来自：
  1. `cn_index` 全量解析成 `indexMap`（所有短语 + ID 数组）
  2. entry shard 全量解析成对象并缓存
- 优化做法：
  - `cn_index` 改为按需扫描，只保留命中查询的最多 50 个 ID，不缓存整桶
  - entry shard 改为按需提取，只解析需要的行（但要维护 front-code 的 `previousWord` 链）
  - 按 shard 分组读取，避免重复读同一 shard
  - 中文回退扫描限制最多 10 个 shard
- 普通英文搜索排序：先 `zk`（中考）再 `gk`（高考），同优先级保持分片原始顺序。
- **冷启动第一帧的图片解码是最大单项**：首页 4 个 32px 图标曾是 512×512 PNG（每张解码 1MB，合计 ~4MB），已统一降到 64×64（每张 16KB）。图标源尺寸按「显示尺寸×2」控制。
- **Vela 的 app 与页面各自打包，模块级单例不跨包**（日志实测冷启动 `dic_keep_screen_on` 被读两次）。跨包共享只能挂 `global`：`dictProfile` 写读 `global.__dictProfile`，`keepScreenOn` 写读 `global.__keepScreenOnLoaded/__keepScreenOn`；search/results 的 `onInit` 仍调 `loadDictionaryProfile()` 兜底。
- **冷启动不要自动 push 页面**：index 的 `dic_launch_count` 首启/每 10 次跳赞助页延后 1.5s，且读失败不再导航。
- **非关键 storage 读取延后**：首页 `_loadBtnScale`（300ms）与 `_cleanInvalidHistory`（4s）移到首帧后，`onHide` 取消赞助页定时器。
- **`system.brightness` 不可用要守卫**：直接调 `setKeepScreenOn` 会抛 TypeError（模拟器/部分设备），并中断 storage 的 success 回调。
- **Vela 的 `list` 不做虚拟化**：`<list>` 的子节点在 `DomComponent build` 阶段**一次性全部创建**（日志 `build:120 entities: 96, root: 131`），离屏 `list-item` 一样要建、要排版。长静态页（about）必须自己做「首屏少渲染 + show 之后补内容」，否则打开时间被离屏节点吃掉。
- **about 页加载优化（w212 已改）**：原实现 131 个节点全部在首帧前创建，而首屏只有「致谢卡片 + Developers」可见（离屏 5 段共 2000+ px、61 行 `text`）。改法：`onInit` 只算高度、`license` 之外 4 段的行数组留空；`onShow` 用 `setTimeout` 逐段填（每段 +16ms），`<list onscroll>` 兜底一次性补齐；同时 `onShow` 不再无条件重跑 `applyScreenLayout()`（原来每次 show 都重设全部数组 = 一次全量重绘），改成 `_layoutKey`（`sw|profile`）相等就跳过。首帧节点 131 → 33。
- 真机内存测试用 release 包（debug 包启动时拉起 Debug Server/Inspector/MQTT）。

## Git / 发布

- **大小词库切换**：把词库变化做成独立提交（只动 `src/common/dict`），在同一仓库里 `git checkout HEAD~1` = 小词库，`git checkout HEAD` = 大词库。
- w212 主仓用分支/worktree 区分 dev/lite/standard；其它分辨率仓库用独立提交切换。
- `release_repo` 更新 RPK 后必须重算 `resolutions-manifest.json` 的 SHA256。
- `release_repo` 的 w212 RPK 来源必须是 `w212-lite`。
- Windows 下 `dist` 目录可能被其它进程占用导致构建 `EPERM`；可先删旧 RPK，仍不行就用临时副本构建后把 RPK 复制回原目录。

## 真机 / 测试环境

- **用户手上只有真机小米手环 10**（屏幕 212×520 → 对应 **w212**）。做性能/交互改动时优先改 w212，改完由用户真机验证。
- 用户当前打开的模拟器也是**小米手环 10**（w212 目标），因此 w212 的模拟器日志可直接对照。
- w192 / w336 / w432 / w466 没有对应真机，改动属于「照抄同步」：**5 个开发仓之间没有任何 junction**（`scripts/sync_source.ps1` 只同步 `variants/`，不同步开发仓），需要逐个仓复制粘贴并各自 `npm run build:<分辨率>`。

## 常用命令

```bash
# 构建指定分辨率 release
cross-env TARGET_ID=W432 TARGET_WIDTH=432 TARGET_HEIGHT=514 aiot release --enable-custom-component

# 词典审计 / 基准（可在 w212-standard 里对任意 dict 路径执行）
python scripts/profile_audit.py --dict <path>
python scripts/bench_search.py --dict <path>
```
