# 引导页素材压缩与真机重启排查方案

> 2026-11-08 · 腕上词典 3.2.0 · 针对「小米手环 10 真机打开即重启」的新增引导页（pages/guide）
>
> 结论来自：你提供的模拟器启动日志 + 当前工作区未提交代码 + `dist/com.watch.dic.w212.debug.3.2.0.rpk` 实测。
> 真机日志拿不到，所以本文把「能证明的」和「需要真机 A/B 的」分开写。
>
> **本版按你的要求改为：5 个分辨率共用一张低分辨率背景，放大铺满，禁止居中裁剪。**

---

## 0. 结论先行

1. **这份模拟器日志里没有 OOM，也没有崩溃/重启。** 应用进程 `vappxms com.watch.dic.w212`（pid 56）在日志结束后仍存活（14:22 实测 `ps` 仍在，`uptime 0:02`）；AMS 池 `130,222,076 B`（≈124 MiB），`free` 显示 used 6.4 MB（≈6.1 MiB）、free 123.8 MB（≈118 MiB）。
2. **这份日志根本没有打开新增的 guide 页。** `[STORAGE_SET] dic_launch_count=37`，而 `index.ux:271-275` 只在 `nextCount === 1` 时才推引导页。第 37 次启动不会走 `pages/guide`，所以日志里没有 guide 的 build / 图片解码 / 任何报错。**用这份日志无法证明或排除引导页。**
3. **新增素材是本仓最大的一块可压缩内存。** 5 张 2x 全屏 RGBA：包内 754.5 KB，解码后 **12.28 MiB**。但实测这 5 张是**同一渐变按各列比例拉伸**——把 466 的方图拉伸到各列，与各自原图的 PSNR 为 55.7–59.5 dB（192/212/336/432；466 同源 99 dB）。所以按你的思路合成**一张 256×256** 即可：包内 **17.8 KB**（调色板）/ 20.1 KB（RGB），解码 **0.25 MiB**（RGBA）/ 64 KB（8bpp），5 列共用。
4. **另有一条“不支持内容”的现场证据：** `[AIOTJS] [to_css_key:140] Unknown style - keyframes`。新增的 `src/common/pageTransition.css:4` 用 `@keyframes`，当前 AIOT CSS builder 不认识，动画实际不会执行。它与单图背景是两件独立的事，A/B 时分两次改。
5. **方案分三档：** P0 单张 256×256 + `.guide-page { background-size: 100% 100% }`（拉伸铺满、不裁剪）；P1 删 5 张旧图，10 个包共用这 1 张（212 debug 1,293,076 B → 约 0.53 MB）；P2 真机仍重启再去整屏位图 / 静态二维码 / 删动画。

---

## 1. 日志逐条判读

| 时间 | 日志 | 判读 | 与重启的关系 |
|---|---|---|---|
| 0.2546 | `coredump_initialize: /dev/virtblk2 Coredump device not found -2` | 模拟器镜像没配 coredump 分区 | 说明真机即使崩溃也未必留 core；不是原因 |
| 0.4429 | `[LVGL] check_stack_size: tid 20, Stack size: 16288 … increase to 32768` | 线程 20 是 `systemd`（框架进程），栈 16 KB | **早于 app、系统镜像自带**，不能当作 app 的证据；但真机框架栈若也偏小，重渲染可能踩栈 |
| 1.3971 | `[AMS] system total memory:130222076, used:1654904 free:128567172` | 模拟器 AMS 池 ≈124 MiB，启动期几乎全空 | 模拟器没有内存压力；真机池大小未知，**不能套用这个数** |
| 11.2353 | `start activity … com.watch.dic.w212` | IDE 手工拉起 app | — |
| 11.2529 | `check_stack_size: tid 56, Stack size: 130952` | app 进程栈 128 KB，正常 | — |
| 11.5027 / 11.5643 | `can not find feature: system.brightness` ×2；`Failed to find feature:system.brightness` | manifest 声明了 `system.brightness`，但这个模拟器镜像没有 | `keepScreenOn.js:24-26` 有 `typeof` 守卫，不会崩；真机通常有这个 feature。**不是重启原因，但证明模拟器与真机 feature 集不同** |
| 11.5800 | `[AIOTJS] [to_css_key:140] Unknown style - keyframes` | `@keyframes` 被 CSS builder 丢弃，`pageTransition.css` 的入场动画不生效 | **唯一的“不支持内容”实证**。当前不崩，但真机 LVGL 版本不同，不能排除 |
| 11.6785 | `[FEATURE] [convertValueToNative:455] js callback is undefined!`；`[finish_callback:232] invoke success callback failed !` | 某个 storage 调用的 `success` 回调缺失/未定义 | 已知 `detail/filter/records/settings` 缺 `complete`；单独不会重启，但会刷错误 |
| 11.6788 | `[STORAGE_SET] key=dic_launch_count,value=37` | 第 37 次启动 | **不会推 guide**，见 `index.ux:271-275` |
| 11.745-11.845 | `onVsync … response timeout!` ×2，随后 `vsync restored` | 首帧主线程停顿约 100 ms | 真机更慢时可能触发看门狗；是“卡顿→重启”的候选路径 |
| 15.7682 | `[STORAGE_GET] key=dic_history` | 启动 4 s 后的正常读取 | — |
| 16.17 | 日志结束 | **没有第二次启动序列，也没有 panic/reboot 行** | 模拟器上这次没有重启 |

