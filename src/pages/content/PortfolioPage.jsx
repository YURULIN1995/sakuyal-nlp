import SEO from '@components/Head/SEO';
import styles from '@styles/PortfolioPage.module.css';

function PortfolioPage() {
  console.log("Rendering PortfolioPage");

  return (
    <>
      <SEO title="作品集" description="這是Sakuyal 自然語言煉金術的作品集頁面。" />

      <div className={styles.container}>
        <h1 className={styles.title}>作品集</h1>
        <p className={styles.message}>這裡是作品集，稍後會進行補充。</p>
      </div>
    </>
  );
}

export default PortfolioPage;