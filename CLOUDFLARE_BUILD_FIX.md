# Cloudflare 建置設定修正

## 問題說明

建置失敗原因：**Build command 設定錯誤**

目前 Cloudflare 執行的是 `npx wrangler deploy`，但 Pages 專案應使用 `npm run build` 建置後由 Cloudflare 自動部署。

## 修正步驟

請前往 Cloudflare Dashboard 修改建置設定：

1. 開啟 **https://dash.cloudflare.com/** → **Workers & Pages**
2. 選擇專案 **2026wbc-tokyo-ai**
3. 點擊 **Settings** → **Builds & deployments** → **Build configuration**
4. 點擊 **Edit configuration**
5. 修改以下設定：

| 設定項目 | 正確值 | ❌ 錯誤值 |
|----------|--------|-----------|
| **Build command** | `npm run build` | ~~npx wrangler deploy~~ |
| **Build output directory** | `dist` | - |
| **Root directory** | 留空 | - |

6. 儲存後，前往 **Deployments** 點擊 **Retry deployment**

## 框架預設

若可重新選擇，請選擇 **React (Vite)** 預設，會自動帶入：
- Build command: `npm run build`
- Build output directory: `dist`
