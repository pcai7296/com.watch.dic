---
url: "https://iot.mi.com/vela/quickapp/zh/features/basic/configuration.html"
title: "应用配置 configuration | Xiaomi Vela JS 应用开发文档"
---

# [\#](https://iot.mi.com/vela/quickapp/zh/features/basic/configuration.html\#%E5%BA%94%E7%94%A8%E9%85%8D%E7%BD%AE-configuration) 应用配置 configuration

## [\#](https://iot.mi.com/vela/quickapp/zh/features/basic/configuration.html\#%E6%8E%A5%E5%8F%A3%E5%A3%B0%E6%98%8E) 接口声明

无需声明

## [\#](https://iot.mi.com/vela/quickapp/zh/features/basic/configuration.html\#%E5%AF%BC%E5%85%A5%E6%A8%A1%E5%9D%97) 导入模块

```
import configuration from '@system.configuration'
// 或
const configuration = require('@system.configuration')

```

## [\#](https://iot.mi.com/vela/quickapp/zh/features/basic/configuration.html\#%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89) 接口定义

### [\#](https://iot.mi.com/vela/quickapp/zh/features/basic/configuration.html\#configuration-getlocale) configuration.getLocale()

获取应用当前的语言环境。默认使用系统的语言环境，会因为设置或系统语言环境改变而发生变化

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/basic/configuration.html\#%E5%8F%82%E6%95%B0) 参数：

无

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/basic/configuration.html\#%E8%BF%94%E5%9B%9E%E5%80%BC) 返回值：

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| language | String | 语言 |
| countryOrRegion | String | 国家或地区 |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/basic/configuration.html\#%E7%A4%BA%E4%BE%8B) 示例：

```
const locale = configuration.getLocale()
console.log(locale.language)

```

←
[页面路由 router](https://iot.mi.com/vela/quickapp/zh/features/basic/router.html)[数据请求 fetch](https://iot.mi.com/vela/quickapp/zh/features/network/fetch.html)
→


快速导航

[接口声明](https://iot.mi.com/vela/quickapp/zh/features/basic/configuration.html#%E6%8E%A5%E5%8F%A3%E5%A3%B0%E6%98%8E "接口声明")

[导入模块](https://iot.mi.com/vela/quickapp/zh/features/basic/configuration.html#%E5%AF%BC%E5%85%A5%E6%A8%A1%E5%9D%97 "导入模块")

[接口定义](https://iot.mi.com/vela/quickapp/zh/features/basic/configuration.html#%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89 "接口定义")

[configuration.getLocale()](https://iot.mi.com/vela/quickapp/zh/features/basic/configuration.html#configuration-getlocale "configuration.getLocale()")