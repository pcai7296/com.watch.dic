# 多设备单源码改造 — 执行计划

> 上游设计：[multi-device-ui-porting.md](./multi-device-ui-porting.md)（v3）
> 决策来源：m00238（一个文件夹、发布仍按设备拆包）、m00361（词库档位作为第三根轴 + 调试期快速切档）
> 本文只定"做什么、做到什么算完、按什么顺序做"，不重复设计论证。

---

## 1. 终态与验收口径

### 1.1 终态是什么样

| 维度 | 现在 | 改造后 |
|------|------|--------|
| 目录 | 5 个开发仓 + 10 个 variants | **1 个开发仓**，variants 删除，5 个旧仓归档 |
| 页面源码 | 5 份物理副本，13–16 个文件各不相同 | 1 份；分辨率差异只在 5 个条件块里 |
| 数值 | 每仓 ~800 处 px，手算系数各自维护 | 每列一份数值，由同一条条件编译规则派生出调试包/发布包 |
| IDE 调试 | 一仓一包一机 | **一个包推 5 台模拟器**，全部正确 |
| 词库切档 | 跑 Python 重新生成（分钟级） | `use-dict.ps1` 复制缓存（秒级） |
| 发布 | 10 个 RPK，各自独立维护源码 | 一条命令 10 个 RPK，同一份源码 |
| 发布包内容 | 各仓自己的数值 | 单列 CSS + **零**运行期探测 + 本档词库 + 本分辨率图标 |

### 1.2 验收硬指标（DoD）

每条都能用命令或截图判定，不写"体验良好"这类话。

| 编号 | 判据 | 检验方式 | 通过线 |
|------|------|----------|--------|
| A1 | 调试包一包多机 | IDE 同时选 5 台模拟器跑同一个包 | 5 台都装载成功，逐页无溢出/错位 |
| A2 | 调试包保留全部 5 列 | 解包搜 `-192`…`-466` 后缀类，并看 `app.jsc` | 5 个后缀全部出现，`app.jsc` 含 `getInfo` |
| A3 | 发布包无运行期探测 | 解包 RPK，**只看 `app.jsc`** 搜 `getInfo` / `@system.device` | **0 次命中**（about/search 等页自身用 `device` 不算，它们的用途与选列无关） |
| A4 | 体积不因合源膨胀 | 比较改前/改后同目标 RPK 大小 | 增幅 ≤ 5%——五列 CSS 是死规则，只占体积 |
| A5 | 内联 px 清零 | `grep -c 'style="[^"]*px'`（按文件） | 除 `InputMethod.ux` 外全部为 0 |
| A6 | 切档耗时 | `Measure-Command { .\scripts\use-dict.ps1 standard }` | ≤ 3 s，且**不调用 Python** |
| A7 | 发布不重复生成词库 | 连续跑两次发布，看生成阶段 | 第二次生成耗时 = 0（全部命中 `.dictcache`） |
| A8 | 包数与命名 | `release_packages/{lite,standard}` 清单 | 10 个 RPK，`<res>-<tier>-<ver>.rpk`，`rpk_manifest.json` 齐全 |
| A9 | 老设备不受损 | 8 Pro 模拟器装发布包 | 正常渲染；不依赖媒体查询、不依赖 `getInfo` |
| A10 | 功能不回退 | 冒烟清单（搜索/取词/历史/设置/关于/赞助/筛选/输入法） | 8 页逐项通过 |
| A11 | 发布链路可升级 | 包名与 versionCode 对照 release_repo | 5 个 listing 均保持原包名，可覆盖升级 |

### 1.3 非目标（本轮明确不做）

- 一个包装 5 种设备（发布仍 10 个包）
- 任何 `@media`（§5.3 已论证）
- `InputMethod` 重写（P7 单独排，可延后到改造后）
- 新增 480×480 等第 6 个分辨率

---

## 2. 阶段（P0–P7）

每个阶段都按同一格式：**做什么 / 退出判据 / 回滚方式**。一个阶段一个独立提交。

### P0 探针（0.5 天）— 唯一有"可能推翻方案"的阶段

先验四件事，用临时页跑，验完删除：

| 问题 | 为什么必须先验 | 若为否，方案怎么变 |
|------|----------------|--------------------|
| **Q1** 模拟器里 `device.getInfo()` 的 `screenWidth` 有值吗？单位 px 还是 dp？ | 决定调试包能不能靠探测选列 | 无值/是 dp 且无法换算 → 调试包改用 `@media (width: <dp>)` 兜底（双轨，需同源生成） |
| **Q2** 一包多机是否真成立 | 整个方案的前提 | 不成立 → 回到"一机一包"，改造无意义，立即停 |
| **Q3** `designWidth:"device-width"` 是否 1px≈1 物理 px | 5 列数值直接搬的前提 | 若按 480 解释 → 5 列数值全部按比例重算（工作量翻倍） |
| **Q4** 组件能不能拿到当前列 | 已澄清：Vela **不支持后代选择器**（§5.0），所以组件只能靠 prop 传 `col`、用自身后缀类；待验的是 prop 在 5 台模拟器上是否都正确更新 | 不更新 → 组件改为读 `global.__screenClass`；仍然不行 → 组件内单独一次 `getInfo` |

