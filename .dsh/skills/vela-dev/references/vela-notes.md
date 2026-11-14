# Vela Notes

## Confirmed environment

- Build with `aiot-toolkit` / `npx aiot build`
- Minimum required project files include:
  - `src/app.ux`
  - `src/config-watch.json`
  - `src/manifest.json`
  - page `.ux` files
- Missing `src/app.ux` or `src/config-watch.json` can trigger app-file-missing style errors

## Screen/device notes

- Xiaomi Band 10 is not round; it is a **212x520 跑道屏**
- Design for vertical space and narrow width
- Large buttons and scrollable lists are usually safer than dense dashboard layouts
- Foreground apps are more reliable than background-heavy concepts

## UI guidance

- Prefer dark background + high contrast text for wearable readability
- Home page should not cram too many options in one static block
- Use scrollable list/card layouts when there are multiple entries
- Keep one primary action per screen when possible

## Text/button caveat

- Device rendering may fail for symbolic buttons such as:
  - `↺`
  - `⏸`
  - `▶`
  - `⏭`
- Use plain text labels instead

## Practical lessons from prior work

- A single-page app with `currentView` switching is often fast to build and stable
- But when the menu gets crowded, switch to a scrollable `list`
- Browser/Figma reference lookup is more reliable through the browser tool than scraping attempts

## AIoT IDE plugin emulator SDK update prompt

When AIoT IDE says "Vela SDK needs update" or fails to select the current emulator device, do not rely only on the project-local `npx aiot` result. AIoT IDE may use its own extension bundle, for example:

- `%USERPROFILE%\.aiot-ide\extensions\vela.aiot-emulator-<version>\dist\emulator\index.js`
- SDK home is usually `%USERPROFILE%\.vela\sdk`
- VVD home is usually `%USERPROFILE%\.vela\vvd`

Check the IDE plugin's own SDK state:

```powershell
@'
const emu = require(process.env.USERPROFILE + "\\.aiot-ide\\extensions\\vela.aiot-emulator-1.7.21\\dist\\emulator\\index.js");
(async () => {
  const mgr = new emu.VvdManager({ sdkHome: emu.defaultSDKHome, vvdHome: emu.defaultVvdHome });
  console.log("updates:", await mgr.hasSDKPartUpdate());
  console.log("versions:", await mgr.getSDKVersion());
  console.log("vvdInfo:", mgr.getVvdInfo("xiaomi_band_10"));
})().catch(e => { console.error(e); process.exit(1); });
'@ | node -
```

Known mismatch: `aiot-toolkit` CLI 2.0.5 and AIoT IDE plugin 1.7.21 disagree about VVD image fields.

- CLI 2.0.5 treats `image.sysdir.2` as the main image directory.
- IDE plugin 1.7.21 treats `image.sysdir.1` as the main image directory and migrates `image.sysdir.2` into `image.sysdir.1`.
- If fixing IDE plugin device selection, use the IDE plugin's `VvdManager.resetImageDir("<device>")`, not the project-local CLI package.

Common successful repair for IDE plugin 1.7.21:

```powershell
@'
const fs = require("fs");
const emu = require(process.env.USERPROFILE + "\\.aiot-ide\\extensions\\vela.aiot-emulator-1.7.21\\dist\\emulator\\index.js");
(async () => {
  const mgr = new emu.VvdManager({ sdkHome: emu.defaultSDKHome, vvdHome: emu.defaultVvdHome });
  mgr.resetImageDir("xiaomi_band_10");

  const versionsPath = mgr.getSDKVersionPath();
  const versions = JSON.parse(fs.readFileSync(versionsPath, "utf-8"));
  versions.tools = emu.EmulatorEnvVersion.tools;
  fs.writeFileSync(versionsPath, JSON.stringify(versions, null, 2));

  console.log("updates before download:", await mgr.hasSDKPartUpdate());
  const downloader = await mgr.downloadSDK({ force: false, cliProgress: true, parallelDownloads: 6 });
  await downloader.downlodPromise;
  console.log("updates after download:", await mgr.hasSDKPartUpdate());
})().catch(e => { console.error(e); process.exit(1); });
'@ | node -
```

For the observed AIoT IDE plugin 1.7.21 case, the SDK version file needed:

