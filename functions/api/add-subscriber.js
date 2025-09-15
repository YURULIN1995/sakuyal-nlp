import { apiMessages } from '@data/userExperienceWriting.js';

// Turnstile 驗證函式
async function verifyTurnstile(token, secretKey, request) {
  const ip = request.headers.get('CF-Connecting-IP');
  const formData = new FormData();
  formData.append('secret', secretKey);
  formData.append('response', token);
  if (ip) {
    formData.append('remoteip', ip);
  }
  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body: formData,
  });
  const result = await response.json();
  return result.success;
}

// 主要的請求處理函式
// 關鍵：函式名稱必須是 onRequestPost 才能處理 POST 請求
export async function onRequestPost({ request, env }) {
  // CORS 和來源驗證
  const allowedOrigin = 'https://sakuyal.com';
  const origin = request.headers.get('Origin');
  const isAllowed = origin === allowedOrigin || origin?.startsWith('http://localhost:');
  
  if (!isAllowed) {
    return new Response(apiMessages.common.forbidden, { status: 403 });
  }

  const corsHeaders = {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  if (request.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, token } = await request.json();

    // Turnstile 驗證
    const isHuman = await verifyTurnstile(token, env.TURNSTILE_SECRET_KEY, request);
    if (!isHuman) {
      return new Response(JSON.stringify({ message: apiMessages.common.captchaFail }), {
        status: 403,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // 準備 Brevo API 的資料
    const apiKey = env.BREVO_API_KEY;
    const listId = parseInt(env.BREVO_LIST_ID, 10);

    if (!apiKey || !listId) {
        throw new Error(apiMessages.subscription.serverConfigError);
    }

    const brevoPayload = {
      email,
      listIds: [listId],
      updateEnabled: true,
    };

    // 呼叫 Brevo API
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'api-key': apiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(brevoPayload),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Brevo API 回應錯誤，狀態碼: ${response.status}`);
    }
    
    return new Response(JSON.stringify({ message: apiMessages.subscription.success }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    const errorMessage = error.message === apiMessages.subscription.serverConfigError
    ? apiMessages.subscription.serverConfigError
    : apiMessages.subscription.error;
    return new Response(JSON.stringify({ message: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
}
