import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
// import { Turnstile } from '@marsidev/react-turnstile';
import styles from '@styles/SubscriptionForm.module.scss';
// 1. 匯入 freeDownloadData
import { freeDownloadData } from '@data/freeDownloadData.js';

function SubscriptionForm({ onSuccessRedirectTo }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');
  const turnstileRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('loading');
    setMessage('');

    // --- UI 開發階段的模擬 API 呼叫 ---
    console.log('模擬表單送出:', { email });
    setTimeout(() => {
      setStatus('success');
      setMessage('訂閱成功！請檢查您的信箱以確認訂閱。');
      
      if (onSuccessRedirectTo) {
        setTimeout(() => {
          navigate(onSuccessRedirectTo);
        }, 1500);
      } else {
        setEmail('');
      }
    }, 1000);
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
        
        {/* <Turnstile ... /> */}

        <button type="submit" className={styles.submitButton} disabled={status === 'loading'}>
          {/* 2. 更新：將按鈕文字改為從 freeDownloadData 讀取 */}
          {status === 'loading' ? '處理中...' : freeDownloadData.buttonText2}
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
