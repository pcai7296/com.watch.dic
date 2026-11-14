---
url: "https://iot.mi.com/vela/quickapp/zh/components/basic/span.html"
title: "span | Xiaomi Vela JS 应用开发文档"
---

# [\#](https://iot.mi.com/vela/quickapp/zh/components/basic/span.html\#span) span

## [\#](https://iot.mi.com/vela/quickapp/zh/components/basic/span.html\#%E6%A6%82%E8%BF%B0) 概述

格式化的文本，只能作为 [`<text>`](https://iot.mi.com/vela/quickapp/zh/components/basic/text.html)、 [`<a>`](https://iot.mi.com/vela/quickapp/zh/components/basic/a.html) 和 `<span>` 的子组件。

## [\#](https://iot.mi.com/vela/quickapp/zh/components/basic/span.html\#%E5%AD%90%E7%BB%84%E4%BB%B6) 子组件

仅支持 `<span>`

## [\#](https://iot.mi.com/vela/quickapp/zh/components/basic/span.html\#%E5%B1%9E%E6%80%A7) 属性

| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| id | `<string>` | - | 否 | 唯一标识 |
| style | `<string>` | - | 否 | 样式声明 |
| class | `<string>` | - | 否 | 引用样式表 |
| for | `<array>` | - | 否 | 根据数据列表，循环展开当前标签 |
| if | `<boolean>` | - | 否 | 根据数据 boolean 值，添加或移除当前标签 |

## [\#](https://iot.mi.com/vela/quickapp/zh/components/basic/span.html\#%E6%A0%B7%E5%BC%8F) 样式

| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| color | `<color>` | rgba(0, 0, 0, 0.54) | 否 | 文本颜色 |
| font-size | `<length>` | 30px | 否 | 文本尺寸 |
| font-style | normal \| italic | normal | 否 | - |
| font-weight | normal \| bold \| `<number>` | normal | 否 | 当前平台仅支持 `normal` 与 `bold` 两种效果，当值为数字时，低于 `550` 为前者，否则为后者 |
| text-decoration | underline \| line-through \| none | none | 否 | - |

## [\#](https://iot.mi.com/vela/quickapp/zh/components/basic/span.html\#%E4%BA%8B%E4%BB%B6) 事件

不支持

## [\#](https://iot.mi.com/vela/quickapp/zh/components/basic/span.html\#%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81) 示例代码

```
<template>
  <div>
    <text>
      <span>I am span,</span>
      <span style="color: #f76160">I am span,</span>
      <span style="color: #f76160;text-decoration: underline;">I am span,</span>
    </text>
  </div>
</template>

```

![](<Base64-Image-Removed>)

←
[text](https://iot.mi.com/vela/quickapp/zh/components/basic/text.html)[a](https://iot.mi.com/vela/quickapp/zh/components/basic/a.html)
→


快速导航

[概述](https://iot.mi.com/vela/quickapp/zh/components/basic/span.html#%E6%A6%82%E8%BF%B0 "概述")

[子组件](https://iot.mi.com/vela/quickapp/zh/components/basic/span.html#%E5%AD%90%E7%BB%84%E4%BB%B6 "子组件")

[属性](https://iot.mi.com/vela/quickapp/zh/components/basic/span.html#%E5%B1%9E%E6%80%A7 "属性")

[样式](https://iot.mi.com/vela/quickapp/zh/components/basic/span.html#%E6%A0%B7%E5%BC%8F "样式")

[事件](https://iot.mi.com/vela/quickapp/zh/components/basic/span.html#%E4%BA%8B%E4%BB%B6 "事件")

[示例代码](https://iot.mi.com/vela/quickapp/zh/components/basic/span.html#%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81 "示例代码")