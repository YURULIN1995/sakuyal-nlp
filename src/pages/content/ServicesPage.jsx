import SEO from '@components/Head/SEO';
import styles from '@styles/ServicesPage.module.css';

function ServicesPage() {
  console.log("Rendering ServicesPage");

  return (
    <>
      <SEO title="服務項目" description="這是Sakuyal 自然語言煉金術的服務項目頁面。" />

      <div className={styles.container}>
        <h1 className={styles.title}>服務項目</h1>
        <p className={styles.message}>這裡是服務項目，稍後會進行補充。</p>
      </div>
    </>
  );
}

export default ServicesPage;