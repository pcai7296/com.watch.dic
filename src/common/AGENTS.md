# src/common/ — Shared Modules + Static Assets

Cross-page ES modules, app icon, and shared icons. All paths referenced by pages/components are resolved relative here.

## Structure

```
common/
├── suggestionState.js      # 联想状态的模块单例（search ↔ IME）
├── buildTarget.js          # 编译期屏幕目标 {id,width,height,profile,shape}；多目标条件编译块
├── dictProfile.js          # 读 /common/dict/meta.json 的档位单例（决定选 26 还是 728 个分片）
├── keepScreenOn.js         # 屏幕常亮偏好缓存 + 下发（原仅本仓有，现已移植到其余 4 仓）
├── navGuard.js             # 500ms 导航防连点锁（由 src/global.js 挂到 global）
├── dictCodec.js            # compact-v3 运行时解码（parseBase36 / decodePrefixField / decodeDeltaIds）
├── dict/                   # 生成的分片 —— 已入库，禁止手改
├── icons/                  # 15 个按钮/UI PNG（首页 4 个为 64×64）
├── images/                 # loading.png（加载环）/ switch-on.png / switch-off.png，解包天气 App 原图
└── logo.png（App 内装饰图，116x116） / icon.png（manifest 图标） / sponsor-code.png
```

**本仓没有 `deco-icon.png` / `deco-icon-about.png`**（前者在近期改动中被删除，后者只在 w432/w466 有）——不要照抄兄弟仓的图标名。

## suggestionState.js

Module-scoped singletons for autocomplete state shared between `pages/search` and the IME component. Exists because **passing seed/suggestions data through component props can trigger native crashes during DOM creation on Vela**.

| Export | Purpose |
|--------|---------|
| `getSuggestionSeed()` / `setSuggestionSeed(v)` | current IME input buffer (string) |
| `getSuggestions()` / `setSuggestions(v)` | autocomplete candidates; setter fires the registered callback |
| `onSuggestionsChange(cb)` | subscribe to suggestion updates (single-slot registration) |

Usage: `import { setSuggestions, onSuggestionsChange } from '../../common/suggestionState.js'`.

## dictProfile.js + keepScreenOn.js

- `dictProfile.js` — `loadDictionaryProfile()` 读 `/common/dict/meta.json` → 模块级 `_profile` 单例 + 回调队列；**读失败静默 `_profile=null`**，全部退化为 26 字母分片。真正判据只有 `wordTwoShards > 0` / `wordHeadShards > 0` —— **没有任何分支在 `profile` 字符串上**。
- `keepScreenOn.js` — `applyKeepScreenOnSetting()` / `setKeepScreenOnEnabled()` 缓存 `dic_keep_screen_on`，各页 `onShow` 重新下发；**5 个仓现已一致**（其余 4 仓于 3.2.0 移植）。
- **app 与页面各自打包，模块级单例不跨包**：`dictProfile` 把 profile 写 `global.__dictProfile`，`getDictionaryProfile()` 优先读它；`keepScreenOn` 写 `global.__keepScreenOnLoaded/__keepScreenOn`，冷启动只读一次 storage。search/results 的 `onInit` 仍会调 `loadDictionaryProfile()` 兜底。
- `system.brightness` 可能不存在（模拟器/部分设备）：`apply()` 先判 `typeof brightness.setKeepScreenOn === "function"`，否则直接返回，避免每条 onShow 抛 TypeError 并中断 storage 回调。
- 这两个文件**都在 `scripts/sync_source.ps1` 的 `$CopyItems` 白名单里**（`src\common\dictProfile.js` / `src\common\keepScreenOn.js`）→ `sync_source.ps1` 会自动同步到 `variants/*` 的 `src/common/`（那是实体副本，不是 Junction）。

## buildTarget.js + navGuard.js

- `buildTarget.js` resolves at build time via conditional-compilation blocks (`// if true:` / `// endif` keyed on TARGET_ID/TARGET_WIDTH/TARGET_HEIGHT env). Exports `{id, width, height, profile, shape}`.
- `navGuard()` returns false within 500ms of the last accepted navigation — wrap router calls to prevent double-tap page stacking.
- Both are mounted on `global` by `src/global.js`; pages read `const {buildTarget} = global`.

