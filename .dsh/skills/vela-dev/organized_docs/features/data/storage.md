---
url: "https://iot.mi.com/vela/quickapp/zh/features/data/storage.html"
title: "数据存储 storage | Xiaomi Vela JS 应用开发文档"
---

# [\#](https://iot.mi.com/vela/quickapp/zh/features/data/storage.html\#%E6%95%B0%E6%8D%AE%E5%AD%98%E5%82%A8-storage) 数据存储 storage

## [\#](https://iot.mi.com/vela/quickapp/zh/features/data/storage.html\#%E6%8E%A5%E5%8F%A3%E5%A3%B0%E6%98%8E) 接口声明

```
{ "name": "system.storage" }

```

## [\#](https://iot.mi.com/vela/quickapp/zh/features/data/storage.html\#%E5%AF%BC%E5%85%A5%E6%A8%A1%E5%9D%97) 导入模块

```
import storage from '@system.storage'
// 或
const storage = require('@system.storage')

```

## [\#](https://iot.mi.com/vela/quickapp/zh/features/data/storage.html\#%E6%96%B9%E6%B3%95) 方法

### [\#](https://iot.mi.com/vela/quickapp/zh/features/data/storage.html\#storage-get-object) storage.get(OBJECT)

读取存储内容

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/data/storage.html\#%E5%8F%82%E6%95%B0) 参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | String | 是 | 索引 |
| default | String | 否 | 如果 key 不存在，返回 default。如果 default 未指定，返回长度为 0 的空字符串 |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/data/storage.html\#success-%E8%BF%94%E5%9B%9E%E5%80%BC) success 返回值：

key 对应的存储内容

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/data/storage.html\#%E7%A4%BA%E4%BE%8B) 示例：

```
storage.get({
  key: 'A1',
  success: function(data) {
    console.log('handling success')
  },
  fail: function(data, code) {
    console.log(`handling fail, code = ${code}`)
  }
})

```

### [\#](https://iot.mi.com/vela/quickapp/zh/features/data/storage.html\#storage-set-object) storage.set(OBJECT)

修改存储内容

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/data/storage.html\#%E5%8F%82%E6%95%B0-2) 参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | String | 是 | 索引 |
| value | String | 否 | 新值。如果新值是长度为 0 的空字符串，会删除以 key 为索引的数据项 |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/data/storage.html\#%E7%A4%BA%E4%BE%8B-2) 示例：

```
storage.set({
  key: 'A1',
  value: 'V1',
  success: function(data) {
    console.log('handling success')
  },
  fail: function(data, code) {
    console.log(`handling fail, code = ${code}`)
  }
})

```

### [\#](https://iot.mi.com/vela/quickapp/zh/features/data/storage.html\#storage-clear-object) storage.clear(OBJECT)

清空存储内容

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/data/storage.html\#%E5%8F%82%E6%95%B0-3) 参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/data/storage.html\#%E7%A4%BA%E4%BE%8B-3) 示例：

```
storage.clear({
  success: function(data) {
    console.log('handling success')
  },
  fail: function(data, code) {
    console.log(`handling fail, code = ${code}`)
  }
})

```

### [\#](https://iot.mi.com/vela/quickapp/zh/features/data/storage.html\#storage-delete-object) storage.delete(OBJECT)

删除存储内容

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/data/storage.html\#%E5%8F%82%E6%95%B0-4) 参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | String | 是 | 索引 |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 执行结束后的回调 |

#### [\#](https://iot.mi.com/vela/quickapp/zh/features/data/storage.html\#%E7%A4%BA%E4%BE%8B-4) 示例：

```
storage.delete({
  key: 'A1',
  success: function(data) {
    console.log('handling success')
  },
  fail: function(data, code) {
    console.log(`handling fail, code = ${code}`)
  }
})

```

←
[上传 uploadtask](https://iot.mi.com/vela/quickapp/zh/features/network/uploadtask.html)[文件存储 file](https://iot.mi.com/vela/quickapp/zh/features/data/file.html)
→


快速导航

[接口声明](https://iot.mi.com/vela/quickapp/zh/features/data/storage.html#%E6%8E%A5%E5%8F%A3%E5%A3%B0%E6%98%8E "接口声明")

[导入模块](https://iot.mi.com/vela/quickapp/zh/features/data/storage.html#%E5%AF%BC%E5%85%A5%E6%A8%A1%E5%9D%97 "导入模块")

[方法](https://iot.mi.com/vela/quickapp/zh/features/data/storage.html#%E6%96%B9%E6%B3%95 "方法")

[storage.get(OBJECT)](https://iot.mi.com/vela/quickapp/zh/features/data/storage.html#storage-get-object "storage.get(OBJECT)")

[storage.set(OBJECT)](https://iot.mi.com/vela/quickapp/zh/features/data/storage.html#storage-set-object "storage.set(OBJECT)")

[storage.clear(OBJECT)](https://iot.mi.com/vela/quickapp/zh/features/data/storage.html#storage-clear-object "storage.clear(OBJECT)")

[storage.delete(OBJECT)](https://iot.mi.com/vela/quickapp/zh/features/data/storage.html#storage-delete-object "storage.delete(OBJECT)")