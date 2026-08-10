@echo off
SetLocal EnableDelayedExpansion
cd /d J:\code\MI band\com.watch.dic

set srcR=..\..\腕上词典\src\pages\results\results.ux
set srcF=..\..\腕上词典\src\pages\filter\filter.ux

for %%b in (w192 w212 w336 w432 w466) do (
  echo === %%b ===
  git checkout %%b 2>nul
  copy /Y "%srcR%" src\pages\results\results.ux >nul
  copy /Y "%srcF%" src\pages\filter\filter.ux >nul
  git add -A
  git commit -m "fix: 搜索空结果历史缓存毒化 & 筛选页返回导航"
  echo ---
)

git checkout w212 2>nul
echo All done, back to w212