**关键缺口：** 你贴的日志是「第 37 次启动 + 只打开首页」。新增 guide 页、`@keyframes`、`<qrcode>` 都没有在日志里真正跑过。

---

## 2. 为什么一张图够用

### 2.1 五张图本来就是同一张

把 466 的 2x 方图（932×932）按各列比例拉伸到目标 1x，与各列自己的 1x 图逐像素比较：

| 目标列 | 拉伸后 vs 原图 | 结论 |
|---|---|---|
| 192 | **55.7 dB** | 同一渐变，肉眼不可见差异 |
| 212 | **56.3 dB** | 同上 |
| 336 | **58.5 dB** | 同上 |
| 432 | **59.5 dB** | 同上 |
| 466 | **99.0 dB** | 同源（母版本身） |

PSNR ≥ 55 dB 远高于“肉眼可分辨”的门槛；调色板量化本身还有 59.8 dB / maxdiff 3/255 的余量。图是纯渐变，没有文字、边框、定位元素，拉伸不会丢信息——所以不需要 5 张，也不需要按列裁。

### 2.2 单张的三种做法与取舍

| 做法 | 覆盖方式 | 是否裁剪 | 结论 |
|---|---|---|---|
| `background-size: 100% 100%` | 非等比拉伸到容器 | **否** | **本方案采用**；唯一能“完全覆盖且不裁剪”的写法 |
| `background-size: cover` / `<image>` 默认 | 等比放大到覆盖 | **是，居中裁剪** | 你明确不要 |
| `<image object-fit="contain">` | 等比装入 | 否，但留边 | 不铺满 |

注意：`<image>` 的 `object-fit` 只有 `contain | cover | none | scale-down`，**没有 `fill`**，默认是 `cover`（裁剪）。所以“单图 + 不裁剪 + 铺满”只能走 CSS `background-size: 100% 100%`。

### 2.3 平台风险（必须先真机确认）

`background-size` 的官方支持表（`background-img-styles.md:218-226`）只列到 S4 / REDMI Watch 5，**没有手环 10**；上一代手环 8 Pro 明确写“不支持”。如果手环 10 也忽略 `background-size`，单图会按 256×256 原尺寸显示（默认 `auto`），铺不满。这种情况下单图方案不成立，只能：
- 回退到 5 张按列 1x（每张 27.8 KB / 0.42 MiB；见 P2），或
- 接受 `<image object-fit="cover">` 的居中裁剪（违背你的要求），或
- 用纯色 + 局部 glow 条（P2）。

**这一条是单图方案的前置条件。** 先在手环 10 上打开一次 guide，确认背景是否真的铺满。

---

## 3. 素材清单（实测）

### 3.1 guide 背景（现状）

| 文件 | 尺寸 | 模式 | 包内 | 解码 RGBA | 1x 调色板（模拟） |
|---|---|---|---|---|---|
| guide-bg-192.png | 384×980 | RGBA | 111.2 KB | 1.44 MiB | 26.2 KB |
| guide-bg-212.png | 424×1040 | RGBA | 122.3 KB | 1.68 MiB | **27.8 KB** |
| guide-bg-336.png | 672×960 | RGBA | 153.1 KB | 2.46 MiB | 37.3 KB |
| guide-bg-432.png | 864×1028 | RGBA | 186.6 KB | 3.39 MiB | 45.5 KB |
| guide-bg-466.png | 932×932 | RGBA | 181.3 KB | 3.31 MiB | 45.1 KB |
| **合计** | — | — | **754.5 KB** | **12.28 MiB** | **181.9 KB** |

