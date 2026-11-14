# Visual QA Rules For Animated Vela UI

## Avoid One-Frame Misjudgment

- Do not classify marquee text as broken from a single screenshot.
- Capture at least 6-10 frames at 250-500 ms intervals when judging marquee, loading dots, page transitions, or any timed animation.
- Compare whether all required text appears across the frame sequence, not whether every frame contains the whole string.
- A single cropped frame is acceptable for marquee if adjacent frames reveal the missing segment.

## Marquee Checks

Mark marquee as healthy when:

- Text moves consistently across frames.
- Missing left/right portions appear in other frames.
- Duplicate marquee copies do not overlap into unreadable characters.
- Static surrounding labels remain stable.

Mark marquee as defective when:

- Characters overlap in every sampled frame.
- Text never moves across sampled frames.
- Required text never appears in any sampled frame.
- The animation covers buttons, headers, or cards that should stay readable.

## Loading Animation Checks

For loading text such as `搜索中.`:

- Sample frames for at least one full expected cycle.
- Verify the dot count changes over time and eventually resets.
- Verify the action completes or times out intentionally.
- If returning to the prior page leaves loading text visible, treat it as stale state.

## Interaction Checks

- Capture before and after every tap.
- If no visible change occurs, do not assume the app failed until the tap coordinate is checked against the screenshot.
- For rounded or capsule screens, avoid edges and clipped control areas unless testing edge accessibility.
- When buttons are partially hidden, test both the visual center and the actually visible center.

## Reporting

When reporting animated UI findings, include:

- Device target and resolution if known.
- Number of frames and interval.
- Whether the issue appears in one frame or all frames.
- The exact UI region affected.

