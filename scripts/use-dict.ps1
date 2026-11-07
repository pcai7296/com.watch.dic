#Requires -Version 5.1
<#
.SYNOPSIS
    Mirror one dictionary tier from ..\..\dict_repo into src\common\dict.

.DESCRIPTION
    src\common\dict is a gitignored build artifact; the source of truth lives in
    the sibling repository com.watch.dic\dict_repo (dev / lite / standard).
    Switching a tier is a plain file mirror, so it takes about a second.

    Do NOT replace this with a Junction: aiot-toolkit copies the project to
    .temp_<dir> before building, and that copy does not preserve Junctions,
    which would drop the whole dictionary directory from the build.

.PARAMETER Profile
    dev / lite / standard. Defaults to dev.

.EXAMPLE
    .\scripts\use-dict.ps1 standard
#>
[CmdletBinding()]
param(
    [Parameter(Position = 0)]
    [ValidateSet('dev', 'lite', 'standard')]
    [string]$Profile = 'dev'
)

$ErrorActionPreference = 'Stop'

$scriptDir = $PSScriptRoot
$repoRoot = Split-Path -Path $scriptDir -Parent
$workspaceRoot = Split-Path -Path $repoRoot -Parent
$dictRepo = Join-Path -Path $workspaceRoot -ChildPath 'dict_repo'
$source = Join-Path -Path $dictRepo -ChildPath $Profile
$target = Join-Path -Path $repoRoot -ChildPath 'src\common\dict'

$sourceMeta = Join-Path -Path $source -ChildPath 'meta.json'
if (-not (Test-Path -LiteralPath $sourceMeta)) {
    throw "Dictionary source not found: $sourceMeta (is dict_repo cloned?)"
}

$start = Get-Date

& robocopy $source $target /MIR /NFL /NDL /NJH /NJS /NP /R:1 /W:1
$robocode = $LASTEXITCODE
if ($robocode -ge 8) {
    throw "robocopy failed with exit code $robocode"
}

$targetMeta = Join-Path -Path $target -ChildPath 'meta.json'
$meta = Get-Content -LiteralPath $targetMeta -Raw -Encoding utf8 | ConvertFrom-Json
if ($meta.profile -ne $Profile) {
    throw "Tier mismatch: expected $Profile, meta.json says $($meta.profile)"
}

$files = @(Get-ChildItem -LiteralPath $target -File -Recurse)
$elapsed = [math]::Round(((Get-Date) - $start).TotalSeconds, 2)
Write-Host ("dict -> {0}: {1} files, {2} headwords, {3}s" -f $meta.profile, $files.Count, $meta.headwords, $elapsed)
