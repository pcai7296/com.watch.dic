---
url: "https://iot.mi.com/vela/quickapp/zh/components/container/stack.html"
title: "stack | Xiaomi Vela JS 应用开发文档"
---

# [\#](https://iot.mi.com/vela/quickapp/zh/components/container/stack.html\#stack) stack

## [\#](https://iot.mi.com/vela/quickapp/zh/components/container/stack.html\#%E6%A6%82%E8%BF%B0) 概述

基本容器，子组件排列方式为层叠排列，每个直接子组件按照先后顺序依次堆叠，覆盖前一个子组件。

## [\#](https://iot.mi.com/vela/quickapp/zh/components/container/stack.html\#%E5%AD%90%E7%BB%84%E4%BB%B6) 子组件

支持

## [\#](https://iot.mi.com/vela/quickapp/zh/components/container/stack.html\#%E5%B1%9E%E6%80%A7) 属性

支持 [通用属性](https://iot.mi.com/vela/quickapp/zh/components/general/properties.html)

## [\#](https://iot.mi.com/vela/quickapp/zh/components/container/stack.html\#%E6%A0%B7%E5%BC%8F) 样式

支持 [通用样式](https://iot.mi.com/vela/quickapp/zh/components/general/style.html)

## [\#](https://iot.mi.com/vela/quickapp/zh/components/container/stack.html\#%E4%BA%8B%E4%BB%B6) 事件

支持 [通用事件](https://iot.mi.com/vela/quickapp/zh/components/general/events.html)

## [\#](https://iot.mi.com/vela/quickapp/zh/components/container/stack.html\#%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81) 示例代码

```
<template>
  <div class="page">
    <stack class="stack">
      <div class="box box1"></div>
      <div class="box box2"></div>
      <div class="box box3"></div>
      <div class="box box4"></div>
    </stack>
  </div>
</template>

<style>
  .page {
    padding: 30px;
    background-color: white;
  }

  .box {
    border-radius: 8px;
    width: 100px;
    height: 100px;
  }

  .box1 {
    width: 200px;
    height: 200px;
    background-color: #3f56ea;
  }

  .box2 {
    left: 20px;
    top: 20px;
    background-color: #00bfc9;
  }

  .box3 {
    left: 50px;
    top: 50px;
    background-color: #47cc47;
  }

  .box4 {
    left: 80px;
    top: 80px;
    background-color: #FF6A00;
  }
</style>

```

![](<Base64-Image-Removed>)

←
[scroll](https://iot.mi.com/vela/quickapp/zh/components/container/scroll.html)[swiper](https://iot.mi.com/vela/quickapp/zh/components/container/swiper.html)
→


快速导航

[概述](https://iot.mi.com/vela/quickapp/zh/components/container/stack.html#%E6%A6%82%E8%BF%B0 "概述")

[子组件](https://iot.mi.com/vela/quickapp/zh/components/container/stack.html#%E5%AD%90%E7%BB%84%E4%BB%B6 "子组件")

[属性](https://iot.mi.com/vela/quickapp/zh/components/container/stack.html#%E5%B1%9E%E6%80%A7 "属性")

[样式](https://iot.mi.com/vela/quickapp/zh/components/container/stack.html#%E6%A0%B7%E5%BC%8F "样式")

[事件](https://iot.mi.com/vela/quickapp/zh/components/container/stack.html#%E4%BA%8B%E4%BB%B6 "事件")

[示例代码](https://iot.mi.com/vela/quickapp/zh/components/container/stack.html#%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81 "示例代码")