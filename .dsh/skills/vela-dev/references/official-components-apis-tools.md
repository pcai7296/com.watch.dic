# Vela QuickApp Components, APIs, and Tools

Sources:

- Components: https://iot.mi.com/vela/quickapp/zh/components/
- JS APIs: https://iot.mi.com/vela/quickapp/zh/features/
- Tools: https://iot.mi.com/vela/quickapp/zh/tools/

Use this file to pick the right official page quickly. For exact property/event names, open the linked page from `doc-map.md`.

## Components

General component pages define shared properties, styles, events, methods, colors, animation style, and background image style. Check these first when a property seems cross-component.

### Basic Components

- `text`: primary text rendering. Use for labels and body copy; verify wrapping/ellipsis/marquee behavior on device.
- `span`: inline text fragment inside text-like contexts.
- `a`: link-like text/navigation use cases.
- `image`: bitmap display; watch decode cost and package size on wearable hardware.
- `image-animator`: frame animation; consider memory impact.
- `marquee`: scrolling text; use for narrow screens and long strings, but keep item count low.
- `progress`: progress indicators.
- `barcode` / `qrcode`: code rendering; verify scan readability after scaling.
- `chart`: chart display; confirm supported data/options on target APILevel.

### Container Components

- `div`: base layout container.
- `list` and `list-item`: scrollable item lists. Prefer for long vertical content; use native scroll events where possible.
- `scroll`: scrollable region; useful for simple content, but large child counts can still be expensive.
- `stack`: overlap/fixed-position style layouts. Use sparingly on small screens because hit testing and layering bugs are harder to debug.
- `swiper`: paged swiping interactions.

### Form Components

- `input`: text input. On band/watch projects, validate keyboard behavior and viewport occlusion.
- `picker`: option selection.
- `slider`: numeric/range controls.
- `switch`: binary settings.

## JS APIs

### Basic

- `app`: application context.
- `configuration`: application configuration.
- `device`: device information.
- `router`: page navigation. Prefer official router examples when route params or replacement behavior matters.

### Data and Files

- `storage`: local persistence for small state and preferences.
- `file`: file storage operations. Check permission and path constraints.

### Network

- `fetch`: data request.
- `request`: download.
- `uploadtask`: upload.
- `interconnect`: device communication.

### System

- `alarm`, `battery`, `bluetooth`, `brightness`, `event`, `geolocation`, `network`, `record`, `sensor`, `vibrator`, `volume`, `zip`.
- For hardware/system features, check APILevel, permission, and device support before implementation.

### Security and Other

- `crypto`, `secureelement`.
- `audio`, `prompt`, `protobuf`, `serviceclient`, `velaclaw`, `googlewallet`.
- Use `prompt` for lightweight user feedback when full page transitions are unnecessary.

## Tools

### AIoT IDE

- Project creation/management, project templates, visual manifest editing, code completion/formatting, AI-generated tutorial support.
- Debug area includes compile preview, debug run, logs, build settings, multi-screen adaptation, optimization score, and memory analysis.
- Emulator pages cover device management and emulator running.

### AIoT Toolkit

- Toolkit docs cover command-line workflow and migration/update behavior.
- Prefer project-local toolkit commands for reproducible builds; use IDE docs when the issue is IDE UI behavior.

### Packaging and Release

- Use packaging docs for local package output.
- Use release docs for app publishing flow and requirements.
- Pair release work with validation from `guide/publish/acceptance-criteria.html`.

## Practical Lookup Patterns

- Build error in `.ux` template/event/style: open framework template/style docs and the specific component page.
- Runtime navigation issue: open `features/basic/router.html` plus `guide/framework/page-switch.html`.
- Persistence or first-run state issue: open `features/data/storage.html`.
- Long list jank: open `components/container/list.html`, then `practices.md`.
- Emulator or IDE stuck: open `tools/emulator/*` and `tools/debug/*`, then use local `vela-dev` notes.
