# dict_repo — 腕上词典的分档词库

独立仓库，只存词库数据，不含任何代码。目的是让"切词库档位"不再污染开发仓的 git 状态。

## 结构

```
dev/        1,400 词   26 个 letter 分片，3 个 entry 分片，core 中文索引   —— 调试用
lite/      19,942 词   26 个 letter 分片，40 个 entry 分片，core 中文索引
standard/  70,408 词   728 个 word 分片（26 字母 + 676 双字母 + 26 head）
                       + 141 个 entry 分片，balanced 中文索引
```

每档目录结构与开发仓的 `src/common/dict/` **完全一致**，`meta.json` 是唯一事实来源。

## 用法

在开发仓（`com.watch.dic.w212`）里：

```powershell
.\scripts\use-dict.ps1 dev        # 1 秒内完成
.\scripts\use-dict.ps1 standard
```

脚本把 `dict_repo/<档位>/` 镜像到 `src/common/dict/`；该目录在开发仓里是 **gitignored 的构建产物**，
所以反复切档不会产生任何 git 变更。

## 更新词库

生成器在开发仓 `scripts/generate_watch_dict.py`，语料 `data/words_ccedict.csv`、`data/phrases.csv`
**只有主开发仓是完整的**。生成后把输出目录覆盖到本仓对应档位，再提交：

```powershell
# 在开发仓里
python scripts/generate_watch_dict.py --profile standard --cn-index-mode balanced --output ..\dict_repo\standard
```

> 不要在其他分辨率仓里跑生成器：那些仓缺语料，会"成功"但把 standard 缩水成 lite。

## 为什么单独一个仓库

- 切档 = 复制 268 KB / 2.7 MB / 7.1 MB，秒级
- 开发仓的 diff 里不再出现 1,082 个词库文件
- 避免"切到 dev 调完手滑提交"，把标准词库换成 1,400 词的事故
