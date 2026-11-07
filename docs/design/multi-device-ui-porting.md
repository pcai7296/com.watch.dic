# 多设备 UI 移植研究：从 BandTwine 到腕上词典

> 研究日期 2026-11-07 ｜ 参考对象 [VelaOS_BandTwine](https://github.com/OrPudding/VelaOS_BandTwine) @ `601cb45`（站点 <https://velaos-bandtwine.pages.dev/>）
> 本文只做诊断与方案，不改任何页面代码。
> 执行步骤与验收标准见 [multi-device-ui-execution-plan.md](./multi-device-ui-execution-plan.md)。

## 0. 结论先行

1. **不要照搬 BandTwine 的"媒体查询三分支"**。它是为"一套包跑三种形状"设计的，每个形状只写了一个代表分辨率（466 / 336 / 212）。本项目有 5 个分辨率、5 个独立 RPK，且 192 与 212 同为胶囊形、432 与 466 分属矩形/圆形——三分支模型覆盖不了，照搬会让 192 拿到 212 的数值。
2. **真正值得借鉴的是三件事**：单一源码、以「形状」而非「分辨率」作为布局维度、覆盖式（base + override）而非复制式。
3. **本项目的病灶不是"没有媒体查询"，是"同一份 UI 存在 5 份物理副本"**。实测 w212 与 w192 的 29 个非词库文件里 13 个字节不同，about.ux 差 204 行，index.ux 差 84 行；`@media` 用量为 0，而每仓有 ~800 处 px 字面量、206 处内联 `style="…px"`。修一个 UI bug 要改 5 遍，这是成本主体。
4. **硬约束是 IDE 工作流，不是技术偏好**：AIoT-IDE 的"一键编译 → 推包 → 多模拟器并排"走的是**一次编译、一包多机**（见 §3.4）。构建期条件编译天然与该模型冲突——它把布局在编译时焊死成一个目标，另外 4 台必然错位。这正是当年被迫分 5 个文件夹的根因。
5. **推荐路线（v3，按 m00238 / m00361 决策修订）**：**运行时选列为主，构建期硬编码为辅**。`designWidth` 保持 `device-width`（px 就是物理 px），现有 5 套手调数值原样保留，但合并成一份源码里的 5 列 CSS；**调试包**由 `device.getInfo().screenWidth` 在启动时选列，**发布包**在编译期就把列写死、不含任何探测。发布仍按设备拆包（5 分辨率 × lite/standard = 10 个）——老设备有不支持媒体查询的（8 Pro），`device.getInfo` 也可能失败，所以发布包不能依赖任何运行期查询。
6. **两条通道互不重叠**：运行期负责"IDE 里一包多机"；构建期负责"这个包是为哪块屏做的"（包名 / 版本 / 只留该设备那一列）。媒体查询既不做主通道、也不做增强——它恰好是 8 Pro 缺的那一项。

---

## 1. 参考项目拆解

### 1.1 它怎么做的

| 维度 | BandTwine 做法 | 证据 |
|------|----------------|------|
| 源码组织 | **一个 `src/`，7 个页面，无 per-device 目录** | 仓库树只有 `src/pages/{index,start,save,engine,about,advanced,verify}` |
| 构建 | **单目标**：`aiot build`，无 `build:NNN` 脚本、无 `TARGET_*` 环境变量 | `package.json` scripts |
| 基准宽度 | `config.designWidth: "device-width"` | `src/manifest.json:43-46` |
| 布局分叉 | 每个页面 `<style>` 尾部三段 `@media`：`(shape: circle)` / `(shape: rect)` / `(shape: pill-shaped)` | `src/common/comm.css:34,94,139`；`pages/index/index.ux:135-163`；`pages/engine/engine.ux:1395-1503` |
| 数值写法 | 直接写代表分辨率的物理 px：圆屏 466、矩形 336、胶囊 212 | `comm.css:36-37`（466×466）、`:96-97`（336×480）、`engine.ux:1463-1465`（212×520） |
| 差异化结构 | 同一 DOM 用 `@media` 改 `flex-direction` / 宽度 / 换行，不换模板分支 | `engine.ux:1435-1502`（胶囊屏列表 `flex-wrap: wrap`） |
| 规模 | 6 个文件共 18 段 media，305 处 px | 实测统计 |

### 1.2 收益

- 改一次全设备生效；无同步脚本、无 5 份副本。
- 形状是设备固有属性，运行时匹配，**一个 RPK 理论上可分发到同形状多设备**。
- 与官方设计指引一致：官方《多屏设计》明确建议"出三类设计稿满足胶囊形、圆形、矩形屏"，并给出代表分辨率 **466×466 / 336×480 / 192×490**。

### 1.3 边界（为什么不能直接用）

- **每个形状只有一个分辨率**。BandTwine 的胶囊分支写死 `212px`，装到 192×490 上手环 9 上就是溢出。它没有 192 的目标，所以这不是 bug；对本项目就是 bug。
- **同形状不同尺寸无法区分**：432×514 与 466×466 都是"矩形类"以外的两套，但只要出现 480×480 圆屏，`(shape: circle)` 会命中 466 的数值。
- **大量绝对定位 px**：弧形时间 `time1..time5` 用 `left/top/rotate` 精确定位（`comm.css:55-82`），任何宽高变化都会错位。本项目首页同款弧形时间也是这套写法。
- **依赖媒体查询的设备覆盖率**：见 §3.2，本项目的 336 目标机型（手环 8 Pro）**不支持**媒体查询。

---

## 2. 本项目现状（实测）

### 2.1 结构

- 5 个独立 git 仓，每仓一套完整 `src/`；`variants/` 10 个变体通过 Junction 复用 `pages/components/i18n/icons`。
- 每仓 `src/common/buildTarget.js` 用条件编译块写死单目标，导出 `{id,width,height,profile,shape}`。
- `src/app.ux` 在 `onCreate` 用 `device.getInfo` 运行时再算一遍 `screenProfile`（circle / rect / aspect≤0.4→pill-compact / else pill-standard）。

### 2.2 量化（2026-11-07 实测）

| 指标 | w192 | w212 | w336 | w432 | w466 |
|------|------|------|------|------|------|
| px 字面量（src，除词库） | 864 | 863 | 756 | 760 | 794 |
| 内联 `style="…px"`（仅 w212） | — | **206** | — | — | — |
| `@media` 段数 | 0 | 0 | 0 | 0 | 0 |
| 条件编译块 | 仅 `buildTarget.js` | 仅 `buildTarget.js` | 同 | 同 | 同 |

仓间差异（排除 `dict/`、`icons/`、png）：

| 对比 | 同名文件相同 | 不同 | 主要分歧文件 |
|------|--------------|------|--------------|
| w212 vs w192 | 16 | 13 | `about.ux`(204 行) `index.ux`(84) `records.ux`(76) `buildTarget.js` `app.ux` |
| w212 vs w466 | 13 | 16 | `index.ux`(642) `InputMethod.ux`(462) `about.ux`(234) `settings.ux`(206) `records.ux`(146) `detail.ux`(108) |
| w212 vs w336 | 14 | 15 | — |
| w212 vs w432 | 14 | 15 | — |

反面：`results.ux`（2540 行）w212 vs w192 只差 **12 行**，`search.ux` 只差 **3 行**。说明"能共用"是成立的，只是没被制度化。

### 2.3 已有的三条自适应通道（都只有半截）

1. **条件编译**：`scripts/conditionalCompilationPlugin.js` 把 `scripts/conditionalCompilationLoader.js` 注册为 css/js/json/html/vue/ux 的 pre-loader，语法 `// if true: process.env.X === "Y"` … `// endif`。**目前只有 `buildTarget.js` 在用**（4 个块）。
2. **`screenProfile` 类名后缀**：模板里 `class="title-{{screenProfile}}"`。实测用量：index 15 处、search 4、filter 2、settings 1，**其余 5 个页面为 0**。且只是部分覆盖——`w212/src/pages/index/index.ux` 基础值就是 212 的数，只对 `pill-compact` / `circle` 写了零散覆写（`.page-pill-compact:864`、`.title-rect,.title-circle:873`），**没有 `.page-pill-standard`**。
3. **运行期 `device.getInfo`**：`app.ux:35-52` 会改 `screenProfile`，但 CSS 里的 px 是构建期写死的 → 运行期换 profile 只换类名、不换数值，**"适配"是名义上的**。

### 2.4 成本已经发生

`docs/superpowers/plans/w432-w466-adaptation-summary.md` 记录的适配方式是手算系数：

- W432 from W336：X×1.286、Y×1.071、font-size×1.15、border-radius×1.2
- W466 from W336：uniform×0.923

遗留项自述：**about.ux / records.ux 圆屏未调好；InputMethod 两个分支都没做**（w466 仍是 480×321 的键盘）。这就是"复制 + 手算"路线的必然残差。

---

## 3. 决定方案边界的三个事实

### 3.1 px 不是物理像素，dp 才是

官方《页面样式与布局》：

> px 是相对于「项目配置基准宽度」的单位……`config.designWidth` 默认不填为 **480**；`设计稿1px / 设计稿基准宽度 = 框架样式1px / 项目配置基准宽度`。

本项目 5 仓都写 `"designWidth": "device-width"`（文档未记载该取值；**推断**平台把它当作"基准宽度 = 设备宽度"，即样式 px ≈ 物理 px——否则 w212 的 `width:212px` 在 212 屏上只会占 44%，显然与实机表现不符）。**这条需要一次实测钉死**（见 §7 验证项 V0）。

dp 单位（APILevel 3+）：`dp = 物理分辨率 / DPR`。5 个目标的 dp 与长宽比：

| 仓 | 分辨率 | DPR | 宽 dp | 高 dp | W/H | 形状 |
|----|--------|-----|-------|-------|-----|------|
| w192 | 192×490 | 2.0 | **96** | 245 | 0.392 | pill-shaped |
| w212 | 212×520 | 2.0 | **106** | 260 | 0.408 | pill-shaped |
| w336 | 336×480 | 2.1 | **160** | 228.6 | 0.700 | rect |
| w432 | 432×514 | 2.0 | **216** | 257 | 0.840 | rect |
| w466 | 466×466 | 2.0 | **233** | 233 | 1.000 | circle |

注意：**媒体查询的 `width`/`height` 单位是 dp，不是 px**。写 `@media (min-width: 200)` 指的是 200dp（≈400px），不是 200px。这是最容易踩的坑。

### 3.2 媒体查询的真实可用度

官方《媒体查询》支持明细：

| 机型 | 与本项目对应 | 媒体查询 |
|------|--------------|----------|
| 小米手环 9（192×490） | w192 | 支持 2+ 特性 |
| 小米手环 10（212×520） | w212 | 支持 |
| 小米手环 8 Pro（336×480） | w336 | **不支持** |
| 小米手环 9 Pro（336×480） | w336 | 支持 |
| REDMI Watch 5（432×514） | w432 | 支持 |
| Watch S3/S4/S5（466×466） | w466 | 支持 |

特性分级：`shape` 是 **2+**；`device-type`、`width/height/aspect-ratio` 及其逻辑运算（`and/or/not`、`<=`）是 **3+**。手环 9 标注"支持 2+ 特性"，意味着**可能只有 `shape` 可用**，`aspect-ratio` / `width` 断点不保证生效。

结论：**媒体查询不能作为数值适配的承载层**。8 Pro 直接没有，手环 9 可能只有 `shape`。它只能做"结构微调"的增强项。

### 3.3 条件编译是唯一全设备成立的通道

- 官方特性，插件 `conditional-compilation-webpack-plugin`，语法即本项目 `buildTarget.js` 已在用的注释块。
- 本项目已装好（`package.json` 有 `conditional-compilation-webpack-plugin ^1.0.0` + `cross-env ^10.1.0`），且 `quickapp.config.js` 已把自定义 loader 挂到 `ux/js/css/json/html/vue`。
- 参考项目用的插件与 loader 版本 **与本项目完全一致**；aiot-toolkit 也都是 **2.0.5** → BandTwine 能跑的 `@media` / 条件编译，本项目工具链同样能跑。

### 3.4 IDE 的运行模型（本次决策的硬约束）

官方《多屏适配》原文：

> "AIoT-IDE 内置了****功能，可将**一套代码跑在多个不同的设备屏幕上**，以测试在不同屏幕上的适配效果。"
> "通过 调试 或 运行 按钮启动模拟器时，**选择对应不同设备的模拟器 点击确定，即可同时运行**。运行成功后，模拟器预览页将出现不同设备屏幕的预览效果"

官方《调试运行》：

> "当运行多个模拟器时，调试窗口对应的是……标题有选中效果的模拟器。点击模拟器，可切换调试服务，进行对应调试。"

也就是说 IDE 的模型是 **一次编译 → 一个包 → 推给所有被选中的模拟器**，而不是"每台模拟器各编一个包"。这对本项目意味着：

| 做法 | 在 IDE 里选中 5 台模拟器时 | 原因 |
|------|---------------------------|------|
| 构建期条件编译（现状） | 1 台对、4 台错位 | 包里的数值在编译时已按单一目标焊死 |
| 媒体查询 `@media (shape)` | 手环 8 Pro 那台错，其余对 | 8 Pro 不支持媒体查询（§3.2） |
| **运行时选择布局列** | **5 台全对** | 布局由 `device.getInfo()` 决定，包是同一份 |

所以"一套源码跑多屏"在 IDE 里是**受支持且被鼓励**的路径；卡住它的不是 IDE，是"编译期决定布局"这个实现方式。当年的 5 个文件夹是对症的结果，不是唯一解。

另外两条会影响流程的事实：

- IDE 的 **「编译设置」只能配置"模拟器打开的页面和页面缓存"**（官方《编译设置》），**不能注入 `TARGET_*` 环境变量**。所以一个文件夹在 IDE 里永远只会编出它的默认目标——这正是"只能一包一机"的观感来源。
- IDE 的文件监听是"一键编译 + 热更新"（官方《应用热更新》），改一个文件就重编推包。**单一源码 + 运行时布局**在这个循环里只编一次，改任意设备的适配都是一处改动。

---

## 4. 三个具体病灶

**病灶 A：数值散落在模板里。**
w212 有 206 处内联 `style="…px"`（InputMethod 116、filter 31、index 19）。内联样式的优先级高于类规则，**5 列布局对这些元素完全无效**——它们必须先提成类，否则改了列也不会变。

**病灶 B：profile 覆盖是残缺的。**
只有 4 个页面用了 `{{screenProfile}}` 后缀，且 base 值绑死单仓分辨率。运行期 profile 切换不会改数值（§2.3 第 3 条）。

**病灶 C：5 份副本在功能上漂移，不只是数值。**
w192 的 `about.ux:194` 多出一个 `wrapUsageText(maxWidth)` 方法，w212 没有；但 w192 全文 420 行、w212 508 行，方向相反——两边各自被改过，不是单向复制。这类漂移用"再复制一遍"永远收敛不了。

---

## 5. 移植方案

### 5.0 硬事实：Vela 不支持后代选择器（实测，已推翻早期写法）

`@aiot-toolkit/parser/lib/ux/translate/vela/StyleToTypescript.js:101-107`：组合器（`COMBINATOR`，即空格 / `>` / `+` / `~`）一律走 `addThorwLog(..., "Descendant Selector")`；`StyleSelectorType.js` 的 `Selector` 枚举只有 `ClassSelector / IdSelector / TypeSelector / Combinator / PseudoClassSelector`，`findSelectorIndex()` 只给前三者分配索引。

**后果**：`.r192 .card { … }` 这种"祖先类 + 后代规则"在 Vela 里不成立，构建时打 `### StyleToTypescript ### Selector type unsupport Descendant Selector`，规则被丢弃（本项目首次构建探针页时已实际触发）。五列只能写成**元素自身的后缀类**：

```css
.card-192 { width: 168px; }
.card-212 { width: 184px; }
```

```html
<div class="card card-{{screenClass}}">
```

这与现有 `-{{screenProfile}}` 是同一套写法，只是把 4 个形状桶换成 5 个分辨率桶。改造重心由此从"重写选择器"降为"给元素补后缀 + 把数值拆成 5 份"。

**第二个实测（推翻上一条的一半结论）：`.ux` 根本不经过这个 loader。** 用项目自己的 `scripts/conditionalCompilationLoader.js` + 伪造 webpack 上下文跑 `.ux` 样本是能通过的，但真实构建不是那条路径：在 `src/pages/probe/probe.ux` 的 `<style>` 里写 `/* if true: process.env.TARGET_ID === "W336" */ .condmark336 { width: 33px; } /* endif */`，`npm run build:336` 与不加环境变量的 `npm run build` 产物 **都含** `condmark336`；`<script>` 里的 `// if true:` 同样不被删除（探针字符串在两种构建里都在）。aiot 2.0.5 下 `.ux` 由 `@aiot-toolkit/parser` 自行解析，webpack 的 `enforce: "pre"` 规则碰不到它。**条件编译只对 `.js` 生效**（`buildTarget.js` 依赖的正是这条）。

**由此定下两条硬规则**：

1. 凡是"发布包必须消失"的东西——设备探测、`@system.device` 的 import——**只能放在 `.js` 模块里**。本项目放在 `src/common/screenProbe.js`，整文件被条件编译清空。实测 `npm run build:336` 产物 `app.jsc` 搜 `getInfo` = 0 命中、`@system.device` = 0 命中；`npm run build`（调试）产物含 `getInfo`。
2. **CSS 不剥离**。五列规则全部进包，靠 `-192`…`-466` 后缀与 `screenClass` 互不命中，是死规则：功能零风险，代价只有体积（P2 合并后实测，预计每包多十几 KB 压缩前）。

这与现有 `-{{screenProfile}}` 是同一套写法，只是把 4 个形状桶换成 5 个分辨率桶。改造重心由此从"重写选择器"降为"给元素补后缀 + 把数值拆成 5 份"。

### 5.1 三层模型（修订）

| 层 | 机制 | 承担什么 | 生效时机 | 设备覆盖 |
|----|------|----------|----------|----------|
| L1 布局列 | **运行时按 `screenWidth` 选一列数值**（5 列，数值搬自现有 5 仓） | 所有尺寸、字号、圆角、间距 | 运行 | 100%（API 可用时） |
| L2 结构 | 与列绑定的结构差异（flex 方向、换行、显隐） | 形状导致的结构变化 | 运行 | 100% |
| L3 构建期 | 条件编译：**调试包**留 5 列 + 探测，**发布包**只留本目标一列并把 `screenClass` 写死（§5.4）；同时给包名 / 版本 / 词库档位 | 发布物差异；保证发布包不依赖任何运行期查询 | 构建 | 100% |

排序理由见 §3.4：IDE 是"一次编译推多机"，所以**调试路径的布局必须在运行期决定**。而发布路径相反——每个包只服务一块屏，探测毫无必要，反而引入"单位猜错就错列"的风险，所以发布包把它编译掉（§5.4）。两种模式由 `TARGET_ID` 是否设置自动分流。

这条组合有个不明显的红利：**生产环境不会闪**。发布包在编译期就把列写死了，没有异步等待，首帧即最终（§5.4）；只有调试包会先出默认列、再按探测修正，而那只发生在模拟器里。

### 5.2 L1：布局列（推荐主通道）

**关键认识：五套手调数值已经存在**，就是现在 5 个仓的 CSS。要做的是把它们搬进一份源码的 5 列，而不是重新设计。

表达方式选「分辨率桶 + 元素后缀类」，不选「JS 指标表 + 内联绑定」（为什么不能用祖先类：§5.0）。**五列全部带后缀，不留无边界的 base 规则**——否则发布 W192 时包里还躺着一份 212 的裸规则，既浪费又制造"到底谁生效"的歧义：

```css
/* 现在 w212 里的 .card { … } 会被 P2 脚本改写成 .card-212 { … } */
.card-192 { width: 168px; height: 72px; border-radius: 26px; font-size: 26px; }
.card-212 { width: 184px; height: 78px; border-radius: 28px; font-size: 28px; }
.card-336 { width: 320px; height: 76px; border-radius: 24px; font-size: 30px; }
.card-432 { width: 391px; height: 75px; border-radius: 28px; font-size: 32px; }
.card-466 { width: 280px; height: 65px; border-radius: 24px; font-size: 30px; }
```

```html
<div class="page page-{{screenClass}}" ...>
```

代价是每个需要适配的元素多一个类名片段；收益是"任意一列都可以被单独编译掉"，这是 §5.4 双模式成立的前提，也是 Vela 选择器能力下唯一可行的写法。

```html
<div class="page r{{screenClass}}" ...>
```

```js
// src/common/buildTarget.js —— 构建期条件编译，职责收窄为"包标识 + 调试默认列"
// 5 个 // if true: TARGET_ID==="W192" … // endif 块照旧保留
const BUILD = { id: "W212", width: 212, height: 520, shape: "pill-shaped" }
export default BUILD
```

```js
// src/common/screenColumn.js —— 运行期主选，失败退回 BUILD
import BUILD from "./buildTarget.js"

const COLUMNS = [192, 212, 336, 432, 466]

// 粗筛：0 / undefined / 负数 / 明显不是屏幕宽度的值直接退回兜底。
// 注意它挡不住"dp 量级"（见下方说明），单位必须以 V1 实测为准。
function plausible(w) {
  return Number.isFinite(w) && w >= 100 && w <= 800
}

export function pickColumn(info) {
  const w = Number(info && info.screenWidth)
  if (!plausible(w)) return BUILD.width
  return COLUMNS.reduce((a, b) => (Math.abs(b - w) < Math.abs(a - w) ? b : a))
}
```

```js
// app.ux —— 这段只出现在调试包；发布包在编译期就把 screenClass 写死了（§5.4）
this.data.screenClass = String(BUILD.width)   // 首帧先用默认列
device.getInfo({
  success: (info) => { this.data.screenClass = String(pickColumn(info)) },
  fail:    () => { /* 保持默认列 */ },
  complete: () => { /* 必须给，否则日志刷 finish_callback */ }
})
```

`plausible()` 不是防御性编程的装饰：`device.getInfo()` 若返回的是 **dp** 而不是 px（96 / 106 / 160 / 216 / 233），前三个值会落进 100–800 区间，被 nearest 映射到**错误的列**（106→192、160→192、233→212）。所以 V1 必须实测确认单位；若确是 dp，这里改成 `w * screenDensity`。这是整套方案里**唯一一处"猜错就静默错位"**的地方，值得单独一条断言。

选类名作用域而不是 JS 指标表的四个理由：

1. **数值留在 CSS**，不产生几百处 `style="{{M.x}}px"` 绑定，不吃内联样式的渲染开销。
2. **不依赖媒体查询**——8 Pro 那种没有 `@media` 的设备也能吃到列；调试时 `getInfo` 失败还有默认列，发布时压根不查。
3. **可机械生成**：同一选择器在 5 个仓里各有一个值，对齐选择器就能自动拼出 5 列（见 §6 P1）。
4. 与现有 `-{{screenProfile}}` 是同一套写法，只是把「形状桶」换成「分辨率桶」，认知负担不增加。

`screenProfile` 语义变更：现在的 `pill-standard / pill-compact / rect / circle` 是 4 个形状桶，无法区分 192 与 212、336 与 432。改成 5 个分辨率桶（192/212/336/432/466），形状信息由桶隐含。

**这一步必须同时做**：把模板里的内联 `style="…px"` 提成类（w212 有 206 处）。内联样式优先级高于任何类规则，不提出来，5 列对那 206 个元素完全无效——后缀类也一样覆盖不了它们。

代价与风险：

- CSS 体积约 ×2（4 列重复规则）。RPK 主体是词库（standard 7.2MB），CSS 增量在 KB 级，可忽略。
- 每页模板多一个 class 片段，无运行时开销。
- `screenWidth` 是异步的 → 调试包首帧用默认列、随后修正（模拟器里可见）；发布包不存在这个等待，编译期就定死了。
- 5 列键必须与 5 个目标一一对应；未来加 480×480 就加第 6 列 + 一个新的兜底块，不需要改机制。
- **调试块（`TARGET_ID === undefined`）不能删**。它和发布块是同一条条件编译规则的两种输出；删掉它，IDE 里立刻退回"一包一屏"，也就是当年分 5 个文件夹的状态。

### 5.3 媒体查询：不用（连增强层也不做）

结论直接从 m00238 来：老设备里能确定的就有 8 Pro 不支持媒体查询（§3.2），手环 9 可能只有 `shape` 可用。一条"在某些机器上静默不生效"的样式通道，比没有更糟——发布包本来就不依赖任何运行期能力，引入它等于把最稳的那条路径重新变成需要逐台验证的分支。

所以：**一行 `@media` 都不写**。形状差异靠 L2 结构（class 绑定）表达，尺寸差异靠 L1 列，两者都在运行期，也都由同一个 `screenClass` 驱动。唯一可预见的例外是"同一列内部还要按形状微调"，那时应当加第 6 个列（例如 `r336round`），而不是引入媒体查询——列是可枚举、可验证、可兜底的；媒体查询不可。

### 5.4 双构建模式：IDE 编"胖包"，脚本编"瘦包"

（来自对话 m00315：调试一包多机，发布按设备拆开、硬编码。）

| | 调试（IDE 一键编译） | 发布（`build_all_variants.ps1` / `npm run build:NNN`） |
|---|---|---|
| `TARGET_ID` | 未设置 | `W192` / `W212` / `W336` / `W432` / `W466` |
| `screenClass` | `device.getInfo()` 探测 | `String(buildTarget.width)`，编译期由 `buildTarget.js` 定死 |
| 探测代码 | 参与编译 | 在 `screenProbe.js` 里被条件编译整段删掉 |
| CSS 列 | 5 列 | **仍 5 列**（`.ux` 不参与条件编译，§5.0） |
| 资源 | 全部（图标并集 + IME 各套） | 本目标 + 共用 |

**两种模式自动分流，不需要额外开关**：IDE 的「编译设置」不能注入环境变量（§3.4），所以 IDE 里 `TARGET_ID` 永远是空 → 自然落进调试模式；发布脚本永远显式设置它。

**没有"每目标一个块"的写法**：`screenClass` 的默认值直接取 `String(buildTarget.width)`——`buildTarget.js` 已经被条件编译成目标值，再写 5 个块就是重复真源。整个发布/调试的差异只有一处，在 `.js` 里：

```js
// src/common/screenProbe.js —— 发布包里是空文件
// if true: process.env.TARGET_ID === undefined
import device from "@system.device"
// endif

export function probeScreenInfo(onInfo) {
  // if true: process.env.TARGET_ID === undefined
  device.getInfo({
    success: (data) => { onInfo(data) },
    fail: (data, code) => { console.log("screen probe failed; keep compiled column: " + code) },
    complete: () => {}
  })
  // endif
}
```

```js
// src/app.ux —— 无环境变量分支，两种模式同一份代码
data: { screenClass: String(buildTarget.width) }
onCreate() { probeScreenInfo((info) => this.updateScreenInfo(info)) }
```

这样发布包里**不含任何运行期探测**（已解包核对：`app.jsc` 里 `getInfo` 与 `@system.device` 都是 0 命中），而调试包里猜错的表现是"模拟器上直接显示错列"，会当场暴露，不会静默带到线上。

CSS 那边之所以不做同样的事，唯一原因就是 §5.0 的实测结论：`.ux` 的条件编译不生效。若日后 aiot 修好这条，把每个 `-NNN` 规则组包进条件块即可，数值不用改。

**媒体查询在这个方案里仍然不是必需的**：只有当 P0-a 发现"模拟器里 `device.getInfo()` 拿不到 `screenWidth`"时，调试包才需要 `@media (width: …)` 兜底——而那是第二套规则，必须与列数值同源生成，否则就是"调试点对、真机出错"的来源。若 P0-a 通过，媒体查询一行都不写。

### 5.5 不要再做的五件事

1. **不要再复制整页手算系数**（1.2857 / 1.0708 / 0.923）。换行阈值一变就崩，且不可回溯。
2. **不要再让条件编译*主导调试路径*的布局**。调试包必须留全 5 列 + 探测，否则 IDE 的"一包多机"立刻失效（这正是当年分 5 个文件夹的成因）；发布包则相反，只留一列、不做任何探测（§5.4）。两者是同一条条件编译规则的两个输出，不是两套并行维护的代码。
3. **不要再新增「形状桶」profile**（`pill-standard` 这种）。形状桶天生合并 192/212 与 336/432，是当前错位的来源。
4. **不要用 `dp` 做一次性归一化**。五个设备 PPI 只差 3.7%，但屏幕物理宽度差 2.2×（16.5mm → 36.3mm）；用 dp 会让 466 屏上的字和 212 屏一样大，浪费大屏。
5. **不要保留模板里的内联 `px`**。内联样式优先级最高，绕过类，是 5 列方案唯一覆盖不到的黑洞。

### 5.6 收敛路径

目标态是**一个文件夹**，不是"5 个仓共享一份源码"。分两步：

**第一步：结构统一（人工）**
`index.ux`（minimal/classic 双布局）、`about.ux`（w192 有 `wrapUsageText`、w212 没有）、`records.ux` 这三处是**结构漂移**，必须先选一版为准、把功能合并，才谈得上合并数值。选 w212 为基准（功能最全），缺的从 w192 补。

**第二步：数值合并（脚本）**
写一次性脚本：解析 5 个仓的 `<style>`，按选择器对齐，输出 5 个 `.rNNN` 作用域块（不再保留无前缀的 base 规则）。同一选择器在 5 仓里数值相同时不生成覆盖（预计能省掉一半）。生成结果人工抽查。

**第三步：砍掉仓，但保留 10 个包**
单一源码进 git（让 w212 变成唯一的开发仓），**`variants/` 整体删除**——它存在的前提是"每个分辨率/档位一个目录"，而这两件事现在分别由 `TARGET_ID` 和 `.dictcache` 决定（§5.4、§5.7）。`build_all_variants.ps1` 改成"每档一份 staging，对同一份 src 编 5 个分辨率"：

```
build_all_variants.ps1  对同一份 src 循环（档位在外层、分辨率在内层，见 §5.7）
  每次：TARGET_ID / TARGET_WIDTH / TARGET_HEIGHT
        → 条件编译：只保留该目标那一列、screenClass 写死、探测代码整段删除
        改写 src/manifest.json 的 package     → 5 个包名各自保留
        裁剪资源（本目标 icons + 共用）       → 构建 → 还原 manifest
```

`package` 必须在构建时改写，因为 **manifest.json 由工具链直接读、不走 webpack**，条件编译管不到它（loader 的 `json` 分支只对被打包的文件生效）。这一步是全流程里最"脚本化"的地方，建议抽一个 `targets.json` 当唯一真源（5 行：id / width / height / shape / package），构建脚本和条件编译块都从它派生，避免又出现"改了一处忘了另一处"。

> 包名之所以保留 5 个而不是统一成 `com.watch.dic`：发布仓已有 5 个 listing，换包名等于换应用，老用户收不到更新。若哪天决定统一，这一步会退化成"同一份 manifest、5 个 RPK 内容完全相同"——也正因为如此，**发布包之间唯一的内容差异就是留下的那一列数值**（加上词库档位与包名），不存在第二份手抄的数字。
>
> 附带收益：布局在运行期决定后，一个 RPK 在技术上已能装到全部 5 种设备，发布仓从 10 包收敛到 2 包（lite/standard）是**可选项**，不再是结构限制。本次按 m00238 的决策不做。



---

### 5.7 第三根轴：词库档位（dev / lite / standard）

实测（w212 系）：

| 档位 | 文件数 | 体积 | 说明 |
|------|--------|------|------|
| dev | 242 | 268 KB | 1,400 词，调试用 |
| lite | 279 | 2.67 MB | 19,942 词 |
| standard | 1082 | 7.09 MB | 70,408 词，728 word + 141 entry 分片 |

（w192 里那份 standard 是 7.40 MB，差值来自 733 个文件的历史 CRLF 行尾，内容与重新生成的一致。）

切档在设计上就是"换 `src/common/dict/` 目录"——运行时只读 `meta.json` 决定选片，**没有任何代码分支依赖 `profile` 字符串**。所以这一轴与另外两轴完全正交：

| 轴 | 取值 | 由谁决定 |
|----|------|----------|
| 分辨率 | 192 / 212 / 336 / 432 / 466 | `TARGET_ID`（发布）/ 探测（调试） |
| 词库档位 | dev / lite / standard | **目录当前内容** |
| 构建模式 | 调试 / 发布 | `TARGET_ID` 是否设置 |

**发布：档位在外层，分辨率在内层，生成只做 3 次。**

```
for tier in lite, standard:
    .dictcache\<tier> 命中则不生成        ← 生成器只能在 w212 的完整语料上跑
    staging = .tmp\stage\<tier>            ← src 的实体副本（不含 dict）
    robocopy .dictcache\<tier> staging\src\common\dict
    for res in 192,212,336,432,466:
        set TARGET_ID=res → 构建 → release_packages\<tier>\<res>-<tier>-<ver>.rpk
```

10 次编译（dev 档按 AGENTS.md 不发布；若也要就是 15 次）。**生成绝不能放进内层循环**：standard 一次要写 728 个 word 分片 + 141 个 entry 分片，分钟级；缓存命中后切一档的代价只是复制 2.7 / 7.1 MB。

**调试：`.\scripts\use-dict.ps1 standard`**

```powershell
robocopy .dictcache\standard src\common\dict /MIR /NFL /NDL /NJH /NJS /NP
```

1 秒内完成，然后照常 IDE 一键编译。因为 IDE 注入不了环境变量（§3.4），"目录现在装的是哪一档"本身就是开关——这也正是今天 5 个仓各自持有一份 dict 的成因。

**必须一起决定：`src/common/dict/` 还入库吗？**

它现在是入库的（standard 1082 个文件）。一旦可以随手切档，两个后果立刻出现：工作区动辄 1000+ 个变更；以及最危险的那个——切到 dev 调完手滑提交，把标准词库换成 1,400 词（AGENTS.md 记录的事故类型）。建议：

- `src/common/dict/` 改成 **gitignored 的构建产物**，真源是 `.dictcache/<tier>/`；
- `use-dict.ps1` 与发布脚本都从 cache 复制，任何人都不手写这个目录；
- 代价：新克隆需先跑一次 `use-dict`（或生成）才能编译，仓库不再自带词库。

不接受的话，退路是继续入库、容忍切档时的 git 噪音，但要在提交前加一道 `meta.json` 档位校验（`build_all_variants.ps1` 开头已经在校验生成器，顺手加一条即可）。

**可选进阶：零编译切档。** 调试包内置全部三档（`/common/dict/dev|lite|standard`），用 storage 里的键选基目录，切档 = 重载页面，不重新编译。代价：调试包 ~10 MB，且要把散落在 `pages/search/search.ux:589` 与 `pages/results/results.ux:405,722,784,910,934,969,1075,1099,1115,1153,1225,1249,1324,1490,1832` 的 18 处 `/common/dict/` 前缀收敛成一个 `dictUri()`。生产包仍只含一档。除非"编译本身"成为瓶颈，否则不建议先做。

---

## 6. 落地路线

步骤细节、验收判据（A1–A11）、风险登记与排期已独立成文：[multi-device-ui-execution-plan.md](./multi-device-ui-execution-plan.md)。这里只留骨架，避免两处各写一份、然后漂移：

| 阶段 | 一句话 |
|------|--------|
| P0 探针 | 验四件事：`getInfo` 有没有 `screenWidth` / 单位、一包多机是否成立、`device-width` 的真实语义、组件样式能否被页根类影响。**Q2 为否则整个计划终止** |
| P1 结构统一 | `index` / `about` / `records` 三页的结构漂移先合并，否则数值无从对齐 |
| P2 数值合并 | 脚本把 5 仓 `<style>` 对齐成 5 个 `.rNNN` 作用域块 |
| P3 双模式接线 | `screenColumn.js` + `app.ux` 条件块：调试探测、发布写死 |
| P4 内联清零 | 206 处 `style="…px"` 提成类（IME 除外） |
| P5 词库与资源 | `.dictcache` + `use-dict.ps1` + 资源裁剪，可与 P2–P4 并行 |
| P6 发布收口 | 档位外层 / 分辨率内层、manifest 改写、删除 `variants/` |
| P7 InputMethod | 398 处 px、四套键盘资源；可延后，单独验收 |

> 阶段编号与本文早期版本不同：原「P3 内联清零」现为 P4，原「P5 收口」现为 P6，新增 P5（词库/资源轴）。以计划文档为准。

---

## 7. 验证矩阵

| 编号 | 验证项 | 方法 | 通过标准 |
|------|--------|------|----------|
| V0 | `designWidth: "device-width"` 的真实语义 | 在 192 屏上放 `width:192px` 的块 | 正好铺满 = 1px≈1 物理px；否则五列数值需整体重算 |
| V1 | IDE 一包多机 | 「选择设备」同时勾 5 台，跑同一个包 | 5 台都收到包，日志各自报出正确宽度，**且确认 `screenWidth` 单位是 px 不是 dp** |
| V2 | `screenClass` 选取 | 5 台模拟器上打印 `screenClass` | 分别得到 192/212/336/432/466（若 V1 发现是 dp，需先乘 `screenDensity` 再判） |
| V3 | 内联 px 清零 | `grep -c 'style="[^"]*px'` 按文件统计 | 除 `InputMethod.ux` 外为 0 |
| V4 | 五列无回归 | 双人肉眼比对 5 屏 vs 现有 5 个仓的截图 | 逐页无溢出、无错位 |
| V5 | 发布链路 | `.\build_all_variants.ps1`（改造后） | 10 个 RPK 构建成功；5 个分辨率包各自装到对应设备正确 |
| V6 | 双模式产物分离 | 同一份源码分别做调试构建与 `TARGET_ID=W192` 发布构建，解包比对 | 调试包含 5 列 + `getInfo` 调用；发布包只含 `.r192`、**完全不含** `device.getInfo` |
| V7 | 资源裁剪 | 解包发布包，比对 `src/common/icons/` 与 IME 资源目录 | 只剩本目标子集 + 共用资源；装到对应设备图标/键盘不缺图 |
| V8 | 组件拿到了列 | 给 `ProbeChild` 传 `col` prop，组件内部用 `probe-child-{{col}}` 后缀类 | 466 上变绿、336 上变蓝 = prop + 后缀类在组件里成立（这条替代了原先"祖先类能否穿透"的假设，因为祖先类根本不被支持，§5.0） |

---

## 8. 待确认

1. ~~目标态是不是"一个文件夹 + 一个包装 5 种设备"？~~ **已决（m00238）**：一个文件夹；**发布仍按分辨率拆包**（老设备媒体查询不支持、API 可能失败，发布包不能依赖运行期查询）。加上词库档位后是 10 个包（5 分辨率 × lite/standard），dev 档不发布。剩下一项产品决定：包名保持现状 5 个，还是收敛成 `com.watch.dic`？
2. **`targets.json` 要不要成为唯一真源**？现在宽度/高度/形状散在 `buildTarget.js` 的 5 个条件块、`manifest.json`、`build_all_variants.ps1` 三处。收敛到一处能避免"加了第 6 个分辨率却漏改"——这是 P5 之前做还是之后做？
3. **`variants/` 是直接砍掉还是并存一段时间**？并存的好处是回滚容易，坏处是 10 个目录都得跟着 `sync_source.ps1`。
4. **`designWidth: "device-width"` 是否确认**？官方文档只写整数（默认 480）。若平台其实按 480 解释，五列数值全部要重算——这是 V0 必须先验的原因。
5. **P1 结构统一以谁为准**？建议 w212（功能最全、语料最全），w192 的 `wrapUsageText` 等改进反向合并进来。
6. **InputMethod 是否值得重写**？它是唯一"重排而非缩放"的图形键盘，成本高于其余页面之和。

---

## 附：BandTwine 可借用但无关于适配的两点

- `engine.ux` 的"侧边栏菜单覆盖内容区"模式（`:5-149`）：菜单与内容并列在同一 `container` 内，胶囊屏下菜单直接全宽覆盖。本项目没有侧栏，但 `filter` / `settings` 的"抽屉"需求可以复用这个结构。
- `manifest.json` 的 `config: { logLevel: "log" }`：与本项目一致，无增益。
