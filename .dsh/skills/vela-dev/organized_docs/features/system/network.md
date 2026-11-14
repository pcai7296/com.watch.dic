---
url: "https://iot.mi.com/vela/quickapp/zh/features/system/network.html"
title: "网络信息 network | Xiaomi Vela JS 应用开发文档"
---

# [\#](https://iot.mi.com/vela/quickapp/zh/features/system/network.html\#%E7%BD%91%E7%BB%9C%E4%BF%A1%E6%81%AF-network) 网络信息 network

## [\#](https://iot.mi.com/vela/quickapp/zh/features/system/network.html\#%E6%8E%A5%E5%8F%A3%E5%A3%B0%E6%98%8E) 接口声明

```
{ "name": "system.network" }

```

## [\#](https://iot.mi.com/vela/quickapp/zh/features/system/network.html\#%E5%AF%BC%E5%85%A5%E6%A8%A1%E5%9D%97) 导入模块

```
import network from '@system.network'
// 或
const network = require('@system.network')

```

## [\#](https://iot.mi.com/vela/quickapp/zh/features/system/network.html\#%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89) 接口定义

### [\#](https://iot.mi.com/vela/quickapp/zh/features/system/network.html\#network-gettype-object) network.getType(OBJECT)

获取网络类型

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/system/network.html\#%E5%8F%82%E6%95%B0) 参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调，可能是因为缺乏权限 |
| complete | Function | 否 | 执行结束后的回调 |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/system/network.html\#success-%E8%BF%94%E5%9B%9E%E5%80%BC) success 返回值：

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| type | String | 网络类型，可能的值为 2g，3g，4g，wifi，none，5g，bluetooth，others |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/system/network.html\#%E7%A4%BA%E4%BE%8B) 示例：

```
network.getType({
  success: function(data) {
    console.log(`handling success: ${data.type}`)
  }
})

```

### [\#](https://iot.mi.com/vela/quickapp/zh/features/system/network.html\#network-subscribe-object) network.subscribe(OBJECT)

监听网络类型变化。如果多次调用，仅最后一次调用生效

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/system/network.html\#%E5%8F%82%E6%95%B0-2) 参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Function | 否 | 每次网络发生变化，都会被回调 |
| fail | Function | 否 | 失败回调，可能是因为缺乏权限 |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/system/network.html\#callback-%E8%BF%94%E5%9B%9E%E5%80%BC) callback 返回值：

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| type | String | 网络类型，可能的值为 2g，3g，4g，wifi，none，5g，bluetooth，others。注：网络类型为 none 以外的值并不保证设备一定能访问到目标服务器，需要请求接口进行判断 |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/system/network.html\#%E7%A4%BA%E4%BE%8B-2) 示例：

```
network.subscribe({
  callback: function(data) {
    console.log('handling callback')
  }
})

```

### [\#](https://iot.mi.com/vela/quickapp/zh/features/system/network.html\#network-unsubscribe) network.unsubscribe()

取消监听网络类型变化

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/system/network.html\#%E5%8F%82%E6%95%B0-3) 参数：

无

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/system/network.html\#%E7%A4%BA%E4%BE%8B-3) 示例：

```
network.unsubscribe()

```

## [\#](https://iot.mi.com/vela/quickapp/zh/features/system/network.html\#%E6%94%AF%E6%8C%81%E6%98%8E%E7%BB%86) 支持明细

| 设备产品 | 说明 |
| --- | --- |
| 小米 S1 Pro 运动健康手表 | 支持 |
| 小米手环 8 Pro | 不支持 |
| Xiaomi Watch S3 | 支持 |
| Redmi Watch 4 | 不支持 |
| 小米腕部心电血压记录仪 | 不支持 |
| Xiaomi Watch S4 | 支持 |
| REDMI Watch 5 | 支持 |

←
[文件存储 file](https://iot.mi.com/vela/quickapp/zh/features/data/file.html)[振动 vibrator](https://iot.mi.com/vela/quickapp/zh/features/system/vibrator.html)
→


快速导航

[接口声明](https://iot.mi.com/vela/quickapp/zh/features/system/network.html#%E6%8E%A5%E5%8F%A3%E5%A3%B0%E6%98%8E "接口声明")

[导入模块](https://iot.mi.com/vela/quickapp/zh/features/system/network.html#%E5%AF%BC%E5%85%A5%E6%A8%A1%E5%9D%97 "导入模块")

[接口定义](https://iot.mi.com/vela/quickapp/zh/features/system/network.html#%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89 "接口定义")

[network.getType(OBJECT)](https://iot.mi.com/vela/quickapp/zh/features/system/network.html#network-gettype-object "network.getType(OBJECT)")

[network.subscribe(OBJECT)](https://iot.mi.com/vela/quickapp/zh/features/system/network.html#network-subscribe-object "network.subscribe(OBJECT)")

[network.unsubscribe()](https://iot.mi.com/vela/quickapp/zh/features/system/network.html#network-unsubscribe "network.unsubscribe()")

[支持明细](https://iot.mi.com/vela/quickapp/zh/features/system/network.html#%E6%94%AF%E6%8C%81%E6%98%8E%E7%BB%86 "支持明细")