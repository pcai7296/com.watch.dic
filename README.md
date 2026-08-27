<h1 align="center">腕上词典 — 212×520 胶囊屏 适配版</h1>

<p align="center">
  <em>小米手环上的离线词典 — 抬手即查，无需掏手机</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/版本-3.1.0-1d74e8?style=flat-square" alt="Version" />
  <img src="https://img.shields.io/badge/平台-Mi%20Band-1d74e8?style=flat-square" alt="Platform" />
  <img src="https://img.shields.io/badge/框架-Vela%20QuickApp-1d74e8?style=flat-square" alt="Framework" />
  <img src="https://img.shields.io/badge/词库-20k%2B-2ea043?style=flat-square" alt="Headwords" />
  <img src="https://img.shields.io/badge/屏幕-212×520-ff6b35?style=flat-square" alt="Screens" />
  <img src="https://img.shields.io/badge/输入-英文-1d74e8?style=flat-square" alt="Languages" />
  <img src="https://img.shields.io/badge/工具-aiot--toolkit-ff6b35?style=flat-square" alt="Build" />
</p>

---

## 简介

**腕上词典** 是一款运行在小米手环上的 Vela 快应用，把一部完整的英汉词典装进手腕。查英语单词、汉字、动词变形——全程离线，抬手即用。

本仓库是 **212×520（胶囊屏）** 单分辨率适配分支，包名 `com.watch.dic.w212`。基于小米 `aiot-toolkit` 开发，内置 **20,000+ 条词汇**（数据源：ECDICT + CC-CEDICT + BNC/COCA 词族）。

> 本仓库是 5 个分辨率分支之一：`w192`(192×490) / `w212`(212×520) / `w336`(336×480) / `w432`(432×514) / `w466`(466×466)。每个分支独立构建自己的 RPK，互不干扰。

---

## 功能

- **🔍 三种查词模式** — 英语精确/前缀匹配、汉字查词、动词/形容词变形反查
- **⌨️ 完整输入法** — 全键盘英文输入，支持光标编辑、自动补全，三击搜索框展开大键盘
- **✨ 智能补全** — 按字母分桶的英语建议列表，标注考试等级（中考/高考/CET-4/CET-6/考研/TOEFL/IELTS/GRE）
- **🌀 模糊搜索** — 基于编辑距离的容错匹配（最多 2 个差异），输错也能找到
- **📖 变形查词** — 输入 `ran` → 找到 "run"，输入 `better` → 找到 "good"
- **❤️ 收藏与历史** — 收藏容量 150 条，支持 A-Z 字母分类筛选，分页加载
- **📄 分页结果** — 搜索结果分页展示 + 动态增量渲染，翻页自动滚屏
- **📱 212×520 单屏适配** — 本分支针对 212×520 屏幕深度调优，布局、字号、间距全部按此分辨率定制
- **🌙 深色主题** — 深蓝底色 `#020813` + 蓝色强调 `#1d74e8`，暗光下不刺眼
- **📦 纯离线** — 词典数据内置于应用（已纳入 Git 版本管理），无需网络

---

## 页面

| 页面 | 路由 | 说明 |
|------|------|------|
| **首页** | `pages/index` | 入口 — 4 个主按钮 + 关于 / 赞助 |
| **搜索** | `pages/search` | 输入法输入、光标编辑、自动补全 |
| **结果** | `pages/results` | 英文/中文查词结果 |
| **详情** | `pages/detail` | 单词释义、变形、收藏切换 |
| **跳查** | `pages/filter` | 字母/笔画快速跳转查词 |
| **记录** | `pages/records` | 历史记录 / 收藏列表（参数区分） |
| **关于** | `pages/about` | 致谢、版本、许可信息 |
| **赞助** | `pages/sponsor` | 赞赏码 |
| **设置** | `pages/settings` | 用户偏好（补全开关、滑动锁） |

---

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器（热重载）
npm run start

# 构建 212×520 RPK（npm run build:212）
npm run build:212

# 代码检查
npm run lint
```

### 部署到手环

```bash
# 构建并推送到模拟器（默认）
npm run deploy:watch