**产出**：一页探针报告（4 条结论 + 截图/日志），直接回填设计文档 §3.2 与 §7 的 V0/V1/V8。
**退出**：Q1–Q4 全部有结论；Q2 若为否则终止计划。
**回滚**：删临时页，零影响。

### P1 结构漂移合并（1–2 天）

**做什么**：`index.ux`（minimal/classic 双布局）、`about.ux`（w192 有 `wrapUsageText(maxWidth)`，w212 没有）、`records.ux` 三页，以 w212 为准合并功能，缺的从 w192 反向补。
**退出**：三页在 w212 上功能不回退；`diff` 其余 4 仓只剩数值差异（结构差异清零）。
**回滚**：独立提交，`git revert`。

### P2 数值合并（2 天，脚本）

**做什么**：脚本解析 5 仓 `<style>`，按选择器对齐，生成 5 组**元素后缀类**（`.card-192`…，Vela 不支持后代选择器，见设计文档 §5.0）；同一选择器在 5 仓数值相同时只生成一次覆盖（计入基准列）。
**退出**：抽 3 页肉眼比对与原仓一致；生成结果先进 `git diff` 等人工确认，不直接覆盖。
**回滚**：脚本产物先落临时文件，确认后再替换。

### P3 双模式接线（1 天）

**做什么**：`src/common/screenColumn.js`（`plausible()` + `pickColumn()`）、`app.ux` 的两个条件块（调试探测 / 发布写死）、`buildTarget.js` 收窄为包标识。
**退出**：A2、A3、A4 通过。
**依赖**：P0 的 Q1、Q4 结论。
**回滚**：条件块加在 app.ux 顶层，删掉即恢复。

### P4 内联 px 清零（2–3 天）

**做什么**：w212 的 206 处 `style="…px"`（InputMethod 116、filter 31、index 19、about 9、detail 9、results 8、records 7、search 5、settings 1、sponsor 1）提成类并补 5 列；InputMethod 留给 P7。
**退出**：A5 通过。
**回滚**：按文件提交。

### P5 词库与资源流水线（2 天，可与 P2–P4 并行）

**做什么**：`.dictcache/{dev,lite,standard}` 只生成一次；`use-dict.ps1` 用 `robocopy /MIR` 切换；资源裁剪（本分辨率 icons + 共用）；`src/common/dict/` 改 gitignored（见 §3 R5，需先拍板）。
**退出**：A6、A7 通过；新克隆按 README 三步可跑起来。
**回滚**：`.dictcache` 与脚本是新增文件；gitignore 变更独立提交。

### P6 发布收口（1–2 天）

**做什么**：`build_all_variants.ps1` 改「档位外层 / 分辨率内层」；`targets.json` 成唯一真源；构建时改写 `manifest.json` 的 `package` 并 `finally` 还原；删除 `variants/`；重算 `release_repo` 清单。
**退出**：A8、A11 通过；新旧脚本各跑一次，同分辨率包的关键文件 diff 应只剩预期差异。
**回滚**：旧脚本保留为 `build_all_variants.legacy.ps1` 一版。

### P7 InputMethod（2–3 天，可延后）

**做什么**：398 处 px（占单仓 46%）、480×321 键盘、`assets/{full,horizontal,t9,arc}` 四套图、`left/top` 绝对定位键位。
**退出**：212 / 336 / 466 三档可用（8 Pro 与 432 至少不崩）。
**说明**：历史上被跳过两次，风险最高，单独列、单独验收。

---

## 3. 风险登记

| 编号 | 风险 | 触发信号 | 对策 |
|------|------|----------|------|
| R1 | 模拟器 `getInfo` 拿不到宽度 | P0-Q1 | 调试包转媒体查询双轨；两套规则必须由同一张表生成 |
| R2 | 组件样式收不到页根 class | P0-Q4 | 组件自持 `screenClass`，根节点挂 class |
| R3 | `designWidth` 实为 480 | P0-Q3 | 5 列数值按比例重算；成本翻倍，止损点在 P0 |
| R4 | P1 合并漏功能 | 冒烟清单有项失败 | 逐页对照原仓截图，做 checklist 打勾 |
| R5 | `src/common/dict/` 出库遭反对 | 评审 | 退路：继续入库 + 提交前 `meta.json` 档位校验 |
| R6 | 发布脚本改造破坏出包 | A8/A11 失败 | 旧脚本保留一版，双跑对比 sha256 |
| R7 | 5 列 CSS 增大首帧开销 | 模拟器观感 | 实测；若明显，把列改到 `app.ux` 全局样式表而非每页 |
| R8 | 包名/versionCode 写错 | A11 | `targets.json` 唯一真源 + 构建前断言 |

---

## 4. 顺序与依赖

