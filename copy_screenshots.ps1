$srcDir = "C:\Users\ADITYA\.gemini\antigravity-ide\brain\18884020-a2d1-4e04-a91e-551eb63bec7a"
$destDir = "c:\Users\ADITYA\.gemini\antigravity-ide\scratch\portfolio\public\projects"

if (!(Test-Path $destDir)) { New-Item -Path $destDir -ItemType Directory -Force | Out-Null }

Copy-Item "$srcDir\medical_store_hero_1782629729978.png" "$destDir\medical.png" -Force
Copy-Item "$srcDir\krishisetu_hero_1782629780878.png" "$destDir\krishisetu.png" -Force
Copy-Item "$srcDir\onboard_ai_hero_1782629813502.png" "$destDir\onboard.png" -Force
Copy-Item "$srcDir\health_monitor_hero_1782629852220.png" "$destDir\health.png" -Force

Get-ChildItem $destDir | ForEach-Object { Write-Host "$($_.Name) - $($_.Length) bytes" }
Write-Host "All screenshots copied."
