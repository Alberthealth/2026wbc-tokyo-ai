# 在完成 GitHub 登入後執行此腳本
# 會建立 2026wbc-tokyo-ai 倉庫並推送程式碼

$ErrorActionPreference = "Stop"
$projectRoot = Split-Path -Parent (Split-Path -Parent $PSScriptRoot)
Set-Location $projectRoot

Write-Host "=== 建立 GitHub 倉庫並推送 ===" -ForegroundColor Cyan

# 檢查 gh 登入狀態
$authStatus = gh auth status 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "請先完成 GitHub 登入。若登入視窗已關閉，請執行: gh auth login --web" -ForegroundColor Yellow
    exit 1
}

# 將分支命名為 main（Cloudflare 預設）
git branch -M main

# 建立倉庫並推送（--public, --source=. 表示使用當前目錄）
Write-Host "建立 GitHub 倉庫 2026wbc-tokyo-ai..." -ForegroundColor Yellow
gh repo create 2026wbc-tokyo-ai --public --source=. --remote=origin --push --description "2026 WBC 東京巨蛋賽事懶人包"

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "=== 完成！===" -ForegroundColor Green
    Write-Host "倉庫網址: https://github.com/$(gh api user -q .login)/2026wbc-tokyo-ai" -ForegroundColor Green
    Write-Host ""
    Write-Host "下一步: 前往 Cloudflare 連接 Git" -ForegroundColor Cyan
    Write-Host "https://dash.cloudflare.com/ -> Workers & Pages -> Create -> Pages -> Connect to Git"
    Write-Host "選擇 2026wbc-tokyo-ai 倉庫，專案名稱: 2026wbc-tokyo-ai"
    Write-Host "Build: npm run build, Output: dist"
} else {
    Write-Host "若倉庫已存在，請手動推送: git push -u origin main" -ForegroundColor Yellow
}
