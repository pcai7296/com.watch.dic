---
url: "https://iot.mi.com/vela/quickapp/zh/features/network/request.html"
title: "下载 request | Xiaomi Vela JS 应用开发文档"
---

# [\#](https://iot.mi.com/vela/quickapp/zh/features/network/request.html\#%E4%B8%8B%E8%BD%BD-request) 下载 request

## [\#](https://iot.mi.com/vela/quickapp/zh/features/network/request.html\#%E6%8E%A5%E5%8F%A3%E5%A3%B0%E6%98%8E) 接口声明

```
{ "name": "system.request" }

```

## [\#](https://iot.mi.com/vela/quickapp/zh/features/network/request.html\#%E5%AF%BC%E5%85%A5%E6%A8%A1%E5%9D%97) 导入模块

```
import request from '@system.request'
// 或
const request = require('@system.request')

```

## [\#](https://iot.mi.com/vela/quickapp/zh/features/network/request.html\#%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89) 接口定义

### [\#](https://iot.mi.com/vela/quickapp/zh/features/network/request.html\#request-download-object) request.download(OBJECT)

下载文件

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/network/request.html\#%E5%8F%82%E6%95%B0) 参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| url | String | 是 | 资源 url |
| header | String | 否 | 请求的 header，会将其所有属性设置到请求的 header 部分 |
| filename | String | 否 | 下载文件名。默认从网络请求或 url 中获取 |
| success | Function | 否 | 成功返回的回调函数 |
| fail | Function | 否 | 失败的回调函数 |
| complete | Function | 否 | 结束的回调函数（调用成功、失败都会执行） |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/network/request.html\#success-%E8%BF%94%E5%9B%9E%E5%80%BC) success 返回值：

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| token | String | 下载的 token，根据此 token 获取下载状态 |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/network/request.html\#%E7%A4%BA%E4%BE%8B) 示例：

```
request.download({
  url: 'http://www.example.com',
  success: function(data) {
    console.log(`handling success${data.token}`)
  },
  fail: function(data, code) {
    console.log(`handling fail, code = ${code}`)
  }
})

```

### [\#](https://iot.mi.com/vela/quickapp/zh/features/network/request.html\#request-ondownloadcomplete-object) request.onDownloadComplete(OBJECT)

监听下载任务

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/network/request.html\#%E5%8F%82%E6%95%B0-2) 参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| token | String | 是 | download 接口返回的 token |
| success | Function | 否 | 成功返回的回调函数 |
| fail | Function | 否 | 失败的回调函数 |
| complete | Function | 否 | 结束的回调函数（调用成功、失败都会执行） |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/network/request.html\#success-%E8%BF%94%E5%9B%9E%E5%80%BC-2) success 返回值：

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| uri | String | 下载文件的 Uri（默认情况下该文件处于应用缓存目录。如果文件类型为图片或者视频且要求用户可以在相册等应用内查看，则需要将该文件转存至公共目录，参考media接口中的方法实现即可） |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/network/request.html\#fail-%E8%BF%94%E5%9B%9E%E9%94%99%E8%AF%AF%E4%BB%A3%E7%A0%81) fail 返回错误代码：

| 错误码 | 说明 |
| --- | --- |
| 1000 | 下载失败 |
| 1001 | 下载任务不存在 |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/network/request.html\#%E7%A4%BA%E4%BE%8B-2) 示例：

```
request.onDownloadComplete({
  token: '123',
  success: function(data) {
    console.log(`handling success${data.uri}`)
  },
  fail: function(data, code) {
    console.log(`handling fail, code = ${code}`)
  }
})

```

## [\#](https://iot.mi.com/vela/quickapp/zh/features/network/request.html\#%E6%94%AF%E6%8C%81%E6%98%8E%E7%BB%86) 支持明细

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
[设备通信 interconnect](https://iot.mi.com/vela/quickapp/zh/features/network/interconnect.html)[上传 uploadtask](https://iot.mi.com/vela/quickapp/zh/features/network/uploadtask.html)
→


快速导航

[接口声明](https://iot.mi.com/vela/quickapp/zh/features/network/request.html#%E6%8E%A5%E5%8F%A3%E5%A3%B0%E6%98%8E "接口声明")

[导入模块](https://iot.mi.com/vela/quickapp/zh/features/network/request.html#%E5%AF%BC%E5%85%A5%E6%A8%A1%E5%9D%97 "导入模块")

[接口定义](https://iot.mi.com/vela/quickapp/zh/features/network/request.html#%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89 "接口定义")

[request.download(OBJECT)](https://iot.mi.com/vela/quickapp/zh/features/network/request.html#request-download-object "request.download(OBJECT)")

[request.onDownloadComplete(OBJECT)](https://iot.mi.com/vela/quickapp/zh/features/network/request.html#request-ondownloadcomplete-object "request.onDownloadComplete(OBJECT)")

[支持明细](https://iot.mi.com/vela/quickapp/zh/features/network/request.html#%E6%94%AF%E6%8C%81%E6%98%8E%E7%BB%86 "支持明细")