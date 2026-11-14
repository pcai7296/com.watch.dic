---
url: "https://iot.mi.com/vela/quickapp/zh/components/container/list-item.html"
title: "list-item | Xiaomi Vela JS 应用开发文档"
---

# [\#](https://iot.mi.com/vela/quickapp/zh/components/container/list-item.html\#list-item) list-item

## [\#](https://iot.mi.com/vela/quickapp/zh/components/container/list-item.html\#%E6%A6%82%E8%BF%B0) 概述

[`<list>`](https://iot.mi.com/vela/quickapp/zh/components/container/list.html) 的子组件，用来展示列表具体 item，宽度默认充满 list 组件。

## [\#](https://iot.mi.com/vela/quickapp/zh/components/container/list-item.html\#%E5%AD%90%E7%BB%84%E4%BB%B6) 子组件

支持

## [\#](https://iot.mi.com/vela/quickapp/zh/components/container/list-item.html\#%E5%B1%9E%E6%80%A7) 属性

支持 [通用属性](https://iot.mi.com/vela/quickapp/zh/components/general/properties.html)

| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| type | `<string>` | - | 是 | list-item 类型，值为自定义的字符串，如'loadMore'。 **相同的 type 的 list-item 必须具备完全一致的 DOM 结构**。因此，在 list-item 内部需谨慎使用 if 和 for，因为 if 和 for 可能造成相同的 type 的 list-item 的 DOM 结构不一致，从而引发错误 |

## [\#](https://iot.mi.com/vela/quickapp/zh/components/container/list-item.html\#%E6%A0%B7%E5%BC%8F) 样式

支持 [通用样式](https://iot.mi.com/vela/quickapp/zh/components/general/style.html)

为了达到组件复用、优化性能的目的，请显示指定宽度和高度。

## [\#](https://iot.mi.com/vela/quickapp/zh/components/container/list-item.html\#%E4%BA%8B%E4%BB%B6) 事件

支持 [通用事件](https://iot.mi.com/vela/quickapp/zh/components/general/events.html)

## [\#](https://iot.mi.com/vela/quickapp/zh/components/container/list-item.html\#%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81) 示例代码

```
<template>
  <div class="page">
    <list class="list">
      <list-item for="{{productList}}" class="item" type="list-item">
        <text>{{$item.name}}: {{$item.price}}</text>
      </list-item>
    </list>
  </div>
</template>

<script>
  export default {
    data: {
      productList: [\
        { name: '衣服', price: '100' },\
        { name: '裤子', price: '200' }\
      ],
    }
  }
</script>

<style>
  .page {
    padding: 30px;
    background-color: white;
  }

  .list {
    width: 100%;
    height: 100%;
  }

  .item {
    height: 40px;
  }
</style>

```

### [\#](https://iot.mi.com/vela/quickapp/zh/components/container/list-item.html\#%E6%95%88%E6%9E%9C%E5%B1%95%E7%A4%BA) 效果展示

![](<Base64-Image-Removed>)

←
[list](https://iot.mi.com/vela/quickapp/zh/components/container/list.html)[scroll](https://iot.mi.com/vela/quickapp/zh/components/container/scroll.html)
→


快速导航

[概述](https://iot.mi.com/vela/quickapp/zh/components/container/list-item.html#%E6%A6%82%E8%BF%B0 "概述")

[子组件](https://iot.mi.com/vela/quickapp/zh/components/container/list-item.html#%E5%AD%90%E7%BB%84%E4%BB%B6 "子组件")

[属性](https://iot.mi.com/vela/quickapp/zh/components/container/list-item.html#%E5%B1%9E%E6%80%A7 "属性")

[样式](https://iot.mi.com/vela/quickapp/zh/components/container/list-item.html#%E6%A0%B7%E5%BC%8F "样式")

[事件](https://iot.mi.com/vela/quickapp/zh/components/container/list-item.html#%E4%BA%8B%E4%BB%B6 "事件")

[示例代码](https://iot.mi.com/vela/quickapp/zh/components/container/list-item.html#%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81 "示例代码")

[效果展示](https://iot.mi.com/vela/quickapp/zh/components/container/list-item.html#%E6%95%88%E6%9E%9C%E5%B1%95%E7%A4%BA "效果展示")