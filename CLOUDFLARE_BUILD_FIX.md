# Cloudflare 建置設定修正

## 問題說明

建置失敗原因：**Deploy command 設定錯誤**

若 Deploy command 設為 `npx wrangler deploy`，會導致錯誤。Vite + React 專案應由 Build command 建置，Path 指定輸出目錄，Deploy command 留空讓 Cloudflare 自動部署。

## 修正步驟

請前往 Cloudflare Dashboard 修改建置設定：

1. 開啟 **https://dash.cloudflare.com/** → **Workers & Pages**
2. 選擇專案 **2026wbc-tokyo-ai**
3. 點擊 **Settings** → **Builds & deployments** → **Build configuration**
4. 點擊 **Edit configuration**
5. 修改以下設定：

| 設定項目 | 建議值 | 說明 |
|----------|--------|------|
| **Build command** | `npm run build` | 執行 Vite 建置 |
| **Deploy command** | 留空 | 讓 Cloudflare 自動部署建置結果；若必填可填 `exit 0` |
| **Non-production branch deploy command** | 留空 | 與 Production 相同即可 |
| **Path** | `dist` | Vite 建置輸出目錄 |

6. 儲存後，前往 **Deployments** 點擊 **Retry deployment**

## 若 Path 為專案根目錄

若 **Path** 代表「專案根目錄」（非建置輸出），則請留空，並在介面中尋找「Build output directory」或「Output directory」欄位，設為 `dist`。
