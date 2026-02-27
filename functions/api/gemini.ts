/**
 * Cloudflare Pages Function: Gemini API 代理
 * 將 Gemini API 呼叫移至後端，避免在前端暴露 API Key
 * GEMINI_API_KEY 需在 Cloudflare Secrets 中設定
 */

const GEMINI_API_BASE = 'https://generativelanguage.googleapis.com/v1beta';
const DEFAULT_MODEL = 'gemini-2.0-flash';

export interface Env {
  GEMINI_API_KEY: string;
}

interface GeminiRequest {
  prompt?: string;
  contents?: Array<{ role?: string; parts: Array<{ text: string }> }>;
  model?: string;
}

export async function onRequestPost(context: {
  request: Request;
  env: Env;
}): Promise<Response> {
  const { request, env } = context;

  if (!env.GEMINI_API_KEY) {
    return new Response(
      JSON.stringify({ error: 'GEMINI_API_KEY 未設定，請在 Cloudflare Secrets 中設定' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }

  try {
    const body = (await request.json()) as GeminiRequest;
    const model = body.model || DEFAULT_MODEL;

    let contents: GeminiRequest['contents'];
    if (body.contents) {
      contents = body.contents;
    } else if (body.prompt) {
      contents = [{ parts: [{ text: body.prompt }] }];
    } else {
      return new Response(
        JSON.stringify({ error: '請提供 prompt 或 contents' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const apiUrl = `${GEMINI_API_BASE}/models/${model}:generateContent?key=${env.GEMINI_API_KEY}`;
    const geminiResponse = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents }),
    });

    const data = await geminiResponse.json();

    if (!geminiResponse.ok) {
      return new Response(JSON.stringify(data), {
        status: geminiResponse.status,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return new Response(
      JSON.stringify({ error: message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

// 支援 OPTIONS 以處理 CORS preflight
export async function onRequestOptions(): Promise<Response> {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400',
    },
  });
}
