import { useState, useEffect, useRef } from 'react';
import styles from '@styles/ContactForm.module.scss';
import { contactFormData, contactLink } from '@data/contactPageData.js';
import { contactFormContent } from '@data/userExperienceWriting.js';
import Turnstile from 'react-turnstile';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle');
  const [turnstileToken, setTurnstileToken] = useState('');
  const turnstileRef = useRef(null); // 新增 ref 來控制 Turnstile 元件

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!turnstileToken) {
      alert('請完成 CAPTCHA 驗證。');
      return;
    }
    setStatus('sending');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, token: turnstileToken }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      turnstileRef.current?.reset(); // 【修改】重置 Turnstile 元件

    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
      turnstileRef.current?.reset(); // 在失敗時也重置
    }
  };

  // 【新增】使用 useEffect 來處理成功訊息的自動消失
  useEffect(() => {
    if (status === 'success' || status === 'error') {
      const timer = setTimeout(() => {
        setStatus('idle'); // 2 秒後將狀態改回 idle
      }, 2000); // 2000 毫秒 = 2 秒

      // 清除計時器，避免組件卸載時發生錯誤
      return () => clearTimeout(timer);
    }
  }, [status]); // 這個 effect 會在 status 改變時觸發

  const mailInfo = contactLink.find(link => link.id === 'contact-mail');
  const mailAddress = mailInfo ? mailInfo.contactUrl.replace('mailto:', '') : '';

  return (
    <div className={styles.formContainer}>
      <p className={styles.formSubtitle}>
        {contactFormData.formSubtitle}
        <a href={`mailto:${mailAddress}`}>{mailAddress}</a>
      </p>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>{contactFormData.nameLabel}</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={contactFormData.namePlaceholder}
            className={styles.input}
            required
            disabled={status === 'sending'}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>{contactFormData.emailLabel}</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={contactFormData.emailPlaceholder}
            className={styles.input}
            required
            disabled={status === 'sending'}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.label}>{contactFormData.messageLabel}</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={contactFormData.messagePlaceholder}
            className={styles.textarea}
            required
            disabled={status === 'sending'}
          />
        </div>

        <Turnstile
          ref={turnstileRef} //將 ref 傳遞給 Turnstile
          sitekey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
          onVerify={(token) => setTurnstileToken(token)}
        />

        <button 
          type="submit" 
          className={styles.submitButton} 
          disabled={status === 'sending' || !turnstileToken}
        >
          {status === 'sending' ? '傳送中...' : contactFormData.submitButtonText}
        </button>

        {status === 'success' && (
          <p className={`${styles.statusMessage} ${styles.success}`}>
            {contactFormContent.statusMessage.error}
          </p>
        )}
        {status === 'error' && (
          <p className={`${styles.statusMessage} ${styles.error}`}>
            {contactFormContent.statusMessage.success}
          </p>
        )}
      </form>
    </div>
  );
}

export default ContactForm;
