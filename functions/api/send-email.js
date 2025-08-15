export async function onRequestPost({ request, env }) {
  // --- 安全性設定：只允許您的網站網域存取 ---
  const allowedOrigin = 'https://sakuyal.com';
  const origin = request.headers.get('Origin');
  if (origin !== allowedOrigin) {
    return new Response('Forbidden', { status: 403 });
  }

  // --- 預先準備 CORS 標頭 ---
  const corsHeaders = {
    'Access-Control-Allow-Origin': allowedOrigin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  // --- 處理瀏覽器的 OPTIONS preflight 請求 ---
  if (request.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // 1. 從前端請求中讀取表單資料
    const { name, email, message } = await request.json();

    // 2. 從環境變數中讀取您的金鑰和 Email
    const apiKey = env.BREVO_API_KEY;
    const senderEmail = env.SENDER_EMAIL;
    const recipientEmail = env.RECIPIENT_EMAIL;

    // 3. 準備要傳送給 Brevo API 的資料
    const brevoPayload = {
      sender: {
        name: name,
        email: senderEmail,
      },
      to: [
        {
          email: recipientEmail,
          name: 'Sakuyal NLP Admin',
        },
      ],
      subject: `來自 sakuyal.com 的新訊息 - ${name}`,
      htmlContent: `
        <html>
          <body>
            <h2>來自聯絡表單的新訊息：</h2>
            <p><strong>姓名:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>訊息內容:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
          </body>
        </html>
      `,
    };

    // 4. 呼叫 Brevo API
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'api-key': apiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(brevoPayload),
    });

    // 5. 檢查 Brevo API 的回應
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Brevo API Error:', errorData);
      throw new Error(`Brevo API responded with status ${response.status}`);
    }

    // 6. 如果一切成功，回傳成功的訊息給前端
    return new Response(JSON.stringify({ message: 'Email sent successfully' }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Worker Error:', error);
    // 7. 如果發生任何錯誤，回傳錯誤的訊息給前端
    return new Response(JSON.stringify({ message: 'Error sending email' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
}