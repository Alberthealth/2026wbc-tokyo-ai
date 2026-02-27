# 方式 A：Git 整合部署腳本
# 請先安裝 Git: https://git-scm.com/download/win
# 並建立 GitHub 帳號與倉庫

param(
    [Parameter(Mandatory=$true)]
    [string]$GitHubRepo  # 例如: "your-username/2026WBC-Tokyo-ai"
)

$ErrorActionPreference = "Stop"
$projectRoot = Split-Path -Parent (Split-Path -Parent $PSScriptRoot)
Set-Location $projectRoot

Write-Host "=== 2026WBC-Tokyo-ai Git 部署 ===" -ForegroundColor Cyan
Write-Host ""

# 檢查 Git
if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Host "錯誤: 未找到 Git。請先安裝: https://git-scm.com/download/win" -ForegroundColor Red
    exit 1
}

# 初始化 Git（若尚未初始化）
if (-not (Test-Path ".git")) {
    Write-Host "初始化 Git 倉庫..." -ForegroundColor Yellow
    git init
}

# 檢查是否有未提交的變更
$status = git status --porcelain
if ($status) {
    Write-Host "加入所有檔案..." -ForegroundColor Yellow
    git add .
    Write-Host "建立初始提交..." -ForegroundColor Yellow
    git commit -m "feat: 2026 WBC 東京巨蛋賽事懶人包 - 部署至 Cloudflare Pages"
}

# 設定遠端（若尚未設定）
$remote = git remote get-url origin 2>$null
if (-not $remote) {
    $repoUrl = if ($GitHubRepo -match "^https://") { $GitHubRepo } else { "https://github.com/$GitHubRepo.git" }
    Write-Host "設定遠端: $repoUrl" -ForegroundColor Yellow
    git remote add origin $repoUrl
}

Write-Host ""
Write-Host "=== 下一步 ===" -ForegroundColor Green
Write-Host "1. 在 GitHub 建立新倉庫: https://github.com/new"
Write-Host "   - 倉庫名稱建議: 2026WBC-Tokyo-ai"
Write-Host "   - 不要勾選 'Add a README'"
Write-Host ""
Write-Host "2. 推送程式碼:"
Write-Host "   git branch -M main"
Write-Host "   git push -u origin main"
Write-Host ""
Write-Host "3. 前往 Cloudflare Dashboard:"
Write-Host "   https://dash.cloudflare.com/ -> Workers & Pages"
Write-Host "   Create application -> Pages -> Connect to Git"
Write-Host "   選擇剛推送的倉庫，專案名稱: 2026WBC-Tokyo-ai"
Write-Host "   Build command: npm run build"
Write-Host "   Build output directory: dist"
Write-Host ""
