<p align="center">
  <img src="src/common/icon.png" width="96" height="96" alt="腕上词典" />
</p>

<h1 align="center">腕上词典 · 212×520 胶囊屏</h1>

<p align="center">
  <em>小米手环上的离线英汉词典 — 抬手即查，无需掏手机</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/版本-3.2.0-1d74e8?style=flat-square" alt="Version" />
  <img src="https://img.shields.io/badge/平台-Mi%20Band-1d74e8?style=flat-square" alt="Platform" />
  <img src="https://img.shields.io/badge/框架-Vela%20QuickApp-1d74e8?style=flat-square" alt="Framework" />
  <img src="https://img.shields.io/badge/词库-1,400-2ea043?style=flat-square" alt="Headwords" />
  <img src="https://img.shields.io/badge/屏幕-212×520-ff6b35?style=flat-square" alt="Screens" />
  <img src="https://img.shields.io/badge/输入-英文·中文-1d74e8?style=flat-square" alt="Languages" />
  <img src="https://img.shields.io/badge/工具-aiot--toolkit-ff6b35?style=flat-square" alt="Build" />
</p>

---

## 简介

**腕上词典** 是一款运行在小米手环 / 手表上的 Vela 快应用，把一部离线英汉词典装进手腕：英汉互查、词形变化反查、模糊搜索、收藏与历史，全程无需联网。

本仓库是它的 **212×520 胶囊屏** 分辨率分支，包名 `com.watch.dic.w212`，基于小米 `aiot-toolkit` 构建，界面、字号与间距按 212×520 单独调校。

> 同一个 GitHub 仓库下共 **5 个分辨率分支**，各自独立构建、互不影响。当前分支为 **`w212`**，内置词库为 **dev 档**（1,400 词头 / 26 个英文分片 / 3 个词条分片）。

## 分支一览

