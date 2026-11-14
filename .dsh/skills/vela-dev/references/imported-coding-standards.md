# Imported Vela Coding Standards

Source: `J:\code\MI band\Chemistry Toolbox\my-app\.claude\rules` and related skill files.

Imported on: 2026-07-03

This is a distilled Codex-oriented version of the usable rules. Prefer the current project's working patterns over rigid template rules when they conflict.

## `.ux` File Structure

Use the normal Vela single-file shape:

```ux
<template>
</template>

<style>
</style>

<script>
export default {
  private: {},
  public: {},
  onInit() {},
  onReady() {},
  onShow() {},
  onHide() {},
  onDestroy() {}
}
</script>
```

Rules:

- Keep template, style, and script concerns separated.
- Avoid unsupported template expression tricks in event handlers.
- Prefer explicit handler methods over inline logic.
- Use conditional/list rendering in the style already used by the target project.
- Keep page state under `private` unless external component access requires `public`.

## Component Imports and Naming

- Use `<import>` only for custom components that the project actually contains.
- Keep custom component filenames and tags consistent.
- Do not import native Vela components such as `div`, `text`, `list`, `scroll`, or `image`.
- Avoid introducing unused custom components.

## CSS Rules

- Prefer class selectors.
- Avoid deeply nested selectors and preprocessor-only syntax unless the project already uses and builds it.
- Keep CSS simple enough for Vela's compiler and runtime.
- Prefer fixed classes over dynamic style strings in hot paths.
- Keep repeated colors, sizes, and layout patterns consistent with the existing app.

Suggested property order:

1. layout/display/flex
2. position/left/top/right/bottom
3. width/height/margin/padding
4. background/border/radius
5. font/text/color
6. transform/animation

## Layout on Wearables

- Design first for the actual device screen, especially 212x520 Band 10-style displays.
- Preserve top/bottom safe space around capsule/round corners.
- Keep touch targets large enough for fingers.
- Prefer vertical flows, cards, and reader/list layouts over dense grids.
- When content exceeds one screen, use `list`/reader-style rendering instead of mounting everything.
- Avoid overlapping fixed layers unless the touch and visual behavior has been tested.

## Lifecycle and Cleanup

- Use `onInit` for minimal state setup.
- Use `onReady` only for work requiring mounted nodes or layout.
- Use `onShow`/`onHide` for page visibility behavior.
- Clear timers, intervals, pending animation loops, subscriptions, and large temporary arrays in `onHide` or `onDestroy`.
- Close or reset transient overlays/details when leaving heavy pages if they hold extra rendered content.

## API Calls

- Import Vela system APIs from the documented `@system.*` modules used by the project.
- Wrap callback-style APIs into small helper methods only when it reduces repeated error handling.
- Always handle failure callbacks or rejected promises for storage, network, file, and device APIs.
- Keep user-facing errors short on wearable screens.
- Declare required features/permissions in `manifest.json` when the API requires it.

## Manifest and Project Shape

For new or repaired projects, confirm these basics:

- app package/name/version fields are present
- router pages match real page directories
- display/device target config is present
- features list covers used system APIs
- `src/app.ux` exists
- `src/config-watch.json` exists for watch/band targets

When fixing an existing app, do not churn manifest fields unrelated to the task.

## Quality Gate

Before finishing Vela changes:

- Read the exact build error before patching.
- Run the repo's check command when available.
- Build with `npx aiot build`.
- For release work, run the release command and copy the latest release `.rpk` to Downloads.
- Verify no obvious stale emulator/qemu process is serving old state, while keeping AIoT IDE open unless the user asked to close it.
- For UI changes, inspect screenshot/simulator output when available.

## Prohibited or Risky Patterns

- Large third-party dependencies in wearable apps.
- Large PNGs for content that can be rendered as simple text/cards.
- Full rendering of hundreds of nodes when a virtual/reader window can show the same effect.
- Heavy parsing or full dataset expansion during first page load.
- Recreating arrays, objects, or style strings inside high-frequency scroll/touch handlers.
- Blindly copying platform-specific Claude/GitHub/Kiro hooks into a Codex skill.
