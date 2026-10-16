$ErrorActionPreference = "Stop"

# 构建 5 个目标分辨率，输出到 dist\resolutions，并生成带 SHA256 的 manifest.json。
#
# 已修：
#   * 包名与版本号改为从 src\manifest.json 读取，不再硬编码（旧版写死 "com.watch.dic.w212" / "3.1.0"；
#     w192 那份是同字节副本，导致 w192 的产物被标成 w212）。
#   * 每个目标构建前先清空 dist\*.rpk，避免「取最新一个」时拿到上一个目标的产物。
# 前提：本仓 buildTarget.js 是多目标 + 条件编译（w212 / w336 满足）。

$targets = @(
  @{ Id = "W192"; Width = 192; Height = 490; Script = "build:192" },
  @{ Id = "W212"; Width = 212; Height = 520; Script = "build:212" },
  @{ Id = "W336"; Width = 336; Height = 480; Script = "build:336" },
  @{ Id = "W432"; Width = 432; Height = 514; Script = "build:432" },
  @{ Id = "W466"; Width = 466; Height = 466; Script = "build:466" }
)

$root = Split-Path -Parent $PSScriptRoot
$manifestPath = Join-Path $root "src\manifest.json"
$pkgManifest = Get-Content -LiteralPath $manifestPath -Raw | ConvertFrom-Json
$packageName = $pkgManifest.package
$version = $pkgManifest.versionName

Write-Host "Package: $packageName   Version: $version"

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
