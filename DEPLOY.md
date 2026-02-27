# Cloudflare Pages 部署指南 - 2026WBC-Tokyo-ai

## 專案設定

- **專案名稱**: 2026WBC-Tokyo-ai
- **建置指令**: `npm run build`
- **輸出目錄**: `dist`
- **後端 API**: `/api/gemini` (Cloudflare Pages Functions)

## 一、建立 Cloudflare Pages 專案

### 方式 A：透過 Git 整合（推薦）

1. 將程式碼推送到 GitHub 或 GitLab
2. 前往 [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Workers & Pages**
3. 點擊 **Create application** → **Pages** → **Connect to Git**
4. 選擇你的 Git 倉庫
5. 設定建置：
   - **Project name**: `2026WBC-Tokyo-ai`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: 留空（若專案在根目錄）
6. 點擊 **Save and Deploy**

### 方式 B：透過 Wrangler CLI

```bash
# 安裝 wrangler（若尚未安裝）
npm install -g wrangler

# 登入 Cloudflare
npx wrangler login

# 建立 Pages 專案（若尚未建立）
npx wrangler pages project create 2026WBC-Tokyo-ai

# 建置並部署
npm run build
npx wrangler pages deploy dist --project-name=2026WBC-Tokyo-ai
```

## 二、設定 GEMINI_API_KEY（Secrets）

**重要**：API Key 必須放在 Cloudflare Secrets，不會暴露在前端。

### 透過 Dashboard

1. 前往 **Workers & Pages** → 選擇 **2026WBC-Tokyo-ai**
2. 點擊 **Settings** → **Environment variables**
3. 在 **Production** 或 **Preview** 區塊點擊 **Add variable**
4. 選擇 **Encrypt**（Secrets）
5. 變數名稱：`GEMINI_API_KEY`
6. 變數值：貼上你的 Gemini API Key
7. 儲存

### 透過 Wrangler CLI

```bash
# 設定 Production 環境
npx wrangler pages secret put GEMINI_API_KEY --project-name=2026WBC-Tokyo-ai

# 依提示輸入你的 Gemini API Key
```

取得 Gemini API Key：前往 [Google AI Studio](https://aistudio.google.com/apikey) 建立。

## 三、本地開發（含 API）

若要測試後端 API，需同時執行 Vite 與 Wrangler：

```bash
# Terminal 1：建置並啟動 Pages 開發伺服器（含 Functions）
npm run build
npx wrangler pages dev dist --project-name=2026WBC-Tokyo-ai

# Terminal 2：啟動 Vite 開發伺服器（會 proxy /api 到 wrangler）
npm run dev
```

或建立 `.dev.vars` 供 wrangler 讀取 Secrets：

```bash
cp .dev.vars.example .dev.vars
# 編輯 .dev.vars，填入 GEMINI_API_KEY
```

## 四、API 使用方式

前端透過 `/api/gemini` 呼叫 Gemini，無需在前端暴露 API Key。

### 請求格式

```typescript
// POST /api/gemini
{
  "prompt": "你的問題或提示",
  "model": "gemini-2.0-flash"  // 可選，預設為 gemini-2.0-flash
}
```

### 前端範例

```typescript
import { chatWithGemini } from '@/src/api/gemini';

const response = await chatWithGemini('介紹 2026 WBC 東京巨蛋賽程');
console.log(response);
```

## 五、部署後網址

部署完成後，網站將在以下網址提供服務：

- **Production**: `https://2026wbc-tokyo-ai.pages.dev`
- 若已綁定自訂網域，則使用你設定的網域
