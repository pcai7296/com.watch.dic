# scripts/ — Build & Deploy

Dict generation is Python; deploy is PowerShell.

## Files

| File | Lines | Role |
|------|-------|------|
| `generate_watch_dict.py` | ~552 | Build `src/common/dict/` shards from `data/` CSVs + CC-CEDICT |
| `deploy_watch.ps1` | ~70 | Build RPK + `adb push` + install + launch on emulator-5554 |
| `build_resolution_packages.ps1` | — | Build all 5 resolution RPKs (multi-target; this branch builds W192 only via `npm run build`) |
| `conditionalCompilationLoader.js` | — | Webpack loader for `/* #ifdef TARGET_xxx */` conditional compilation |
| `conditionalCompilationPlugin.js` | — | Webpack plugin for TARGET_xxx conditional compilation |

## generate_watch_dict.py

Phases (in `main()`):
1. Read `data/ecdict_tagged_14942_compact.csv` rows (word/phonetic/translation/tag/exchange)
2. Write 26 compact English indexes: `words/word_<a-z>.txt`; row = `word<TAB>entryId<TAB>tag`
3. Build inflection graph: `inflect/` and `inflect_reverse/` (exchange + BNC/COCA word families + suffix rules in `derived_candidates()`)
4. Build canonical full entries: `entries/entry_<nn>.txt`, shard = `entryId // 500`
5. Build `zh_index/` (single-char entries) and `cn_index/` (Chinese phrase → entry IDs; ECDICT reverse lookup + CC-CEDICT augmentation)
6. Encode every Chinese ID list as strictly increasing delta-ULEB128 bytes wrapped in unpadded URL-safe Base64
7. Emit `meta.json` with schema/count stats and `resultLimit: 20`

Output root: `src/common/dict/`. Cleans dir on every run (`shutil.rmtree(OUT)`).

> **Note**: dict shards are now **committed to Git** (269 files). Run this script only when the source CSVs change.

### Key functions
- `cn_bucket_for(char)` — cn bucket = `ord(char) % 96` → 2-hex filename
- `zh_bucket_for(char)` — single-character bucket = `ord(char) % 64` → 2-hex filename
- `entry_shard_for(entry_id)` — canonical entry shard = `entry_id // 500`
- `encode_delta_ids(entry_ids)` / `decode_delta_ids(value)` — strict compact-v3 Base64-ULEB128 Chinese index ID codec
- `load_cc_cedict(path)` — parses `data/cedict.txt.gz` into `zh_phrase → [meanings]` dict
- `derived_candidates(word)` — suffix-stripping rules (-ily/-ly/-iness/-ness/-ment/-able/-ible/-ful/-less/-hood/-ship/-er/-or) for rule-based inflection

### Run
```bash
python scripts/generate_watch_dict.py
```

## deploy_watch.ps1

```powershell
.\scripts\deploy_watch.ps1          # Build + push to emulator-5554
.\scripts\deploy_watch.ps1 -Serial 192.168.x.x:5555  # Target real device
.\scripts\deploy_watch.ps1 -NoBuild # Skip build, push existing RPK
```

### Flow
1. `npm run build` (or skip with `-NoBuild`)
2. Find newest `*.rpk` in `dist/`
3. `adb push` to device
4. `adb shell pm install <rpk_path>`
5. `adb shell am start` → verify with `am dump` checks for `[resumed]`

### Error handling
`$ErrorActionPreference = "Stop"` — exits on any failure.

## ANTI-PATTERNS

- **Don't edit dictionary shards** — run `generate_watch_dict.py` instead.
- **Don't use `-NoBuild` with stale RPKs** — ensures device has latest code.