```json
{
  "emulator": "0.1.0",
  "qa": "0.0.1",
  "skins": "0.0.12",
  "system-images": "20250716",
  "modem_simulator": "0.0.3",
  "tools": "0.0.3"
}
```

After repairing SDK files, fully exit AIoT IDE and ensure no `AIoT IDE.exe` process remains before reopening. The IDE may cache the old SDK state while running.

## Sending builds

After successful build, the output package is typically under:
- `dist/<package>.debug.<version>.rpk`

When the app package is renamed, read `src/manifest.json` and use its `package`
value consistently in the whole manual deploy/start chain:

```powershell
$package = (Get-Content -Raw .\src\manifest.json | ConvertFrom-Json).package
adb -s emulator-5554 push ".\dist\$package.debug.1.0.0.rpk" "/data/app/$package.rpk"
adb -s emulator-5554 shell pm install "/data/app/$package.rpk"
adb -s emulator-5554 shell am start $package
adb -s emulator-5554 shell am dump
```

If `am start` uses an old package while install used the new package, the app can
install successfully but the launch check will target the wrong application.

## Local build hygiene

- After completing app modifications and before compiling, close the Vela emulator first. If AIoT IDE is involved, also fully exit AIoT IDE when emulator state appears stale.
- On Windows, stale emulator or IDE processes can keep an old package/app state alive and make later build/install checks misleading. Check for related `emulator`, `qemu`, or `AIoT IDE.exe` processes when behavior does not match the latest source.
- Then run the project checks/build, for example `npm run check` followed by `npm run build` or `npm run release` as appropriate.

## Lessons from Xiaomi Band 10 chemistry app work

### Large offline datasets

- Do expensive parsing at build/import time when possible. For chemistry lookup, generating a static inverted index such as `formula -> reactionIndexes` avoids scanning and splitting large reaction text on the watch.
- Keep the public page API stable when optimizing services. In the chemistry app, `searchReactionsByPair(formulaA, formulaB)` stayed unchanged while the implementation moved from runtime parsing to generated indexes.
- Prefer compact runtime data for large reference tables. A 118-element periodic table detail dataset is safer as compact lines plus lazy parsing than as a large object graph imported on page start.
- Keep generated resources reproducible and test them. Add checks that generated index entries point inside the generated equation array and that representative searches still return results.

### Periodic table interaction on pill screens

- A full periodic table made from 118 separate UI elements can be too heavy on Band 10. A single transparent PNG is much more stable for the main visual.
- Direct coordinate tapping on a scaled/moved table is fragile. A fixed crosshair works better: drag the image until the target element is under the crosshair, then press a fixed "view" button.
- Fixed controls must live outside the moving scroll/content layer. If `back`, `view`, or the crosshair are inside the scrolled content, they will drift when the user pans to the right or bottom.
- If all elements must be reachable by the crosshair, expand the image canvas with transparent padding instead of adding opaque UI space. The app background can provide the visible color.
- Native two-axis scroll may behave like one-axis-at-a-time on some Vela emulator/device combinations. A robust fallback is a transparent touch layer that records both X and Y deltas and calls `scrollTo({ left, top })` manually.
- Avoid opaque header/footer masks when the user expects the table to continue behind controls. Use transparent overlay controls and let the image remain visible underneath.

### Text rendering on Vela

- Do not rely on a single `text` node with newline characters for critical wrapping. Some Vela builds still clip or ellipsize long chemistry strings.
- For long formulas, conditions, phenomena, and detail values, pre-split text into line objects and render multiple one-line `text` nodes with explicit heights.
- If a `text` node shows `...`, increasing `height` or `lines` may not be enough. Switch to multiple nodes when correctness matters.
- For narrow cards, measure conservatively. Chemistry strings mix Latin letters, digits, subscript/superscript glyphs, arrows, plus signs, parentheses, and CJK characters; each category needs a different width estimate.
- Dynamic card height should be computed from the actual rendered line rows, not from raw character count alone.

### Debug/build workflow

- After layout or template changes, run both `npm run check` and `npm run build`; Vela template issues often appear only during `aiot build`.
- When emulator screenshots show clipping or layer movement, inspect whether the affected element is inside a moving `scroll`/content container before adjusting coordinates.
- Avoid editing `build/` or `dist/` directly. Rebuild packages and report the `.rpk` path and byte size when useful.
