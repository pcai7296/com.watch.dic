---
url: "https://iot.mi.com/vela/quickapp/zh/features/basic/router.html"
title: "页面路由 router | Xiaomi Vela JS 应用开发文档"
---

# [\#](https://iot.mi.com/vela/quickapp/zh/features/basic/router.html\#%E9%A1%B5%E9%9D%A2%E8%B7%AF%E7%94%B1-router) 页面路由 router

## [\#](https://iot.mi.com/vela/quickapp/zh/features/basic/router.html\#%E6%8E%A5%E5%8F%A3%E5%A3%B0%E6%98%8E) 接口声明

无需声明

## [\#](https://iot.mi.com/vela/quickapp/zh/features/basic/router.html\#%E5%AF%BC%E5%85%A5%E6%A8%A1%E5%9D%97) 导入模块

```
import router from '@system.router'
// 或
const router = require('@system.router')

```

## [\#](https://iot.mi.com/vela/quickapp/zh/features/basic/router.html\#%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89) 接口定义

### [\#](https://iot.mi.com/vela/quickapp/zh/features/basic/router.html\#router-push-object) router.push(OBJECT)

跳转到应用内的某个页面

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/basic/router.html\#%E5%8F%82%E6%95%B0) 参数：

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uri | String | 是 | 要跳转到的 uri，可以是下面的格式：<br>1、包含 schema 的完整 uri；<br>2、以‘/’开头的应用内页面的路径；例：/about<br>3、以非‘/’开头的应用内页面的名称；例：About<br>4、特殊的，如果 uri 的值是"/"，则跳转到 path 为"/"的页，没有则跳转到首页<br>支持包含 schema 的完整 uri。对于带有 schema 的 uri，处理流程如下：<br>如果 schema 是 hap （参见 [hap 链接](https://iot.mi.com/vela/quickapp/zh/guide/framework/other/hap-schema.html)），会跳转到 hap 链接所支持的类型 |
| params | Object | 否 | 跳转时需要传递的数据，参数可以在目标页面中通过 `this.param1` 的方式使用，param1 为 json 中的参数名，param1 对应的值会统一转换为 String 类型。使用 `this.param1` 变量时，需要在目标页面中在 `public`（应用外传参）或 `protected` (应用内传参)下定义 key 名相同的属性 |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/basic/router.html\#params%E5%8F%82%E6%95%B0) params参数：

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| \_\_\_PARAM\_LAUNCH\_FLAG\_\_\_ | String | 否 | JS 应用启动参数，目前仅支持"clearTask"，在启动目标页面时会清除除此页面外的其他页面。详见 [页面启动模式](https://iot.mi.com/vela/quickapp/zh/guide/framework/other/launch-mode.html) |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/basic/router.html\#%E7%A4%BA%E4%BE%8B) 示例：

- 应用内切换页面

  - path 切换


    ```
    router.push({
      uri: '/about',
      params: {
        testId: '1'
      }
    })

    ```

  - name 切换


    ```
    // open page by name
    router.push({
      uri: 'About',
      params: {
        testId: '1'
      }
    })

    ```

  - 切换页面并清除其他页面


    ```
    router.push({
      uri: '/about',
      params: {
        ___PARAM_LAUNCH_FLAG___: 'clearTask'
      }
    })

    ```

### [\#](https://iot.mi.com/vela/quickapp/zh/features/basic/router.html\#router-replace-object) router.replace(OBJECT)

用应用内的某个页面替换当前页面，并销毁被替换的页面

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/basic/router.html\#%E5%8F%82%E6%95%B0-2) 参数：

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uri | String | 是 | 要跳转到的 uri，可以是下面的格式：<br>1. 以"/"开头的应用内页面的路径；例：/about<br>2. 以非"/"开头的应用内页面的名称；例：About<br>3. 特殊的，如果 uri 的值是"/"，则跳转到 path 为"/"的页，没有则跳转到首页 |
| params | Object | 否 | 跳转时需要传递的数据，参数可以在目标页面中通过 `this.param1` 的方式使用，param1 为 json 中的参数名，param1 对应的值会统一转换为 String 类型。使用 `this.param1` 变量时，需要在目标页面中在 `public`（应用外传参）或 `protected` (应用内传参)下定义 key 名相同的属性 |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/basic/router.html\#%E7%A4%BA%E4%BE%8B-2) 示例：

```
router.replace({
  uri: '/test',
  params: {
    testId: '1'
  }
})

```

### [\#](https://iot.mi.com/vela/quickapp/zh/features/basic/router.html\#router-back-object) router.back(OBJECT)

返回指定页面

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/basic/router.html\#%E5%8F%82%E6%95%B0-3) 参数：

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | String | 否 | 返回目标页面的路径，可以是以下几种取值：<br>1. 不传该参数，返回上一页面<br>2. 以"/"开头的应用内已打开页面的路径；例：/about<br>3. 特殊的，如果 path 的值是"/"，则跳转到页面名称为"/"的页，没有则跳转到首页<br>注意点：<br>1. path 需要是以"/"开头的当前应用已经打开的页面路径，否则均视为无效参数，返回上一页面<br>2. 若根据 path 未匹配到已经打开的页面，返回上一页面<br>3. 若根据 path 参数匹配到多个页面，返回至最后打开的页面 |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/basic/router.html\#%E7%A4%BA%E4%BE%8B-3) 示例：

```
// A页面, open page by name
router.push({
  uri: 'B'
})
// B页面, open page by name
router.push({
  uri: 'C'
})
// C页面, open page by name
router.push({
  uri: 'D'
})
// D页面, open page by name
router.push({
  uri: 'E'
})
// E页面不传入页面路径，返回至D页面
router.back()
// D页面不传入页面名称，返回至C页面
router.back()
// C页面传入页面路径，返回至A页面
router.back({
  path: '/A'
})

```

### [\#](https://iot.mi.com/vela/quickapp/zh/features/basic/router.html\#router-clear) router.clear()

清空所有历史页面记录，仅保留当前页面

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/basic/router.html\#%E5%8F%82%E6%95%B0-4) 参数：

无

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/basic/router.html\#%E7%A4%BA%E4%BE%8B-4) 示例：

```
router.clear()

```

### [\#](https://iot.mi.com/vela/quickapp/zh/features/basic/router.html\#router-getstate) router.getState()

获取当前页面状态

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/basic/router.html\#%E8%BF%94%E5%9B%9E%E5%8F%82%E6%95%B0) 返回参数：

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| index | Number | 当前页面在页面栈中的位置 |
| name | String | 当前页面的名称 |
| path | String | 当前页面的路径 |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/basic/router.html\#%E7%A4%BA%E4%BE%8B-5) 示例：

```
var page = router.getState()
console.log(`page index = ${page.index}`)
console.log(`page name = ${page.name}`)
console.log(`page path = ${page.path}`)

```

←
[设备信息 device](https://iot.mi.com/vela/quickapp/zh/features/basic/device.html)[应用配置 configuration](https://iot.mi.com/vela/quickapp/zh/features/basic/configuration.html)
→


快速导航

[接口声明](https://iot.mi.com/vela/quickapp/zh/features/basic/router.html#%E6%8E%A5%E5%8F%A3%E5%A3%B0%E6%98%8E "接口声明")

[导入模块](https://iot.mi.com/vela/quickapp/zh/features/basic/router.html#%E5%AF%BC%E5%85%A5%E6%A8%A1%E5%9D%97 "导入模块")

[接口定义](https://iot.mi.com/vela/quickapp/zh/features/basic/router.html#%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89 "接口定义")

[router.push(OBJECT)](https://iot.mi.com/vela/quickapp/zh/features/basic/router.html#router-push-object "router.push(OBJECT)")

[router.replace(OBJECT)](https://iot.mi.com/vela/quickapp/zh/features/basic/router.html#router-replace-object "router.replace(OBJECT)")

[router.back(OBJECT)](https://iot.mi.com/vela/quickapp/zh/features/basic/router.html#router-back-object "router.back(OBJECT)")

[router.clear()](https://iot.mi.com/vela/quickapp/zh/features/basic/router.html#router-clear "router.clear()")

[router.getState()](https://iot.mi.com/vela/quickapp/zh/features/basic/router.html#router-getstate "router.getState()")