- 图片是半透明的（alpha 128–255），叠在 `.guide-page` 的 `#b0daf7` 上。**先按 `#b0daf7` 预合成成不透明图**，设备上的最终观感不变。
- 上表的 1x 调色板只是“按列各出一张”的对照；本方案最终只用**一张** 256×256。

### 3.2 单张共享母版（本方案）

从 466 的 2x 方图（932×932）预合成后缩到方图：

| 母版 | 包内（palette） | 包内（RGB） | 解码 RGBA | 解码 8bpp | 适用 |
|---|---|---|---|---|---|
| 256×256 | **17.8 KB** | 20.1 KB | **0.25 MiB** | 64 KB | **推荐**，5 列共用 |
| 320×320 | 25.2 KB | 31.3 KB | 0.39 MiB | 100 KB | 466 嫌 256 软时 |
| 384×384 | 33.1 KB | 40.3 KB | 0.56 MiB | 144 KB | 最稳，但仍远小于现状 |

- 推荐 256×256：212 屏横向 0.83x（缩小）、纵向 2.03x（放大）；466 屏 1.82x。纯渐变放大，实测预览没有可见色带。
- 若真机上 466 觉得软/有色带：换 320×320（+7.4 KB），不要回到 2x。
- 若调色板 PNG 解码异常：换 RGB（256×256 只多 2.3 KB）。

### 3.3 其它图片

| 资源 | 尺寸 | 包内 | 解码 RGBA | 压缩建议 |
|---|---|---|---|---|
| sponsor-code.png | 180×180 | 31.8 KB | 0.12 MiB | 调色板 12.2 KB（-62%） |
| icon.png | 192×192 | 18.7 KB | 0.14 MiB | 调色板 9.0 KB |
| logo.png | 116×116 | 8.4 KB | 0.05 MiB | 调色板 4.5 KB |
| icons/ 15 张 | 64–102 px | ≈44 KB | ≈0.3 MiB | 调色板，约省一半 |
| InputMethod assets | 4 组 58 KB | 58 KB | — | 按列只保留实际使用的一组（full/arc/horizontal/t9），约省 30 KB |

这些是第二梯队：先不动，等 guide 背景 A/B 有结论再收。

### 3.4 词库（不是启动内存，但决定包体）

- 本仓当前 dev：267.6 KB / 242 文件 / 1,400 头词；启动只读 `meta.json`（1.8 KB），分片按查询懒加载。
- lite 2.61 MB、standard 6.92 MB。**如果真机装的是 standard，4.58 MB 的包体主要是词库文本；它不是“打开即重启”的直接原因，但会拉长首次读取，且降低可用余量。** 若重启发生在搜索/结果页而非启动，再查档位与分片读取。

### 3.5 汇总

- `src/` 共 61 张 PNG：包内 **916.2 KB**，解码 **13.56 MiB**。
- 其中 guide 5 张：包内 754.5 KB（占图片包体 82.3%），解码 12.28 MiB（占 90.6%）。
- **换成单张 256×256 后：guide 包内 17.8 KB（-97.6%），解码 0.25 MiB（-98.0%）；全仓图片解码从 13.56 MiB 降到 1.53 MiB。**

---

## 4. 压缩方案

### P0 — 单张 256×256 共享背景（推荐）

**生成（Pillow，先备份 5 张原图到仓外）：**

```python
# scripts/compress_guide_bg.py（建议新增）
from PIL import Image

BG = (176, 218, 247)  # .guide-page 的 #b0daf7，预合成用
src = Image.open("src/common/guide-bg-466.png").convert("RGBA")  # 466 是方图，作母版
canvas = Image.new("RGB", src.size, BG)
canvas.paste(src, (0, 0), src)                 # 按底色预合成，去掉 alpha
out = canvas.resize((256, 256), Image.LANCZOS) # 932 -> 256 方图
q = out.quantize(colors=256, method=Image.MEDIANCUT,
                 dither=Image.FLOYDSTEINBERG)
q.save("src/common/guide-bg.png", optimize=True)  # 17.8 KB
# 备选：out.save(...) 直接存 RGB PNG（20.1 KB，无色带风险）
```

