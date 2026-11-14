# Vela QuickApp Best Practices Summary

Sources:

- Best practices entry: https://iot.mi.com/vela/quickapp/zh/guide/best-practice/
- Startup latency: https://iot.mi.com/vela/quickapp/zh/guide/best-practice/start.html
- Memory optimization: https://iot.mi.com/vela/quickapp/zh/guide/best-practice/memory.html
- Business optimization: https://iot.mi.com/vela/quickapp/zh/guide/best-practice/business.html

This file is a paraphrased working checklist. Open the official pages for exact examples.

## Startup Latency

- Avoid artificial startup delays. Do not add `setTimeout` before routing unless there is a product reason.
- If startup depends on async state such as storage, make the decision path await the real result and route immediately afterward.
- Keep the first screen small: load only data needed for the initial screen, defer secondary data, optional cards, large lists, and images.
- Prefer a direct route to the real first task page over splash/logo pages that exist only to delay.
- Avoid heavy parsing, full-dataset mapping, and resource decode work in `onInit` / first render.
- Move expensive static preprocessing to build time when possible.

## Memory Optimization

- Release timers, intervals, listeners, and subscriptions in page hide/destroy lifecycle hooks.
- Avoid keeping full result arrays, full detail objects, and rendered item objects alive when only a screen window is needed.
- For long lists, use a small visible window plus buffer, or convert to a reader-style stream when the list component cannot keep up.
- Store compact data for runtime. Lazily expand records only when a user opens details.
- Avoid repeated style string creation during scroll/touchmove. Prefer CSS classes and cached layout records.
- Avoid decoding large images on low-memory wearable devices. Use smaller resources, vector/simple UI, or list/card representations.
- Remove unused resources and stale generated files from app packages.

## Business Optimization

- Keep business flow foreground-first: fast open, fast action, fast exit.
- Do not force network dependency for offline-capable flows; cache or pre-generate static data where appropriate.
- For search, build indexes ahead of time and query the smallest viable subset on device.
- For broad queries, protect device performance with streaming, virtual loading, filters, or progressive rendering.
- Keep UI states simple and explicit. Avoid nested components that re-render together under frequent input.
- Use page-specific cleanup: clear transient caches when leaving heavy pages if they are cheap to rebuild.

## Vela Wearable Implementation Heuristics

- On small wearable screens, render around the viewport, not the whole dataset.
- Treat `touchmove`, scroll callbacks, and list item construction as hot paths; avoid allocation inside them.
- Use one measured/cached layout model for dynamic-height cards, and update it at low frequency.
- Prefer simple text/card rows over complex interactive grids when the target device is memory constrained.
- When a feature works in simulator but reboots real hardware, suspect resource decode, large object graphs, or too many simultaneously mounted nodes first.
- Verify on device after optimizations; simulator smoothness is not enough.
