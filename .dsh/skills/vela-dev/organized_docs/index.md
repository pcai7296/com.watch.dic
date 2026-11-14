# Vela 官方文档本地索引

> 路径：`organized_docs/`
> 来源：[小米 Vela QuickApp 官方文档](https://iot.mi.com/vela/quickapp/zh/)
> 说明：这是可正常阅读的本地版本，共 **60+ 个文件**，覆盖组件和接口两大部分。

---

## 使用方式

按需读取对应 `.md` 文件即可。索引路径 = `organized_docs/<路径>`。

```
organized_docs/
├── index.md                  ← 本文件（总索引）
├── components/               ← 组件
├── features/                 ← 接口
```

---

## 一、组件 `components/`

### 基础组件 `components/basic/`

| 文件 | 内容 | 官方链接 |
|------|------|----------|
| `index.md` | 基础组件总览（text, span, image 等列表） | [组件总览](https://iot.mi.com/vela/quickapp/zh/components/basic/) |
| `text.md` | 文本组件：必选属性、样式、事件 | [text](https://iot.mi.com/vela/quickapp/zh/components/basic/text.html) |
| `span.md` | 行内文本组件 | [span](https://iot.mi.com/vela/quickapp/zh/components/basic/span.html) |
| `a.md` | 链接组件 | [a](https://iot.mi.com/vela/quickapp/zh/components/basic/a.html) |
| `image.md` | 图片组件：支持类型、事件 | [image](https://iot.mi.com/vela/quickapp/zh/components/basic/image.html) |
| `image-animator.md` | 帧动画组件 | [image-animator](https://iot.mi.com/vela/quickapp/zh/components/basic/image-animator.html) |
| `progress.md` | 进度条组件 | [progress](https://iot.mi.com/vela/quickapp/zh/components/basic/progress.html) |
| `marquee.md` | 跑马灯组件 | [marquee](https://iot.mi.com/vela/quickapp/zh/components/basic/marquee.html) |
| `chart.md` | 图表组件 | [chart](https://iot.mi.com/vela/quickapp/zh/components/basic/chart.html) |
| `qrcode.md` | 二维码组件 | [qrcode](https://iot.mi.com/vela/quickapp/zh/components/basic/qrcode.html) |
| `barcode.md` | 条形码组件 | [barcode](https://iot.mi.com/vela/quickapp/zh/components/basic/barcode.html) |

### 容器组件 `components/container/`

| 文件 | 内容 | 官方链接 |
|------|------|----------|
| `index.md` | 容器组件总览（div, list, scroll 等） | [容器总览](https://iot.mi.com/vela/quickapp/zh/components/container/) |
| `div.md` | 通用容器组件 | [div](https://iot.mi.com/vela/quickapp/zh/components/container/div.html) |
| `list.md` | 列表组件 | [list](https://iot.mi.com/vela/quickapp/zh/components/container/list.html) |
| `list-item.md` | 列表项组件 | [list-item](https://iot.mi.com/vela/quickapp/zh/components/container/list-item.html) |
| `scroll.md` | 可滚动容器 | [scroll](https://iot.mi.com/vela/quickapp/zh/components/container/scroll.html) |
| `stack.md` | 层叠容器 | [stack](https://iot.mi.com/vela/quickapp/zh/components/container/stack.html) |
| `swiper.md` | 滑动器组件 | [swiper](https://iot.mi.com/vela/quickapp/zh/components/container/swiper.html) |

### 表单组件 `components/form/`

| 文件 | 内容 | 官方链接 |
|------|------|----------|
| `index.md` | 表单组件总览（input, picker, switch, slider） | [表单总览](https://iot.mi.com/vela/quickapp/zh/components/form/) |
| `input.md` | 输入框组件 | [input](https://iot.mi.com/vela/quickapp/zh/components/form/input.html) |
| `picker.md` | 选择器组件 | [picker](https://iot.mi.com/vela/quickapp/zh/components/form/picker.html) |
| `switch.md` | 开关组件 | [switch](https://iot.mi.com/vela/quickapp/zh/components/form/switch.html) |
| `slider.md` | 滑块组件 | [slider](https://iot.mi.com/vela/quickapp/zh/components/form/slider.html) |

### 组件通用说明 `components/general/`

| 文件 | 内容 | 官方链接 |
|------|------|----------|
| `index.md` | 通用说明总览 | [通用说明](https://iot.mi.com/vela/quickapp/zh/components/general/) |
| `properties.md` | 通用属性 | — |
| `events.md` | 通用事件 | — |
| `methods.md` | 通用方法 | — |
| `style.md` | 通用样式 | — |
| `color.md` | 颜色定义 | — |
| `animation-style.md` | 动画样式 | — |
| `background-img-styles.md` | 背景图样式 | — |

---

## 二、接口 `features/`

### 通用语法 `features/`

| 文件 | 内容 | 官方链接 |
|------|------|----------|
| `grammar.md` | 接口声明方式（manifest.features）、模块导入、使用权限 | [通用语法](https://iot.mi.com/vela/quickapp/zh/features/grammar.html) |

### 基本功能 `features/basic/`

| 文件 | 内容 | 官方链接 |
|------|------|----------|
| `index.md` | 基本功能总览 | [基本功能](https://iot.mi.com/vela/quickapp/zh/features/basic/) |
| `app.md` | 应用上下文：getInfo, getPlatform, getSystemInfo | [app](https://iot.mi.com/vela/quickapp/zh/features/basic/app.html) |
| `device.md` | 设备信息：getInfo, getId | [device](https://iot.mi.com/vela/quickapp/zh/features/basic/device.html) |
| `router.md` | 页面路由：push, replace, back, clear, getLength, getState | [router](https://iot.mi.com/vela/quickapp/zh/features/basic/router.html) |
| `configuration.md` | 应用配置：getConfiguration, setConfiguration | [configuration](https://iot.mi.com/vela/quickapp/zh/features/basic/configuration.html) |

### 数据文件 `features/data/`

| 文件 | 内容 | 官方链接 |
|------|------|----------|
| `index.md` | 数据文件总览 | [数据文件](https://iot.mi.com/vela/quickapp/zh/features/data/) |
| `storage.md` | 数据存储：get, set, delete, clear, keys | [storage](https://iot.mi.com/vela/quickapp/zh/features/data/storage.html) |
| `file.md` | 文件存储：各种文件操作 | [file](https://iot.mi.com/vela/quickapp/zh/features/data/file.html) |

### 网络访问 `features/network/`

| 文件 | 内容 | 官方链接 |
|------|------|----------|
| `index.md` | 网络访问总览 | [网络访问](https://iot.mi.com/vela/quickapp/zh/features/network/) |
| `fetch.md` | 数据请求 fetch API | [fetch](https://iot.mi.com/vela/quickapp/zh/features/network/fetch.html) |
| `interconnect.md` | 设备通信（蓝牙） | [interconnect](https://iot.mi.com/vela/quickapp/zh/features/network/interconnect.html) |
| `request.md` | 下载请求 | [request](https://iot.mi.com/vela/quickapp/zh/features/network/request.html) |
| `uploadtask.md` | 上传任务 | [uploadtask](https://iot.mi.com/vela/quickapp/zh/features/network/uploadtask.html) |

### 系统能力 `features/system/`

| 文件 | 内容 | 官方链接 |
|------|------|----------|
| `index.md` | 系统能力总览 | [系统能力](https://iot.mi.com/vela/quickapp/zh/features/system/) |
| `battery.md` | 电量信息 | [battery](https://iot.mi.com/vela/quickapp/zh/features/system/battery.html) |
| `brightness.md` | 屏幕亮度 | [brightness](https://iot.mi.com/vela/quickapp/zh/features/system/brightness.html) |
| `network.md` | 网络信息 | [network](https://iot.mi.com/vela/quickapp/zh/features/system/network.html) |
| `event.md` | 系统事件 | [event](https://iot.mi.com/vela/quickapp/zh/features/system/event.html) |
| `geolocation.md` | 地理位置 | [geolocation](https://iot.mi.com/vela/quickapp/zh/features/system/geolocation.html) |
| `record.md` | 录音 | [record](https://iot.mi.com/vela/quickapp/zh/features/system/record.html) |
| `sensor.md` | 传感器 | [sensor](https://iot.mi.com/vela/quickapp/zh/features/system/sensor.html) |
| `vibrator.md` | 振动 | [vibrator](https://iot.mi.com/vela/quickapp/zh/features/system/vibrator.html) |

### 其他 `features/other/`

| 文件 | 内容 | 官方链接 |
|------|------|----------|
| `index.md` | 其他能力总览 | [其他](https://iot.mi.com/vela/quickapp/zh/features/other/) |
| `audio.md` | 音频播放 | [audio](https://iot.mi.com/vela/quickapp/zh/features/other/audio.html) |
| `prompt.md` | 弹窗（Toast/Dialog） | [prompt](https://iot.mi.com/vela/quickapp/zh/features/other/prompt.html) |

### 安全 `features/security/`

| 文件 | 内容 | 官方链接 |
|------|------|----------|
| `index.md` | 安全能力总览 | [安全](https://iot.mi.com/vela/quickapp/zh/features/security/) |
| `crypto.md` | 密码算法接口（加密/解密/签名/摘要） | [crypto](https://iot.mi.com/vela/quickapp/zh/features/security/crypto.html) |
| `cipher.md` | 密码算法（RSA/AES） | [cipher](https://iot.mi.com/vela/quickapp/zh/features/security/cipher.html) |

---

## 使用场景速查

| 需要做什么 | 先读这个文件 |
|-----------|-------------|
| 查某个组件的属性/事件/样式 | `components/<分类>/<组件名>.md` |
| 所有组件的通用样式、事件 | `components/general/index.md` + 对应子文件 |
| 调用系统 API（电量/传感器/振动等） | `features/system/<api>.md` |
| 页面跳转路由 | `features/basic/router.md` |
| 数据存储 | `features/data/storage.md` |
| 网络请求 | `features/network/fetch.md` |
| 蓝牙设备通信 | `features/network/interconnect.md` |
| 弹窗提示 | `features/other/prompt.md` |
| 接口声明方式（manifest.features） | `features/grammar.md` |
| 应用/设备信息获取 | `features/basic/app.md` 或 `device.md` |
| 加密/解密 | `features/security/crypto.md` |

---

> 其它官方文档区域（guide/ 框架指南、tools/ 工具链、samples/ 示例、best-practice/ 最佳实践）不在本本地索引覆盖范围内，请访问 [在线官网](https://iot.mi.com/vela/quickapp/zh/)。
