# 经验：复用地图页返回后的存档刷新（Band 10 / Vela）

适用场景：Vela QuickApp 通过 `router.push()` 打开普通页，再用
`router.back({path: "/pages/map"})` 回到已打开的地图/主页；页面不应重建，
但必须显示子页刚写入的角色状态。

## 已验证的运行时判据

一次有效的普通页面返回，在设备或模拟器日志中应形成以下顺序：

```text
PageNavigator::back /pages/map
Page show ... pages/map
PageCallHook, name:onShow
[STORAGE_GET] key=hh_temp_save
```

最后一条是关键。若 `onShow` 存在但其后没有 `STORAGE_GET`，不要先怀疑存储
失效；优先检查 `onShow` 的提前返回条件及其前一次初始化回调是否抛出了异常。

## 真实故障链：`mapReady` 被初始化异常永久卡住

在腕上洪荒中，地图页采用以下模式：

```js
onShow() {
  if (!this.mapReady || this.destroyed) return
  this.refreshFromTempSave()
}
```

首次进入地图时，存档已成功读取且角色字段已被 `applySave()` 写入；随后
`refreshMapState()` 的主线检查错误访问了不存在的
`MAIN_QUEST.nodes[nodeId]`。实际数据是直接以 `node1`、`node2` 等为键：

```js
const currentNode = gameData.MAIN_QUEST[this.mainQuestNode]
```

异常发生在 `mapReady = true` 前。结果是战斗后新建地图仍可显示已读取的数值，
但之后所有普通页返回都会被 `!mapReady` 拦截，既不读档也不刷新 UI。

### 修复原则

1. 先用日志确认完整调用链；不要只根据“页面显示了”判断初始化完成。
2. 对照数据导出形状与消费者访问形状。不要假设存在 `nodes`、`items` 等中间包装。
3. 将派生状态（主线推进、视口构建、提示文字）纳入回归测试，因为它们也能中断
   存档回调。
4. 修复后必须验证普通页返回的 `onShow → STORAGE_GET`，不能只验证
   `router.replace()` 重建页面的路径。

## 日志分级

以下信号需结合功能结果判断，不能单独当作本问题的根因：

| 日志 | 处理方式 |
| --- | --- |
| `finish_callback: invoke complete callback failed` | 若紧邻的存档值正确写入、后续读取成功，记录为待排查的框架/回调告警；不要据此否定持久化。 |
| `InspectHostSetDomAttributes: Unsupported type for setDomAttributes: 2` | 记录对应页面和时间；只有伴随状态未更新、元素缺失或异常栈时才提升为阻断问题。 |
| `mapWidgetTree ... already mapped` | 关注是否伴随重复节点、卡顿或 OOM；在流程正确且无内存征兆时，先作为渲染告警跟踪。 |
| `TypeError ... at <业务方法>` | 阻断级。沿调用栈回溯，尤其检查异步存档回调里 `ready` 标志之前的派生逻辑。 |

## 回归检查清单

- 构造一个会改变 `playerHp`、体力、修为或境界的普通页操作，确认 `storage.set` 中有新值。
- 返回地图后确认日志有 `onShow`，并紧跟一次 `STORAGE_GET`。
- 进入后不改数据立即退出的普通页（例如突破页）也要复测；它专门验证复用返回链。
- 断言主线数据访问遵循实际导出结构，且不会在地图存档成功回调中抛错。
- 分别验证 `router.back` 的复用路径与战斗 `router.replace` 的重建路径。

## 组件选择的边界

`list` 的同类型 `list-item` 面向重复且 DOM 结构一致的列表项。地图与角色状态
这种固定、结构差异很大的全屏页，优先考虑固定的纵向 `swiper` 或单页视图切换。
不过先以生命周期和存档日志证明问题所在；组件替换不是 `mapReady` 被业务异常卡住时的
首要修复手段。
