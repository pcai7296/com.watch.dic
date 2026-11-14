---
url: "https://iot.mi.com/vela/quickapp/zh/components/basic/barcode.html"
title: "barcode | Xiaomi Vela JS 应用开发文档"
---

# [\#](https://iot.mi.com/vela/quickapp/zh/components/basic/barcode.html\#barcode) barcode [2+](https://iot.mi.com/vela/quickapp/zh/guide/version/APILevel2)

## [\#](https://iot.mi.com/vela/quickapp/zh/components/basic/barcode.html\#%E6%A6%82%E8%BF%B0) 概述

条形码，将文本内容转换为条形码展示。

## [\#](https://iot.mi.com/vela/quickapp/zh/components/basic/barcode.html\#%E5%AD%90%E7%BB%84%E4%BB%B6) 子组件

不支持

## [\#](https://iot.mi.com/vela/quickapp/zh/components/basic/barcode.html\#%E5%B1%9E%E6%80%A7) 属性

支持 [通用属性](https://iot.mi.com/vela/quickapp/zh/components/general/properties.html)

| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| value | `string` | - | 是 | 条形码内容，码制为Code128码，长度小于等于20字节 |

## [\#](https://iot.mi.com/vela/quickapp/zh/components/basic/barcode.html\#%E6%A0%B7%E5%BC%8F) 样式

支持 [通用样式](https://iot.mi.com/vela/quickapp/zh/components/general/style.html)

| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| color | `<color>` | #000000 | 否 | 条形码颜色 |
| background-color | `<color>` | #ffffff | 否 | 条形码背景颜色 |

注意

- 当设置transform的rotate属性时，该组件只能旋转为垂直或者水平状态；
- 当设置transform的scale属性时，该组件只能支持整数倍缩放。

## [\#](https://iot.mi.com/vela/quickapp/zh/components/basic/barcode.html\#%E4%BA%8B%E4%BB%B6) 事件

支持 [通用事件](https://iot.mi.com/vela/quickapp/zh/components/general/events.html)

## [\#](https://iot.mi.com/vela/quickapp/zh/components/basic/barcode.html\#%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81) 示例代码

```
<template>
  <div>
    <barcode value="barcodetest" style="color: #008cff;"></barcode>
  </div>
</template>

```

![](<Base64-Image-Removed>)

←
[qrcode](https://iot.mi.com/vela/quickapp/zh/components/basic/qrcode.html)[input](https://iot.mi.com/vela/quickapp/zh/components/form/input.html)
→


快速导航

[概述](https://iot.mi.com/vela/quickapp/zh/components/basic/barcode.html#%E6%A6%82%E8%BF%B0 "概述")

[子组件](https://iot.mi.com/vela/quickapp/zh/components/basic/barcode.html#%E5%AD%90%E7%BB%84%E4%BB%B6 "子组件")

[属性](https://iot.mi.com/vela/quickapp/zh/components/basic/barcode.html#%E5%B1%9E%E6%80%A7 "属性")

[样式](https://iot.mi.com/vela/quickapp/zh/components/basic/barcode.html#%E6%A0%B7%E5%BC%8F "样式")

[事件](https://iot.mi.com/vela/quickapp/zh/components/basic/barcode.html#%E4%BA%8B%E4%BB%B6 "事件")

[示例代码](https://iot.mi.com/vela/quickapp/zh/components/basic/barcode.html#%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81 "示例代码")