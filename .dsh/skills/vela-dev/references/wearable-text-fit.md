# Wearable Text Fit and Clipping Prevention

Use this reference before sizing buttons, list rows, cards, tabs, or other fixed containers that hold text on Vela wearables.

## Core rule

Do not estimate a button from `font-size × character count` alone. Reserve space independently for:

- text glyph width and font-weight variance
- icons
- icon/text gaps
- padding or margins
- borders
- scaling and pixel-rounding error
- curved-screen safe areas

## Horizontal fit

For an icon-and-label control, require:

```text
button width >= border-left + icon-left-gap + icon-width + icon-text-gap
              + estimated-text-width + right-safety-gap + border-right
```

Estimate CJK text conservatively:

```text
estimated-text-width = CJK character count × font size × width factor
```

Use these starting factors:

| Text | Width factor |
|------|--------------|
| Regular CJK | 1.00–1.04 |
| Bold CJK | 1.04–1.08 |
| Unknown device font | 1.08 |
| Mixed Latin/CJK | measure or use 1.10 |

Add at least 8–12px of right-side reserve after the estimate. For bold labels or unknown system fonts, prefer 10–16px.

### Example: four-character 20px bold label

```text
text width ≈ 4 × 20 × 1.08 = 86.4px

2px borders              4px
left gap                 8px
icon                    22px
icon/text gap            4px
bold CJK text           87px
right reserve            8px
--------------------------------
minimum button width    133px
```

If the control is too narrow, reduce icon size and nonessential gaps before reducing readable text below the project's minimum font size.

## Vertical fit

Prevent baseline, descender, or bottom-edge clipping with:

```text
button height >= font size × line-height factor + top/bottom safety space
```

Use `1.2–1.4` as the initial line-height factor when the actual system-font metrics are unknown. A 20px bold label typically needs 24–28px of glyph/line-box height before adding vertical safety space.

For touch controls, the touch-target requirement usually produces a taller container than the text minimum. Prefer at least:

- 42–46px for compact secondary actions
- 46–50px for normal band buttons
- 60–72px when wide watch layouts have room

Do not set a child `text` height smaller than its font line box. If text is inside a fixed-height parent, verify both the text node and the parent.

## List rows and cards

For fixed-height rows, budget every vertical contribution:

```text
row height >= top padding
            + title line boxes
            + title/description gap
            + description line boxes
            + metadata gap and line box
            + bottom padding
```

Common clipping causes:

- `lines: N` truncates content earlier than expected
- fixed `list-item` height is smaller than wrapped children
- the text node uses `height` instead of natural/auto height
- font size was increased without increasing the parent height
- bold weight changes the real font metrics
- multiple margins are counted visually but not in the original estimate

For variable content, prefer natural text height inside a sufficiently tall list item. When Vela requires a fixed list-item height, calculate from the maximum supported line count, not the typical case.

## Responsive width calculation

When a grid uses percentage widths, calculate the narrowest supported device first:

```text
grid width = screen width × grid percentage
card width = grid width × card percentage
```

Then apply the complete icon-and-label formula. Include 1–2px tolerance for Vela scaling and rounding.

Example for a 336px screen:

```text
grid width = 336 × 0.84 ≈ 282px
card width = 282 × 0.47 ≈ 133px
```

Test the longest label at this smallest card width. A layout that fits only the average label is not safe.

## Curved-screen safety

Full screen width is not usable near the top and bottom of circle or pill-shaped screens. Treat the screen's central width and its curved-edge safe width as separate constraints.

- Keep long labels and paired controls away from narrow top/bottom chords.
- Move secondary controls upward before shrinking text.
- Use a narrower central grid on circles than on rectangles.
- Validate the bottom row independently; vertically fitting the page does not guarantee the row fits inside the curved horizontal safe area.

## Implementation workflow

1. Identify the smallest target screen and longest visible label.
2. Lock the minimum readable font size first.
3. Estimate text with the conservative width factor.
4. Add borders, icons, gaps, padding, and safety reserve.
5. Calculate percentage layouts at the smallest device width.
6. Calculate total vertical content height and curved-edge position.
7. Build with the real Vela toolchain.
8. Capture the narrowest, shortest, rectangular, and circular targets when emulator/device operation is authorized.
9. Check the final glyph, baseline, right edge, bottom edge, and CJK wrapping directly.

Static calculation eliminates obvious failures but does not replace a rendered screenshot. Device fonts and Vela rounding can differ, so keep safety reserve and visually verify the smallest target.
