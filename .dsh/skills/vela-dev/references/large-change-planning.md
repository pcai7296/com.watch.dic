# Large Change Planning

Use this reference before changing a Vela app in ways that can easily spill across pages, devices, routing, data flow, or packaging. This is the planning pattern distilled from a real homepage multi-screen adaptation on a Band app, rewritten as a reusable workflow.

## When to Read

Read this before editing when the task includes one or more of these:

- homepage or entry-page redesign
- multi-screen or multi-shape adaptation
- shared `app.ux` state changes
- layout changes that must not affect other pages
- requests framed as "optimize", "adapt", "refactor", or "make it fit all devices"
- any change where an apparently local tweak can cascade into router, startup, or global CSS behavior

## Core Planning Goal

Do not start from code writing. First reduce the problem into:

1. exact scope
2. forbidden impact surface
3. runtime/device constraints
4. smallest safe edit surface
5. proof path

For Vela wearable apps, success is usually not "best looking layout". Success is "the intended page adapts cleanly without breaking build, startup, navigation, or neighboring pages".

## Planning Sequence

### 1. Freeze the requested scope

Write down:

- which page(s) may change
- which page(s) must not change
- whether routes, storage keys, APIs, and manifest may change
- whether emulator or real-device validation is in scope

If the request says "only optimize homepage", treat every non-homepage file as protected unless a global file must change for runtime detection.

### 2. Inspect the real baseline before designing

Read the files that actually control the behavior:

- `src/app.ux`
- target page `.ux`
- `src/manifest.json`
- any shared component touched by the target page

Also inspect current screenshots, packaged output expectations, and project-level conventions such as minimum font size and emulator policy.

Do not redesign from memory. Use the existing visual hierarchy, spacing language, and component shapes as the baseline style system.

### 3. Convert screenshots and device specs into layout profiles

For multi-screen Vela work, convert raw width/height/shape into a small number of runtime profiles. Prefer semantic profiles over one-off device hardcoding.

Example pattern:

- `circle`
- `rect`
- `pill-standard`
- `pill-compact`

Use ratios or shape plus ratio, not only exact pixel equality, so future near-size devices still map correctly.

Good profile rules:

- deterministic
- readable in code
- stable under nearby resolutions
- narrow enough to drive layout decisions without condition explosion

### 4. Separate runtime detection from page layout

If the app already detects width/height/shape at startup, extend that pipeline rather than creating unrelated detection logic inside each page.

Preferred split:

- `app.ux`: detect and publish screen facts
- page `.ux`: consume a small derived profile and switch local classes/layout

This keeps the global part data-only and the page part presentation-only.

### 5. Check whether the obvious technical route is actually safe

Before committing to a technique, inspect project history and prior failures. In Vela projects, the "officially supported" path may still be unsafe in the actual runtime/toolchain mix.

Required checks for high-risk changes:

- search git history for the same feature or syntax
- search for prior removal commits and why they happened
- search build/runtime notes for the same API, selector, or media-query family

Example lesson:

- shape media queries looked like the cleanest solution
- project history showed they had already triggered native crashes on real Vela runtime paths
- the safer design became runtime classification plus ordinary classes

Do not ship the elegant path if repo evidence says it is brittle on target devices.

### 6. Choose the smallest safe edit surface

For broad UI adaptation, prefer a minimal file set. A good target shape is:

- one global runtime detection file
- one affected page file
- one design/reference note if needed

Avoid touching:

- unrelated pages
- manifest unless required
- shared components unless adaptation truly belongs there
- build/deploy scripts unless the task includes them

The smaller the edit surface, the lower the regression chance and the easier the rollback.

### 7. Preserve behavioral invariants explicitly

Before editing, list the things that must stay unchanged:

- button order
- click handlers
- routes
- storage keys
- icons
- page entry flow
- gesture behavior
- global theme tokens

During implementation, treat these as fixed rails. Only change layout, spacing, sizing, and profile selection unless the user asked for more.

### 8. Use class-driven branching before structural branching

For Vela `.ux`, prefer a single page template with profile-specific classes when the behavior is the same and only layout differs.

Prefer:

- `page-{{screenProfile}}`
- `button-group-{{screenProfile}}`
- `footer-{{screenProfile}}`

Only split template branches when structure truly diverges. This keeps logic simpler and reduces event duplication risk.

### 9. Plan compact-first for failure cases

The riskiest device is usually the narrowest or shortest safe area. Design the compact profile first or at least compute against it first.

For each candidate layout, verify:

- minimum readable font remains at or above project floor
- main actions remain fully visible
- bottom controls stay above curved or clipped areas
- decorative assets do not consume critical safe area

If the smallest profile fits, larger profiles usually need only spacing expansion.

### 10. Reserve explicit space for text and icons

When choosing button/card dimensions, account for:

- left/right padding
- border width
- icon width
- icon-text gap
- CJK glyph width variance
- line-height ascent/descent reserve
- runtime rasterization differences

Read `wearable-text-fit.md` for formulas. Do not size buttons from visual guesswork alone.

### 11. Prefer no-op compatibility for other pages

If a global file must gain new fields, add them in a backward-compatible way:

- keep existing field names untouched
- add new derived fields as read-only extras
- ensure old pages that only read width/height/shape still work

Example:

- preserve `screenWidth`, `screenHeight`, `screenShape`
- add `screenAspectRatio`, `screenProfile`

This is safer than replacing the old contract.

### 12. Validate in the same order the risk was introduced

Use a staged check sequence:

1. formatting/lint on changed target files only when possible
2. build
3. static reasoning against each intended profile
4. screenshot/device QA only if requested or allowed

If the user forbids emulator work, do not compensate by making stronger claims than the available evidence supports.

## Planning Heuristics

Use these decision rules during design:

- If one page changes and six pages must not, bias toward page-local classes over shared component rewrites.
- If a runtime trick depends on fragile selectors or unsupported syntax, prefer explicit JS-derived state.
- If two device families share layout intent, merge them into one profile only when spacing, not structure, differs.
- If decoration fights action visibility, remove decoration on the constrained profile first.
- If a "cleaner" abstraction increases the number of touched files, it is usually the wrong move for a compatibility-sensitive watch app.

## Questions to Answer Before Editing

Answer these concretely, even if only in your own notes:

- What is the exact target page and what pages are out of scope?
- What runtime facts already exist, and which new fact is actually missing?
- Which device profile is most space-constrained?
- Which prior implementation path already failed in this repo or toolchain?
- What is the minimum file set that can solve the request?
- What evidence will count as success if simulator/device QA is not allowed?

If any of these stay fuzzy, the edit usually becomes broader than necessary.

## Example Reference Pattern

The homepage multi-screen adaptation that informed this workflow followed this chain:

1. lock scope to homepage only
2. preserve route logic, handlers, manifest, and other six pages
3. inspect existing screenshots and device matrix
4. classify screens into `circle`, `rect`, `pill-standard`, `pill-compact`
5. search git history for media-query support and discover prior crash/removal evidence
6. reject shape media queries despite their apparent simplicity
7. extend `app.ux` with ratio plus profile only
8. keep all layout branching inside homepage classes
9. preserve 18px minimum text and existing button semantics
10. build successfully before claiming completion

That sequence is the model. Reuse it instead of jumping straight to CSS or template edits.

## Deliverable Shape for Major Changes

For substantial Vela UI changes, aim to leave behind:

- the code change
- a short design/reference note if new layout rules were invented
- a concise explanation of scope boundaries and compatibility strategy

Future maintainers should be able to answer "why this approach instead of the obvious one" from the preserved notes.
