# 真机测试 — Real Device Testing via AstroBox

> 通过 AstroBox CLI (`npx astrobox-cli`) 将 Vela QuickApp 部署到真实小米手环/手表进行测试。

## 概述

AstroBox 桌面端 + CLI 是在实体设备上安装和测试 Vela QuickApp 的主要途径。相比于 ADB+AIoT IDE 的模拟器方案，真机测试能验证蓝牙传输、功耗、触控交互、屏幕渲染等真实场景。

### 前置条件

- Node.js >= 20
- AstroBox 桌面端正在运行（监听 `127.0.0.1:10721`）
- 已配对的小米手环/手表（需提供 MAC 地址和 AuthKey）
- 已构建好的 `.rpk` 文件

### 快速启动

```bash
# 检查 AstroBox 运行状态和设备连接
npx astrobox-cli status

# 安装 rpk 到设备（异步入队，立即返回）
npx astrobox-cli install ./dist/app.rpk

# 安装并等待完成（实时进度表格）
npx astrobox-cli install ./dist/app.rpk --wait

# 查看安装队列状态
npx astrobox-cli queue status

# 启动/停止队列处理器
npx astrobox-cli queue start
npx astrobox-cli queue stop
```

---

## 设备管理

### 查看已保存设备

```bash
npx astrobox-cli device list
```

输出格式：
```
Devices: <count>
- <name> (<addr>) [<connected|disconnected>]
```

### 查看设备详情

```bash
npx astrobox-cli device show <addr>
```

输出包含 AuthKey（可用于重连）、SAR Ver、TX Win、ConnectType 等参数。

### 连接新设备

```bash
npx astrobox-cli device connect \
  --name "Xiaomi Smart Band 9 Pro" \
  --addr "3C:AF:B7:ED:C6:92" \
  --authkey "your-authkey"
```

> **注意：** 用户需要在物理设备上点击确认以完成蓝牙配对。

---

## 安装工作流

### 标准流程

```bash
# 1. 健康检查
npx astrobox-cli status
npx astrobox-cli device list

# 2. 构建 RPK
npx aiot build

# 3. 安装到设备（异步）
npx astrobox-cli install ./dist/app.rpk

# 4. 查看安装进度
npx astrobox-cli queue status

# 或一步到位：阻塞等待安装完成
npx astrobox-cli install ./dist/app.rpk --wait
```

### 设备断开后重连

```bash
# 查看已保存设备获取 AuthKey
npx astrobox-cli device show <addr>

# 使用保存的 AuthKey 重连（无需用户重新输入）
npx astrobox-cli device connect --name "<name>" --addr "<addr>" --authkey "<key>"
# 用户仍需在设备上点击确认
```

### 安装队列管理

```bash
npx astrobox-cli queue status    # 查看所有任务及进度
npx astrobox-cli queue start     # 启动队列处理器
npx astrobox-cli queue stop      # 停止队列处理器
npx astrobox-cli queue remove ./app.rpk  # 按路径移除任务
```

---

## 并发安全

运行多个 `npx astrobox-cli` 命令可能触发 npm 缓存冲突（`ENOTEMPTY`）：

```bash
# 清除 npx 缓存
rm -rf ~/.npm/_npx/*

# 或使用辅助脚本自动处理
python scripts/run_abcli.py install ./dist/app.rpk --wait
```

辅助脚本会自动检测 ENOTEMPTY 错误、清除缓存并重试。

---

## 输出解析速查

CLI 输出为纯文本，以下是关键解析模式：

| 命令 | 解析模式 | 说明 |
|------|---------|------|
| `status` / `device list` | `- (.+) \(([^)]+)\) \[(connected\|disconnected)\]` | name / MAC / status |
| `device show` | `(.+?):\s*(.+)` (逐行) | Name → name, AuthKey → authkey, Address → addr, Status → status |
| `queue status` | 表格按 `\|` 拆分 | Name \| Type \| Progress \| Status \| Description |
| `install` | JSON `{"ok": true, "message": "queued"}` | 异步入队响应 |
| Error | `Error: <message>` (stderr, exit code 1) | 所有错误统一格式 |

---

## 常见错误

| 错误 | 原因 | 处理 |
|------|------|------|
| `Could not reach AstroBox...` | AstroBox 桌面端未运行 | 请用户启动 AstroBox |
| `File does not exist:` | RPK 路径错误 | 验证路径和当前工作目录 |
| `Device not found:` | MAC 地址不在已保存列表 | 先运行 `device list` |
| `Install error: 没有已连接的设备` | 无在线设备接收安装 | 连接设备后重试 |
| `ENOTEMPTY` | npx 并发缓存冲突 | `rm -rf ~/.npm/_npx/*` 后重试 |
| `Failed to connect:` | 连接被 AstroBox 拒绝 | 检查 name/addr/authkey，确认设备处于配对模式 |

---

## 快速参考

| 用途 | 命令 |
|------|------|
| 检查 AstroBox 状态 | `npx astrobox-cli status` |
| 列出设备 | `npx astrobox-cli device list` |
| 查看设备详情 | `npx astrobox-cli device show <addr>` |
| 连接设备 | `npx astrobox-cli device connect --name ... --addr ... --authkey ...` |
| 安装 RPK | `npx astrobox-cli install <path>` |
| 安装并等待 | `npx astrobox-cli install <path> --wait` |
| 队列状态 | `npx astrobox-cli queue status` |
| 启动队列 | `npx astrobox-cli queue start` |
| 停止队列 | `npx astrobox-cli queue stop` |
| 移除队列任务 | `npx astrobox-cli queue remove <path>` |
| 辅助脚本 | `python scripts/run_abcli.py <command>` |
