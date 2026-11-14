---
name: vela-dev
description: Unified Xiaomi Vela QuickApp development skill. Use when Codex needs to create, edit, debug, optimize, document-check, build, package, release, or inspect Xiaomi Vela JS quick apps for wearables such as Xiaomi Band 10; modify `.ux`, `manifest.json`, app/config, components, routes, storage, feature APIs, AIoT IDE/toolkit workflows, emulator startup issues, or `.rpk` packages. Also handles real device testing via AstroBox CLI (device pairing, RPK install, queue management). Uses local organized docs (`organized_docs/`) and distilled rules for framework, manifest, UX, components, APIs, tools, best practices, and release work. Use automated emulator visual QA only when the user explicitly asks for simulator screenshots, automated visual checks, coordinate tapping, or emulator QA.
---

# Vela Dev

Single entry point for all Xiaomi Vela JS QuickApp work. **Load references on demand** — this file only tells you what each reference covers and when to read it.

---

## Decision Tree — Which Reference to Load

Read the file listed for your task type **before** editing code.

| 任务 / Task | 先读这个 |
|-------------|----------|
| 首次接触项目 / 标准实施循环 | `references/dev-workflow.md` |
| 查官方文档（组件/API/Manifest/路由等） | `organized_docs/index.md`（先看索引，再读具体文件） |
| 框架指南/工具链/最佳实践（在线） | `references/docs-map.md`（官网入口速查） |
| Band 10 实机约束、已知坑、构建失败排查 | `references/vela-notes.md` |
| `.ux` 模板/事件/CSS 踩坑 | `references/ux-gotchas.md` |
| 地图/主页复用返回后状态不刷新、存档回调定位 | `references/experience-map-return-refresh.md` |
| 文字/按钮/CJK 裁剪控制 | `references/wearable-text-fit.md` |
| 大范围改动（首页重构、多屏适配） | `references/large-change-planning.md` |
| 来自其他 Agent 的 Vela 工作流经验 | `references/imported-agent-workflow.md` |
| 更严格的 `.ux`/CSS/生命周期/质量规则 | `references/imported-coding-standards.md` |
| 真机测试（AstroBox 部署） | `references/real-device-testing.md` |
| 模拟器自动截图/QA（仅用户明确要求时） | `references/emulator-visual-qa.md` |
| 模拟器 QA 中文版 | `references/emulator-qa-zh-cn.md` |

---

## Operating Modes (in brief — details in refs)

| Mode | When | First Read |
|------|------|------------|
| **Create** | 新项目脚手架 | `dev-workflow.md` + `official-docs-operational-guide.md` |
| **Edit** | 修改 `.ux`/manifest/逻辑 | 按场景选上述表格 |
| **Debug** | 构建失败、模拟器/设备异常 | `vela-notes.md` → `ux-gotchas.md` |
| **Document-check** | 查官方框架/组件/API 行为 | `official-docs-operational-guide.md` |
| **Package/Release** | 构建、验证、交付 `.rpk` | `dev-workflow.md` |
| **真机测试** | AstroBox 部署到物理设备 | `real-device-testing.md` |
| **仓库提交** | AstroBox 官方仓库 PR 发布 | `real-device-testing.md` |
| **Emulator QA** | 自动截图/点击/多帧验证 | `emulator-visual-qa.md`（仅当用户明确要求） |

---

## Reference Index

### 官方文档体系

| File | 内容概要 | 行数 |
|------|----------|------|
| `organized_docs/index.md` | **本地文档总索引** — 60+ 文件覆盖全部组件 + API，附使用场景速查表 | ~200 |
| `organized_docs/components/` | 基础组件（text/image/list/div/swiper 等）+ 容器 + 表单 + 通用说明 | 每个组件一个 `.md` |
| `organized_docs/features/` | 所有 JS API（应用/路由/存储/网络/传感器/加密/弹窗等） | 每个 API 一个 `.md` |
| `references/official-docs-operational-guide.md` | manifest/路由/组件/API 的蒸馏规则、框架行为要点、构建/发布检查清单 | ~180 |
| `references/docs-map.md` | 官方文档在线入口 URL 速查（项目结构、框架、组件、接口等） | ~65 |
| `references/official-best-practices.md` | 启动优化、内存优化、业务优化的官方建议清单 | ~47 |

