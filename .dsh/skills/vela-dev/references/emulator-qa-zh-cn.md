# Vela 模拟器自动化 QA 技能说明

这个 skill 用于小米 Vela 快应用的自动化界面验证。它可以在不手动点击 AIoT IDE 的情况下完成模拟器识别、截图、点击、再次截图、多帧采样和截图分析辅助。

## 适用场景

- 需要自动截图 Vela 模拟器画面。
- 需要验证按钮点击后页面是否跳转。
- 需要对比修改前后的 UI 效果。
- 需要检查胶囊屏、圆角矩形屏、圆形屏等不同屏幕适配。
- 需要判断跑马灯、加载动画、动图是否正常，避免只看一帧造成误判。

## 基本命令

在 Vela 项目根目录运行：

```powershell
node C:\Users\Administrator\.codex\skills\vela-emulator-qa\scripts\vela_emulator_qa.js list
node C:\Users\Administrator\.codex\skills\vela-emulator-qa\scripts\vela_emulator_qa.js screenshot miband9
node C:\Users\Administrator\.codex\skills\vela-emulator-qa\scripts\vela_emulator_qa.js tap-screenshot miband9 106 294
node C:\Users\Administrator\.codex\skills\vela-emulator-qa\scripts\vela_emulator_qa.js swipe miband9 106 390 106 180
node C:\Users\Administrator\.codex\skills\vela-emulator-qa\scripts\vela_emulator_qa.js frames miband9 --count 8 --interval 350
```

设备名可以写：

- `miband9`
- `miband10`
- `redmiwatch`
- `emulator-5562`
- gRPC 端口号，例如 `8562`

## 推荐工作流

1. 先运行 `list`，确认当前有哪些模拟器正在运行。
2. 对目标设备运行 `screenshot`，获得当前页面截图。
3. 根据截图确定按钮坐标。
4. 使用 `tap-screenshot` 自动完成点击前截图、点击、等待、点击后截图。
5. 如果需要测试列表滚动，使用 `swipe`。
6. 如果界面有跑马灯或加载动画，使用 `frames` 连续截图。
7. 只有在多帧都出现问题时，才判断为 UI 缺陷。
8. 修改代码后，重新运行同一套截图和点击流程验证。

## 动图和跑马灯判断规则

不要只根据一张截图判断跑马灯错误。一张图只是动画某一帧，可能刚好截到文字被遮挡或移动到边缘的位置。

判断跑马灯正常的依据：

- 多帧截图中文字位置持续变化。
- 某一帧缺失的文字能在其他帧出现。
- 两份滚动文字没有叠在一起导致不可读。
- 标题、按钮、卡片等静态元素没有被滚动内容覆盖。

判断跑马灯异常的依据：

- 多帧截图中文字始终不动。
- 每一帧都有字符重叠。
- 关键内容在所有帧中都没有出现。
- 滚动文字覆盖了本来应该固定显示的按钮或标题。

## 加载动画判断规则

例如 `搜索中.`、`搜索中..` 这类动画，需要采样至少一个完整周期。

检查点：

- 点的数量是否随时间变化。
- 增加到最大数量后是否重新开始。
- 搜索完成后是否跳转。
- 返回上一页后是否还有残留的搜索状态。

## 注意事项

- 优先使用 gRPC 截图，不要优先使用 `adb screencap`，因为部分 Vela 模拟器镜像不支持。
- 如果点击后没有变化，先检查坐标是否点到了按钮，不要马上判断应用失效。
- 胶囊屏和圆形屏边缘区域可能被圆角遮挡，测试按钮时应尽量点击可见区域中心。
- 如果没有运行中的模拟器，需要先通过 AIoT IDE 或 `npx aiot start --watch --openVNC` 启动项目。
