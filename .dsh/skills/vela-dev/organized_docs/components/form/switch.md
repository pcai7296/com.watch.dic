---
url: "https://iot.mi.com/vela/quickapp/zh/components/form/switch.html"
title: "switch | Xiaomi Vela JS 应用开发文档"
---

# [\#](https://iot.mi.com/vela/quickapp/zh/components/form/switch.html\#switch) switch

## [\#](https://iot.mi.com/vela/quickapp/zh/components/form/switch.html\#%E6%A6%82%E8%BF%B0) 概述

开关选择

## [\#](https://iot.mi.com/vela/quickapp/zh/components/form/switch.html\#%E5%AD%90%E7%BB%84%E4%BB%B6) 子组件

不支持

## [\#](https://iot.mi.com/vela/quickapp/zh/components/form/switch.html\#%E5%B1%9E%E6%80%A7) 属性

支持 [通用属性](https://iot.mi.com/vela/quickapp/zh/components/general/properties.html)

| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| checked | `<boolean>` | false | 否 | 可触发 checked 伪类（checked 伪类样式还未支持） |

## [\#](https://iot.mi.com/vela/quickapp/zh/components/form/switch.html\#%E6%A0%B7%E5%BC%8F) 样式

支持 [通用样式](https://iot.mi.com/vela/quickapp/zh/components/general/style.html)

| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| thumb-color | `<color>` | #ffffff 或者 rgb(255, 255, 255) | 否 | 滑块颜色 |
| track-color | `<color>` | #0d84ff 或者 rgb(13, 132, 255) | 否 | 滑轨颜色 |

## [\#](https://iot.mi.com/vela/quickapp/zh/components/form/switch.html\#%E4%BA%8B%E4%BB%B6) 事件

支持 [通用事件](https://iot.mi.com/vela/quickapp/zh/components/general/events.html)

| 名称 | 参数 | 描述 |
| --- | --- | --- |
| change | {checked:checkedValue} | checked 状态改变时触发 |

## [\#](https://iot.mi.com/vela/quickapp/zh/components/form/switch.html\#%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81) 示例代码

```
<template>
  <div class="page">
    <text class="title">switch 组件</text>
    <switch checked="{{ switchValue }}" class="switch" @change="onSwitchChange"></switch>
    <text>状态：{{ switchValue }}</text>
  </div>
</template>

<script>
  export default {
    private: {
      switchValue: true
    },
    onSwitchChange(e) {
      this.switchValue = e.checked
    }
  }
</script>

<style>
  .page {
    flex-direction: column;
    padding: 30px;
    background-color: #ffffff;
  }

  .title {
    font-weight: bold;
  }

  .switch {
    width: 100px;
    margin-top: 10px;
  }
</style>

```

![](https://iot.mi.com/vela/quickapp/assets/img/switch.9fcb7b6a.gif)

←
[picker](https://iot.mi.com/vela/quickapp/zh/components/form/picker.html)[slider](https://iot.mi.com/vela/quickapp/zh/components/form/slider.html)
→


快速导航

[概述](https://iot.mi.com/vela/quickapp/zh/components/form/switch.html#%E6%A6%82%E8%BF%B0 "概述")

[子组件](https://iot.mi.com/vela/quickapp/zh/components/form/switch.html#%E5%AD%90%E7%BB%84%E4%BB%B6 "子组件")

[属性](https://iot.mi.com/vela/quickapp/zh/components/form/switch.html#%E5%B1%9E%E6%80%A7 "属性")

[样式](https://iot.mi.com/vela/quickapp/zh/components/form/switch.html#%E6%A0%B7%E5%BC%8F "样式")

[事件](https://iot.mi.com/vela/quickapp/zh/components/form/switch.html#%E4%BA%8B%E4%BB%B6 "事件")

[示例代码](https://iot.mi.com/vela/quickapp/zh/components/form/switch.html#%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81 "示例代码")