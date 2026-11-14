---
url: "https://iot.mi.com/vela/quickapp/zh/components/basic/a.html"
title: "a | Xiaomi Vela JS 应用开发文档"
---

# [\#](https://iot.mi.com/vela/quickapp/zh/components/basic/a.html\#a) a

## [\#](https://iot.mi.com/vela/quickapp/zh/components/basic/a.html\#%E6%A6%82%E8%BF%B0) 概述

超链接（默认不带下划线）

## [\#](https://iot.mi.com/vela/quickapp/zh/components/basic/a.html\#%E5%AD%90%E7%BB%84%E4%BB%B6) 子组件

仅支持 [`<span>`](https://iot.mi.com/vela/quickapp/zh/components/basic/span.html)

## [\#](https://iot.mi.com/vela/quickapp/zh/components/basic/a.html\#%E5%B1%9E%E6%80%A7) 属性

支持 [通用属性](https://iot.mi.com/vela/quickapp/zh/components/general/properties.html)

| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| href | `string` | - | 否 | 支持的格式参见 [页面路由](https://iot.mi.com/vela/quickapp/zh/features/basic/router.html) 中的 uri 参数。<br>额外的：<br>href 还可以通过“?param1=value1”的方式添加参数，参数可以在页面中通过 `this.param1` 的方式使用。使用 `this.param1` 变量时，需要在目标页面中在 `public`（应用外传参）或 `protected`（应用内传参）下定义 key 名相同的属性<br>示例：<br>`<a href="/about?param1=value1">关于</a>` |

## [\#](https://iot.mi.com/vela/quickapp/zh/components/basic/a.html\#%E6%A0%B7%E5%BC%8F) 样式

支持 [text样式](https://iot.mi.com/vela/quickapp/zh/components/basic/text.html)

支持 [通用样式](https://iot.mi.com/vela/quickapp/zh/components/general/style.html)

## [\#](https://iot.mi.com/vela/quickapp/zh/components/basic/a.html\#%E4%BA%8B%E4%BB%B6) 事件

支持 [通用事件](https://iot.mi.com/vela/quickapp/zh/components/general/events.html)

## [\#](https://iot.mi.com/vela/quickapp/zh/components/basic/a.html\#%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81) 示例代码

```
<template>
  <div>
    <a class="link" href="/home">goHome</a>
    <a href="/home">
      <span class="link">使用span子组件</span>
    </a>
  </div>
</template>

```

←
[span](https://iot.mi.com/vela/quickapp/zh/components/basic/span.html)[image](https://iot.mi.com/vela/quickapp/zh/components/basic/image.html)
→


快速导航

[概述](https://iot.mi.com/vela/quickapp/zh/components/basic/a.html#%E6%A6%82%E8%BF%B0 "概述")

[子组件](https://iot.mi.com/vela/quickapp/zh/components/basic/a.html#%E5%AD%90%E7%BB%84%E4%BB%B6 "子组件")

[属性](https://iot.mi.com/vela/quickapp/zh/components/basic/a.html#%E5%B1%9E%E6%80%A7 "属性")

[样式](https://iot.mi.com/vela/quickapp/zh/components/basic/a.html#%E6%A0%B7%E5%BC%8F "样式")

[事件](https://iot.mi.com/vela/quickapp/zh/components/basic/a.html#%E4%BA%8B%E4%BB%B6 "事件")

[示例代码](https://iot.mi.com/vela/quickapp/zh/components/basic/a.html#%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81 "示例代码")