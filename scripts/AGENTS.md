# scripts/ — Build & Deploy

**Dict generation is Python**; **deploy/build batching is PowerShell**; **webpack conditional compilation is JS**.

## Files

| File | Lines | Role |
|------|-------|------|
| `generate_watch_dict.py` | ~1009 | Build `src/common/dict/` shards (compact-v3) from `data/` corpora |
| `use-dict.ps1` | ~60 | `robocopy /MIR` 把 `dict_repo/<tier>` 灌进 `src/common/dict/`（切档，秒级） |
| `build_product.ps1` | ~120 | **出一个产品包**：暂存 → 换词库 → 删其余四列 → 改包名 → 构建 → 收进 `release_packages/<tier>/` |
| `build_all_products.ps1` | ~70 | 5 分辨率 × 2 档 = 10 个产品包（`npm run build:products`） |
| `build_resolution_packages.ps1` | ~60 | 只按 `TARGET_*` 批量构建开发包（`npm run build:resolutions`），不换词库、不删列 |
| `release_resolution_packages.ps1` | ~68 | 同上但走 `aiot release`（`npm run release:resolutions`） |
| `deploy_watch.ps1` | ~70 | Build RPK + `adb push` + install + launch on emulator-5554 |
| `gen_poster.py` | ~260 | 生成 `..\release_repo\cover.png`（1800×1200，3:2）；`--theme light\|dark`，默认浅色；文案溢出会直接报错 |
| `strip_columns.js` | ~120 | 按 `--target` 物理删除其余四列的 `-192/-212/-336/-432/-466` 规则 |
| `merge_columns.js` | ~320 | 从旧五仓把各列数值合并进基础选择器 + `.xxx-NNN` 覆盖块（一次性工具，重跑会覆盖手调值） |
| `wire_screen_class.js` | ~120 | 向各页 `private:` 注入 `screenClass` 并在 `onShow/onInit` 刷新 |
| `analyze_columns.js` | ~200 | 旧五仓选择器对齐分析（报告用） |
| `conditionalCompilationPlugin.js` / `conditionalCompilationLoader.js` | 15 / 21 | Webpack pre-loader applying `// if true:` / `// endif` blocks; loader sanitizes `process.env` keys first |
| `expand_words.py` | — | Expand English headword coverage (CC-CEDICT single-char glosses → `data/words_ccedict.csv`) |
| `extract_cedict_phrases.py` / `filter_phrases.py` / `trim_phrases.py` | — | Mine / filter / tighten CC-CEDICT multi-word phrases (`data/phrases*.csv`) |
| `check_ids.py` / `check_phrases.py` | — | Offline sanity checks over generated shards / phrases |

## 产品包流水线（build_product.ps1）

同一份源码出 10 个包，`npm run build:products` 一次跑完。

1. `robocopy` 把仓复制到 `.tmp\product\<target>-<profile>`（排除 `.tmp` `node_modules` `dist` `build` `.git`）
2. `node_modules` 用 **junction** 指回真实目录（aiot 自己会重建软链）
3. `robocopy /MIR dict_repo\<tier>` → `src/common/dict/`，并校验 `meta.json.profile`
4. `strip_columns.js --target <width>` 物理删掉其它四列的规则
5. 改 `src/manifest.json` 的 `package`（`com.watch.dic.<target>`）与 `versionName`
6. 设 `TARGET_ID/TARGET_WIDTH/TARGET_HEIGHT` 后 `npm run build`（探测代码被条件编译删除）
7. 产物复制到 `release_packages/<tier>/<target>-<tier>-<version>.rpk`，打印体积 + sha256

**注意**：`.ps1` 必须带 UTF-8 BOM。没有 BOM 时 Windows PowerShell 5.1 按 ANSI 解码中文注释，会出现莫名其妙的 `Unexpected token '}'`。删除暂存目录用脚本里的 `Remove-StageSafe`（先摘 junction 再删，`Remove-Item -Recurse` 会穿透 junction）。


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
