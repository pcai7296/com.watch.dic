param(
  [string]$Root = ""
)

# 校验 release_packages 下的产品包：
#   1) manifest.package 与文件名里的分辨率一致
#   2) app.jsc 里没有 getInfo / @system.device（发布包不该带探测）
#   3) 各页 jsc 里只出现本列的 -NNN 后缀
#   4) 词库档位与 meta.json 一致

$ErrorActionPreference = "Stop"
if (-not $Root) { $Root = Join-Path (Split-Path -Parent $PSScriptRoot) "release_packages" }

$expected = @{
  w192 = @{ Width = "192"; Headwords = @(19942, 70408) }
  w212 = @{ Width = "212"; Headwords = @(19942, 70408) }
  w336 = @{ Width = "336"; Headwords = @(19942, 70408) }
  w432 = @{ Width = "432"; Headwords = @(19942, 70408) }
  w466 = @{ Width = "466"; Headwords = @(19942, 70408) }
}
$allWidths = @("192", "212", "336", "432", "466")
$pages = @("index", "search", "results", "filter", "detail", "records", "about", "sponsor", "settings", "guide")

$tmp = Join-Path ([System.IO.Path]::GetTempPath()) ("dicverify_" + [guid]::NewGuid().ToString("N"))
New-Item -ItemType Directory -Force -Path $tmp | Out-Null

$rows = @()
$fail = 0
$rpks = Get-ChildItem -Path $Root -Recurse -Filter "*.rpk" -File | Sort-Object Name

foreach ($rpk in $rpks) {
  $name = $rpk.BaseName
  if ($name -notmatch "^(w\d{3})-(lite|standard)-") { continue }
  $target = $Matches[1]
  $profile = $Matches[2]
  $width = $expected[$target].Width

  $work = Join-Path $tmp $name
  New-Item -ItemType Directory -Force -Path $work | Out-Null
  $zip = Join-Path $work "pkg.zip"
  Copy-Item -LiteralPath $rpk.FullName -Destination $zip
  Expand-Archive -LiteralPath $zip -DestinationPath (Join-Path $work "x") -Force

  $problems = @()
  $m = Get-Content -LiteralPath (Join-Path $work "x\manifest.json") -Raw | ConvertFrom-Json
  if ($m.package -ne "com.watch.dic.$target") { $problems += "package=$($m.package)" }

  $appPath = Join-Path $work "x\app.jsc"
  if (Test-Path -LiteralPath $appPath) {
    $txt = [System.Text.Encoding]::ASCII.GetString([System.IO.File]::ReadAllBytes($appPath))
    if ($txt -match "getInfo") { $problems += "app.jsc 含 getInfo" }
    if ($txt -match "@system\.device") { $problems += "app.jsc 含 @system.device" }
  }

  foreach ($pg in $pages) {
    $p = Join-Path $work "x\pages\$pg\$pg.jsc"
    if (-not (Test-Path -LiteralPath $p)) { continue }
    $t = [System.Text.Encoding]::ASCII.GetString([System.IO.File]::ReadAllBytes($p))
    foreach ($w in $allWidths) {
      if ($w -eq $width) { continue }
      if ($t -match ("-" + $w + "\b")) { $problems += "$pg.jsc 残留 -$w" }
    }
  }

  $meta = Get-Content -LiteralPath (Join-Path $work "x\common\dict\meta.json") -Raw | ConvertFrom-Json
  if ($meta.profile -ne $profile) { $problems += "meta=$($meta.profile)" }

  # guide 背景：所有分辨率共用一张 256x256（不按列出图）
  $guideImg = Join-Path $work "x\common\guide-bg.png"
  if (-not (Test-Path -LiteralPath $guideImg)) {
    $problems += "缺 common/guide-bg.png"
  } else {
    $b = [System.IO.File]::ReadAllBytes($guideImg)
    $gw = $b[16] * 16777216 + $b[17] * 65536 + $b[18] * 256 + $b[19]
    $gh = $b[20] * 16777216 + $b[21] * 65536 + $b[22] * 256 + $b[23]
    if ($gw -ne 256 -or $gh -ne 256) { $problems += "guide-bg=${gw}x${gh}" }
  }
  foreach ($w in $allWidths) {
    if (Test-Path -LiteralPath (Join-Path $work "x\common\guide-bg-$w.png")) {
      $problems += "残留 guide-bg-$w.png"
    }
  }

  $rows += [pscustomobject]@{
    RPK = $name
    KB = [math]::Round($rpk.Length / 1KB, 1)
    Package = $m.package
    Headwords = $meta.headwords
    Problems = if ($problems.Count) { $problems -join "; " } else { "ok" }
  }
  if ($problems.Count) { $fail++ }
  Remove-Item -LiteralPath $work -Recurse -Force
}
Remove-Item -LiteralPath $tmp -Recurse -Force -ErrorAction SilentlyContinue

$rows | Format-Table RPK, KB, Package, Headwords, Problems -AutoSize | Out-String | Write-Host
if ($fail -gt 0) { Write-Host "$fail package(s) with problems" -ForegroundColor Red; exit 1 }
Write-Host "all packages ok" -ForegroundColor Green
exit 0
