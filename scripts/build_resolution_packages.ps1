$ErrorActionPreference = "Stop"

# w192 是**单目标仓**：src\common\buildTarget.js 是硬编码 192×490（没有 `// if true:` 条件块），
# 因此 npm run build:212 … build:466 都不会真正切换目标——它们产出的仍是 W192 包。
#
# 旧版本脚本照抄了 w212 的多目标逻辑，结果：
#   * 循环 5 个目标，产出 5 个内容相同的包；
#   * 文件名与 manifest 全写死 "com.watch.dic.w212"（连包名都是错的）。
# 现在只构建本仓自己的目标，包名与版本号从 src\manifest.json 读取。

$targets = @(
  @{ Id = "W192"; Width = 192; Height = 490; Script = "build:192" }
)

$root = Split-Path -Parent $PSScriptRoot
$manifestPath = Join-Path $root "src\manifest.json"
$pkgManifest = Get-Content -LiteralPath $manifestPath -Raw | ConvertFrom-Json
$packageName = $pkgManifest.package
$version = $pkgManifest.versionName

Write-Host "Package: $packageName   Version: $version（单目标仓，仅构建 W192）"

$output = Join-Path $root "dist\resolutions"
$staging = Join-Path $root ".tmp\resolution-packages"
if (Test-Path -LiteralPath $staging) {
  Remove-Item -LiteralPath $staging -Recurse -Force
}
New-Item -ItemType Directory -Force -Path $staging | Out-Null
$manifest = @()
$sha256 = [System.Security.Cryptography.SHA256]::Create()

foreach ($target in $targets) {
  Write-Host "Building $($target.Id) ($($target.Width)x$($target.Height))"

  # 清掉旧产物，保证下面「最新一个」就是这个目标的输出
  Get-ChildItem -LiteralPath (Join-Path $root "dist") -Filter "*.rpk" -File -ErrorAction SilentlyContinue |
    Remove-Item -Force -ErrorAction SilentlyContinue

  Push-Location $root
  try {
    npm run $target.Script
    if ($LASTEXITCODE -ne 0) {
      throw "Build failed for $($target.Id)"
    }
  } finally {
    Pop-Location
  }

  $rpk = Get-ChildItem -LiteralPath (Join-Path $root "dist") -Filter "*.rpk" -File |
    Sort-Object LastWriteTime -Descending |
    Select-Object -First 1
  if ($null -eq $rpk) {
    throw "No RPK generated for $($target.Id)"
  }

  $name = "$packageName.debug.$version.$($target.Id.ToLowerInvariant()).rpk"
  $destination = Join-Path $staging $name
  Copy-Item -LiteralPath $rpk.FullName -Destination $destination -Force
  $bytes = [System.IO.File]::ReadAllBytes($destination)
  $hash = ([System.BitConverter]::ToString($sha256.ComputeHash($bytes)) -replace "-", "").ToLowerInvariant()
  $manifest += [ordered]@{
    id = $target.Id
    width = $target.Width
    height = $target.Height
    file = $name
    sha256 = $hash
    package = $packageName
    version = $version
  }
}

New-Item -ItemType Directory -Force -Path $output | Out-Null
Get-ChildItem -LiteralPath $output -File -ErrorAction SilentlyContinue | Remove-Item -Force
Get-ChildItem -LiteralPath $staging -Filter "*.rpk" -File | Copy-Item -Destination $output -Force
$manifest | ConvertTo-Json -Depth 4 | Set-Content -LiteralPath (Join-Path $output "manifest.json") -Encoding utf8
Write-Host "Created $($manifest.Count) resolution packages in $output"