## dictCodec.js

Shared runtime codecs for the compact-v3 dictionary schema. Import from pages instead of re-implementing:

| Export | Purpose |
|--------|---------|
| `parseBase36(value)` | strict base36 → number (-1 on invalid / unsafe) |
| `decodePrefixField(value, previous)` | front-coded word field reconstruction |
| `decodeDeltaIds(value)` | strictly-increasing delta ULEB128 bytes in unpadded URL-safe Base64 → entry ID array |
| `decodeFrontCode` helpers | mirror of generator-side front coding |

See `scripts/AGENTS.md` for the shard layout these decode.

## dict/ — Generated Shards (DO NOT EDIT)

Layout: `words/`, `entries/`, `zh_index/`, `cn_index/`, `inflect/`, `inflect_reverse/`, `meta.json`. Regenerate with `python scripts/generate_watch_dict.py` — **仅本仓的生成器是新版**（有 `--profile` / `--cn-index-mode` / `--output`）；w192/w336/w432/w466 的是旧版无 argparse，且缺语料（见 [../AGENTS.md](../AGENTS.md)）。

**本仓是 dev 档**：`profile=dev` / `headwords=1,400` / `wordShards=26` / `wordTwoShards=0` / `cnIndexPhrases=5,770`，共 **242** 个文件（兄弟仓是 standard：70,408 / 728 / 1,082）。**以 `meta.json` 为准，不要把数字写进文档**——上一版写 "~1082 files / 70,408 headwords" 正好说反了。

目录 IS committed to Git（242 个文件含 meta.json）——clone 即可构建。**但 `build/` 与 `dist/` 不入库**（`.gitignore` 忽略）。

三条硬约束：
1. **不要手改 `meta.json`** —— 运行时靠它决定读 26 还是 728 个分片。
2. **不要删 `.gitattributes` 的 `src/common/dict/** -text`** —— 删了 git 会规范化换行 → 全库假 diff。
3. **CRLF 不统一，不能靠目录推断** —— 本仓 `entries/`、`cn_index/`、`inflect/` 有 CRLF，`zh_index/`、`words/` 没有。任何读分片的代码都要 `.replace(/\r/g, "")`（生成器与运行时强耦合：entries 的 eid = 分片号×500 + 0 基行号，删插一行即全片错位）。

## icons/ — 15 PNGs

| Group | Files | Used by |
|-------|-------|---------|
| Home | `language.png`, `history.png`, `star-gradient.png`, `settings-2.png`, `btn_transform_blue.png` | Home page（源图 64×64，显示 32–36px） |
| Nav/back | `btn_back.png`, `btn_back_thin.png`, `btn_back_mirror_thin.png` | Page headers |
| State/UI | `btn_check.png`, `btn_delete_fat.png`, `btn_heart_gold.png`, `btn_info_i.png`, `collect-circle-true/false.png`, `Sync_circle.png` | records/detail/search |

Home layout switch (minimal/classic) lives in `pages/settings` (`dic_home_layout`).

## WHERE TO LOOK

| Task | Location | Notes |
|------|----------|-------|
| Share state across pages/components | `suggestionState.js` | module-scope only; no global window pollution |
| Screen dims/profile in a page | `global.buildTarget` | never hardcode pixels; sibling repos share this code |
| Guard a router call | `navGuard()` from global | required on interactive buttons |
| Decode dict shard data | `dictCodec.js` | don't reimplement codecs per page |
| Add new button icon | drop PNG in `icons/` + reference in target page | match existing naming (`btn_` prefix for buttons) |
| Update app icon | `icon.png` | 白色圆底版，被 `manifest.json` 的 `icon` 引用；`logo.png` 只用于 App 内装饰 |
| Regenerate dictionary shards | `scripts/generate_watch_dict.py` | never hand-edit `dict/` |

## ANTI-PATTERNS

- **Never hand-edit `dict/`** — regenerated by `scripts/generate_watch_dict.py`.
- **Never add Vitest / react context patterns** — `suggestionState.js` is deliberately module-scoped to avoid Vela DOM-creation crashes.
- **Never inline icon refs** — keep them in `icons/` so layouts can swap sets without touching code.
