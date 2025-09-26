import { useState, useEffect, useRef } from 'react';
import styles from '@styles/ContactForm.module.scss';
import { contactLink } from '@data/contactPageData.js';
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
  const turnstileRef = useRef(null);

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
      turnstileRef.current?.reset();

    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
      turnstileRef.current?.reset();
    }
  };

  useEffect(() => {
    if (status === 'success' || status === 'error') {
      const timer = setTimeout(() => {
        setStatus('idle');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const mailInfo = contactLink.find(link => link.id === 'contact-mail');
  const mailAddress = mailInfo ? mailInfo.contactUrl.replace('mailto:', '') : '';

  return (
    <div className={styles.formContainer}>
      <p className={styles.formSubtitle}>
        {contactFormContent.formSubtitle}
        <a href={`mailto:${mailAddress}`}>{mailAddress}</a>
      </p>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>{contactFormContent.nameLabel}</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={contactFormContent.namePlaceholder}
            className={styles.input}
            required
            disabled={status === 'sending'}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>{contactFormContent.emailLabel}</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={contactFormContent.emailPlaceholder}
            className={styles.input}
            required
            disabled={status === 'sending'}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.label}>{contactFormContent.messageLabel}</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={contactFormContent.messagePlaceholder}
            className={styles.textarea}
            required
            disabled={status === 'sending'}
          />
        </div>

        <Turnstile
          ref={turnstileRef}
          sitekey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
          onVerify={(token) => setTurnstileToken(token)}
        />

        <button 
          type="submit" 
          className={styles.submitButton} 
          disabled={status === 'sending' || !turnstileToken}
        >
          {status === 'sending' ? contactFormContent.statusMessage.sending : contactFormContent.submitButtonText}
        </button>

        {status === 'sending' && (
          <p className={`${styles.statusMessage} ${styles.sending}`}>
            {contactFormContent.statusMessage.sending}
          </p>
        )}

        {status === 'success' && (
          <p className={`${styles.statusMessage} ${styles.success}`}>
            {contactFormContent.statusMessage.success}
          </p>
        )}
        
        {status === 'error' && (
          <p className={`${styles.statusMessage} ${styles.error}`}>
            {contactFormContent.statusMessage.error}
          </p>
        )}
      </form>
    </div>
  );
}

export default ContactForm;