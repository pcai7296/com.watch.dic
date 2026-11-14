---
url: "https://iot.mi.com/vela/quickapp/zh/components/general/methods.html"
title: "通用方法 | Xiaomi Vela JS 应用开发文档"
---

# [\#](https://iot.mi.com/vela/quickapp/zh/components/general/methods.html\#%E9%80%9A%E7%94%A8%E6%96%B9%E6%B3%95) 通用方法

通用方法，是所有组件都可以调用的方法。在组件使用id标记 id 属性后，开发者可通过this.$element('idName')获取 dom 节点，再调用通用方法。

通过 this.$element 获取到的 dom 对象，提供两个 api 供调用：

### [\#](https://iot.mi.com/vela/quickapp/zh/components/general/methods.html\#getboundingclientrect-object-object) getBoundingClientRect(Object object) [2+](https://iot.mi.com/vela/quickapp/zh/guide/version/APILevel2)

返回元素的大小及其相对于视窗的位置，需要在页面的 onShow 生命周期之后调用。

#### [\#](https://iot.mi.com/vela/quickapp/zh/components/general/methods.html\#%E5%8F%82%E6%95%B0) 参数

Object object

| 属性 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| success | function |  | 否 | 接口调用成功的回调函数 |
| fail | function |  | 否 | 接口调用失败的回调函数 |
| complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

#### [\#](https://iot.mi.com/vela/quickapp/zh/components/general/methods.html\#object-success-%E5%9B%9E%E8%B0%83%E5%87%BD%E6%95%B0%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E) object.success 回调函数参数说明

Object rect

| 属性 | 类型 | 描述 |
| --- | --- | --- |
| left | number | 元素的左边界坐标 |
| right | number | 元素的右边界坐标 |
| top | number | 元素的上边界坐标 |
| bottom | number | 元素的下边界坐标 |
| width | number | 元素的宽度 |
| height | number | 元素的高度 |

#### [\#](https://iot.mi.com/vela/quickapp/zh/components/general/methods.html\#%E4%BB%A3%E7%A0%81%E7%A4%BA%E4%BE%8B) 代码示例

```
<template>
  <div>
    <div id="box1" class="box-normal"></div>
    <div id="box2" class="box-normal"></div>
  </div>
</template>
<script>
  export default {
    onShow(){
      this.$element('box1').getBoundingClientRect({
        success: function(data) {
          const { top, bottom, left, right, width, height } = data;
          console.log(data);
        },
        fail: (errorData, errorCode) => {
          console.log(`错误原因：${JSON.stringify(errorData)}, 错误代码：${errorCode}`)
        },
        complete: function() {
          console.info('complete')
        }
      })
    }
  }
</script>

```

### [\#](https://iot.mi.com/vela/quickapp/zh/components/general/methods.html\#focus-object-object) focus(Object object)

使组件获得或者失去焦点的方法

#### [\#](https://iot.mi.com/vela/quickapp/zh/components/general/methods.html\#%E5%8F%82%E6%95%B0-2) 参数

| 属性 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| focus | boolean | true | 否 | 使组件获得或者失去焦点，聚焦时可触发 focus 伪类效果（focus 伪类样式还未支持） |

#### [\#](https://iot.mi.com/vela/quickapp/zh/components/general/methods.html\#%E4%BB%A3%E7%A0%81%E7%A4%BA%E4%BE%8B-2) 代码示例

```
<script>
  // 聚焦效果
  this.$element('box1').focus();
  // 聚焦效果
  this.$element('box2').focus({focus:true});
  // 失焦效果
  this.$element('box3').focus({focus:false});
</script>

```

←
[通用事件](https://iot.mi.com/vela/quickapp/zh/components/general/events.html)[div](https://iot.mi.com/vela/quickapp/zh/components/container/div.html)
→


快速导航

[getBoundingClientRect(Object object)](https://iot.mi.com/vela/quickapp/zh/components/general/methods.html#getboundingclientrect-object-object "getBoundingClientRect(Object object)")

[focus(Object object)](https://iot.mi.com/vela/quickapp/zh/components/general/methods.html#focus-object-object "focus(Object object)")