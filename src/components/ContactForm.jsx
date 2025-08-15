import { useState } from 'react';
import styles from '@styles/ContactForm.module.scss';
// 【修改】匯入 contactLink
import { contactFormData, contactLink } from '@data/contactPageData.js';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // 'idle', 'sending', 'success', 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  // 【新增】從 contactLink 陣列中找到 email 地址
  const mailInfo = contactLink.find(link => link.id === 'contact-mail');
  const mailAddress = mailInfo ? mailInfo.contactUrl.replace('mailto:', '') : '';

  return (
    <div className={styles.formContainer}>
      <p className={styles.formSubtitle}>
        {contactFormData.formSubtitle}
        {/* 【修改】使用新的 mailAddress 變數 */}
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
        <button type="submit" className={styles.submitButton} disabled={status === 'sending'}>
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