**CSS（guide.ux）：**

```css
.guide-page {
  width: 100%;
  height: 100%;
  background-color: #b0daf7;
  background-image: url("../../common/guide-bg.png");
  background-size: 100% 100%;   /* 拉伸铺满，不裁剪 */
  background-repeat: no-repeat;
  /* 其余 flex 布局不变 */
}
```

- 删掉 `.guide-page-192/.guide-page-212/.guide-page-336/.guide-page-432/.guide-page-466` 五条 `background-image` 规则（`guide.ux:149-167`）。模板里的 `guide-page-{{screenClass}}` 可留可删；留着不影响，删了更干净。
- **不要**改成 `<image object-fit="cover">`：默认 cover 会居中裁剪，正是你要避免的；`<image>` 也没有 `fill`。
- 底色 `#b0daf7` 保留：`background-size` 被忽略时，至少 256×256 之外仍是纯色，不是白块。
- 不动模板结构，不动文字/按钮/二维码。

**收益（按 212 计）：**

| | 现状 | P0 后 | 变化 |
|---|---|---|---|
| 212 单张包内 | 122.3 KB | 17.8 KB | **-85%** |
| 212 单张解码 | 1.68 MiB | 0.25 MiB（RGBA）/ 64 KB（8bpp） | **-85% / -96%** |
| 5 张包内 | 754.5 KB | **17.8 KB** | **-97.6%** |
| 5 张解码 | 12.28 MiB | **0.25 MiB** | **-98.0%** |
| 212 debug rpk | 1,293,076 B | **约 566 KB（实测）** | **-56%** |

> 466 屏的收益更大：单张解码 3.31 MiB → 0.25 MiB（-92%）。212 的 2x 是 1.68 MiB，466 的 2x 是 3.31 MiB，而共享母版只有 0.25 MiB。

### P1 — 删 5 张旧图，10 个包共用 1 张

- 删除 `src/common/guide-bg-{192,212,336,432,466}.png`，只留 `src/common/guide-bg.png`。
- 产品包**不需要**按列裁图：`scripts/build_product.ps1:78-85` 的 `strip_columns` 不用加图片删除；10 个包都带同一张 17.8 KB。
- `scripts/verify_products.ps1` 增加三条断言：
  1. `src/common/guide-bg.png` 存在，尺寸 == 256×256；
  2. 不存在 `guide-bg-192/212/336/432/466.png`；
  3. 第 22 行的 `$pages` 补 `guide`（现在没有，`guide.jsc` 的列残留查不出来）。
- debug 包：只 1 张，5 台模拟器共用；不再需要“5 张都在”。
- 包体（按 PNG 原大小估算）：
  - 212 debug：1,293,076 → **约 538,700 B（0.53 MB）**；
  - standard w212：4,798,002 → **约 4,043,600 B（4.04 MB）**；
  - lite w212：1,893,297 → **约 1,138,900 B（1.14 MB）**；
  - 10 个产品包每个都少 **736.7 KB**。

### P2 — 如果 P0/P1 后真机仍重启

按“先摘功能、再降资源”的顺序：

1. **`background-size` 不生效**（真机不铺满）：先确认是不是这一条——如果是，单图方案不成立，回退“5 张按列 1x”（每张 27.8 KB / 0.42 MiB），或接受 `<image object-fit="cover">` 的裁剪。**这是单图方案唯一的硬前提。**
2. **去掉整屏位图**：`#b0daf7` 纯色 + 顶部/底部两条 212×120 的小 glow（palette 约 3–5 KB），或整页只保留文字/按钮/二维码。guide 页的视觉重量在白字和按钮，不在背景。
3. **二维码静态化**：用现成二维码库生成 116×116 PNG（palette 约 1–2 KB），替换 `<qrcode>`。同时消除 API 2 依赖和运行时生成开销。
4. **删动画**：移除 `pageTransition.css` 的 `@keyframes`/`animation-*`，只保留 `transition: opacity 260ms`（官方支持 `opacity`），或直接不做入场动画。日志已证明 `@keyframes` 在当前 CSS builder 里被丢弃，留着只有风险没有收益。

---

## 5. 落地顺序（建议按这个顺序出包）

