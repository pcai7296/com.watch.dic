---
url: "https://iot.mi.com/vela/quickapp/zh/features/system/event.html"
title: "事件 event | Xiaomi Vela JS 应用开发文档"
---

# [\#](https://iot.mi.com/vela/quickapp/zh/features/system/event.html\#%E4%BA%8B%E4%BB%B6-event) 事件 event [4+](https://iot.mi.com/vela/quickapp/zh/guide/version/APILevel4)

## [\#](https://iot.mi.com/vela/quickapp/zh/features/system/event.html\#%E6%8E%A5%E5%8F%A3%E5%A3%B0%E6%98%8E) 接口声明

```
{ "name": "system.event" }

```

## [\#](https://iot.mi.com/vela/quickapp/zh/features/system/event.html\#%E5%AF%BC%E5%85%A5%E6%A8%A1%E5%9D%97) 导入模块

```
import event from '@system.event'
// 或
const event = require('@system.event')

```

## [\#](https://iot.mi.com/vela/quickapp/zh/features/system/event.html\#%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89) 接口定义

### [\#](https://iot.mi.com/vela/quickapp/zh/features/system/event.html\#event-publish-object) event.publish (OBJECT)

发布公共事件

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/system/event.html\#%E5%8F%82%E6%95%B0) 参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| eventName | String | 是 | 事件名称，公共事件保留名称被系统占用，请勿使用 |
| options | Object | 否 | 事件参数 |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/system/event.html\#options-%E5%8F%82%E6%95%B0) options 参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| params | Object | 否 | 事件参数 |
| permissions | Array | 否 | 订阅者的权限，拥有权限的包才能收到发送的事件 |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/system/event.html\#%E7%B3%BB%E7%BB%9F%E6%94%AF%E6%8C%81%E7%9A%84%E5%85%AC%E5%85%B1%E4%BA%8B%E4%BB%B6) 系统支持的公共事件：

| 系统内部事件名称 | 订阅者所需权限 | 说明 |
| --- | --- | --- |
| usual.event.BATTERY\_CHANGED | 无 | 电量改变，参数：level:0.0 - 1.0 之间 |
| usual.event.DISCHARGING | 无 | 停止充电 |
| usual.event.CHARGING | 无 | 开始充电 |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/system/event.html\#%E8%BF%94%E5%9B%9E%E5%80%BC) 返回值：

无

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/system/event.html\#%E7%A4%BA%E4%BE%8B) 示例：

```
event.publish({
  eventName: 'myEventName',
  options: {
    params: { age: 10, name: 'peter' },
    permissions: ['com.example.demo']
  }
})

```

### [\#](https://iot.mi.com/vela/quickapp/zh/features/system/event.html\#event-subscribe-object) event.subscribe(OBJECT)

订阅公共事件

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/system/event.html\#%E5%8F%82%E6%95%B0-2) 参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| eventName | String | 是 | 事件名称 |
| callback | Function | 是 | 回调函数 |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/system/event.html\#%E5%9B%9E%E8%B0%83%E5%8F%82%E6%95%B0) 回调参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| params | Object | 否 | 事件参数 |
| package | String | 否 | 事件推送者包名 |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/system/event.html\#%E8%BF%94%E5%9B%9E%E5%80%BC-2) 返回值：

| 类型 | 必填 | 说明 |
| --- | --- | --- |
| Number | 是 | 事件id，订阅失败返回undefined |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/system/event.html\#%E7%A4%BA%E4%BE%8B-2) 示例：

```
const evtId = event.subscribe({
  eventName: 'myEventName',
  callback: function(res) {
    if (res.package === 'com.example.demo') {
      console.log(res.params)
    }
  }
})
console.log(evtId)

```

### [\#](https://iot.mi.com/vela/quickapp/zh/features/system/event.html\#event-unsubscribe-object) event.unsubscribe(OBJECT)

取消订阅公共事件

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/system/event.html\#%E5%8F%82%E6%95%B0-3) 参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | Number | 是 | 订阅id |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/system/event.html\#%E7%A4%BA%E4%BE%8B-3) 示例：

```
const evtId = event.subscribe({
  eventName: 'myEventName',
  callback: function(res) {
    if (res.package === 'com.example.demo') {
      console.log(res.params)
    }
  }
})

event.unsubscribe({ id: evtId })

```

## [\#](https://iot.mi.com/vela/quickapp/zh/features/system/event.html\#%E6%94%AF%E6%8C%81%E6%98%8E%E7%BB%86) 支持明细

| 设备产品 | 说明 |
| --- | --- |
| 小米 S1 Pro 运动健康手表 | 不支持 |
| 小米手环 8 Pro | 不支持 |
| Xiaomi Watch S3 | 不支持 |
| Redmi Watch 4 | 不支持 |
| 小米腕部心电血压记录仪 | 不支持 |
| Xiaomi Watch S4 | 支持 |
| REDMI Watch 5 | 支持 |

←
[传感器 sensor](https://iot.mi.com/vela/quickapp/zh/features/system/sensor.html)[电量信息 battery](https://iot.mi.com/vela/quickapp/zh/features/system/battery.html)
→


快速导航

[接口声明](https://iot.mi.com/vela/quickapp/zh/features/system/event.html#%E6%8E%A5%E5%8F%A3%E5%A3%B0%E6%98%8E "接口声明")

[导入模块](https://iot.mi.com/vela/quickapp/zh/features/system/event.html#%E5%AF%BC%E5%85%A5%E6%A8%A1%E5%9D%97 "导入模块")

[接口定义](https://iot.mi.com/vela/quickapp/zh/features/system/event.html#%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89 "接口定义")

[event.publish (OBJECT)](https://iot.mi.com/vela/quickapp/zh/features/system/event.html#event-publish-object "event.publish (OBJECT)")

[event.subscribe(OBJECT)](https://iot.mi.com/vela/quickapp/zh/features/system/event.html#event-subscribe-object "event.subscribe(OBJECT)")

[event.unsubscribe(OBJECT)](https://iot.mi.com/vela/quickapp/zh/features/system/event.html#event-unsubscribe-object "event.unsubscribe(OBJECT)")

[支持明细](https://iot.mi.com/vela/quickapp/zh/features/system/event.html#%E6%94%AF%E6%8C%81%E6%98%8E%E7%BB%86 "支持明细")