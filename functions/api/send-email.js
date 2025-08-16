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


export async function onRequestPost({ request, env }) {
  const allowedOrigin = 'https://sakuyal.com';
  const origin = request.headers.get('Origin');
  // 在本地開發時，允許 localhost
  const isAllowed = origin === allowedOrigin || origin?.startsWith('http://localhost:');
  
  if (!isAllowed) {
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
    const { name, email, message, token } = await request.json();

    const isHuman = await verifyTurnstile(token, env.TURNSTILE_SECRET_KEY, request);
    if (!isHuman) {
      return new Response(JSON.stringify({ message: 'CAPTCHA validation failed' }), {
        status: 403,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const apiKey = env.BREVO_API_KEY;
    const senderEmail = env.SENDER_EMAIL;
    const recipientEmail = env.RECIPIENT_EMAIL;

    const brevoPayload = {
      sender: { name, email: senderEmail },
      to: [{ email: recipientEmail, name: 'Sakuyal NLP Admin' }],
      subject: `來自 sakuyal.com 的新訊息 - ${name}`,
      htmlContent: `
        <html><body>
          <h2>來自聯絡表單的新訊息：</h2>
          <p><strong>姓名:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>訊息內容:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        </body></html>
      `,
    };

    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
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
      console.error('Brevo API Error:', errorData);
      throw new Error(`Brevo API responded with status ${response.status}`);
    }

    return new Response(JSON.stringify({ message: 'Email sent successfully' }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Worker Error:', error);
    return new Response(JSON.stringify({ message: 'Error sending email' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
}