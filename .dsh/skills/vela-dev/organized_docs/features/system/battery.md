---
url: "https://iot.mi.com/vela/quickapp/zh/features/system/battery.html"
title: "电量信息 battery | Xiaomi Vela JS 应用开发文档"
---

# [\#](https://iot.mi.com/vela/quickapp/zh/features/system/battery.html\#%E7%94%B5%E9%87%8F%E4%BF%A1%E6%81%AF-battery) 电量信息 battery

## [\#](https://iot.mi.com/vela/quickapp/zh/features/system/battery.html\#%E6%8E%A5%E5%8F%A3%E5%A3%B0%E6%98%8E) 接口声明

```
{ "name": "system.battery" }

```

## [\#](https://iot.mi.com/vela/quickapp/zh/features/system/battery.html\#%E5%AF%BC%E5%85%A5%E6%A8%A1%E5%9D%97) 导入模块

```
import battery from '@system.battery'
// 或
const battery = require('@system.battery')

```

## [\#](https://iot.mi.com/vela/quickapp/zh/features/system/battery.html\#%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89) 接口定义

### [\#](https://iot.mi.com/vela/quickapp/zh/features/system/battery.html\#battery-getstatus-object) battery.getStatus(OBJECT)

获取当前设备的电量信息

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/system/battery.html\#%E5%8F%82%E6%95%B0) 参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/system/battery.html\#success-%E8%BF%94%E5%9B%9E%E5%80%BC) success 返回值：

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| charging | Boolean | 是否正在充电 |
| level | Number | 当前电量，0.0 - 1.0 之间 |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/system/battery.html\#%E7%A4%BA%E4%BE%8B) 示例

```
battery.getStatus({
  success: function(data) {
      console.log(`handling success: ${data.level}`)
  },
  fail: function(data, code) {
      console.log(`handling fail, code = ${code}`)
  }
})

```

## [\#](https://iot.mi.com/vela/quickapp/zh/features/system/battery.html\#%E6%94%AF%E6%8C%81%E6%98%8E%E7%BB%86) 支持明细

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
[事件 event](https://iot.mi.com/vela/quickapp/zh/features/system/event.html)[密码算法 crypto](https://iot.mi.com/vela/quickapp/zh/features/security/crypto.html)
→


快速导航

[接口声明](https://iot.mi.com/vela/quickapp/zh/features/system/battery.html#%E6%8E%A5%E5%8F%A3%E5%A3%B0%E6%98%8E "接口声明")

[导入模块](https://iot.mi.com/vela/quickapp/zh/features/system/battery.html#%E5%AF%BC%E5%85%A5%E6%A8%A1%E5%9D%97 "导入模块")

[接口定义](https://iot.mi.com/vela/quickapp/zh/features/system/battery.html#%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89 "接口定义")

[battery.getStatus(OBJECT)](https://iot.mi.com/vela/quickapp/zh/features/system/battery.html#battery-getstatus-object "battery.getStatus(OBJECT)")

[支持明细](https://iot.mi.com/vela/quickapp/zh/features/system/battery.html#%E6%94%AF%E6%8C%81%E6%98%8E%E7%BB%86 "支持明细")