| 分支 | 屏幕 | 形态 | 包名 | 词库档位 | 词头数 | 适配机型 |
|------|------|------|------|----------|--------|----------|
| [`w192`](https://github.com/pcai7296/com.watch.dic/tree/w192) | 192×490 | 胶囊屏 | `com.watch.dic.w192` | standard | 70,408 | 小米手环 9 |
| [`w212`](https://github.com/pcai7296/com.watch.dic/tree/w212) | 212×520 | 胶囊屏 | `com.watch.dic.w212` | dev | 1,400 | 小米手环 10 / 10 NFC |
| [`w336`](https://github.com/pcai7296/com.watch.dic/tree/w336) | 336×480 | 矩形屏 | `com.watch.dic.w336` | standard | 70,408 | 小米手环 9 Pro / 10 Pro |
| [`w432`](https://github.com/pcai7296/com.watch.dic/tree/w432) | 432×514 | 矩形屏 | `com.watch.dic.w432` | standard | 70,408 | 红米手表 5 / 5 X Ring / 6 |
| [`w466`](https://github.com/pcai7296/com.watch.dic/tree/w466) | 466×466 | 圆屏 | `com.watch.dic.w466` | standard | 70,408 | 小米手表 S4 |

> 词头数取自各分支 `src/common/dict/meta.json`。**发行包**（AstroBox 发布仓库中的 3.2.0 安装包）统一为 lite 档（19,942 词头），与仓库内档位不同，见「词典架构 · 词库档位」。

## 功能

- **🔍 三种查词** — 英文精确 / 前缀匹配、中文单字与词组、词形变化反查
- **⌨️ 内置英文输入法** — QWERTY 全键盘、光标编辑、自动补全；连点 3 次搜索框切换大键盘
- **✨ 智能补全** — 按 1–2 个首字符取分片异步加载，标注考试标签（中考 / 高考 / CET-4 / CET-6 / 考研 / TOEFL / IELTS / GRE）
- **🌀 模糊搜索** — 编辑距离 ≤ 2，单次最多扫描 4,000 行、候选池 80 条，输错也能找到
- **📖 词形反查** — `ran` → run、`better` → good；来源为 ECDICT exchange + BNC/COCA 词族 + WordNet 派生 + 后缀规则
- **❤️ 收藏与历史** — 收藏上限 150 条（A-Z 筛选、分页浏览），历史自动缓存 20 条
- **📄 分页结果** — 每页 20 条，翻到页尾自动滚屏
- **🌙 深色主题** — 纯黑底 `#000000` + 蓝色强调 `#1d74e8`，OLED 暗光下不发蓝、更省电
- **🔆 屏幕常亮** — 设置中可开关，查词时不再自动熄屏
- **📴 纯离线** — 词典分片随仓库提交，无需联网、无数据库

## 页面

| 页面 | 路由 | 说明 |
|------|------|------|
| 首页 | `pages/index` | 入口；简约 / 经典两种布局 |
| 搜索 | `pages/search` | 输入法、光标编辑、自动补全 |
| 结果 | `pages/results` | 英文 / 中文查词结果，分页 + 模糊搜索 |
| 详情 | `pages/detail` | 释义、词形变化、收藏切换 |
| 跳查 | `pages/filter` | 按 A-Z 字母快速跳转 |
| 记录 | `pages/records` | 历史记录 / 收藏列表（参数区分） |
| 关于 | `pages/about` | 致谢、版本、许可 |
| 赞助 | `pages/sponsor` | 赞赏码 |
| 设置 | `pages/settings` | 首页布局、输入联想、长按返回、滑动锁、按钮缩放、屏幕常亮 |

## 安装

普通用户请用 **AstroBox**，从发布仓库 [pcai7296/com.watch.dic_AstroBox_Release](https://github.com/pcai7296/com.watch.dic_AstroBox_Release) 安装对应机型的分辨率包（lite 档，适配机型见上方「分支一览」）。

开发者从源码构建见下一节。

## 快速开始

**环境要求**：Node.js 20+、npm（`cross-env ^10` 的要求；`package.json` 的 `engines` 仍写着 ≥ 8.10，已过时）；构建依赖 `aiot-toolkit ^2.0.5`（devDependencies）。

```bash
npm install
npm run start      # 开发服务器（热重载）
npm run build:212  # 构建本分支 RPK
npm run lint       # ESLint，只查 .js（lint:fix 才会改文件）
```

构建产物位于 `dist/`，文件名形如 `com.watch.dic.w212.release.3.2.0.rpk`（debug 构建为 `.debug.`）。

### 部署到手环

```bash
npm run deploy:watch                              # 构建 + ADB 推送到模拟器
npm run deploy:watch -- -Serial 192.168.x.x:5555  # 真机
```

`npm run deploy:watch:fast` 跳过构建，只推送 `dist/` 里已有的 RPK。

## 项目结构

```
src/
├── app.ux                      # 应用生命周期、屏幕尺寸、启动逻辑
├── manifest.json               # 页面路由、feature 声明、应用图标
├── pages/                      # 9 个页面
│   ├── index/                  # 首页
│   ├── search/                 # 搜索（输入法 + 光标编辑）
│   ├── results/                # 英 / 中查词结果
│   ├── detail/                 # 词条详情 + 收藏
│   ├── filter/                 # 字母跳查
│   ├── records/                # 历史 / 收藏
│   ├── about/                  # 关于
│   ├── sponsor/                # 赞助
│   └── settings/               # 设置
├── components/InputMethod/     # 英文输入法（全键盘 + 光标控制）
├── common/
│   ├── dict/                   # 词典分片（242 个文件，随仓库提交）
│   ├── dictCodec.js            # base36 / 前向编码 / delta-ID 解码
│   ├── dictProfile.js          # 读 meta.json 决定分片布局
│   ├── buildTarget.js          # 条件编译目标
│   ├── navGuard.js             # 500ms 防连点跳转锁
│   └── keepScreenOn.js         # 屏幕常亮
├── i18n/                       # 国际化（zh-CN / en / defaults）
scripts/                        # 词典生成、部署脚本（部分分支含批量构建）
sign/                           # 签名证书（certificate.pem + private.pem）
```

> 词典分片（`src/common/dict/`）随仓库提交，克隆后无需重新生成即可构建。

## 词典架构

紧凑格式 compact-v3，面向低内存与快速启动，没有数据库：

| 组件 | 说明 |
|------|------|
| 英文索引 | `words/` 分片，行格式 `base36 前缀长度+后缀 \t base36 entryId \t 十六进制标签` |
| 词条 | `entries/entry_<n>.txt`，每片 500 条，片号 = `entryId / 500`；前向编码词头 + 隐式 ID |
| 中文单字 | `zh_index/zh_<hex>.txt`，按 `ord % 64` 分 64 桶 |
| 中文词组 | `cn_index/cn_<hex>.txt`，按 `ord % 96` 分 96 桶 |
| 中文 ID 编码 | 严格递增的 delta ULEB128，再包一层无填充 base64url |
| 词形索引 | `inflect/` 与 `inflect_reverse/`，各 26 个首字母分片 |
| 模糊搜索 | 编辑距离 ≤ 2，扫描 ≤ 4,000 行，候选池 ≤ 80 |
| 自动补全 | 复用英文索引，按 1–2 个首字符取分片并缓存 |

本分支当前为 **dev 档**：1,400 词头、5,770 条中文词组，只保留 26 个字母分片。运行时只认 `meta.json` 里的 `wordTwoShards` / `wordHeadShards` 是否为 0，据此决定走 26 个还是 728 个英文分片。

### 词库档位

| 档位 | 词头 | 英文分片 | 词条分片 | 中文词组 | 文件数 |
|------|------|----------|----------|----------|--------|
| dev | 1,400 | 26 | 3 | 5,770 | 242 |
| lite | 19,942 | 26 | 40 | 41,461 | 279 |
| standard | 70,408 | 728（26 + 676 + 26） | 141 | 119,542 | 1,082 |

> 发行包（AstroBox 发布仓库）统一为 **lite** 档；仓库里 w192 / w336 / w432 / w466 为 standard，w212 为 dev（便于调试）。

### 重新生成词库

只有 **w212** 具备完整语料（`data/phrases.csv`、`data/words_ccedict.csv` 等）：

```bash
npm run dict:dev                  # 或 dict:lite / dict:standard
python scripts/profile_audit.py   # 分片完整性 + 体积检查
python scripts/bench_search.py    # 搜索自一致性
```

⚠️ `dict:*` 会**就地覆盖** `src/common/dict/`，且不传 `--output`。在其他分辨率分支执行 `dict:standard` 会把标准词库静默缩水成 14,942 条——不要那样做。

## 技术栈

| 层级 | 技术 |
|------|------|
| 框架 | Xiaomi Vela QuickApp（`.ux` 单文件组件） |
| 工具链 | `aiot-toolkit` / rspack |
| 运行时 | Vela JS Engine（JSC 字节码） |
| 屏幕 | 212×520 胶囊屏，`designWidth: device-width` |
| 存储 | `@system.storage`（JSON） |
| 路由 | `@system.router`（9 页面） |
| 构建 | 条件编译：`TARGET_ID` / `TARGET_WIDTH` / `TARGET_HEIGHT` |
| 代码检查 | ESLint（仅 `.js`） |
| 部署 | ADB push + `pm install` |

## 代码规范

- 无分号 · 双引号 · 无尾逗号 · `bracketSpacing: false`
- 行宽 100 · 2 空格缩进
- 约定式提交：`feat:`、`fix:`、`docs:`、`refactor:` 等
- 禁止 `as any` / `@ts-ignore` / 空 `catch`

## 更新日志

**3.2.0**（2026-11-01）：冷启动峰值下降（首页图标 512×512 → 64×64）、新增「屏幕常亮」、首页时间按分钟校正、新应用图标、首页侧滑退出修复。

完整历史见 [CHANGELOG.md](./CHANGELOG.md)。

## 相关仓库

- **AstroBox 发布仓库** — [pcai7296/com.watch.dic_AstroBox_Release](https://github.com/pcai7296/com.watch.dic_AstroBox_Release)：lite 档安装包、机型清单与校验信息。

## 许可

本项目采用 **非商业署名许可 1.0（WD-NCA-1.0）**：允许自由使用、复制、修改与分发，但**仅限非商业目的**；分发或基于本项目创作时必须保留署名并注明修改；禁止售卖、付费下载、广告变现、预装搭售等商业使用。

完整条款见 [LICENSE](./LICENSE)。词库数据来自 [ECDICT](https://github.com/skywind3000/ECDICT)、CC-CEDICT、BNC/COCA 词族。
