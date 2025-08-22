import { useState, useEffect, useRef } from 'react';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { Turnstile } from '@marsidev/react-turnstile';
import styles from '@styles/SubscriptionForm.module.scss';
import { freeDownloadData } from '@data/freeDownloadData.js';

// SubmitButton 元件，使用 useFormStatus 來自動管理 pending 狀態
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className={styles.submitButton} disabled={pending}>
      {pending ? '處理中...' : freeDownloadData.buttonText2}
    </button>
  );
}

// Action 函式，處理表單提交的核心邏輯
async function addSubscriberAction(previousState, formData) {
  const email = formData.get('email');
  const token = formData.get('cf-turnstile-response');

  if (!token) {
    return { success: false, message: '請完成人機驗證。' };
  }

  try {
    const response = await fetch('/api/add-subscriber', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, token }),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || '發生未知錯誤');
    }
    return { success: true, message: data.message };
  } catch (error) {
    return { success: false, message: error.message };
  }
}

function SubscriptionForm({ onSuccessRedirectTo }) {
  const navigate = useNavigate();
  const [state, formAction] = useActionState(addSubscriberAction, { success: false, message: null });
  const [displayMessage, setDisplayMessage] = useState(null);
  const [messageType, setMessageType] = useState('');
  const turnstileRef = useRef(null); // Ref for Turnstile component

  useEffect(() => {
    if (state.message) {
      setDisplayMessage(state.message);
      setMessageType(state.success ? 'success' : 'error');

      const timer = setTimeout(() => {
        setDisplayMessage(null);
      }, 5000);

      if (state.success && onSuccessRedirectTo) {
        const redirectTimer = setTimeout(() => {
          navigate(onSuccessRedirectTo);
        }, 1500);
        return () => clearTimeout(redirectTimer);
      }

      return () => clearTimeout(timer);
    }
  }, [state, navigate, onSuccessRedirectTo]);

  return (
    <div className={styles.formContainer}>
      <form action={formAction}>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className={styles.input}
            required
            placeholder="輸入Email，馬上就會收到下載連結！"
          />
        </div>
        
        {/* We use a hidden input to pass the token to the form action */}
        <input type="hidden" name="cf-turnstile-response" id="cf-turnstile-response" />
        <Turnstile
          ref={turnstileRef}
          siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
          options={{ theme: 'light' }}
          onVerify={(token) => {
            // Manually update the hidden input's value when Turnstile verifies
            const hiddenInput = document.getElementById('cf-turnstile-response');
            if (hiddenInput) {
              hiddenInput.value = token;
            }
          }}
          onExpire={() => {
            // Reset the hidden input when the token expires
            const hiddenInput = document.getElementById('cf-turnstile-response');
            if (hiddenInput) {
              hiddenInput.value = '';
            }
            // Optionally, you can also reset the Turnstile widget itself
            turnstileRef.current?.reset();
          }}
        />

        <SubmitButton />
      </form>

      {displayMessage && (
        <p className={`${styles.statusMessage} ${styles[messageType]}`}>
          {displayMessage}
        </p>
      )}
    </div>
  );
}

export default SubscriptionForm;
