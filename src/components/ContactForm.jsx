import { useState } from 'react';
import styles from '@styles/ContactForm.module.scss';
import { contactFormData, contactLink } from '@data/contactPageData.js';
import Turnstile from 'react-turnstile'; // 匯入 Turnstile 元件

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle');
  const [turnstileToken, setTurnstileToken] = useState(''); // 新增 state 來儲存 token

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
        // 將 token 一同傳送到後端
        body: JSON.stringify({ ...formData, token: turnstileToken }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });

    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    }
  };

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
          sitekey={import.meta.env.VITE_TURNSTILE_SITE_KEY} // 從 Vite 環境變數讀取 Site Key
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
            感謝您的訊息，我們會盡快與您聯繫！
          </p>
        )}
        {status === 'error' && (
          <p className={`${styles.statusMessage} ${styles.error}`}>
            訊息傳送失敗，請稍後再試或直接來信。
          </p>
        )}
      </form>
    </div>
  );
}

export default ContactForm;