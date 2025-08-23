import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// 1. ✨ 鏡像 ContactForm.jsx 的成功模式：使用 'react-turnstile'
import Turnstile from 'react-turnstile';
import styles from '@styles/SubscriptionForm.module.scss';
import { freeDownloadData } from '@data/freeDownloadData.js';

function SubscriptionForm({ onSuccessRedirectTo }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');
  // 2. ✨ 鏡像 ContactForm.jsx 的成功模式：使用 useState 來管理 token
  const [turnstileToken, setTurnstileToken] = useState('');
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
    // 3. ✨ 鏡像 ContactForm.jsx 的成功模式：在提交時檢查 state 中的 token
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
        
        {/* 4. ✨ 鏡像 ContactForm.jsx 的成功模式：直接使用 Turnstile 元件 */}
        <Turnstile
          ref={turnstileRef}
          sitekey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
          onVerify={(token) => setTurnstileToken(token)}
        />

        <button 
          type="submit" 
          className={styles.submitButton} 
          // 5. ✨ 鏡像 ContactForm.jsx 的成功模式：禁用邏輯只參考 token state 和載入狀態
          disabled={status === 'loading' || !turnstileToken}
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
