# W432 / W466 Adaptation Summary

> Generated: 2026-08-16

## Status

**W432 (432×514 rect)**: ✅ Committed at `77e227b`
**W466 (466×466 circle)**: ✅ Committed at `bc604da`
**w192/w212/w336**: ✅ Unchanged (build artifacts only)

## What Was Done

### W432 — feat(w432): rewrite index/detail, add navGuard to all pages, fix screenProfile

| Change | Description |
|--------|-------------|
| `src/common/navGuard.js` | Created — NAV_LOCK_MS=500 anti-double-click guard |
| `src/common/buildTarget.js` | Created — hardcoded W432 rect profile |
| `src/pages/index/index.ux` | Complete rewrite: clock (tc0-tc4), logo (92×77), main-btn (391×75), 4-grid (180×71), bottom-row (129×51), navGuard on all 7 navigation handlers |
| `src/pages/detail/detail.ux` | Complete rewrite: isFavorited private property, writeFavoriteList/refreshFavoriteState update isFavorited, heart icon switch, cardWidth=412, contentWidth=388, navGuard on goBack/goInflect/swipe-back |
| `src/pages/search/search.ux` | Added navGuard import + device.getInfo + applyScreenInfo + getMaxLength + navGuard guards on onInputBoxClick/onSearchButtonClick/onBackPress |
| `src/pages/records/records.ux` | Added navGuard import + guards on goHistory/goDetail/toggleFavorite |
| `src/pages/results/results.ux` | Added navGuard import + guards on onSearchButtonClick/goDetail/onBackPress |
| `src/pages/sponsor/sponsor.ux` | Added navGuard import + guards on goBack/goHome |
| `src/pages/filter/filter.ux` | Fixed screenProfile: pill-standard → rect |
| `src/pages/settings/settings.ux` | Fixed screenProfile: pill-standard → rect |

### W466 — feat(w466): rewrite index/detail, add navGuard to all pages, fix screenProfile to circle

| Change | Description |
|--------|-------------|
| `src/common/navGuard.js` | Created — NAV_LOCK_MS=500 anti-double-click guard |
| `src/common/buildTarget.js` | Created — hardcoded W466 circle profile |
| `src/pages/index/index.ux` | Complete rewrite: clock, logo (67×57), main-btn (280×65), 4-grid (129×61), bottom-row (92×44), circle-safe-area CSS (padding-top:75px, max-width:280px) |
| `src/pages/detail/detail.ux` | Complete rewrite: isFavorited bugfix, heart icon switch, navGuard guards, circle CSS (cardWidth:290, contentWidth:266, wordAreaMarginLeft:45) |
| `src/pages/records/records.ux` | Added navGuard import + guards on goHistory/goDetail/toggleFavorite |
| `src/pages/results/results.ux` | Added navGuard import + guards on goBack/openDetail |
| `src/pages/sponsor/sponsor.ux` | Added navGuard guards on goBack/onTouchEnd swipe-back, circle CSS, removed back button (swipe only) |
| `src/pages/filter/filter.ux` | Fixed screenProfile: pill-standard → circle |
| `src/pages/about/about.ux` | Fixed screenProfile: pill-standard → circle |
| `src/pages/settings/settings.ux` | Fixed screenProfile: pill-standard → circle |

## Build Verification

| Branch | Result | Duration |
|--------|--------|----------|
| w192 | ✅ Pass | (baseline, unchanged) |
| w212 | ✅ Pass | (baseline, unchanged) |
| w336 | ✅ Pass | 3152ms |
| w432 | ✅ Pass | 3537ms |
| w466 | ✅ Pass | 3220ms |

## Scale Factors Applied

- **W432 from W336**: X × 1.286, Y × 1.071, font-size × 1.15, border-radius × 1.2
- **W466 from W336**: uniform × 0.923 (fits within 310×310 safe square), padding-top: 75px

## Key Logic Fixes Ported

- ✅ `navGuard()` anti-double-click on ALL navigation handlers
- ✅ `isFavorited` private property + both update sites (bugfix)
- ✅ `writeFavoriteList()` + `refreshFavoriteState()` update `isFavorited`
- ✅ `onBackPress()` swipe-back guard with navGuard
- ✅ `_trackLaunch()` + `_cleanInvalidHistory()` on index
- ✅ `device.getInfo()` + `applyScreenInfo()` on search
- ✅ `NAV_LOCK_MS=500` in navGuard.js

## Known Residual Items

- **about.ux** (w466): CSS not fully tuned for circle — version display works but layout could be refined
- **records.ux** (w466): CSS not fully tuned for circle — list layout needs review
- **InputMethod** (w466): Circle keyboard layout not yet scaled from 480×321 to fit 466 circle safe area (Task 16 skipped for v1)
- **InputMethod** (w432): Uses existing rect keyboard, not reviewed for w432-specific scaling (Task 8 skipped for v1)

## Next Steps

1. Deploy w432 and w466 RPK to test devices (REDMI Watch 5 for w432, 466 circle device for w466)
2. Manually verify UI layout on actual devices — especially the 432×514 aspect ratio on REDMI Watch 5
3. Consider porting remaining missing logic from w336 (marquee speed calibration, English auto-suggestion tuning for new screen sizes)
4. Review InputMethod component for both branches (Tasks 8 and 16 from original plan)
5. Consider updating AGENTS.md in both branches to reflect new UI layout and changes

## Git Log

```
w432: 77e227b feat(w432): rewrite index/detail, add navGuard to all pages, fix screenProfile
       (parent: 280abd4 initial commit)

w466:  bc604da feat(w466): rewrite index/detail, add navGuard to all pages, fix screenProfile to circle
       (parent: 5dfb165 initial commit)
```

*End of summary.*