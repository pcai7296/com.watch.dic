# Audit: W336 Branch Parity — W432 & W466

> Generated 2026-08-15. Baseline: w336 (HEAD 56a4eab). Targets: w432, w466.

## Summary

**CRITICAL FINDING:** w432 and w466 are **byte-identical clones** of each other (same line counts, same hash for all JS/common files). They share a pre-adaptation state that lacks most w336 logic fixes. Each must be differentiated and brought to w336 parity independently.

## Common Layer

| File | w336 | w432 | w466 | Action |
|------|------|------|------|--------|
| `buildTarget.js` | ✅ | ❌ MISSING | ❌ MISSING | **COPY from w336** (must fix) |
| `navGuard.js` | ✅ | ❌ MISSING | ❌ MISSING | **COPY from w336** (must fix) |
| `dictCodec.js` | ✅ | ✅ identical hash | ✅ identical hash | No action needed |
| `suggestionState.js` | ✅ | ✅ identical hash | ✅ identical hash | No action needed |
| `AGENTS.md` | ✅ | ✅ | ✅ | No action needed |
| Icons PNGs | ✅ (269 shards + icon PNGs) | ✅ | ✅ | No action needed |

## Page Line Counts (w336 → w432 → w466)

| Page | w336 | w432 | w466 | Δ vs w336 |
|------|------|------|------|-----------|
| index | 376 | 422 | 422 | +46 (both branches) |
| search | 908 | 883 | 883 | -25 |
| detail | 683 | 654 | 654 | -29 |
| records | 741 | 731 | 731 | -10 |
| results | 2165 | 2155 | 2155 | -10 |
| filter | 443 | 452 | 452 | +9 |
| about | 424 | 413 | 413 | -11 |
| settings | 227 | 226 | 226 | -1 |
| sponsor | 110 | 107 | 107 | -3 |

## Missing Logic (all 9 pages in both branches)

### navGuard — ZERO pages have it
```
w432 index : navGuard=False hasRouter=True  ← needs navGuard guard on every router.* call
w432 search : navGuard=False hasRouter=True
... (all 9 pages, both branches)
```
**Every page in both w432 and w466** calls `router.push`/`router.back`/`router.replace` but none has `import { navGuard }` or `if (!navGuard()) return`.

### isFavorited bugfix — zero matches
```
w432 detail.ux isFavorited count: 0
w466 detail.ux isFavorited count: 0
```
**Both branches lack the `isFavorited` private property, the `writeFavoriteList`/`refreshFavoriteState` updates, and the template condition.** The favorite toggle bug is unpatched in both.

### screenProfile — wrong values in 3 pages

| Page | w432 current | w432 should be | w466 current | w466 should be |
|------|-------------|----------------|-------------|----------------|
| index | `"rect"` ✅ | `"rect"` | `"circle"` ✅ | `"circle"` |
| search | `"rect"` ✅ | `"rect"` | `"circle"` ✅ | `"circle"` |
| detail | (not grep'd) | `"rect"` | (not grep'd) | `"circle"` |
| records | (not grep'd) | `"rect"` | (not grep'd) | `"circle"` |
| results | (not grep'd) | `"rect"` | (not grep'd) | `"circle"` |
| **filter** | `"pill-standard"` ❌ | **`"rect"`** | `"pill-standard"` ❌ | **`"circle"`** |
| **about** | `"pill-standard"` ❌ | **`"rect"`** | `"pill-standard"` ❌ | **`"circle"`** |
| **settings** | `"pill-standard"` ❌ | **`"rect"`** | `"pill-standard"` ❌ | **`"circle"`** |

## UI Structure — w336 index.ux vs w432/w466

Both w432 and w466 already have the w336-style layout elements:
- ✅ `icon-card` with `deco-icon`
- ✅ `button-group` with 4 `main-button` (transform, search, history, favorites)
- ✅ `bottom-row` with 2 `small-button` (about, sponsor)

**But they lack:**
- ❌ Clock display (no `time-text`, no `tc0`-`tc4`, no `timeTimer`/`_updateTime`)
- ❌ Subtitle text (no "快速查词" / "phrase decode" description)
- ❌ Main search button (no large `main-btn` that occupies center area)
- ❌ `device.getInfo` call
- ❌ `_trackLaunch`, `_cleanInvalidHistory` methods

## InputMethod
- All 3 branches have identical InputMethod component structure.
- w432: use `screentype="rect"` → needs rectangular keyboard CSS
- w466: use `screentype="circle"` → needs circle keyboard CSS scaled to 466

## Action Items (ordered by priority)

1. **Task 2 / Task 10**: Copy `navGuard.js` + `buildTarget.js` from w336 to w432 and w466
2. **Task 3 / Task 11**: Rewrite `index.ux` — add clock, subtitle, main search btn, navGuard guards, JS methods
3. **Task 5 / Task 13**: Rewrite `detail.ux` — add isFavorited bugfix, marquee speeds, heart icon switch
4. **All pages**: Add `navGuard` import + guards to every page
5. **All pages**: Fix `screenProfile` in `filter/about/settings` from `"pill-standard"` to branch-appropriate value
6. **Task 4/12 search, Task 6/14 records/results/filter, Task 7/15 about/settings/sponsor**: Port remaining w336 logic, scale CSS

## Scale Factors (from plan)

- **W432**: X × 1.2857, Y × 1.0708, font-size × 1.15, border-radius × 1.2
- **W466 safe area**: 330×330 inscribed square, effective 310×310 (10px margin), scale ≈ 0.923

*End of audit.*