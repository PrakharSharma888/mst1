Param(
  [string]$Root = "C:\mstblockchain\MST",
  [string]$OutFile = "COLOR_CODES_REPORT.md"
)

$includeExt = @('*.js','*.jsx','*.ts','*.tsx','*.css','*.mjs')
$excludeDirs = @(
  'node_modules',
  '.next',
  '.git',
  'dist',
  'build',
  'out',
  '.turbo',
  '.vercel',
  'coverage'
)

$files = Get-ChildItem -Path $Root -Recurse -File -Include $includeExt |
  Where-Object {
    $full = $_.FullName.ToLowerInvariant()
    foreach ($dir in $excludeDirs) {
      $needle = "\\$dir\\"
      if ($full.Contains($needle)) { return $false }
    }
    return $true
  }

$hex = [regex]'#[0-9a-fA-F]{3,8}'
$func = [regex]'(?i)\b(?:rgba?|hsla?)\([^\)]*\)'
$cssVarDef = [regex]'(?m)--[a-zA-Z0-9_-]+\s*:\s*[^;]+;'

# Tailwind-ish palette tokens used in className strings
$tw = [regex]'(?i)\b(?:bg|text|border|from|via|to|ring|stroke|fill)-(?:black|white|slate|gray|zinc|neutral|stone|red|rose|pink|fuchsia|purple|violet|indigo|blue|sky|cyan|teal|emerald|green|lime|yellow|amber|orange)(?:-\d{2,3})?(?:\/\d{1,3})?\b'

$hexSet = New-Object 'System.Collections.Generic.HashSet[string]'
$funcSet = New-Object 'System.Collections.Generic.HashSet[string]'
$twSet = New-Object 'System.Collections.Generic.HashSet[string]'
$cssVarSet = New-Object 'System.Collections.Generic.HashSet[string]'

foreach ($f in $files) {
  try {
    $content = Get-Content -Raw -LiteralPath $f.FullName
  } catch {
    continue
  }

  if ($null -eq $content) {
    continue
  }

  foreach ($m in $hex.Matches($content)) {
    [void]$hexSet.Add($m.Value.ToLower())
  }
  foreach ($m in $func.Matches($content)) {
    $v = ($m.Value -replace '\s+',' ')
    [void]$funcSet.Add($v)
  }
  foreach ($m in $tw.Matches($content)) {
    [void]$twSet.Add($m.Value)
  }
  foreach ($m in $cssVarDef.Matches($content)) {
    $v = ($m.Value.Trim() -replace '\s+',' ')
    [void]$cssVarSet.Add($v)
  }
}

$hexList = $hexSet | Sort-Object
$funcList = $funcSet | Sort-Object
$twList = $twSet | Sort-Object
$cssVarList = $cssVarSet | Sort-Object

$outPath = Join-Path $Root $OutFile
$lines = @()
$lines += '# Color Codes Report (auto-generated)'
$lines += ''
$lines += "Scanned: $($files.Count) files under $Root"
$lines += "Generated: $(Get-Date -Format s)"
$lines += ''
$lines += '## Hex colors'
$lines += "Total: $($hexList.Count)"
$lines += ''
$lines += ($hexList | ForEach-Object { "- $($_)" })
$lines += ''
$lines += '## rgb/rgba/hsl/hsla()'
$lines += "Total: $($funcList.Count)"
$lines += ''
$lines += ($funcList | ForEach-Object { "- $($_)" })
$lines += ''
$lines += '## Tailwind color tokens found'
$lines += "Total: $($twList.Count)"
$lines += ''
$lines += ($twList | ForEach-Object { "- $($_)" })
$lines += ''
$lines += '## CSS variable definitions found'
$lines += "Total: $($cssVarList.Count)"
$lines += ''
$lines += ($cssVarList | ForEach-Object { "- $($_)" })

Set-Content -LiteralPath $outPath -Value $lines -Encoding UTF8

Write-Host "Wrote $outPath"
Write-Host "Hex: $($hexList.Count) | Func: $($funcList.Count) | Tailwind tokens: $($twList.Count) | CSS vars: $($cssVarList.Count)"
