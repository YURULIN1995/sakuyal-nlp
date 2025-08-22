import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { Turnstile } from '@marsidev/react-turnstile';
import styles from '@styles/SubscriptionForm.module.scss';
import { freeDownloadData } from '@data/freeDownloadData.js';

function SubscriptionForm({ onSuccessRedirectTo }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');
  const turnstileRef = useRef(null);

  // 新增 useEffect 來處理訊息的自動消失
  useEffect(() => {
    // 如果狀態是成功或失敗，就設定一個計時器
    if (status === 'success' || status === 'error') {
      const timer = setTimeout(() => {
        setStatus('idle'); // 5 秒後將狀態重設為 'idle'
        // 注意：我們不需要手動清除 message，因為下方的 JSX 會因 status 改變而自動隱藏
      }, 5000); // 5000 毫秒 = 5 秒

      // 清理函式：如果元件卸載或狀態再次改變，清除舊的計時器
      return () => clearTimeout(timer);
    }
  }, [status]); // 這個 effect 會在 'status' 改變時觸發

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('loading');
    setMessage('');

    // --- UI 開發階段的模擬 API 呼叫 ---
    const simulateSuccess = true; // 您可以在這裡切換 true/false 來測試不同情境
    
    console.log('模擬表單送出 (測試情境: ' + (simulateSuccess ? '成功' : '失敗') + ')');
    
    setTimeout(() => {
      if (simulateSuccess) {
        setStatus('success');
        setMessage('訂閱成功！請檢查您的信箱以確認訂閱。');
        if (onSuccessRedirectTo) {
          setTimeout(() => { navigate(onSuccessRedirectTo); }, 1500);
        } else {
          setEmail('');
        }
      } else {
        setStatus('error');
        setMessage('訊息傳送失敗，請稍後再試或直接來信。');
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
