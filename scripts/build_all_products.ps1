param(
  [string[]]$Targets = @("w192", "w212", "w336", "w432", "w466"),
  [string[]]$Profiles = @("lite", "standard"),
  [string]$Version = ""
)

# 批量出产品包：5 分辨率 × 2 档词库 = 10 个 RPK。
# 每个包都走 build_product.ps1（暂存 → 换词库 → 删其余四列 → 改包名 → 构建）。

$ErrorActionPreference = "Stop"
$repoRoot = Split-Path -Parent $PSScriptRoot
$results = @()
$failed = @()

foreach ($profile in $Profiles) {
  foreach ($target in $Targets) {
    $label = "$target/$profile"
    $start = Get-Date
    Write-Host "=== $label ===" -ForegroundColor Cyan
    $buildParams = @{ Target = $target; Profile = $profile }
    if ($Version) { $buildParams.Version = $Version }
    $ok = $true
    try {
      & (Join-Path $PSScriptRoot "build_product.ps1") @buildParams
    } catch {
      $ok = $false
      Write-Host ("[{0}] ERROR: {1}" -f $label, $_.Exception.Message) -ForegroundColor Red
    }

    $pattern = Join-Path $repoRoot ("release_packages\{0}\{1}-{0}-*.rpk" -f $profile, $target)
    $rpk = Get-ChildItem -Path $pattern -File -ErrorAction SilentlyContinue |
      Sort-Object LastWriteTime -Descending | Select-Object -First 1
    if (-not $ok -or $null -eq $rpk) {
      $failed += $label
      continue
    }
    $size = [math]::Round($rpk.Length / 1KB, 1)
    $secs = [math]::Round(((Get-Date) - $start).TotalSeconds, 1)
    $results += [pscustomobject]@{
      Target = $target
      Profile = $profile
      SizeKB = $size
      Seconds = $secs
      Path = $rpk.FullName
    }
    Write-Host ("[{0}] OK {1} KB in {2}s" -f $label, $size, $secs) -ForegroundColor Green
  }
}

Write-Host ""
Write-Host "=== summary ===" -ForegroundColor Cyan
$results | Format-Table Target, Profile, SizeKB, Seconds -AutoSize | Out-String | Write-Host
if ($failed.Count -gt 0) {
  Write-Host ("FAILED: " + ($failed -join ", ")) -ForegroundColor Red
  exit 1
}
$manifestPath = Join-Path $repoRoot "release_packages\products-manifest.json"
$results | ConvertTo-Json -Depth 5 | Set-Content -LiteralPath $manifestPath -Encoding UTF8
Write-Host ("wrote " + $manifestPath)
exit 0
