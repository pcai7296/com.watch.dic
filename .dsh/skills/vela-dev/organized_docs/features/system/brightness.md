---
url: "https://iot.mi.com/vela/quickapp/zh/features/system/brightness.html"
title: "屏幕亮度 brightness | Xiaomi Vela JS 应用开发文档"
---

# [\#](https://iot.mi.com/vela/quickapp/zh/features/system/brightness.html\#%E5%B1%8F%E5%B9%95%E4%BA%AE%E5%BA%A6-brightness) 屏幕亮度 brightness

## [\#](https://iot.mi.com/vela/quickapp/zh/features/system/brightness.html\#%E6%8E%A5%E5%8F%A3%E5%A3%B0%E6%98%8E) 接口声明

```
{ "name": "system.brightness" }

```

## [\#](https://iot.mi.com/vela/quickapp/zh/features/system/brightness.html\#%E5%AF%BC%E5%85%A5%E6%A8%A1%E5%9D%97) 导入模块

```
import brightness from '@system.brightness'
// 或
const brightness = require('@system.brightness')

```

## [\#](https://iot.mi.com/vela/quickapp/zh/features/system/brightness.html\#%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89) 接口定义

### [\#](https://iot.mi.com/vela/quickapp/zh/features/system/brightness.html\#brightness-getvalue-object) brightness.getValue(OBJECT)

获得当前屏幕亮度值

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/system/brightness.html\#%E5%8F%82%E6%95%B0) 参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/system/brightness.html\#success-%E8%BF%94%E5%9B%9E%E5%80%BC) success 返回值：

| 参数值 | 类型 | 说明 |
| --- | --- | --- |
| value | Integer | 屏幕亮度，取值范围 0-255 |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/system/brightness.html\#%E7%A4%BA%E4%BE%8B) 示例：

```
brightness.getValue({
  success: function(data) {
    console.log(`handling success, value = ${data.value}`)
  },
  fail: function(data, code) {
    console.log(`handling fail, code = ${code}`)
  }
})

```

### [\#](https://iot.mi.com/vela/quickapp/zh/features/system/brightness.html\#brightness-setvalue-object) brightness.setValue(OBJECT)

设置当前屏幕亮度值

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/system/brightness.html\#%E5%8F%82%E6%95%B0-2) 参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | Integer | 是 | 屏幕亮度，取值范围 0-255 |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/system/brightness.html\#%E7%A4%BA%E4%BE%8B-2) 示例：

```
brightness.setValue({
  value: 100,
  success: function() {
    console.log('handling success')
  },
  fail: function(data, code) {
    console.log(`handling fail, code = ${code}`)
  }
})

```

### [\#](https://iot.mi.com/vela/quickapp/zh/features/system/brightness.html\#brightness-getmode-object) brightness.getMode(OBJECT)

获得当前屏幕亮度模式

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/system/brightness.html\#%E5%8F%82%E6%95%B0-3) 参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/system/brightness.html\#success-%E8%BF%94%E5%9B%9E%E5%80%BC-2) success 返回值：

| 参数值 | 类型 | 说明 |
| --- | --- | --- |
| mode | Integer | 0 为手动调节屏幕亮度，1 为自动调节屏幕亮度 |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/system/brightness.html\#%E7%A4%BA%E4%BE%8B-3) 示例：

```
brightness.getMode({
  success: function(data) {
    console.log(`handling success, mode = ${data.mode}`)
  },
  fail: function(data, code) {
    console.log(`handling fail, code = ${code}`)
  }
})

```

### [\#](https://iot.mi.com/vela/quickapp/zh/features/system/brightness.html\#brightness-setmode-object) brightness.setMode(OBJECT)

设置当前屏幕亮度模式

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/system/brightness.html\#%E5%8F%82%E6%95%B0-4) 参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mode | Integer | 是 | 0 为手动调节屏幕亮度，1 为自动调节屏幕亮度 |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/system/brightness.html\#%E7%A4%BA%E4%BE%8B-4) 示例：

```
brightness.setMode({
  mode: 1,
  success: function() {
    console.log('handling success')
  },
  fail: function(data, code) {
    console.log(`handling fail, code = ${code}`)
  }
})

```

### [\#](https://iot.mi.com/vela/quickapp/zh/features/system/brightness.html\#brightness-setkeepscreenon-object) brightness.setKeepScreenOn(OBJECT)

设置是否保持常亮状态

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/system/brightness.html\#%E5%8F%82%E6%95%B0-5) 参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| keepScreenOn | Boolean | 是 | 是否保持屏幕常亮 |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/system/brightness.html\#%E7%A4%BA%E4%BE%8B-5) 示例：

```
brightness.setKeepScreenOn({
  keepScreenOn: true,
  success: function() {
    console.log('handling success')
  },
  fail: function(data, code) {
    console.log(`handling fail, code = ${code}`)
  }
})

```

←
[振动 vibrator](https://iot.mi.com/vela/quickapp/zh/features/system/vibrator.html)[录音 record](https://iot.mi.com/vela/quickapp/zh/features/system/record.html)
→


快速导航

[接口声明](https://iot.mi.com/vela/quickapp/zh/features/system/brightness.html#%E6%8E%A5%E5%8F%A3%E5%A3%B0%E6%98%8E "接口声明")

[导入模块](https://iot.mi.com/vela/quickapp/zh/features/system/brightness.html#%E5%AF%BC%E5%85%A5%E6%A8%A1%E5%9D%97 "导入模块")

[接口定义](https://iot.mi.com/vela/quickapp/zh/features/system/brightness.html#%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89 "接口定义")

[brightness.getValue(OBJECT)](https://iot.mi.com/vela/quickapp/zh/features/system/brightness.html#brightness-getvalue-object "brightness.getValue(OBJECT)")

[brightness.setValue(OBJECT)](https://iot.mi.com/vela/quickapp/zh/features/system/brightness.html#brightness-setvalue-object "brightness.setValue(OBJECT)")

[brightness.getMode(OBJECT)](https://iot.mi.com/vela/quickapp/zh/features/system/brightness.html#brightness-getmode-object "brightness.getMode(OBJECT)")

[brightness.setMode(OBJECT)](https://iot.mi.com/vela/quickapp/zh/features/system/brightness.html#brightness-setmode-object "brightness.setMode(OBJECT)")

[brightness.setKeepScreenOn(OBJECT)](https://iot.mi.com/vela/quickapp/zh/features/system/brightness.html#brightness-setkeepscreenon-object "brightness.setKeepScreenOn(OBJECT)")