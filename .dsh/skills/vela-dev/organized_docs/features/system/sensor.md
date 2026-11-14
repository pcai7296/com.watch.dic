---
url: "https://iot.mi.com/vela/quickapp/zh/features/system/sensor.html"
title: "传感器 sensor | Xiaomi Vela JS 应用开发文档"
---

# [\#](https://iot.mi.com/vela/quickapp/zh/features/system/sensor.html\#%E4%BC%A0%E6%84%9F%E5%99%A8-sensor) 传感器 sensor

## [\#](https://iot.mi.com/vela/quickapp/zh/features/system/sensor.html\#%E6%8E%A5%E5%8F%A3%E5%A3%B0%E6%98%8E) 接口声明

```
{ "name": "system.sensor" }

```

## [\#](https://iot.mi.com/vela/quickapp/zh/features/system/sensor.html\#%E5%AF%BC%E5%85%A5%E6%A8%A1%E5%9D%97) 导入模块

```
import sensor from '@system.sensor'
// 或
const sensor = require('@system.sensor')

```

## [\#](https://iot.mi.com/vela/quickapp/zh/features/system/sensor.html\#%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89) 接口定义

### [\#](https://iot.mi.com/vela/quickapp/zh/features/system/sensor.html\#sensor-subscribepressure-object) sensor.subscribePressure(OBJECT)

监听压力、压强感应数据。如果多次调用，仅最后一次调用生效

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/system/sensor.html\#%E5%8F%82%E6%95%B0) 参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Function | 是 | 每次位置信息发生变化，都会被回调 |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/system/sensor.html\#callback-%E8%BF%94%E5%9B%9E%E5%80%BC) callback 返回值：

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| pressure | Number | 压力、压强，单位hpa，百帕。小数点后四舍五入保留五位小数 |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/system/sensor.html\#%E7%A4%BA%E4%BE%8B) 示例：

```
sensor.subscribePressure({
  callback: function(ret) {
    console.log(`handling callback, pressure = ${ret.pressure}`)
  }
})

```

### [\#](https://iot.mi.com/vela/quickapp/zh/features/system/sensor.html\#sensor-unsubscribepressure) sensor.unsubscribePressure()

取消压力、压强感应数据

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/system/sensor.html\#%E5%8F%82%E6%95%B0-2) 参数：

无

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/system/sensor.html\#%E7%A4%BA%E4%BE%8B-2) 示例：

```
sensor.unsubscribePressure()

```

### [\#](https://iot.mi.com/vela/quickapp/zh/features/system/sensor.html\#sensor-subscribeaccelerometer-object) sensor.subscribeAccelerometer(OBJECT)

监听加速度感应数据

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/system/sensor.html\#%E5%8F%82%E6%95%B0-3) 参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| interval | String | 否 | 监听加速度数据回调函数的执行频率，默认normal |
| callback | Function | 是 | 重力感应数据变化后会回调此函数 |
| fail | Function | 否 | 订阅错误回调 |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/system/sensor.html\#interval-%E7%9A%84%E5%90%88%E6%B3%95%E5%80%BC) interval 的合法值：

| 值 | 说明 |
| --- | --- |
| game | 适用于更新游戏的回调频率，在 20ms/次 左右 |
| ui | 适用于更新 UI 的回调频率，在 60ms/次 左右 |
| normal | 普通的回调频率，在 200ms/次 左右 |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/system/sensor.html\#callback-%E8%BF%94%E5%9B%9E%E5%80%BC-2) callback 返回值：

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| x | Integer | x 轴坐标 |
| y | Integer | y 轴坐标 |
| z | Integer | z 轴坐标 |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/system/sensor.html\#%E7%A4%BA%E4%BE%8B-3) 示例：

```
sensor.subscribeAccelerometer({
  callback: function(ret) {
    console.log(`handling callback, x = ${ret.x}, y = ${ret.y}, z = ${ret.z}`)
  },
  fail: function(msg, code) {
    console.log(`handling callback, fail:`, msg, code)
  }
})

```

