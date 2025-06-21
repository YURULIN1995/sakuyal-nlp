import SEO from '@components/Head/SEO';
import styles from '@styles/DisclaimerPage.module.css';

function DisclaimerPage() {
  return (
    <>
      <SEO title="免責聲明" description="Sakuyal 自然語言煉金術網站免責聲明。" />

      <div className={styles.container}>
        <h1 className={styles.title}>免責聲明</h1>
        <p className={styles.message}>補充免責聲明。</p>
        {/* TODO: 加入實際的免責聲明文字 */}
      </div>
    </>
  );
}

export default DisclaimerPage;