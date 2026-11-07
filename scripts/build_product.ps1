param(
  [Parameter(Mandatory = $true)][ValidateSet("w192", "w212", "w336", "w432", "w466")][string]$Target,
  [Parameter(Mandatory = $true)][ValidateSet("lite", "standard")][string]$Profile,
  [string]$Version = "",
  [switch]$KeepStage
)

# 从 w212 这一份源码出一个"产品包"（分辨率 × 词库档位）。
#
# 流程：暂存副本 → 换词库 → 物理删除其余 4 列 CSS → 改包名 → 条件编译构建 → 收产物
#
# 为什么必须暂存：.ux 不经过 webpack loader（aiot 2.0.5 实测），发布包"只含一列"
# 只能靠脚本在副本上删规则，不能就地改（会把开发工作区弄脏）。
# 为什么直接复制而不是 junction：aiot 构建时会把工程迁移到兄弟 .temp_<名字>，
# 该复制不保留 junction（见根 AGENTS.md 的 variants 教训）。

$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $PSScriptRoot
$workspace = Split-Path -Parent $repoRoot

$targets = @{
  w192 = @{ Id = "W192"; Width = "192"; Height = "490" }
  w212 = @{ Id = "W212"; Width = "212"; Height = "520" }
  w336 = @{ Id = "W336"; Width = "336"; Height = "480" }
  w432 = @{ Id = "W432"; Width = "432"; Height = "514" }
  w466 = @{ Id = "W466"; Width = "466"; Height = "466" }
}
$spec = $targets[$Target]
$column = $spec.Width

$sourceManifest = Join-Path $repoRoot "src\manifest.json"
$manifest = Get-Content -LiteralPath $sourceManifest -Raw | ConvertFrom-Json
if (-not $Version) { $Version = $manifest.versionName }
$packageName = "com.watch.dic.$Target"

$stage = Join-Path $repoRoot ".tmp\product\$Target-$Profile"
if (Test-Path -LiteralPath $stage) { Remove-Item -LiteralPath $stage -Recurse -Force }
New-Item -ItemType Directory -Force -Path $stage | Out-Null

Write-Host "[$Target/$Profile] staging -> $stage"
$null = robocopy $repoRoot $stage /E /XD node_modules dist build .git .tmp /XF *.rpk /NFL /NDL /NJH /NJS /NP
if ($LASTEXITCODE -ge 8) { throw "robocopy failed: $LASTEXITCODE" }
$global:LASTEXITCODE = 0

# node_modules 用 junction（aiot 自己会在临时工程里重建软链，不需要实体副本）
New-Item -ItemType Junction -Path (Join-Path $stage "node_modules") -Target (Join-Path $repoRoot "node_modules") | Out-Null

# 换词库档位
$dictSource = Join-Path $workspace "dict_repo\$Profile"
if (-not (Test-Path -LiteralPath $dictSource)) { throw "dict tier not found: $dictSource" }
$null = robocopy $dictSource (Join-Path $stage "src\common\dict") /MIR /NFL /NDL /NJH /NJS /NP
if ($LASTEXITCODE -ge 8) { throw "robocopy dict failed: $LASTEXITCODE" }
$global:LASTEXITCODE = 0

$dictMeta = Get-Content -LiteralPath (Join-Path $stage "src\common\dict\meta.json") -Raw | ConvertFrom-Json
if ($dictMeta.profile -ne $Profile) {
  throw "dict tier mismatch: want $Profile, got $($dictMeta.profile)"
}

# 只留本分辨率一列
Push-Location $stage
try {
  node (Join-Path $stage "scripts\strip_columns.js") --target $column --src (Join-Path $stage "src")
  if ($LASTEXITCODE -ne 0) { throw "strip_columns failed" }
} finally {
  Pop-Location
}

# 改包名与版本（发布仓认的是 5 个老包名）
$manifest.package = $packageName
$manifest.versionName = $Version
$manifestPath = Join-Path $stage "src\manifest.json"
$manifest | ConvertTo-Json -Depth 20 | Set-Content -LiteralPath $manifestPath -Encoding utf8

# 构建
$env:TARGET_ID = $spec.Id
$env:TARGET_WIDTH = $spec.Width
$env:TARGET_HEIGHT = $spec.Height
try {
  Push-Location $stage
  try {
    npm run build
    if ($LASTEXITCODE -ne 0) { throw "build failed for $Target/$Profile" }
  } finally {
    Pop-Location
  }
} finally {
  Remove-Item Env:TARGET_ID, Env:TARGET_WIDTH, Env:TARGET_HEIGHT -ErrorAction SilentlyContinue
}

$rpk = Get-ChildItem -LiteralPath (Join-Path $stage "dist") -Filter "*.rpk" -File |
  Sort-Object LastWriteTime -Descending | Select-Object -First 1
if ($null -eq $rpk) { throw "no RPK produced for $Target/$Profile" }

$outDir = Join-Path $workspace "release_packages\$Profile"
New-Item -ItemType Directory -Force -Path $outDir | Out-Null
$outName = "$Target-$Profile-$Version.rpk"
$destination = Join-Path $outDir $outName
Copy-Item -LiteralPath $rpk.FullName -Destination $destination -Force

$size = [math]::Round((Get-Item -LiteralPath $destination).Length / 1KB, 1)
$hash = (Get-FileHash -LiteralPath $destination -Algorithm SHA256).Hash.ToLowerInvariant()
Write-Host "[$Target/$Profile] OK -> $destination  ($size KB, sha256=$($hash.Substring(0,12))…, dict headwords=$($dictMeta.headwords))"

if (-not $KeepStage) { Remove-Item -LiteralPath $stage -Recurse -Force }
