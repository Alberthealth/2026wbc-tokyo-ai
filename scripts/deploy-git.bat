@echo off
chcp 65001 >nul
echo === 2026wbc-tokyo-ai Git 部署 ===
echo.

where git >nul 2>&1
if errorlevel 1 (
    echo 錯誤: 未找到 Git。請先安裝: https://git-scm.com/download/win
    pause
    exit /b 1
)

cd /d "%~dp0.."

if not exist ".git" (
    echo 初始化 Git 倉庫...
    git init
)

git status --porcelain | findstr /r "." >nul 2>&1
if not errorlevel 1 (
    echo 加入所有檔案...
    git add .
    echo 建立初始提交...
    git commit -m "feat: 2026 WBC 東京巨蛋賽事懶人包 - 部署至 Cloudflare Pages"
)

echo.
echo === 下一步 ===
echo 1. 在 GitHub 建立新倉庫: https://github.com/new
echo    倉庫名稱建議: 2026wbc-tokyo-ai
echo    不要勾選 "Add a README"
echo.
echo 2. 設定遠端並推送:
echo    git remote add origin https://github.com/你的帳號/2026wbc-tokyo-ai.git
echo    git branch -M main
echo    git push -u origin main
echo.
echo 3. 前往 Cloudflare: https://dash.cloudflare.com/
echo    Workers ^& Pages -^> Create -^> Pages -^> Connect to Git
echo    專案名稱: 2026wbc-tokyo-ai
echo    Build: npm run build
echo    Output: dist
echo.
pause
