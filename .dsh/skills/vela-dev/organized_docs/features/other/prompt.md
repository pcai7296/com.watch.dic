---
url: "https://iot.mi.com/vela/quickapp/zh/features/other/prompt.html"
title: "弹窗 prompt | Xiaomi Vela JS 应用开发文档"
---

# [\#](https://iot.mi.com/vela/quickapp/zh/features/other/prompt.html\#%E5%BC%B9%E7%AA%97-prompt) 弹窗 prompt

## [\#](https://iot.mi.com/vela/quickapp/zh/features/other/prompt.html\#%E6%8E%A5%E5%8F%A3%E5%A3%B0%E6%98%8E) 接口声明

```
{ "name": "system.prompt" }

```

## [\#](https://iot.mi.com/vela/quickapp/zh/features/other/prompt.html\#%E5%AF%BC%E5%85%A5%E6%A8%A1%E5%9D%97) 导入模块

```
import prompt from '@system.prompt'
// 或
const prompt = require('@system.prompt')

```

## [\#](https://iot.mi.com/vela/quickapp/zh/features/other/prompt.html\#%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89) 接口定义

### [\#](https://iot.mi.com/vela/quickapp/zh/features/other/prompt.html\#prompt-showtoast-object) prompt.showToast(OBJECT)

显示 Toast 提示信息

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/other/prompt.html\#%E5%8F%82%E6%95%B0) 参数

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| message | String | 是 | 显示的文本信息 |
| duration | Number | 否 | 显示持续时间，单位ms，默认值1500，建议区间：1500-10000 |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/other/prompt.html\#%E7%A4%BA%E4%BE%8B) 示例：

```
prompt.showToast({
  message: 'Message Info',
  duration: 2000
})

```

←
[音频 audio](https://iot.mi.com/vela/quickapp/zh/features/other/audio.html)

快速导航

[接口声明](https://iot.mi.com/vela/quickapp/zh/features/other/prompt.html#%E6%8E%A5%E5%8F%A3%E5%A3%B0%E6%98%8E "接口声明")

[导入模块](https://iot.mi.com/vela/quickapp/zh/features/other/prompt.html#%E5%AF%BC%E5%85%A5%E6%A8%A1%E5%9D%97 "导入模块")

[接口定义](https://iot.mi.com/vela/quickapp/zh/features/other/prompt.html#%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89 "接口定义")

[prompt.showToast(OBJECT)](https://iot.mi.com/vela/quickapp/zh/features/other/prompt.html#prompt-showtoast-object "prompt.showToast(OBJECT)")