```
P0 ──► P1 ──► P2 ──► P3 ──► P4 ──► P6 ──► P7
              └──► P5 ──┘
```

- **P0 是硬闸门**：Q2 为否则整个计划终止；Q1/Q3/Q4 决定 P3 的写法。
- P5（词库/资源）与 P2–P4 无依赖，可并行。
- P6 必须等 P3、P5 完成（它要同时改构建模式与档位循环）。
- P7 可独立延后，不影响 P0–P6 的验收。

**建议排期**：P0 0.5 天 → P1 2 天 → P2 2 天（P5 并行 2 天）→ P3 1 天 → P4 3 天 → P6 2 天 ≈ **10.5 个工作日**，P7 另计 3 天。

---

## 5. 完成定义（一次验收会）

全部满足才算完成：

1. A1–A11 全部通过，证据归档（截图、日志、`rpk_manifest.json`、sha256）。
2. 开发仓里 `git log` 能看出 P0–P7 各自独立提交，任一阶段可单独 revert。
3. 删除 4 个旧仓前，先把它们最后一次产物与改造产物逐页比对并记录差异（允许差异必须是"有意为之"）。
4. 设计文档 §7 的 V0–V8 全部有结论（通过 / 有条件的通过 / 否决）。
5. 更新 `AGENTS.md`：仓库表、构建入口、词库切档方式、variants 已删除。

---

## 6. 附：判定命令（可直接抄）

```powershell
# A3/A4 发布包内容（解包后）
Select-String -Path .\unpacked\**\*.js,.\unpacked\**\*.css -Pattern "getInfo|\.r192|\.r466"

# A5 内联 px
Get-ChildItem src -Recurse -Include *.ux | ForEach-Object {
  $n = (Select-String -Path $_.FullName -Pattern 'style="[^"]*px' -AllMatches).Matches.Count
  if ($n) { "{0}: {1}" -f $_.Name, $n }
}

# A6 切档耗时
Measure-Command { .\scripts\use-dict.ps1 standard }
```

## 7. 进度快照（2026-11-08）

单仓合并完成：`src/` 是唯一源码，history 由 w212 提升而来；5 个分辨率靠 `.xxx-{{screenClass}}` 后缀类区分，基准列是 212。10 个产品包已由 `npm run build:products` 生成到 `release_packages/{lite,standard}/`，`release_packages/rpk_manifest.json` 记录 path / sha256 / size / headwords。

| 项 | 状态 | 证据 |
|---|---|---|
| A1 调试包一包多机 | 未验证 | 需在 IDE 同时选 5 台模拟器（IDE 只给当前选中的一台推包，见根 AGENTS） |
| A2 调试包保留 5 列 | ✅ | `dist` 调试包：`app.jsc` 含 `getInfo` 1 处；`index.jsc` 里 `-192/-336/-432/-466` = 12/16/16/17（`-212` 是基准列，不带后缀） |
| A3 发布包无探测 | ✅ | 10 个包 `app.jsc` 的 `getInfo` / `@system.device` 均为 0 |
| A4 体积增幅 ≤5% | ✅ | lite 1848.9–1850.1 KB vs 旧发布包 1912.7–1975.0 KB（整体还小了 2–6%） |
| A5 内联 px 清零 | ✅（除 InputMethod） | 静态内联 px 只剩 `InputMethod.ux` 112 处；其余页面 0。动态 `style="width:{{cardWidth}}px"` 共 61 处保留——宽度本来就由 JS 按屏宽算 |
| A6 切档 ≤3 s | ✅ | `use-dict.ps1 dev` 实测 0.17 s，不调用 Python |
| A7 发布不重复生成词库 | ✅ | `build_product.ps1` 只 `robocopy` `dict_repo/<tier>`，全程不跑生成器 |
| A8 10 包 + 清单 | ✅ | 5 分辨率 × lite/standard，`rpk_manifest.json` 齐全 |
| A9 老设备不受损 | ✅（结构上） | 全库 `@media` 0 处；发布包无 `getInfo`。仍需 8 Pro 实机确认渲染 |
| A10 功能不回退 | 部分 | 用户已在 212/336/432/466 目测"各个界面完全正常"；建议按冒烟清单逐项再走一遍 |
| A11 包名/版本可升级 | ✅ | 5 个包名不变；`versionName` 3.2.0 / `versionCode` 9 与 `release_repo` 一致 |

### 仍未做

- **P7 InputMethod**：112 处静态内联 px + 5 列键盘尺寸，最大的一块。
- **336/432/466 的逐页视觉调参**：页面宽度大多由 JS 按 `screenWidth` 算（`layoutWidth`/`cardWidth`），但字号、内边距仍是 212 的值；index 已拍过一轮，其余 8 页待逐页确认。
- **`merge_columns.js` 的手调保护**：现在重跑会覆盖 index 手写的 `-336/-432/-466` 块。
- **首页时钟**：用 `transform: scale()` 放大（336×1.3 / 432×1.45 / 466×1.5），几何仍是 212 的，待实机确认观感。