### [\#](https://iot.mi.com/vela/quickapp/zh/features/system/sensor.html\#sensor-unsubscribeaccelerometer-object) sensor.unsubscribeAccelerometer(OBJECT)

取消监听加速度感应数据

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/system/sensor.html\#%E5%8F%82%E6%95%B0-4) 参数：

无

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/system/sensor.html\#%E7%A4%BA%E4%BE%8B-4) 示例：

```
sensor.unsubscribeAccelerometer()

```

## [\#](https://iot.mi.com/vela/quickapp/zh/features/system/sensor.html\#%E6%94%AF%E6%8C%81%E6%98%8E%E7%BB%86) 支持明细

| 接口 | 已支持设备产品 | 不支持设备产品 |
| --- | --- | --- |
| subscribePressure | Xiaomi Watch S3、小米手环 9 Pro、Xiaomi Watch S4 | 小米 S1 Pro 运动健康手表、小米手环 8 Pro、小米手环 9、Redmi Watch 4、Xiaomi Watch H1、REDMI Watch 5 |
| unsubscribePressure | Xiaomi Watch S3、小米手环 9 Pro、Xiaomi Watch S4 | 小米 S1 Pro 运动健康手表、小米手环 8 Pro、小米手环 9、Redmi Watch 4、Xiaomi Watch H1、REDMI Watch 5 |
| subscribeAccelerometer | 小米手环 9、小米手环 9 Pro | Xiaomi Watch S3、小米 S1 Pro 运动健康手表、小米手环 8 Pro、Redmi Watch 4、Xiaomi Watch H1、Xiaomi Watch S4、REDMI Watch 5 |
| unsubscribeAccelerometer | 小米手环 9、小米手环 9 Pro | Xiaomi Watch S3、小米 S1 Pro 运动健康手表、小米手环 8 Pro、Redmi Watch 4、Xiaomi Watch H1、Xiaomi Watch S4、REDMI Watch 5 |

←
[地理位置 geolocation](https://iot.mi.com/vela/quickapp/zh/features/system/geolocation.html)[事件 event](https://iot.mi.com/vela/quickapp/zh/features/system/event.html)
→


快速导航

[接口声明](https://iot.mi.com/vela/quickapp/zh/features/system/sensor.html#%E6%8E%A5%E5%8F%A3%E5%A3%B0%E6%98%8E "接口声明")

[导入模块](https://iot.mi.com/vela/quickapp/zh/features/system/sensor.html#%E5%AF%BC%E5%85%A5%E6%A8%A1%E5%9D%97 "导入模块")

[接口定义](https://iot.mi.com/vela/quickapp/zh/features/system/sensor.html#%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89 "接口定义")

[sensor.subscribePressure(OBJECT)](https://iot.mi.com/vela/quickapp/zh/features/system/sensor.html#sensor-subscribepressure-object "sensor.subscribePressure(OBJECT)")

[sensor.unsubscribePressure()](https://iot.mi.com/vela/quickapp/zh/features/system/sensor.html#sensor-unsubscribepressure "sensor.unsubscribePressure()")

[sensor.subscribeAccelerometer(OBJECT)](https://iot.mi.com/vela/quickapp/zh/features/system/sensor.html#sensor-subscribeaccelerometer-object "sensor.subscribeAccelerometer(OBJECT)")

[sensor.unsubscribeAccelerometer(OBJECT)](https://iot.mi.com/vela/quickapp/zh/features/system/sensor.html#sensor-unsubscribeaccelerometer-object "sensor.unsubscribeAccelerometer(OBJECT)")

[支持明细](https://iot.mi.com/vela/quickapp/zh/features/system/sensor.html#%E6%94%AF%E6%8C%81%E6%98%8E%E7%BB%86 "支持明细")