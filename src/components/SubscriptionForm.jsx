import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Turnstile from 'react-turnstile';
import styles from '@styles/SubscriptionForm.module.scss';
import { freeDownloadData } from '@data/freeDownloadData.js';

// 修正：讀取與您 .env 和 ContactForm.jsx 中一致的環境變數
const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY;

function SubscriptionForm({ onSuccessRedirectTo }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');
  const [turnstileToken, setTurnstileToken] = useState(''); // 使用 state 來儲存 token
  const turnstileRef = useRef(null);

  useEffect(() => {
    if (status === 'success' || status === 'error') {
      const timer = setTimeout(() => {
        setStatus('idle');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!turnstileToken) {
      setStatus('error');
      setMessage('請完成人機驗證。');
      return;
    }
    
    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/add-subscriber', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, token: turnstileToken }),
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
        setTurnstileToken(''); // 重設 token state
      }
    }
  };

  // ✨ 偵錯輔助：在每次元件渲染時，印出目前的狀態
  console.log('Component rendered. Status:', status, 'Has Token:', !!turnstileToken);

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input
            type="email"
            id="email"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="輸入Email，馬上就會收到下載連結！"
          />
        </div>
        
        {TURNSTILE_SITE_KEY ? (
          <Turnstile
            ref={turnstileRef}
            sitekey={TURNSTILE_SITE_KEY}
            // ✨ 偵錯輔助：當驗證成功時，印出收到的 token
            onVerify={(token) => {
              console.log('Turnstile verified! Received token:', token);
              setTurnstileToken(token);
            }}
            onExpire={() => {
              console.log('Turnstile token expired.');
              setTurnstileToken('');
            }}
          />
        ) : (
          <p className={styles.error}>人機驗證元件載入失敗，請檢查設定。</p>
        )}

        <button 
          type="submit" 
          className={styles.submitButton} 
          // 禁用邏輯現在也參考 token state
          disabled={status === 'loading' || !turnstileToken || !TURNSTILE_SITE_KEY}
        >
          {status === 'loading' ? '處理中...' : freeDownloadData.buttonText2}
        </button>
      </form>

      <p className={`${styles.statusMessage} ${styles[status] || ''}`}>
        {message}
      </p>
    </div>
  );
}

export default SubscriptionForm;
