# 词典档位（Dictionary Profiles）

> 容量目标是**用户接受度目标**，不是硬性技术限制。真正的技术约束是：平台可安装、可运行、性能可接受。
> 4MB / 8MB 是当前发行档位的优先优化区间；实际以覆盖率、查询有效性和搜索性能为最终目标。

## 档位定义

| 档位 | 定位 | 当前目标体积 | 说明 |
|------|------|--------------|------|
| dev | 日常开发用极小词典 | <0.5MB | main 分支默认，保证 `npm run dev/build` 可跑 |
| lite | 极致轻量、覆盖核心需求 | ≈4MB | 发行档位，用户接受度目标 |
| standard | 覆盖优先、仍保持较小 | ≈8MB | 发行档位，用户接受度目标 |

## 当前实测（2026-08）

| 指标 | dev | lite | standard |
|------|-----|------|----------|
| 词头数 | 1,400 | 19,942 | 70,408 |
| dict 原始大小 | 0.26 MB | 3.47 MB | 6.92 MB |
| RPK 压缩后 | ~0.55 MB | ~2.5 MB | ~4.7 MB |
| 安装后（解压） | ~0.6 MB | ~3.8 MB | ~7.5 MB |
| wordTwoShards | 0 | 0 | 676 |
| wordHeadShards | 0 | 0 | 26 |
| cnIndexMode | core | balanced | balanced |
| 英文核心覆盖（fixture 100） | 63% | 99% | 99% |
| 英文考试覆盖（fixture 100） | 11% | 99% | 100% |
| 中文单字覆盖（fixture 100） | 82% | 98% | 100% |
| 中文词语覆盖（fixture 100） | 64% | 89% | 89% |

> 数值会随生成器调优变化，以 `npm run audit:dict` 输出为准。

## 生成命令

```bash
# dev（main 开发词典）
npm run dict:dev

# lite 发行词典
npm run dict:lite

# standard 发行词典
npm run dict:standard
```

生成器也支持直接传参：

```bash
python scripts/generate_watch_dict.py --profile lite --cn-index-mode balanced
python scripts/generate_watch_dict.py --profile standard --cn-index-mode balanced
```

## 审计与基准

```bash
# 覆盖率 / 体积占比 / 分片完整性 / 档位 PASS-WARNING-FAIL
npm run audit:dict

# 搜索性能 + 自一致性（英文/中文/变形索引必须能查到自身数据）
npm run bench:dict
```

## Git 发行分支 / Worktree

仓库结构：

```
w212 (main)          源码 + dev dict
 ├── lite            仅发行数据：src/common/dict/**（Lite 词库）
 └── standard        仅发行数据：src/common/dict/**（Standard 词库）
```

推荐使用 Git Worktree 并行构建：

```bash
# 已在主仓库添加：
#   ../com.watch.dic.w212-lite      -> lite
#   ../com.watch.dic.w212-standard  -> standard

cd ../com.watch.dic.w212-lite
npm run build:212          # 产出 Lite RPK

cd ../com.watch.dic.w212-standard
npm run build:212          # 产出 Standard RPK
```

源码更新流程：

```bash
# 在 w212 (main) 提交源码
git switch w212
git commit ...

# 同步到发行分支
cd ../com.watch.dic.w212-lite
git merge w212
cd ../com.watch.dic.w212-standard
git merge w212

# 如词典数据需要重新生成，在对应 worktree 执行：
npm run dict:lite      # 在 lite worktree
npm run dict:standard  # 在 standard worktree
```

## 发布

- `build/`、`dist/`、`*.rpk` 已加入 `.gitignore`，不进入 Git 历史。
- 正式 RPK 通过 GitHub Release Assets 发布，文件名建议：
  - `com.watch.dic.w212-lite-<version>.rpk`
  - `com.watch.dic.w212-standard-<version>.rpk`
