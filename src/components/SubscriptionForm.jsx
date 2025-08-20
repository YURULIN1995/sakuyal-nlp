import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
// import { Turnstile } from '@marsidev/react-turnstile';
// import styles from '@styles/SubscriptionForm.module.scss';

function SubscriptionForm({ onSuccessRedirectTo }) {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');
  const turnstileRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('loading');
    setMessage('');

    // --- UI 開發階段的模擬 API 呼叫 ---
    // 說明：我們先用 setTimeout 模擬一個成功的 API 回應。
    // 這樣您就可以專注於畫面開發，並看到成功訊息和頁面跳轉。
    // 當您準備好串接 Brevo API 時，請將這段移除，並取消註解下方的真實 API 呼叫。

    console.log('模擬表單送出:', { name, email });
    setTimeout(() => {
      setStatus('success');
      setMessage('訂閱成功！請檢查您的信箱以確認訂閱。');
      
      if (onSuccessRedirectTo) {
        setTimeout(() => {
          navigate(onSuccessRedirectTo);
        }, 1500); // 延遲 1.5 秒，讓使用者看到成功訊息
      } else {
        setName('');
        setEmail('');
      }
    }, 1000); // 模擬 1 秒的網路延遲


    /* --- ⚠️ 未來請取消註解這段，以啟用真實的 API 串接 ---
    const token = turnstileRef.current?.getResponse();
    if (!token) {
      setStatus('error');
      setMessage('請完成人機驗證。');
      return;
    }

    try {
      const response = await fetch('/api/add-subscriber', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, token }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || '發生未知錯誤');
      }

      setStatus('success');
      setMessage(data.message);
      
      if (onSuccessRedirectTo) {
        setTimeout(() => {
          navigate(onSuccessRedirectTo);
        }, 1500);
      } else {
        setName('');
        setEmail('');
      }

    } catch (error) {
      setStatus('error');
      setMessage(error.message);
    } finally {
      if (status !== 'success' || !onSuccessRedirectTo) {
        turnstileRef.current?.reset();
      }
    }
    */
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">姓名</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="請輸入您的姓名"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="請輸入您的 Email"
          />
        </div>
        
        {/* 在開發階段，您可以暫時註解掉 Turnstile 以方便測試 */}
        {/* <Turnstile
          ref={turnstileRef}
          siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
          options={{ theme: 'light' }}
        /> */}

        <button type="submit" disabled={status === 'loading'}>
          {status === 'loading' ? '處理中...' : '立即訂閱'}
        </button>
      </form>

      {message && (
        <p className={`${styles.statusMessage} ${styles[status]}`}>
          {message}
        </p>
      )}
    </div>
  );
}

export default SubscriptionForm;
