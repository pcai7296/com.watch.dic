$out = "vela_src.txt"
"" | Out-File $out -Encoding utf8
Get-ChildItem -Path src -Recurse -File |
  Where-Object { $_.Extension -match '\.(c|h|cpp|hpp|s|py|js|json|mk|cmake|yml|md|ux)$' } |
  Sort-Object FullName | ForEach-Object {
    "" | Out-File $out -Append -Encoding utf8
    "===== $($_.FullName -replace [regex]::Escape($PWD),'.') =====" | Out-File $out -Append -Encoding utf8
    "" | Out-File $out -Append -Encoding utf8
    Get-Content -Path $_.FullName -Encoding utf8 -Raw | Out-File $out -Append -Encoding utf8
  }