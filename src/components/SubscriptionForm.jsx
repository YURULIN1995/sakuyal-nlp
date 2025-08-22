import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '@styles/SubscriptionForm.module.scss';
import { freeDownloadData } from '@data/freeDownloadData.js';

const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY;

function SubscriptionForm({ onSuccessRedirectTo }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');
  const [turnstileToken, setTurnstileToken] = useState('');
  const turnstileRef = useRef(null); // 這個 ref 會指向一個 div

  useEffect(() => {
    // 使用 useEffect 來手動渲染 Turnstile 元件
    // 確保 turnstileRef 已經指向一個 DOM 元素，並且官方腳本已載入
    if (turnstileRef.current && window.turnstile) {
      const widgetId = window.turnstile.render(turnstileRef.current, {
        sitekey: TURNSTILE_SITE_KEY,
        callback: function(token) {
          console.log("Turnstile verified via official API! Token:", token);
          setTurnstileToken(token);
        },
        'expired-callback': function() {
          setTurnstileToken('');
        },
      });

      // 元件卸載時，清理 Turnstile 元件
      return () => {
        window.turnstile.remove(widgetId);
      };
    }
  }, []); // 空依賴陣列，確保只在元件掛載時執行一次

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
      if (!response.ok) throw new Error(data.message || '發生未知錯誤');

      setStatus('success');
      setMessage(data.message);
      
      if (onSuccessRedirectTo) {
        setTimeout(() => navigate(onSuccessRedirectTo), 1500);
      } else {
        setEmail('');
      }

    } catch (error) {
      setStatus('error');
      setMessage(error.message);
    } finally {
      if (status !== 'success' || !onSuccessRedirectTo) {
        window.turnstile?.reset(turnstileRef.current);
        setTurnstileToken('');
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
        
        {/* 這是一個空的 div，專門用來讓 Turnstile 渲染自己 */}
        <div ref={turnstileRef} className={styles.turnstileContainer}></div>

        <button 
          type="submit" 
          className={styles.submitButton} 
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
