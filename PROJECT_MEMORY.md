# 项目持久记忆 Project Memory

> 本文件由 dsh-memoir 插件维护：记录本项目历次会话的工作归纳、经验教训与行动指南，
> 作为未来 AGENTS 接手本项目时的行动指南；它是人类可读的投影，不是 system prompt 的完整注入内容。
> 新会话只注入有界的 Hot Memory，完整历史通过 memoir_read 按需检索。

## 工作记录 Work Log

- [2026-08-29 02:35] [工作记录] 腕上词典 3.1.0 多仓库发布与词库切换 — 本轮完成：版本升至 3.1.0/versionCode 7；w192/w336/w466 词库切换到 standard 并单独提交（可用 git checkout HEAD~1/HEAD 切换大小词库）；w432 也使用 standard；release_repo 更新 3.1.0 RPK（w212 仅 lite）并重算 SHA256；7 个分支推送到 GitHub；根目录 AGENTS.md 与 MEMORY.md 已更新。

## 经验教训 Lessons Learned

- [2026-08-29 02:35] [经验教训] Vela/QuickApp 与词典数据关键坑 — 1. 词典文件是 CRLF，JS split("\n") 残留 \r 会导致 decodeDeltaIds 失败、中文搜索未找到，readText 需 replace(/\r/g,"")。2. Vela 不支持 @keyframes，改用 transition。3. ready 是保留事件，不要 $emit("ready")。4. storage/file/device 异步调用要补 success/fail/complete。5. app.terminate 需在 manifest 声明 system.app。6. 大词库中文搜索内存优化：cn_index 按需扫描、entry 按需提取、按 shard 分组。

## 行动指南 Action Guide

- [2026-08-29 02:35] [行动指南] 后续待办：提交未提交改动并决定大词库发布策略 — w192/w336/w466 等仓库仍有未提交的 onBackPress/manifest/build/dist 改动；大词库 release RPK 已生成但未放入 release_repo，需与用户确认是否发布大词库版本；子仓库 AGENTS.md 尚未同步根目录经验。
