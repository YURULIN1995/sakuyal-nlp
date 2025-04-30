import SEO from '@components/Head/SEO';
import styles from '@styles/ContactPage.module.css';

function ContactPage() {
  console.log("Rendering ContactPage");

  return (
    <>
      <SEO title="聯絡" description="這是 Sakuyal 自然語言煉金術的聯絡頁面。" />

      <div className={styles.container}>
        <h1 className={styles.title}>聯絡</h1>
        <p className={styles.message}>這裡是聯絡表單，稍後會進行補充。</p>
      </div>
    </>
  );
}

export default ContactPage;