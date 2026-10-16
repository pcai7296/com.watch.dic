# InputMethod — IME Component

**InputMethod.ux** — Multi-layout keyboard IME for watch dictionary. Supports 3 screen shapes × 4 keyboard layouts, with Chinese/English/Japanese input.

## Structure

```
InputMethod/
├── InputMethod.ux        # ~890 lines: template + script + styles
├── AGENTS.md
└── assets/
    ├── full/             # QWERTY full keys for circle (62-round) screen
    ├── arc/              # Keys for pill-shaped (66-capsule) screen
    ├── horizontal/       # Keys for rect (67-square) screen
    ├── t9/               # T9 keypad keys
    ├── dic.js            # 6763 Chinese characters (pinyin→hanzi map)
    ├── dicUtil.js        # SimpleInputMethod query orchestration
    └── dic_jp.js         # Japanese romaji→kanji mapping
```

## Props

| Prop | Default | Description |
|------|---------|-------------|
| `hide` | `true` | Show/hide IME |
| `keyboardtype` | `"QWERTY"` | `"QWERTY"` or `"T9"` |
| `maxlength` | `5` | Max visible suggestion slots |
| `vibratemode` | `""` | 按键震动（空 = 关） |
| `screentype` | `"circle"` | `"circle"`（圆屏）/ `"rect"`（方屏）/ `"pill-shaped"`（胶囊屏） |
| `englishonly` | — | 只允许英文输入 |

## Events（实际 emit 的只有这 4 个）

| Event | Payload | Description |
|-------|---------|-------------|
| `visibilityChange` | `{ visible: bool }` | 显示/隐藏 |
| `keyDown` | `{ content: string }` | 字符输入（字母 / 空格 / 候选点击 —— **payload 键是 `content`，不是 `key`**） |
| `delete` | `{}` | 退格 |
| `complete` | `{ content: string }` | **唯一的提交口**（`addAllTxt`） |

**没有 `ready` 事件。** `ready` 是框架保留事件名，`$emit("ready")` 会抛 `TypeError: not a function`。自动搜索改用**页面**的 `onReady`（`pages/search/search.ux`）。旧版本文件把它列为组件事件是错的。

## Key flow

1. User taps key → `keyDown` event → parent handles input buffer
2. Parent updates buffer → IME recomputes autocomplete candidates
3. User confirms → `complete` event → parent submits

## CONVENTIONS

- All key images are PNG assets stored per layout (`full/`, `arc/`, `horizontal/`, `t9/`)
- Asset paths use `{{lang}}` variable — handled by `aiot-toolkit 2.0.4+`

## ANTI-PATTERNS

- Don't hardcode asset paths — use the `{{lang}}` variable-depth pattern
- Don't add new key image formats (keep PNG)
