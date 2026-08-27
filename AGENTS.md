# 腕上词典 — AGENTS.md

> Layered docs: this file (repo-wide) + `src/common/AGENTS.md` (shared modules/assets) + `scripts/AGENTS.md` (dict generator + deploy). Read the relevant layer before touching that area.

## What this is

**腕上词典** (Wrist Dictionary) — an offline Xiaomi Vela QuickApp dictionary for Mi Band watches. Built with aiot-toolkit (`aiot` CLI). Single-page SFC format (`.ux` = `<template>` + `<script>` + `<style>`, parsed by Prettier as Vue).

This repo is **one of 5 single-resolution sibling repos** under `com.watch.dic/`, each a standalone git repo with its own package name:

| Repo | Screen | Profile |
|------|--------|---------|
| com.watch.dic.w192 | 192×490 | pill-compact |
| **com.watch.dic.w212** (this) | 212×520 | pill-standard |
| com.watch.dic.w336 | 336×480 | rect |
| com.watch.dic.w432 | 432×514 | rect |
| com.watch.dic.w466 | 466×466 | circle |

Remote: `github.com/pcai7296/com.watch.dic.git`.

## Versioning

- Canonical version: `src/manifest.json` → `versionName` / `versionCode` (currently 3.0.0 / 6).
- Known drift (don't trust them): `package.json` `version` and README badge lag behind; CHANGELOG entries are written per release.

## Key config

| File | What |
|------|------|
| quickapp.config.js | Enables JSC + `scripts/conditionalCompilationPlugin.js` webpack plugin |
| .prettierrc.js | No semicolons, double quotes, no trailing commas, bracketSpacing: false, printWidth 100, 2-space indent. `.ux` parsed as Vue |
| .stylelintrc.js | Allows custom Vela CSS props + `:blur` pseudo-class |
| commitlint.config.js | Conventional commits: build, feat, fix, docs, style, refactor, test, chore, revert, merge |
| .eslintignore | Ignores dist/, build/, sign/, node_modules/ |
| .gitignore | Ignores node_modules/, .husky/, .codegraph/, .omo/, .tmp/. dict/sign/dist/build ARE committed |

No `.eslintrc*` — ESLint defaults via aiot-toolkit. No `.opencode/` instructions dir (older docs referencing vela.md/conventions.md/poster-qc.md are obsolete).

## Conditional compilation (multi-target from one codebase)

Each sibling repo shares near-identical `src/`; targets differ via compile-time env:

- `npm run build:212` → `cross-env TARGET_ID=W212 TARGET_WIDTH=212 TARGET_HEIGHT=520 aiot build --enable-custom-component` (same pattern for w192/w336/w432/w466).
- `src/common/buildTarget.js` contains `// if true:` / `// endif` blocks per target; the plugin (`scripts/conditionalCompilationPlugin.js`) registers `scripts/conditionalCompilationLoader.js` as a pre-loader for css/js/json/html/vue/ux. The loader sanitizes `process.env` keys to valid identifiers before delegating to the official `conditional-compilation-webpack-plugin/loader.js`.
- `buildTarget.js` exports `{id, width, height, profile, shape}`.
- `src/global.js` mounts both on `global`: `global.buildTarget`, `global.navGuard`. Pages read `const {buildTarget} = global`.
- `app.ux` seeds data from compiled target, then refines at runtime via `@system.device` getInfo: computes `screenProfile` — circle if shape=circle, rect if shape=rect, else aspect ratio ≤ 0.4 → pill-compact, else pill-standard.

Resolution batch builds/releases: `npm run build:resolutions` / `release:resolutions` → PowerShell scripts in `scripts/`.

## Commands

| Command | What |
|---------|------|
| npm run start | Dev server (aiot start --watch) |
| npm run build | Default-target RPK build (aiot build) |
| npm run build:192…466 | Target-specific RPK builds (cross-env + conditional compilation) |
| npm run build:resolutions | Batch-build all resolution packages (PowerShell) |
| npm run release:resolutions | Batch-release all resolutions (PowerShell) |
| npm run release | Release build (aiot release) |
| npm run lint | ESLint --format codeframe --fix on src/ (.ux,.js) |
| npm run deploy:watch | Build + ADB push to emulator-5554 |
| npm run deploy:watch:fast | ADB push only (skip build) |

build/ and dist/ are committed to Git (user decision 2025-08-15: all RPK inputs tracked). spack via aiot-toolkit ^2.0.5.

## Deploy

- scripts/deploy_watch.ps1 — PowerShell, `$ErrorActionPreference = "Stop"`. Targets emulator-5554; override `-Serial 192.168.x.x:5555` or skip build with `-NoBuild`.
- Flow: build → newest *.rpk in dist/ → adb push → adb shell pm install → adb shell am start → verify am dump shows [resumed].

## Project structure

```
src/
  app.ux / global.js / manifest.json   — Entry, global mounts, config
  pages/                               — 9 pages
    index/      (812)  — Home, minimal/classic layout, button-scale setting
    search/     (927)  — IME + cursor editing + autocomplete + swipe-exit lock
    results/    (2337) — English/Chinese results, pagination, fuzzy, phrase mode
    filter/     (432)  — Letter drill-down jump-search
    detail/     (627)  — Word detail + favorite toggle (150 cap)
    records/    (808)  — History/favorites list, paginated 20/page
    about/      (401)  — Credits, license, multi-screen usage text
    sponsor/    (96)   — Donation QR code
    settings/   (286)  — Toggles (see Storage)
  components/InputMethod/              — English QWERTY keyboard (923 lines) + assets/{full,horizontal,t9,arc}
  common/
    buildTarget.js / navGuard.js / dictCodec.js / suggestionState.js
    dict/       (1082 files)           — Generated shards, DO NOT EDIT
    icons/                             — 21 button/UI PNGs
    logo/deco-icon/search-icon/sponsor-code.png
  i18n/                                — defaults.json is a placeholder; real strings in en.json / zh-CN.json
scripts/                               — generate_watch_dict.py + helpers + PS1 deploys (see scripts/AGENTS.md)
data/                                  — Source corpora: ecdict_tagged_14942_compact.csv, cedict.txt.gz,
                                         bnc_coca_word_family_lists_v2.xlsx, wordnet dump (data/dict/),
                                         phrases.csv, phrases_cedict.csv, words_ccedict.csv
research_cn_index_trim/                — Read-only analysis reports on cn_index size trimming
sign/ · build/ · dist/                 — Committed signing material and artifacts
```

## Screen & style

- Canvas: 212×520, designWidth: "device-width", minPlatformVersion: 1000. Never override designWidth.
- Background #020813 everywhere except about (#000000). Blue/white/black dark theme.
- **All text min 18px** — do not go below unless user OKs truncation.
- About page wraps usage text by screen profile; use shared safe widths for results-like content.
- Profiles come from `global.buildTarget` (+ runtime refinement in app.ux): pill-standard / pill-compact / rect / circle.

## Storage (@system.storage)

| Key | Type | Cap | Purpose |
|-----|------|-----|---------|
| dic_history | JSON array of {query, type: word\|phrase, ids?} | 20 | Search history (word & phrase modes share key, typed entries) |
| dic_favorites | JSON array | 150 | Favorites, A-Z filter in records page |
| dic_home_layout | "minimal" (default) \| "classic" | — | Home layout mode |
| dic_english_suggestions | "1"/"0" (default 1) | — | Autocomplete toggle |
| dic_result_long_press_home | "1"/"0" (default 1) | — | Long-press back (650ms) on results → home |
| dic_search_swipe_exit_locked | "1"/"0" (default 1) | — | Lock swipe-exit while typing on search |
| dic_button_scale | "1"/"0" (default 1) | — | Press-shrink effect on classic layout buttons |

Dedup/toggle by normalized word.

## Navigation

- Features: system.router, system.vibrator, system.device, system.file, system.storage, system.prompt.
- 9 pages in manifest.json, entry = pages/index.
- **navGuard()** (common/navGuard.js): 500ms lock — every router call must pass through it so rapid taps can't stack duplicate pages.
- Quirks: records→search uses router.replace with autoSearch="1"; detail→results (inflect) uses router.replace; detail inflect button has 1s cooldown, max 3 depth levels.

## Dictionary (compact-v3 schema)

Source: ECDICT + CC-CEDICT (single-char English glosses + multi-word phrases) + BNC/COCA word families + WordNet derived links + suffix rules. Regenerate: `python scripts/generate_watch_dict.py` (~1000 lines; cleans OUT dir each run). **Never edit shards directly.**

Self-describing stats live in `src/common/dict/meta.json` (70,408 English headwords; 134,322 cn phrases; resultLimit 20). Runtime codec shared in `src/common/dictCodec.js`.

| Feature | Mechanism |
|---------|-----------|
| English index | `words/` 3-tier shards: `word_<letter>.txt` ×26, `word_<2chars>.txt` ×676, `word_<letter>_head.txt` ×26 (top-N for single-char seed). Row = base36 prefixLen+suffix TAB base36 entryId TAB hex tagCode |
| Entry hydration | `entries/entry_<nn>.txt`, shard = entryId // 500 (141 shards). Front-coded word per shard, implicit entryId, ipa-mapped phonetics, phrase-encoded defs |
| Chinese single char | `zh_index/zh_<hex>.txt` ×64 buckets (ord % 64) |
| Chinese phrases | `cn_index/cn_<hex>.txt` ×96 buckets (ord % 96); phrase → ID list |
| Chinese ID codec | Strictly-increasing delta ULEB128 bytes wrapped in unpadded URL-safe Base64 (decodeDeltaIds in dictCodec.js) |
| Inflect lookup | `inflect/` + `inflect_reverse/`, 26 first-letter files per direction; links = exchange + BNC/COCA families + WordNet + suffix rules |
| Fuzzy search | Edit distance ≤ 2 (bounded), scan ≤ 4000 lines, pool ≤ 80 candidates |
| Autocomplete | Async read/cache of same word shards; shard key = first 1–2 chars (`_wordShardKey`); exam tag boosts ranking |
| Results cap | 20 per page, then next-page cards (records pagination also 20/page) |

There is no `index_en.txt` or `english_suggestions.js/.json` runtime resource — don't reintroduce.

Coverage: English headwords complete vs sources; Chinese phrase coverage tuned by trim/filter passes (see research_cn_index_trim reports).

## InputMethod component

- English QWERTY only; layout asset dirs: full / horizontal / t9 / arc.
- Emits: visibilityChange, keyDown, delete, complete.
- Cross-page autocomplete state lives in `common/suggestionState.js` module singletons (props-based passing crashed Vela DOM creation).
- Asset paths may use {{lang}} variable — handled by aiot-toolkit 2.x.

## Swipe-back gesture (every page)

Pattern: touchstart records X/Y; touchend requires start in left ~25% of screen width, end past right ~75%, |dY| ≤ 120 (about.ux uses looser fixed thresholds). Copy from any page except about; needs getTouchPoint() + touchStartX/Y. Respect the search-page swipe-exit lock setting.

## VSCode MCP

velajs-mcp in .vscode/mcp.json; broad autoApprove list (tap, screenshot, navigate, input_text, build_project, get_device_log, get_storage, emulator control…).

## Emulator policy

**Do not touch the emulator unless asked.** Verification is the user's job.

## Tests & CI

- Offline python checks: scripts/check_ids.py, scripts/check_phrases.py (+ research_cn_index_trim audit scripts).
- No app test framework, no CI.

## ANTI-PATTERNS (THIS PROJECT)

- **Never edit dictionary shards** under src/common/dict/ — regenerate via generate_watch_dict.py.
- **Never bypass navGuard** for router calls on interactive buttons.
- **Don't hardcode screen dimensions** — use `global.buildTarget` / screenProfile so the 5 sibling repos stay in sync.
- **Conditional-compilation blocks must stay balanced** (`// if true:` … `// endif`) — they're processed across css/js/json/html/vue/ux.
- **No type suppression** (as any, @ts-ignore, @ts-expect-error); **no semicolons**; **no empty catch blocks**.
- **Don't remove the swipe-back gesture** when adding pages.
- **No generic AI boilerplate** — match project's telegraphic, no-fluff style.
- **ESLint runs with --fix** — it auto-formats; know that before `npm run lint`.

## CODE MAP

| Symbol | Type | File | Role |
|--------|------|------|------|
| buildTarget | const | src/common/buildTarget.js | Compile-time target {id,width,height,profile,shape}; conditional blocks resolved at build |
| navGuard() | function | src/common/navGuard.js | 500ms anti-double-tap router lock; mounted on global |
| parseBase36 / decodePrefixField / decodeDeltaIds | function | src/common/dictCodec.js | Runtime compact-v3 codecs (base36 fields, front-coded words, delta-ULEB128+base64url IDs) |
| getSuggestionSeed/setSuggestions/onSuggestionsChange | function | src/common/suggestionState.js | Module-scoped autocomplete bridge between search page and IME |
| key_for(value) | function | scripts/generate_watch_dict.py | Normalize to 2-char shard key ([^a-z0-9] → "_") |
| zh_bucket_for / cn_bucket_for | function | scripts/generate_watch_dict.py | ord % 64 (single char) / ord % 96 (phrases) bucket names |
| encode_delta_ids / decode_delta_ids | function | scripts/generate_watch_dict.py | Generator-side strict delta-ULEB128 codec |
| encode_front_code / decode_front_code | function | scripts/generate_watch_dict.py | Front-coding of word column inside entry shards |
| load_cc_cedict / load_word_family_links / load_wordnet_derived_links | function | scripts/generate_watch_dict.py | Corpus ingestion phases |
| derived_candidates(word) | function | scripts/generate_watch_dict.py | Suffix-rule inflection candidates |
| _wordShardKey / loadEnglishSuggestionSource | function | src/pages/search/search.ux | Pick word_<key>.txt shard, async cache, stream suggestions |
| decodeDeltaIds usage | function | src/pages/results/results.ux | Hydrate zh/cn ID lists from buckets |
