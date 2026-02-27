# 方式 A：Git 整合部署 - 逐步指南

## 前置需求

1. **安裝 Git**（若尚未安裝）  
   - 下載：https://git-scm.com/download/win  
   - 安裝時可保持預設選項  

2. **GitHub 帳號**  
   - 註冊：https://github.com/join  

3. **Cloudflare 帳號**  
   - 註冊：https://dash.cloudflare.com/sign-up  

---

## 步驟 1：初始化 Git 並提交

在專案目錄開啟 **PowerShell** 或 **命令提示字元**，執行：

```powershell
cd "d:\個人資料\個人學習\vibe coding\test"

# 初始化 Git
git init

# 加入所有檔案
git add .

# 建立提交
git commit -m "feat: 2026 WBC 東京巨蛋賽事懶人包"
```

或直接執行腳本：
```powershell
.\scripts\deploy-git.bat
```

---

## 步驟 2：在 GitHub 建立倉庫

1. 前往 https://github.com/new  
2. **Repository name**：`2026WBC-Tokyo-ai`  
3. **Description**（可選）：2026 WBC 東京巨蛋賽事懶人包  
4. 選擇 **Public**  
5. **不要**勾選 "Add a README file"  
6. 點擊 **Create repository**  

---

## 步驟 3：推送到 GitHub

在專案目錄執行（將 `你的帳號` 換成你的 GitHub 使用者名稱）：

```powershell
git remote add origin https://github.com/你的帳號/2026WBC-Tokyo-ai.git
git branch -M main
git push -u origin main
```

若 GitHub 要求登入，可使用：
- **Personal Access Token**（建議）：Settings → Developer settings → Personal access tokens  
- 或 **GitHub Desktop** 等圖形介面工具  

---

## 步驟 4：在 Cloudflare 連接 Git

1. 前往 https://dash.cloudflare.com/  
2. 左側選 **Workers & Pages**  
3. 點擊 **Create application** → **Pages**  
4. 選擇 **Connect to Git**  
5. 授權 GitHub（若尚未授權）  
6. 選擇倉庫 **2026WBC-Tokyo-ai**  
7. 設定建置：
   - **Project name**：`2026WBC-Tokyo-ai`
   - **Production branch**：`main`
   - **Build command**：`npm run build`
   - **Build output directory**：`dist`
   - **Root directory**：留空
8. 點擊 **Save and Deploy**  

---

## 步驟 5：設定 GEMINI_API_KEY

部署開始後：

1. 在專案頁面點擊 **Settings**  
2. 左側選 **Environment variables**  
3. 在 **Production** 區塊點擊 **Add variable**  
4. 選擇 **Encrypt**（Secrets）  
5. **Variable name**：`GEMINI_API_KEY`  
6. **Value**：貼上你的 Gemini API Key  
7. 點擊 **Save**  

取得 API Key：https://aistudio.google.com/apikey  

> 設定 Secrets 後，建議在 **Deployments** 頁面點擊 **Retry deployment** 重新部署，讓新變數生效。  

---

## 完成

部署完成後，網站網址為：

**https://2026wbc-tokyo-ai.pages.dev**
