/**
 * 前端呼叫 Gemini API 的服務
 * 透過後端 /api/gemini 代理，API Key 不會暴露在前端
 */

export interface GeminiResponse {
  candidates?: Array<{
    content?: { parts?: Array<{ text?: string }> };
  }>;
  error?: { message?: string };
}

/**
 * 透過後端 API 呼叫 Gemini
 * @param prompt 使用者輸入的提示
 * @param model 可選，預設 gemini-2.0-flash
 */
export async function chatWithGemini(
  prompt: string,
  model?: string
): Promise<string> {
  // 使用相對路徑，生產環境由 Cloudflare Pages 提供 /api/gemini
  // 開發時需設定 Vite proxy 或執行 wrangler pages dev
  const res = await fetch('/api/gemini', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt, model }),
  });

  const data: GeminiResponse = await res.json();

  if (!res.ok) {
    throw new Error(data.error?.message || `API 錯誤: ${res.status}`);
  }

  const text =
    data.candidates?.[0]?.content?.parts?.[0]?.text ?? '無法取得回應';
  return text;
}
