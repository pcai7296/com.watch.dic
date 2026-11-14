# Official QuickApp Docs Operational Guide

This reference distills official Xiaomi Vela QuickApp documentation into rules Codex should apply while building, debugging, packaging, and answering questions about Vela JS apps.

Source:
- Local docs (可读版本): `organized_docs/` — `components/` 和 `features/` 共 60+ 文件
- 总索引: `organized_docs/index.md`
- Online base: `https://iot.mi.com/vela/quickapp/zh/`
- Online doc map: `references/docs-map.md`

文档查找顺序：
1. `organized_docs/index.md`（总索引 → 定位具体文件）
2. `organized_docs/components/<分类>/<组件名>.md` 或 `organized_docs/features/<分类>/<api名>.md`
3. 本文件（蒸馏规则 + 检查清单）
4. 在线官方页面（需要最新内容时）

## Task Router

Use this table to choose the official documentation area before coding or answering.

| Task | Primary docs area | Representative route |
| --- | --- | --- |
| New app scaffold | guide/start and guide/framework/project-structure | `/zh/guide/start/project-overview.html`, `/zh/guide/framework/project-structure.html` |
| Manifest, package identity, feature declarations, routes | guide/framework/manifest | `/zh/guide/framework/manifest.html` |
| `.ux` file anatomy | guide/framework/ux | `/zh/guide/framework/ux.html` |
| Template syntax, loops, conditionals, events, props | guide/framework/template | `/zh/guide/framework/template/` |
| Script, lifecycle, page data | guide/framework/script | `/zh/guide/framework/script/` |
| CSS/layout/media queries | guide/framework/style | `/zh/guide/framework/style/` |
| Page navigation and launch mode | guide/framework/page-switch and other/launch-mode | `/zh/guide/framework/page-switch.html` |
| Background execution | guide/framework/other/background-running | `/zh/guide/framework/other/background-running.html` |
| Built-in UI components | components/basic, container, form, general | `/zh/components/` |
| Device/system/data/network APIs | features/basic, data, network, system, other, security | `/zh/features/` |
| Multi-screen wearable adaptation | guide/multi-screens and guide/design | `/zh/guide/multi-screens/`, `/zh/guide/design/multi-screens.html` |
| Startup, memory, business optimization | guide/best-practice | `/zh/guide/best-practice/` |
| AIoT IDE debug, logs, emulator, build settings | tools/debug, tools/emulator, tools/dev | `/zh/tools/debug/`, `/zh/tools/emulator/` |
| Packaging and release | tools/release and guide/publish | `/zh/tools/release/start.html`, `/zh/guide/publish/` |

## Project Anatomy Rules

From the official project and framework pages:

- A QuickApp project is organized around `manifest.json`, `app.ux`, and page `.ux` files.
- `manifest.json` contains application description, interface declarations, page routes, global config, display config, and permissions.
- Page `.ux` files implement UI template, style, data, and event logic.
- Page directories and `manifest.router.pages` entries must agree; a page without routing information can be skipped during compile/package.
- Keep `src/config-watch.json` or equivalent device config aligned with target wearable form factor when the local project uses it.

## Manifest Checklist

When creating or changing `manifest.json`, check:

- `package`: unique app package name, usually `com.company.module`.
- `name`: short app name; official docs describe the store/display name limit as within 6 Chinese characters.
- `icon`: provide an app icon; official docs say 192x192 is sufficient.
- `versionCode`: integer version number, increment on re-upload/release.
- `versionName`: user-facing version string when needed.
- `minAPILevel`: set high enough when using APIs added in newer API levels.
- `features`: declare most system/feature APIs here before calling them.
- `permissions`: add runtime permissions for APIs that require them, such as location or device information.
- `config.logLevel`: use a useful level while debugging; reduce noise for release.
- `config.designWidth`: use when the project relies on design-width scaling.
- `config.background.features`: only for APIs that need background execution, and still declare those APIs in top-level `features`.
- `router.entry`: homepage page name.
- `router.pages`: every packaged page, with `component`, optional unique `path`, and optional `launchMode`.
- `display.backgroundColor`: global window background when needed.
- `deviceTypeList`: watch is the currently documented wearable target.

## Router and Navigation Rules

