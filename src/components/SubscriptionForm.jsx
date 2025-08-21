import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
// import { Turnstile } from '@marsidev/react-turnstile';
import styles from '@styles/SubscriptionForm.module.scss';

function SubscriptionForm({ onSuccessRedirectTo }) {
  const navigate = useNavigate();
  // 移除 name state
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');
  const turnstileRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('loading');
    setMessage('');

    // --- UI 開發階段的模擬 API 呼叫 ---
    console.log('模擬表單送出:', { email }); // 更新：移除 name
    setTimeout(() => {
      setStatus('success');
      setMessage('訂閱成功！請檢查您的信箱以確認訂閱。');
      
      if (onSuccessRedirectTo) {
        setTimeout(() => {
          navigate(onSuccessRedirectTo);
        }, 1500); // 延遲 1.5 秒，讓使用者看到成功訊息
      } else {
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
        // 更新：送出的資料中只包含 email 和 token
        body: JSON.stringify({ email, token }),
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
        {/* 移除姓名欄位的 JSX */}
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="輸入Email，馬上就會收到下載連結！"
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