1. **A/B 0（不改素材）**：注释 `index.ux:271-275` 的 guide 推送 → 真机验证。
   - 不重启 → 锁定 guide；继续 2。
   - 仍重启 → guide 不是原因，跳 4。
2. **P0 单图**：跑 `compress_guide_bg.py`，`guide.ux` 改成一条 `.guide-page` 背景规则；真机验证。
   - 重点看：背景是否**铺满且没有居中裁剪**（`background-size` 是否生效）。
   - 不重启且铺满 → 收工，补 P1。
   - 仍重启 → 3；铺不满 → P2 第 1 条。
3. **P2 降级**：去整屏位图 + 静态二维码 + 删动画；真机验证。
4. **非 guide 路径**：删 `pageTransition` 的 import/@keyframes（所有页面）→ 验证；仍重启再查 `qrcode`、`system.brightness`、`screenProbe` 重试。
5. **收尾**：P1 删 5 张 + `verify_products.ps1` 断言 + 包体预算（212 debug ≤ 0.6 MB，212 产品 ≤ 4.1 MB，lite ≤ 1.2 MB）。

---

## 6. 验证与验收

### 模拟器（能做的部分）

```powershell
# 1) 让 dic_launch_count 归零：卸载重装（会清 storage）
adb -s emulator-5554 shell pm uninstall com.watch.dic.w212
adb -s emulator-5554 push dist\com.watch.dic.w212.debug.3.2.0.rpk /data/app/com.watch.dic.w212.rpk
adb -s emulator-5554 shell pm install /data/app/com.watch.dic.w212.rpk
adb -s emulator-5554 shell am start com.watch.dic.w212
# 2) 看控制台：应出现 PageNavigator push page:pages/guide、guide.jsc 的 build 行
# 3) 对比 free 前后
adb -s emulator-5554 shell free
```

- 关注日志：`pages/guide` 的 `DomComponent build`、`STORAGE_GET dic_launch_count` 后是否 `push routeInfo ... path:/pages/guide`、有没有新的 `vsync timeout`。
- 截一张 guide 图：确认 256×256 母版被拉伸铺满、没有居中裁剪、没有明显色带。
- 模拟器池 124 MiB，**压不出真机的 OOM**；这一步只验证“引导页能被正常创建、不崩、解码路径正确”。

### 真机（唯一的重启复现环境）

| 版本 | 目的 | 期望 |
|---|---|---|
| 原包 | 基线 | 重启 |
| A/B 0：无 guide 入口 | 是否 guide | 不重启则锁定 guide |
| P0：单图 + `100% 100%` | 内存/解码/铺满 | 不重启且铺满、不裁剪 |
| P0 备选：320×320 | 清晰度 | 不重启、无可见色带 |
| P2：无整屏位图 | 兜底 | 不重启 |
| 无 `@keyframes` | 动画兼容 | 不重启 |

### 验收指标

- 212 debug 包 ≤ 0.6 MB；212 产品包 ≤ 4.1 MB；lite ≤ 1.2 MB。
- guide 页峰值解码增量 ≤ 0.3 MiB（RGBA）/ ≤0.08 MiB（indexed）。
- 单张母版拉伸到 5 列，与各自原图对比 PSNR ≥ 40 dB；真机肉眼无明显色带（256 实测 55.7–59.5 dB）。
- 首帧无 `vsync response timeout`（或不超过 1 次）。
- 真机连续打开 10 次不重启。
- 10 个产品包内都只有一张 `guide-bg.png`（256×256）。

---

## 7. 风险与回滚

