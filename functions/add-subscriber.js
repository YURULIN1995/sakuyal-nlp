// functions/api/add-subscriber.js

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
export async function onRequestPost({ request, env }) {
  console.log("Worker 執行開始"); // <--- 日誌 1

  // CORS 和來源驗證
  const allowedOrigin = 'https://sakuyal.com';
  const origin = request.headers.get('Origin');
  const isAllowed = origin === allowedOrigin || origin?.startsWith('http://localhost:');
  
  if (!isAllowed) {
    console.log("CORS 錯誤：不允許的來源:", origin);
    return new Response('Forbidden', { status: 403 });
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
    console.log("收到的資料:", { email }); // <--- 日誌 2

    // Turnstile 驗證
    console.log("Turnstile 驗證開始"); // <--- 日誌 3
    const isHuman = await verifyTurnstile(token, env.TURNSTILE_SECRET_KEY, request);
    if (!isHuman) {
      console.error("Turnstile 驗證失敗"); // <--- 日誌 4 (錯誤)
      return new Response(JSON.stringify({ message: 'CAPTCHA 驗證失敗' }), {
        status: 403,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
    console.log("Turnstile 驗證成功"); // <--- 日誌 5

    // 準備 Brevo API 的資料
    const apiKey = env.BREVO_API_KEY;
    const listId = parseInt(env.BREVO_LIST_ID, 10);

    if (!apiKey || !listId) {
        console.error("環境變數錯誤：找不到 BREVO_API_KEY 或 BREVO_LIST_ID");
        throw new Error("伺服器設定不完整");
    }
    console.log("準備 Brevo Payload，List ID:", listId); // <--- 日誌 6

    const brevoPayload = {
      email,
      listIds: [listId],
      updateEnabled: true,
    };

    // 呼叫 Brevo API
    console.log("Brevo API 呼叫開始"); // <--- 日誌 7
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
      console.error('Brevo API 錯誤:', errorData); // <--- 日誌 8 (錯誤)
      throw new Error(`Brevo API 回應錯誤，狀態碼: ${response.status}`);
    }
    
    console.log("成功將聯絡人加入 Brevo"); // <--- 日誌 9

    return new Response(JSON.stringify({ message: '訂閱成功！請檢查您的信箱以確認訂閱。' }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Worker 執行時發生嚴重錯誤:', error.message); // <--- 日誌 10 (錯誤)
    return new Response(JSON.stringify({ message: '訂閱時發生錯誤' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
}
