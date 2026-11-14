# Imported Agent Workflow Notes

Source: `J:\code\MI band\Chemistry Toolbox\my-app`

Imported on: 2026-07-03

This file distills useful cross-agent workflow material from `.claude`, `.github`, `.kiro`, and `.workflow`. Platform-specific wrappers, hooks, commands, MCP config, and session scripts were not copied directly because they target Claude/GitHub/Kiro automation rather than Codex.

## What Was Useful

- Three-stage app flow: requirements, technical design, implementation.
- Checkpoint discipline: confirm assumptions, record outputs, validate before moving on.
- Vela-specific coding and quality gates.
- Design-to-implementation reminders for Figma/screenshots.
- Project initialization guardrails.

## What Was Skipped

- Claude command files and shell hooks.
- GitHub Copilot agent prompt wrappers.
- Kiro hooks/settings.
- `.workflow/scripts/*` session/checkpoint/Figma automation, because it depends on that template runtime.
- Duplicate prompts that repeat the same Vela docs already covered by `vela-quickapp-docs`.

## Compact Workflow

Use this flow when the user asks for a new Vela app, a large feature, or a significant UI redesign.

1. Clarify the goal only when required to avoid wrong implementation.
2. Identify target device, screen size, data source, navigation model, and whether release packaging is required.
3. Produce or infer a minimal PRD:
   - user goal
   - primary screens
   - expected interactions
   - data/storage requirements
   - validation criteria
4. Create a lightweight technical plan:
   - page/component structure
   - state and storage keys
   - Vela APIs/components needed
   - performance risks
   - build/test commands
5. Implement in the existing project style.
6. Run validation:
   - static checks or project check scripts
   - `npx aiot build`
   - release copy to Downloads when release package is generated
7. Report exact files changed and verification results.

For small bug fixes, skip formal PRD/tech-design output and apply the same reasoning internally.

## Checkpoint Rules

- Before editing: read the relevant existing `.ux`, service, data, and manifest files.
- Before creating a new page: confirm route naming and existing project structure.
- Before adding new data: consider runtime memory and package size.
- Before introducing images: verify decode cost and whether CSS/simple components are enough.
- Before finishing: run the local validation that matches the change.

## Project Initialization Guardrails

For brand-new Vela projects:

- Prefer official or existing project scaffold commands when available.
- Confirm target type and screen before writing UI.
- Ensure the minimum app structure exists:
  - `package.json`
  - `src/manifest.json`
  - `src/app.ux`
  - `src/config-watch.json`
  - at least one page under `src/pages/`
- Do not create a mixed web/Vela project unless explicitly requested.
- Avoid pulling large third-party dependencies into wearable quick apps.

## Design Input Handling

When the user provides a screenshot, image, or Figma reference:

- Extract concrete layout facts: screen size, safe area, primary controls, text hierarchy, colors, spacing, and asset needs.
- Prefer native Vela components and CSS over bitmap-heavy UI.
- Use generated or exported bitmaps only for visuals that cannot be represented cheaply.
- Verify that text remains readable on the target wearable screen.
- If a visual detail conflicts with performance or device stability, keep the user-visible effect with a cheaper implementation.

## Large Data and Long List Rule

For wearable apps, treat any list over a few dozen visible rows or any large generated dataset as a performance-sensitive path:

- build indexes at import/build time when possible
- keep runtime records compact
- lazily expand detail objects
- render only visible rows/cards plus a small buffer
- avoid reconstructing style strings and arrays on every scroll/touch event
- test on real hardware when the simulator looks fine but the app still feels risky