- `router.pages.<Page>.component` must match the `.ux` filename, for example component `hello` maps to `hello.ux`.
- If `path` is omitted, it defaults to `/<page-name>`.
- `path` must be unique.
- `launchMode: "standard"` creates a new page instance on each open.
- `launchMode: "singleTask"` reuses an existing page and calls `onRefresh`; use this only when the app is designed for that behavior.
- Use official router docs before assuming URL parameter or navigation behavior.

## UX File Rules

- `.ux` files are built from `template`, `style`, and `script`.
- Keep the template structure simple and compatible with Vela parser constraints.
- Use explicit event handlers rather than complex inline expressions.
- Put app-wide utilities and persistent background behavior in `app.ux` when lifecycle stability matters.
- If a template or generated project uses a manifest placeholder in `app.ux`, do not remove it without confirming the build pipeline.

## Components and Styles

Use official component docs before adding non-obvious props/events/styles.

Component groups:
- Basic: `a`, `barcode`, `chart`, `image`, `image-animator`, `marquee`, `progress`, `qrcode`, `span`, `text`.
- Container: `div`, `list`, `list-item`, `scroll`, `stack`, `swiper`.
- Form: `input`, `picker`, `slider`, `switch`.
- General: common properties, events, methods, style, color, animation style, background image style.

Practical rules:
- Prefer documented native components over HTML assumptions.
- For long lists, check list/scroll behavior and performance before hand-rolling.
- For wearable screens, verify text overflow, line wrapping, touch targets, and scroll behavior.
- Use media query and multi-screen docs when adapting circular, rectangular, and capsule screens.

## Feature API Rules

Feature groups:
- Basic: app context, configuration, device info, router.
- Data: file and storage.
- Network: fetch, interconnect, request/download, uploadtask.
- System: alarm, battery, bluetooth, brightness, event, geolocation, network info, record, sensor, vibrator, volume, zip.
- Other: audio, prompt, protobuf, serviceclient, velaclaw, googlewallet.
- Security: crypto, secureelement.

Before using an API:
- Check whether it must be declared in `manifest.features`.
- Check whether it requires `permissions`.
- Check callback signatures and error codes.
- Check target device/APILevel support instead of assuming Android/web parity.

## Background Execution

Official background-running docs state that background execution requires both:
- the background interface declared in `manifest.config.background.features`
- at least one declared background interface actively running

Use background mode cautiously because it consumes system resources and may affect review. For music, sports, location, request/upload/download, or audio-like long-running behavior, put durable logic in `app.ux` rather than a page that can be destroyed during navigation.

## Build, Debug, and Tooling

Use official tool docs for:
- AIoT IDE overview and UI
- creating/managing projects
- build settings
- compile preview
- debug/run
- logs
- memory analysis
- emulator device management and start
- toolkit upgrade/migration
- packaging and release

Operational rules:
- Build locally with `npx aiot build` unless the project has a more specific script.
- For IDE-specific failures, inspect AIoT IDE's own SDK/plugin/device state; do not assume `npx aiot` tells the whole story.
- When logs are needed, use the IDE/tool docs and device logs, then narrow by package name or recent runtime errors.
- For packaging, use the latest successful `dist/*.release.*.rpk` after build verification.

## Optimization Rules

Use official best-practice pages for:
- startup latency optimization
- memory optimization
- common business optimization

Distilled behavior:
- Reduce first-screen work; delay non-critical requests and heavy computation.
- Keep page initialization small and predictable.
- Avoid large hidden DOM/component trees on constrained wearable devices.
- Release timers/subscriptions/listeners in lifecycle hooks.
- Avoid repeatedly constructing large data structures in render-sensitive paths.
- Use documented list/scroll components for large scrolling UI.
- For business flows, minimize unnecessary page switches and repeated requests.

## Release and Review

Before release/package delivery:
- Build successfully.
- Confirm `versionCode` has been incremented when producing a new upload.
- Confirm required features and permissions are declared.
- Confirm icon/name/package identity are present.
- Confirm background behavior, if any, is justified and declared correctly.
- Copy or report the final `.rpk` path only after successful build.

## 文档更新

如果用户提到文档内容过时：
1. 访问在线官方页面 `https://iot.mi.com/vela/quickapp/zh/` 确认最新内容。
2. 如果本地 `organized_docs/` 与线上有差异，通知用户需要更新本地副本。
