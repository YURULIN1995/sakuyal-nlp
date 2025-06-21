import SEO from '@components/Head/SEO';
import styles from '@styles/PrivacyPolicyPage.module.css';

function PrivacyPolicyPage() {
  return (
    <>
      <SEO title="隱私權政策" description="Sakuyal 自然語言煉金術網站隱私權政策說明。" />

      <div className={styles.container}>
        <h1 className={styles.title}>隱私權政策</h1>
        <p className={styles.message}>補充隱私權政策。</p>
        {/* TODO: 加入實際的隱私權政策文字 */}
      </div>
    </>
  );
}

export default PrivacyPolicyPage;