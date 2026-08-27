# scripts/ — Build & Deploy

**Dict generation is Python**; **deploy/build batching is PowerShell**; **webpack conditional compilation is JS**.

## Files

| File | Lines | Role |
|------|-------|------|
| `generate_watch_dict.py` | ~1009 | Build `src/common/dict/` shards (compact-v3) from `data/` corpora |
| `deploy_watch.ps1` | ~70 | Build RPK + `adb push` + install + launch on emulator-5554 |
| `build_resolution_packages.ps1` | ~60 | Batch-build all 5 target RPKs (`npm run build:resolutions`) |
| `release_resolution_packages.ps1` | ~68 | Batch-release all 5 targets (`npm run release:resolutions`) |
| `conditionalCompilationPlugin.js` / `conditionalCompilationLoader.js` | 15 / 21 | Webpack pre-loader applying `// if true:` / `// endif` blocks; loader sanitizes `process.env` keys first |
| `expand_words.py` | — | Expand English headword coverage (CC-CEDICT single-char glosses → `data/words_ccedict.csv`) |
| `extract_cedict_phrases.py` / `filter_phrases.py` / `trim_phrases.py` | — | Mine / filter / tighten CC-CEDICT multi-word phrases (`data/phrases*.csv`) |
| `check_ids.py` / `check_phrases.py` | — | Offline sanity checks over generated shards / phrases |

## generate_watch_dict.py

Phases (in `main()`):
1. Read `data/ecdict_tagged_14942_compact.csv` rows (word/phonetic/translation/tag/exchange)
2. Merge extras: `data/words_ccedict.csv` (single-char English words) + `data/phrases.csv` (high-freq phrases), dedup by lowercase word
3. Write 3-tier English indexes under `words/`: `word_<letter>.txt` ×26, `word_<2chars>.txt` ×676 (first two chars), `word_<letter>_head.txt` ×26 (top-N for single-char autocomplete seed). Row = base36 `prefixLen+suffix<TAB>entryId<TAB>tagCode(hex)`
4. Build inflection graph: `inflect/` + `inflect_reverse/` (26 first-letter files per direction) from exchange + BNC/COCA word families (`load_word_family_links`, reads xlsx directly) + WordNet (`load_wordnet_derived_links`) + suffix rules in `derived_candidates()`
5. Build canonical full entries: `entries/entry_<nn>.txt`, shard = `entryId // 500`; word column front-coded per shard
6. Build `zh_index/` (single-char, ord % 64) and `cn_index/` (multi-char phrases, ord % 96; ECDICT reverse lookup + CC-CEDICT augmentation)
7. Encode every Chinese ID list as strictly increasing delta-ULEB128 bytes wrapped in unpadded URL-safe Base64
8. Emit `meta.json` with schema/count stats and `resultLimit: 20`

Output root: `src/common/dict/`. Cleans dir on every run (`shutil.rmtree(OUT)`).

### Key functions
- `key_for(value)` — normalize to 2-char shard key ([^a-z0-9] → "_"); drives the two-letter tier of `words/`
- `cn_bucket_for(char)` — cn bucket = `ord(char) % 96` → 2-hex filename
- `zh_bucket_for(char)` — single-character bucket = `ord(char) % 64` → 2-hex filename
- `entry_shard_for(entry_id)` — canonical entry shard = `entry_id // 500`
- `encode_delta_ids(entry_ids)` / `decode_delta_ids(value)` — strict compact-v3 Base64-ULEB128 Chinese index ID codec
- `encode_front_code(value, previous)` / `decode_front_code(value, previous)` — front-coding of the word column inside entry shards
- `load_cc_cedict(path)` — parses `data/cedict.txt.gz` into `zh_phrase → [meanings]` dict
- `derived_candidates(word)` — suffix-stripping rules (-ily/-ly/-iness/-ness/-ment/-able/-ible/-ful/-less/-hood/-ship/-er/-or) for rule-based inflection

`entries/entry_<nn>.txt` is the only full word/phonetic/translation/tag store used to hydrate both English and Chinese results; its word field is front-coded per shard. Autocomplete asynchronously reuses the same `words/` shards (runtime picks the tier via `_wordShardKey`). Inflection indexes use 26 first-letter files per direction. Do not add `index_en.txt` or `english_suggestions.js/.json` back. Runtime codecs live in `src/common/dictCodec.js` — keep generator and runtime codecs in sync.

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