### 实机约束与踩坑

| File | 内容概要 | 行数 |
|------|----------|------|
| `references/vela-notes.md` | Band 10 屏幕参数、构建环境、文件要求、常见编译/运行错误及修复、设备兼容性 | ~163 |
| `references/ux-gotchas.md` | 模板事件表达式限制、CSS 解析失败模式、`UxLoader` / `Unexpected }` 等错误及修复 | ~42 |
| `references/experience-map-return-refresh.md` | 已验证的地图复用返回、存档刷新、日志判据与异常定位经验 | ~95 |
| `references/wearable-text-fit.md` | 按钮/CJK/图标 防裁剪公式、字号-容器间距换算、多语言预留、验证工作流 | ~143 |
| `references/large-change-planning.md` | 跨页面/跨设备/跨路由 高风险改动的规划模式（scope 控制、历史挖掘、布局分析、验证顺序） | ~248 |

### 工作流与标准

| File | 内容概要 | 行数 |
|------|----------|------|
| `references/dev-workflow.md` | 新项目 scaffolding → 现有项目编辑 → 构建调试 → 发布的完整实施循环 | ~53 |
| `references/imported-agent-workflow.md` | 从 Claude/GitHub/Kiro 项目迁移过来的工作流经验（特定功能实现模式） | ~94 |
| `references/imported-coding-standards.md` | 更严格的 `.ux` 结构、CSS 命名、生命周期、manifest 声明、质检规则 | ~121 |

### 真机与模拟器

| File | 内容概要 | 行数 |
|------|----------|------|
| `references/real-device-testing.md` | AstroBox 真机部署全套流程（配对、安装、队列监控、错误恢复）+ 官方仓库提交流程 | ~174 |
| `references/emulator-visual-qa.md` | 模拟器自动截图/点击/多帧采样/动画判断规则（仅限用户明确要求时使用） | ~50 |
| `references/emulator-qa-zh-cn.md` | 同上，中文版 | ~78 |

---

## Band 10 核心约束（快速参考）

以下是最常违反的约束，**不替代 `vela-notes.md` 和 `wearable-text-fit.md`**：

- 屏幕 **212×520 跑道屏**（非圆屏）
- 系统边缘右滑返回始终可用 → 非关键页面不要加返回按钮
- Symbol 符号按钮（↺⏸▶⏭）在设备上可能不渲染 → 优先用中文文字
- 首页避免过密，优先纵向列表/卡片
- 构建命令：`npx aiot build`
- 单页应用优先（内部 state 切换），除非路由生命周期或 UX 明确需要多页

---

## 本地官方文档

路径：`organized_docs/`（来自官方文档的可读本地版本）

文档查找顺序：
1. `organized_docs/index.md`（总索引 + 使用场景速查）
2. `organized_docs/components/<分类>/<组件名>.md`（组件详情）
3. `organized_docs/features/<分类>/<api名>.md`（API 详情）
4. `references/official-docs-operational-guide.md`（蒸馏规则）
5. 在线官方页面 `https://iot.mi.com/vela/quickapp/zh/`（需要最新内容时）

---

## 资源清单

| 资源 | 说明 |
|------|------|
| `assets/template/` | 新项目脚手架模板 |
| `scripts/vela_emulator_qa.js` | 模拟器自动 QA 脚本（仅用户要求时） |
| `scripts/run_abcli.py` | AstroBox CLI 的自动重试包装器 |

---

## 交付物

成功输出包括：
- 修改后的项目文件
- 通过 `npx aiot build` 的构建
- 生成的 `.rpk` 路径（`dist/`）
- Release 构建额外复制到用户 `Downloads`
- 仅当需要澄清决策或用户询问时附文档说明