| 风险 | 处理 |
|---|---|
| 手环 10 忽略 `background-size`（支持表未列，8 Pro 不支持） | 这是单图方案的硬前提；先真机确认。不生效则回退 5 张按列 1x，或接受 cover 裁剪 |
| 真机解码器不支持 palette PNG | 回退 256×256 RGB PNG（20.1 KB，仅 +2.3 KB） |
| 256×256 在 466 上略显模糊/色带 | 换 320×320（25.2 KB / 0.39 MiB）；仍比现状省 92% |
| `background-size` 被忽略时 256 图只占 256×256 一块 | 底色 `#b0daf7` 兜底；但这不是“铺满”，需按上一条回退 |
| `<image>` 没有 `fill`，默认 cover 裁剪 | 明确不用 `<image>` 做单图铺满；只用 CSS `background-size` |
| `guide-bg-*.png` 目前是 **untracked**（`git status` 里 `??`） | 改前先复制到 `..\com.watch.dic-assets-backup\`；或在 git 里 `git add` 原图后再改，便于回滚 |
| 把素材和动画混在一次提交 | **不要**。A/B 要能单独回退；素材一次、动画一次、二维码一次 |

---

## 8. 附录

### 8.1 212 debug RPK 组成（实测）

| 顶层 | 文件数 | 未压缩 |
|---|---|---|
| common/ | 274 | 1,125.9 KB |
| pages/ | 23 | 306.7 KB |
| components/ | 45 | 58.0 KB |
| META-INF/ | 3 | 15.8 KB |
| app.jsc | 1 | 8.4 KB |
| manifest*.json / config | 4 | 4.4 KB |
| **合计** | — | **1,519.2 KB** |
| **RPK 文件** | — | **1,293,076 B** |

- 图片 61 张 = 916.2 KB（70.9%）。
- guide 5 张 = 754.5 KB（58.3%）；换成 1 张 256×256 后 = 17.8 KB（约 3.3%）。
- 212 debug 实测：**566,177 B**（1,293,076 − 726,899 B；比按 PNG 原大小估算的 538,700 B 多约 27 KB，来自 guide 页 jsc/其它资源变化）。

### 8.2 相关文件与行号

| 文件 | 关键行 | 说明 |
|---|---|---|
| `src/pages/index/index.ux` | 271-275 | `nextCount === 1` 才推 guide |
| `src/pages/index/index.ux` | 322-331 | `_scheduleGuidePrompt()`，1200 ms 后 `goGuide()` |
| `src/pages/guide/guide.ux` | 10-15 | `<qrcode>` |
| `src/pages/guide/guide.ux` | 149-167 | 5 个 `background-image` 类（改成 1 条 `.guide-page`） |
| `src/common/pageTransition.css` | 4-19 | `@keyframes` + `.page-enter` |
| `src/common/pageTransition.js` | 31-47 | `pageTransitionClass()` / `applyPageTransition()` |
| `src/common/keepScreenOn.js` | 24-26, 36-47 | brightness 守卫 |
| `src/app.ux` | 58-70 | onCreate：探测 + 常亮 + 词库 profile |
| `src/manifest.json` | 66-68 | `pages/guide` 路由注册 |
| `scripts/build_product.ps1` | 78-85 | strip_columns；单图方案不需要改这里 |
| `scripts/verify_products.ps1` | 22 | `$pages` 缺 guide |

### 8.3 一句话给真机测试

> 先在模拟器上把 `dic_launch_count` 清零、真正打开一次 guide，确认 256×256 母版被 `background-size: 100% 100%` **拉伸铺满且没有居中裁剪**；再上真机按 A/B 0 → P0 → P2 走。**模拟器 124 MiB 池压不出真机 OOM，模拟器不重启不等于素材没问题；而 `background-size` 是否被手环 10 支持，是单图方案成立与否的唯一硬前提。**

---

## 9. 实施记录（2026-11-08）

- 生成 `src/common/guide-bg.png`：256×256，palette，18,273 B（`guide-bg-466.png` 预合成后 LANCZOS 缩放，quantize 256 色 + Floyd–Steinberg）。
- `src/pages/guide/guide.ux`：`.guide-page` 改为 `background-image: url("../../common/guide-bg.png")` + `background-size: 100% 100%` + `background-repeat: no-repeat`；删除 5 条 `.guide-page-192…466`；模板不再挂 `guide-page-{{screenClass}}`。
- 删除 `src/common/guide-bg-{192,212,336,432,466}.png`；原图已备份到 `..\com.watch.dic-assets-backup\`。
- `scripts/verify_products.ps1`：`$pages` 加 `guide`；新增断言：`common/guide-bg.png` 存在且为 256×256，且不存在 `guide-bg-<width>.png`。
- `npm run build` 成功：`dist/com.watch.dic.w212.debug.3.2.0.rpk` = **566,177 B**（原 1,293,076 B，**-56.2%**）；RPK 内 guide 相关条目只有 `common/guide-bg.png`（18,273 B）。RPK 未压缩总大小 800,827 B。
- 待办：真机确认 `background-size` 是否生效（铺满/不裁剪）；`npm run build:products` 重出 10 个包后跑 `verify_products.ps1`。
