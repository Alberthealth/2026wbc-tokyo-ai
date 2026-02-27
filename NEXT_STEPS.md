# 部署進度與下一步

## ✅ 已完成

1. **Git 已安裝**（2.53.0）
2. **GitHub CLI 已安裝**
3. **Git 倉庫已初始化**
4. **初始提交已完成**（31 個檔案）

---

## 🔄 進行中：GitHub 登入

若終端機顯示以下內容，請完成登入：

```
! First copy your one-time code: XXXX-XXXX
Open this URL to continue in your web browser: https://github.com/login/device
```

**請執行：**
1. 複製一次性驗證碼
2. 在瀏覽器開啟 https://github.com/login/device
3. 貼上驗證碼並授權

---

## 📋 登入完成後

在專案目錄執行：

```powershell
cd "d:\個人資料\個人學習\vibe coding\test"
.\scripts\push-to-github.ps1
```

此腳本會：
- 在 GitHub 建立 `2026wbc-tokyo-ai` 倉庫
- 推送程式碼到 GitHub

---

## 🌐 最後一步：Cloudflare

1. 前往 https://dash.cloudflare.com/
2. **Workers & Pages** → **Create application** → **Pages**
3. 選擇 **Connect to Git**
4. 選擇 **2026wbc-tokyo-ai** 倉庫
5. 設定：
   - Project name: `2026wbc-tokyo-ai`
   - Build command: `npm run build`
   - Build output directory: `dist`
6. **Save and Deploy**
7. 在 Settings → Environment variables 新增 **GEMINI_API_KEY**（Encrypt）
