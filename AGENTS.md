# 腕上词典 (w192) — AGENTS.md

> **⚠️ MANDATORY: Before any Vela work (.ux, manifest, build, deploy, API), call skill(name="vela-dev") first.**

## What this is

**腕上词典** (Wrist Dictionary) — 运行在小米手环上的 Vela 快应用。本分支为 **w192 分辨率适配分支**：192×490 胶囊屏（pill-compact），包名 `com.watch.dic.w192`，构建命令 `npm run build`（buildTarget 硬编码 W192）。

## Key config

| File | What |
|------|------|
| .prettierrc.js | No semicolons, double quotes, no trailing commas, bracketSpacing: false, printWidth 100, 2-space indent. .ux parsed as Vue |
| .stylelintrc.js | Allows custom Vela CSS props + :blur pseudo-class |
| commitlint.config.js | Conventional commits: bug, feat, fix, docs, style, refactor, test, chore, revert, merge |
| .eslintignore | Ignores dist/, build/, sign/, node_modules/ |
| .gitignore | Ignores node_modules/, .husky/, .codegraph/, .omo/, .tmp/ |

No .eslintrc* — ESLint defaults via aiot-toolkit. No .opencode/ in this branch — the vela-dev skill itself is the authority.

## Commands

| Command | What |
|---------|------|
| npm run start | Dev server (aiot start --watch) |
| npm run build | Build W192 RPK (aiot build, buildTarget 硬编码 192×490) |
| npm run release | Release build (aiot release) |
| npm run lint | ESLint --fix on src/ (.ux,.js) |
| npm run deploy:watch | Build + ADB push to emulator-5554 |
| npm run deploy:watch:fast | ADB push only (skip build) |

build/ and dist/ are committed to Git (per user decision 2026-08-15: 构成 RPK 的所有元素纳入版本管理). node_modules/ remains ignored.

## Deploy

- scripts/deploy_watch.ps1 — PowerShell. Targets emulator-5554. Override: -Serial 192.168.x.x:5555 or -NoBuild.
- Flow: build → newest *.rpk in dist/ → adb push → adb shell pm install → adb shell am start → verify am dump checks [resumed].
- $ErrorActionPreference = "Stop" — exits on any failure.

## Project structure

```
src/
  app.ux / manifest.json          — Entry + config
  pages/                          — 9 pages
    index/                        — Home with 4 buttons (pill-compact 布局)
    search/                       — IME + cursor editing + autocomplete
    results/                      — English/Chinese results
    filter/                       — Letter drill-down jump-search
    detail/                       — Word detail + favorite toggle
    records/                      — History / favorites list (type param)
    about/                        — Credits, license, multi-screen adaptive usage text
    sponsor/                      — Donation QR code
    settings/                     — User preferences (suggestion toggle, swipe lock)
  components/
    InputMethod/                  — English QWERTY keyboard, sub-assets for layouts
  common/
    dict/                         — 269 个词典分片（已纳入 Git，勿手改）
    icons/                        — Button/decoration icons
  i18n/                           — Locale JSON files (defaults, en, zh-CN)
scripts/                          — generate_watch_dict.py, deploy_watch.ps1, build_resolution_packages.ps1
sign/                             — certificate.pem + private.pem（已纳入 Git）
dist/                             — RPK 构建产物（已纳入 Git）
build/                            — 构建中间产物（已纳入 Git）
```

## Screen & style

- Canvas: 192x490px, designWidth: "device-width", minPlatformVersion: 1000
- Background #020813 on all pages except about (#000000)
- Blue/white/black dark theme
- **All text min 18px** — do not go below unless user OKs truncation
- **pill-compact 布局**：首页按钮 2×2 网格（`.button-group-pill-compact` 176px 宽），底部 `.bottom-row-pill-compact` 高 48px

## Storage

| Key | Type | Max | Purpose |
|-----|------|-----|---------|
| dic_history | JSON array | 20 | Search history |
| dic_favorites | JSON array | 150 | Favorites |

Both via @system.storage. Dedup/toggle by normalized word.

## Router

Features: system.router, system.vibrator, system.device, system.file, system.storage, system.prompt (toast).

9 pages in manifest.json, entry = pages/index.

## Dictionary (~128k Chinese phrases, 15k English headwords)

Source: ECDICT + CC-CEDICT + BNC/COCA word-family lists.
Regenerate: python scripts/generate_watch_dict.py (never edit shards directly).

| Feature | Mechanism |
|---------|-----------|
| English lookup | 26 first-letter files (`words/word_a.txt`..`word_z.txt`); row = `word<TAB>entryId<TAB>tag` |
| Chinese lookup | Unicode codepoint % 64 to 64 bucket files; ID lists are strictly decoded delta-base36 |
| Inflect lookup | `inflect/` + `inflect_reverse/`; `key_for()` 2-char sharding is used only here |
| Entry lookup | `entries/entry_<nn>.txt`, sharded by `entryId / 500`; canonical full data for English and Chinese hydration |
| Fuzzy search | Edit distance <=2, scan <=4000 words, pool <=80 candidates |
| Autocomplete | Async read/cache of the same compact `word_<a-z>.txt` index; exam tag affects ranking |
| Results cap | 20 |

There is no `index_en.txt` or `english_suggestions.js/.json` runtime resource.

## InputMethod component

- English QWERTY only
- Emits: visibilityChange, keyDown, delete, complete
- Asset paths use {{lang}} variable — handled by aiot-toolkit 2.0.4+

## Swipe-back gesture (every page)

| Page | Start X <= | End X >= | dY <= |
|------|------------|----------|-------|
| Most pages | 53 | 159 | 120 |
| about.ux | 20 | 180 | 60 |

Copy pattern from any page except about. Needs getTouchPoint() + touchStartX/Y.

## Router quirks

- **records to search**: router.replace (not push) with autoSearch="1"
- **detail to results** (inflect): router.replace (not push)
- **Detail page**: 1s cooldown on inflect button, max 3 depth levels

## Emulator policy

**Do not touch the emulator unless asked.** Verification is the user's job.

## ANTI-PATTERNS (THIS PROJECT)

- **Never edit dictionary shard files** under src/common/dict/. Regenerate via python scripts/generate_watch_dict.py.
- **No static asset paths** with {{lang}} — aiot-toolkit 2.0.4+ handles variable-depth paths.
- **No type suppression** — no as any, @ts-ignore, @ts-expect-error.
- **No semicolons** — Prettier enforces no-semicolon style.
- **No empty catch blocks** — always handle or re-throw.
- **Don't remove swipe-back gesture** when adding new pages.
- **Don't override designWidth** — must stay "device-width" for the 192x490 canvas.
- **Never cross-build** — this folder builds W192 only. Other resolutions live in sibling branches.
- **ESLint runs with --fix by default** — it auto-formats on lint. Be aware before running npm run lint.

## CODE MAP

| Symbol | Type | File | Role |
|--------|------|------|------|
| key_for() | function | scripts/generate_watch_dict.py | Generate 2-char shard key for inflect / reverse-inflect files only |
| zh_bucket_for() | function | scripts/generate_watch_dict.py | Unicode bucket for Chinese index |
| load_cc_cedict() | function | scripts/generate_watch_dict.py | Parse CC-CEDICT into cn_index |
| SimpleInputMethod | object | src/components/InputMethod/assets/dicUtil.js | English dict query orchestration |
| decodeDeltaIds() | function | src/pages/results/results.ux | Strictly decode delta-base36 Chinese index IDs |
| loadEnglishSuggestionSource() | function | src/pages/search/search.ux | Async load/cache compact first-letter word index |
