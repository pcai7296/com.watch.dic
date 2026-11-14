---
url: "https://iot.mi.com/vela/quickapp/zh/features/system/vibrator.html"
title: "振动 vibrator | Xiaomi Vela JS 应用开发文档"
---

# [\#](https://iot.mi.com/vela/quickapp/zh/features/system/vibrator.html\#%E6%8C%AF%E5%8A%A8-vibrator) 振动 vibrator

## [\#](https://iot.mi.com/vela/quickapp/zh/features/system/vibrator.html\#%E6%8E%A5%E5%8F%A3%E5%A3%B0%E6%98%8E) 接口声明

```
{ "name": "system.vibrator" }

```

## [\#](https://iot.mi.com/vela/quickapp/zh/features/system/vibrator.html\#%E5%AF%BC%E5%85%A5%E6%A8%A1%E5%9D%97) 导入模块

```
import vibrator from '@system.vibrator'
// 或
const vibrator = require('@system.vibrator')

```

## [\#](https://iot.mi.com/vela/quickapp/zh/features/system/vibrator.html\#%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89) 接口定义

### [\#](https://iot.mi.com/vela/quickapp/zh/features/system/vibrator.html\#vibrator-vibrate-object) vibrator.vibrate(OBJECT)

触发振动

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/system/vibrator.html\#%E5%8F%82%E6%95%B0) 参数：

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mode | String | 否 | 振动模式，"long"表示长振动，"short"表示短振动。默认为 long |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/system/vibrator.html\#%E7%A4%BA%E4%BE%8B) 示例：

```
vibrator.vibrate({
  mode: 'long'
})

```

### [\#](https://iot.mi.com/vela/quickapp/zh/features/system/vibrator.html\#vibrator-start-object) vibrator.start(OBJECT)

开始振动

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/system/vibrator.html\#%E5%8F%82%E6%95%B0-2) 参数：

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| duration | Number | 是 | 振动持续时间(单位 ms)，必须为正整数 |
| interval | Number | 是 | 振动间隔时间(单位 ms)，必须为正整数 |
| count | Number | 是 | 振动次数，必须为正整数 |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/system/vibrator.html\#success-%E8%BF%94%E5%9B%9E%E5%80%BC) success 返回值：

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| id | Number | 唯一的 ID，标识振动任务 |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/system/vibrator.html\#fail-%E8%BF%94%E5%9B%9E%E5%80%BC) fail 返回值：

| 错误码 | 说明 |
| --- | --- |
| 205 | 任务已存在 |
| 202 | 参数错误 |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/system/vibrator.html\#%E7%A4%BA%E4%BE%8B-2) 示例：

```
vibrator.start({
  duration: 1000,
  interval: 1000,
  count: 10,
  success: function (data) {
    console.log(`handling success, id = ${data.id}`)
  },
  fail: function(data, code) {
    console.log(`handling fail, code = ${code}, errorMsg=${data}`)
  },
  complete: function () {
    console.log(`handling complete`)
  }
})

```

### [\#](https://iot.mi.com/vela/quickapp/zh/features/system/vibrator.html\#vibrator-stop-number) vibrator.stop(Number)

停止振动

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/system/vibrator.html\#%E5%8F%82%E6%95%B0-3) 参数：

| 类型 | 必填 | 说明 |
| --- | --- | --- |
| Number | 是 | 振动任务 ID |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/system/vibrator.html\#%E8%BF%94%E5%9B%9E%E5%80%BC) 返回值：

| 类型 | 说明 |
| --- | --- |
| Boolean | true：成功；false：失败 |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/system/vibrator.html\#%E7%A4%BA%E4%BE%8B-3) 示例：

```
vibrator.stop(1)

```

### [\#](https://iot.mi.com/vela/quickapp/zh/features/system/vibrator.html\#vibrator-getsystemdefaultmode) vibrator.getSystemDefaultMode()

获取系统默认振动模式

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/system/vibrator.html\#%E5%8F%82%E6%95%B0-4) 参数：

无

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/system/vibrator.html\#%E8%BF%94%E5%9B%9E%E5%80%BC-2) 返回值：

| 类型 | 说明 |
| --- | --- |
| Number | 0：关闭振动；1：标准振动；2：加强振动 |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/system/vibrator.html\#%E7%A4%BA%E4%BE%8B-4) 示例：

```
vibrator.getSystemDefaultMode()

```

## [\#](https://iot.mi.com/vela/quickapp/zh/features/system/vibrator.html\#%E6%94%AF%E6%8C%81%E6%98%8E%E7%BB%86) 支持明细

| 接口 | 已支持设备产品 | 不支持设备产品 |
| --- | --- | --- |
| vibrate | 小米 S1 Pro 运动健康手表、小米手环 8 Pro、小米手环 9、Redmi Watch 4、Xiaomi Watch H1、Xiaomi Watch S3、小米手环 9 Pro、Xiaomi Watch S4、REDMI Watch 5 | - |
| start | - | Xiaomi Watch S3、小米手环 9 Pro、Xiaomi Watch S4、REDMI Watch 5、小米 S1 Pro 运动健康手表、小米手环 8 Pro、小米手环 9、Redmi Watch 4、Xiaomi Watch H1 |
| stop | - | Xiaomi Watch S3、小米手环 9 Pro、Xiaomi Watch S4、REDMI Watch 5、小米 S1 Pro 运动健康手表、小米手环 8 Pro、小米手环 9、Redmi Watch 4、Xiaomi Watch H1 |
| getSystemDefaultMode | - | Xiaomi Watch S3、小米手环 9 Pro、Xiaomi Watch S4、REDMI Watch 5、小米 S1 Pro 运动健康手表、小米手环 8 Pro、小米手环 9、Redmi Watch 4、Xiaomi Watch H1 |

←
[网络信息 network](https://iot.mi.com/vela/quickapp/zh/features/system/network.html)[屏幕亮度 brightness](https://iot.mi.com/vela/quickapp/zh/features/system/brightness.html)
→


快速导航

[接口声明](https://iot.mi.com/vela/quickapp/zh/features/system/vibrator.html#%E6%8E%A5%E5%8F%A3%E5%A3%B0%E6%98%8E "接口声明")

[导入模块](https://iot.mi.com/vela/quickapp/zh/features/system/vibrator.html#%E5%AF%BC%E5%85%A5%E6%A8%A1%E5%9D%97 "导入模块")

[接口定义](https://iot.mi.com/vela/quickapp/zh/features/system/vibrator.html#%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89 "接口定义")

[vibrator.vibrate(OBJECT)](https://iot.mi.com/vela/quickapp/zh/features/system/vibrator.html#vibrator-vibrate-object "vibrator.vibrate(OBJECT)")

[vibrator.start(OBJECT)](https://iot.mi.com/vela/quickapp/zh/features/system/vibrator.html#vibrator-start-object "vibrator.start(OBJECT)")

[vibrator.stop(Number)](https://iot.mi.com/vela/quickapp/zh/features/system/vibrator.html#vibrator-stop-number "vibrator.stop(Number)")

[vibrator.getSystemDefaultMode()](https://iot.mi.com/vela/quickapp/zh/features/system/vibrator.html#vibrator-getsystemdefaultmode "vibrator.getSystemDefaultMode()")

[支持明细](https://iot.mi.com/vela/quickapp/zh/features/system/vibrator.html#%E6%94%AF%E6%8C%81%E6%98%8E%E7%BB%86 "支持明细")