# 推送到真机
npm run deploy:watch -- -Serial 192.168.x.x:5555
```

构建产物为 `dist/com.watch.dic.w212.debug.3.1.0.rpk`（已纳入 Git）。

---

## 项目结构

```
src/
├── app.ux                        # 应用生命周期 + 屏幕尺寸定义
├── manifest.json                 # 路由、特性声明、权限
├── pages/
│   ├── index/                    # 首页
│   ├── search/                   # 搜索（输入法 + 光标编辑）
│   ├── results/                  # 英/中查词结果
│   ├── filter/                   # 字母跳查
│   ├── detail/                   # 单词详情 + 收藏
│   ├── records/                  # 历史 / 收藏列表
│   ├── about/                    # 关于
│   ├── sponsor/                  # 赞赏
│   └── settings/                 # 设置
├── components/
│   └── InputMethod/              # 英文输入法（全键盘 + 光标控制）
├── common/
│   ├── dict/                     # 紧凑词典分片（279 个，已纳入 Git）
│   └── icons/                    # 按钮/装饰图标
├── i18n/                         # 国际化文件（zh-CN, en, defaults）
scripts/
├── deploy_watch.ps1              # ADB 部署脚本
└── generate_watch_dict.py        # 词典生成器（从 ECDICT 生成）
sign/                             # 签名证书（certificate.pem + private.pem）
dist/                             # RPK 构建产物（已纳入 Git）
build/                            # 构建中间产物（已纳入 Git）
```

---

## 词典架构

离线词典引擎针对手环场景设计——低内存、快速启动、无数据库。

| 组件 | 说明 |
|------|------|
| **英文索引** | 26 个 `words/word_<a-z>.txt`；每行 `word<TAB>entryId<TAB>tag` |
| **中文索引** | 按 Unicode `codepoint % 64` 分 64 桶；ID 列表用递增差值 + base36 严格解码 |
| **变形索引** | `key_for()` 的 2 字符分片仅用于 `inflect/` 与 `inflect_reverse/` |
| **词条存储** | `entries/entry_<nn>.txt` 按 `entryId / 500` 分片，是英/中文结果补全的唯一完整词条数据 |
| **自动补全** | 异步读取并缓存同一份紧凑英文索引；考试标签参与排序 |
| **模糊搜索** | 扫描紧凑英文索引（≤4000 词、候选池 80），再按 `entryId` 补全完整词条 |

> **20,000+ 条词汇**，源自 ECDICT + CC-CEDICT + BNC/COCA 词族频率数据。

词典分片 **已纳入 Git 版本管理**（`src/common/dict/`，279 个文件），克隆后无需重新生成即可构建。

### 重新生成词典（可选）

```bash
python scripts/generate_watch_dict.py
```

数据来源：`data/ecdict_tagged_14942_compact.csv` + `data/cedict.txt.gz` + 可选 `data/bnc_coca_word_family_lists_v2.xlsx`。

---

## 技术栈

| 层级 | 技术 |
|------|------|
| **框架** | Xiaomi Vela QuickApp (`.ux` SFC) |
| **工具链** | `aiot-toolkit` / `rspack` |
| **运行时** | Vela JS Engine（JSC 字节码） |
| **屏幕** | 212×520 胶囊屏 单屏适配，`designWidth: device-width` |
| **存储** | `@system.storage`（JSON） |
| **路由** | `@system.router`（9 页面） |
| **代码检查** | ESLint + Prettier + Stylelint |
| **提交规范** | Commitlint（约定式提交） |
| **部署** | ADB push + `pm install` |

---

## 代码规范

- 无分号 · 双引号 · 无尾逗号 · `bracketSpacing: false`
- 行宽 100 · 2 空格缩进
- 约定式提交：`feat:`、`fix:`、`style:`、`refactor:`、`docs:` 等
- 禁止 `as any` / `@ts-ignore` / 空 catch 块

---

## 许可

腕上词典是开源的手腕伴侣。词库数据来自 [ECDICT](https://github.com/skywind3000/ECDICT)。
