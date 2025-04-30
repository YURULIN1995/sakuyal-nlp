import SEO from '@components/Head/SEO';
import styles from '@styles/AboutPage.module.css';

function AboutPage() {
  console.log("Rendering AboutPage");

  return (
    <>
      <SEO title="關於我" description="這是關於 Sakuyal 自然語言煉金術的頁面。" />

      <div className={styles.container}>
        <h1 className={styles.title}>關於我</h1>
        <p className={styles.message}>這裡是關於我，稍後會進行補充。</p>
      </div>
    </>
  );
}

export default AboutPage;