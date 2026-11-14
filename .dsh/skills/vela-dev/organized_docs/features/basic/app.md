---
url: "https://iot.mi.com/vela/quickapp/zh/features/basic/app.html"
title: "应用上下文 app | Xiaomi Vela JS 应用开发文档"
---

# [\#](https://iot.mi.com/vela/quickapp/zh/features/basic/app.html\#%E5%BA%94%E7%94%A8%E4%B8%8A%E4%B8%8B%E6%96%87-app) 应用上下文 app

## [\#](https://iot.mi.com/vela/quickapp/zh/features/basic/app.html\#%E6%8E%A5%E5%8F%A3%E5%A3%B0%E6%98%8E) 接口声明

无需声明

## [\#](https://iot.mi.com/vela/quickapp/zh/features/basic/app.html\#%E5%AF%BC%E5%85%A5%E6%A8%A1%E5%9D%97) 导入模块

```
import app from '@system.app'
// 或
const app = require('@system.app')

```

## [\#](https://iot.mi.com/vela/quickapp/zh/features/basic/app.html\#%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89) 接口定义

### [\#](https://iot.mi.com/vela/quickapp/zh/features/basic/app.html\#app-getinfo) app.getInfo()

获取当前应用信息

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/basic/app.html\#%E5%8F%82%E6%95%B0) 参数：

无

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/basic/app.html\#%E8%BF%94%E5%9B%9E%E5%80%BC) 返回值：

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| packageName | String | 应用包名 |
| icon | String | 应用图标路径 |
| name | String | 应用名称 |
| versionName | String | 应用版本名称 |
| versionCode | Integer | 应用版本号 |
| logLevel | String | log 级别 |
| source | Object | 应用来源 |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/basic/app.html\#source) source

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| packageName | String | 来源 app 的包名，一级来源 |
| type | String | 来源类型，二级来源，值为 shortcut、push、url、barcode、nfc、bluetooth、other |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/basic/app.html\#%E7%A4%BA%E4%BE%8B) 示例：

```
console.log(JSON.stringify(app.getInfo()))

```

```
// console 值打印
{
  // 应用包名
  "packageName": "com.example.demo",
  // 应用名称
  "name": "demo",
  // 应用版本名称
  "versionName": "1.0.0",
  // 应用版本号
  "versionCode": 1,
  // 应用图片
  "icon": "/common/logo.png",
  // log 级别
  "logLevel": "debug",
  // 应用来源
  "source": {
    // 来源app的包名
    "packageName": "",
    // 来源类型
    "type": "shortcut"
  }
}

```

### [\#](https://iot.mi.com/vela/quickapp/zh/features/basic/app.html\#app-terminate) app.terminate()

退出当前应用

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/basic/app.html\#%E5%8F%82%E6%95%B0-2) 参数：

无

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/basic/app.html\#%E8%BF%94%E5%9B%9E%E5%80%BC-2) 返回值：

无

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/basic/app.html\#%E7%A4%BA%E4%BE%8B-2) 示例：

```
app.terminate()

```

### [\#](https://iot.mi.com/vela/quickapp/zh/features/basic/app.html\#app-caniuse) app.canIUse() [3+](https://iot.mi.com/vela/quickapp/zh/guide/version/APILevel3)

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/basic/app.html\#%E5%8F%82%E6%95%B0-3) 参数：

| 类型 | 描述 |
| --- | --- |
| String | 要查询的能力，格式见下方 |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/basic/app.html\#%E8%BF%94%E5%9B%9E%E5%80%BC-3) 返回值：

| 类型 | 描述 |
| --- | --- |
| Boolean | 查询的能力是否支持 |

### [\#](https://iot.mi.com/vela/quickapp/zh/features/basic/app.html\#%E5%85%A5%E5%8F%82%E6%A0%BC%E5%BC%8F) 入参格式

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/basic/app.html\#%E6%9F%A5%E8%AF%A2%E6%8E%A5%E5%8F%A3) 查询接口

```
// 查询feature下的方法是否支持
'@${featureName}.${method}'
// 查询某个feature是否支持
'@${featureName}'

```

**示例**

```
import app from '@system.app';

if (app.canIUse('@system.router.push')) {
  // 可以使用方法@system.router.push
}
if (app.canIUse('@system.router')) {
  // 可以使用@system.router接口
}

```

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/basic/app.html\#%E6%9F%A5%E8%AF%A2%E7%BB%84%E4%BB%B6) 查询组件

type取值可以是 `'attr'`、 `'style'`、 `'method'`，分别对应组件的属性、样式、方法。

```
// 查询组件下的属性、样式、方法是否支持
`${componentName}.${type}.${name}`
// 查询组件是否支持
`${componentName}`

```

**示例**

```
import app from '@system.app';

if (app.canIUse('scroll')) {
  // 可以使用scroll组件
}
if (app.canIUse('scroll.attr.scroll-x')) {
  // 可以使用scroll组件的scroll-x属性
}

```

←
[通用规范](https://iot.mi.com/vela/quickapp/zh/features/grammar.html)[设备信息 device](https://iot.mi.com/vela/quickapp/zh/features/basic/device.html)
→


快速导航

[接口声明](https://iot.mi.com/vela/quickapp/zh/features/basic/app.html#%E6%8E%A5%E5%8F%A3%E5%A3%B0%E6%98%8E "接口声明")

[导入模块](https://iot.mi.com/vela/quickapp/zh/features/basic/app.html#%E5%AF%BC%E5%85%A5%E6%A8%A1%E5%9D%97 "导入模块")

[接口定义](https://iot.mi.com/vela/quickapp/zh/features/basic/app.html#%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89 "接口定义")

[app.getInfo()](https://iot.mi.com/vela/quickapp/zh/features/basic/app.html#app-getinfo "app.getInfo()")

[app.terminate()](https://iot.mi.com/vela/quickapp/zh/features/basic/app.html#app-terminate "app.terminate()")

[app.canIUse()](https://iot.mi.com/vela/quickapp/zh/features/basic/app.html#app-caniuse "app.canIUse()")

[入参格式](https://iot.mi.com/vela/quickapp/zh/features/basic/app.html#%E5%85%A5%E5%8F%82%E6%A0%BC%E5%BC%8F "入参格式")