# Pages — Vela QuickApp 页面模块

9 个自包含的 `.ux` 页面（单文件 SFC）。**没有 `app.js`，入口是 `src/app.ux`。**

## Structure

```
pages/
├── index/       # 主页 — 4 主按钮 + about/sponsor；onBackPress() → app.terminate()
├── search/      # IME 输入 + 光标编辑 + 英文联想 + 滑动退出锁；自动搜索走页面 onReady
├── results/     # 英/中结果、分页 20/页、模糊搜索、短语模式
├── filter/      # 字母钻取跳查
├── detail/      # 词条详情 + 收藏（上限 150）+ 变形跳转（1s 冷却、≤3 层）
├── records/     # 历史/收藏列表（type 参数，20/页，A-Z 筛选）
├── about/       # 致谢/许可/多屏说明 — #000000 底，文字截断是已知问题
├── sponsor/     # 打赏二维码
└── settings/    # 开关：联想 / 长按回主页 / 滑动退出锁 / 按压缩放 / 首页布局
```

**不要在本文件里写页面行数。** 上一版列了 9 个行数，全部过期；`results.ux` 是最大的文件（约 2.5k 行），且各分辨率仓并不相同。要行数就现测。

## Where to Look

| 任务 | 位置 | 备注 |
|------|------|------|
| 新增页面 | 建目录 + `.ux` + 在 `src/manifest.json` 注册 | 从现有页面抄滑动手势返回 |
| 改搜索流程 | `search/` + `results/` | IME 事件 → 搜索逻辑 → 展示 |
| 字母钻取 | `filter/` | 带输入模式 |
| 词条展示 / 收藏 | `detail/` | 收藏走 `@system.storage`，上限 150 |
| 首页布局 | `index/` | minimal / classic 双布局 + 按压缩放 |
| 列表管理 | `records/` | 接 `type` 参数（history / favorites） |
| 用户开关 | `settings/` | 见上表 |
| 词典查询实现 | `results/results.ux` | 全部词库读取逻辑都在这里（见 `src/common/AGENTS.md`） |

## 滑动手势返回（每个页面都有）

**用屏宽占比，不要用像素**——原文档写的 `53 / 159` 是 212px 屏的像素值，抄到别的分辨率仓就是错的。

| 页面 | 起始 X | 结束 X | \|dY\| |
|------|--------|--------|--------|
| 多数页面 | ≤ 25% 屏宽 | ≥ 75% 屏宽 | ≤ 120 |
| `about.ux` | ≤ 10% 屏宽 | ≥ 85% 屏宽 | ≤ 60 |

- 需要 `getTouchPoint()` + `touchStartX/Y`；从任意页面（about 除外）拷贝该模式。
- **手势里的 `router.back()` 按设计不包 `navGuard()`**；交互按钮触发的 `push`/`replace` **必须**过 `navGuard()`。
- `search.ux` 在滑动退出锁开启时，由 `onBackPress()` 返回锁值来拦截系统返回。

## Conventions

- **背景**：所有页面 `#020813`，about 页 `#000000`。
- **字号**：最小 18px，除非用户明确同意截断。
- **路由怪癖**：`records → search` 用 `router.replace` 带 `autoSearch="1"`；`detail → results`（变形）也用 `router.replace`。
- **自适应**：条件编译（多目标仓）+ `app.ux` 运行期算 `screenProfile` + CSS 类名后缀 `page-{{screenProfile}}`。无 rem/vw/rpx。
- **反模式**：多个页面用 JS 硬编码屏幕宽度魔数表与 `screenWidth || 212`（本仓也残留 `|| 212`）兜底，与「不要硬编码尺寸」冲突——**不要扩大**。
- **异步 API**：`storage`/`file`/`device` 调用要补 `success`/`fail`/`complete`，否则日志刷 `finish_callback` 报错。
- **`@keyframes` 不可用**：Vela CSS 不支持它（日志报 `Unknown style - keyframes`）。本仓 `index/index.ux` 已改为 `transition: transform 120ms ease-out`，新增动画沿用该方案。
