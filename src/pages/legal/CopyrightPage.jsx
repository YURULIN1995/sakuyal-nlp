// 著作權聲明
import SEO from '@components/Head/SEO'; // 匯入 SEO 元件
import styles from '@styles/CopyrightPage.module.css';

function CopyrightPage() {
  return (
    <>
      <SEO title="著作權聲明" description="Sakuyal 自然語言煉金術網站著作權聲明。" />

      <div className={styles.container}>
        <h1 className={styles.title}> 著作權聲明</h1>
        <p className={styles.message}>詳細著作權聲明內容將在此處補充。</p>
        {/* TODO: 加入實際的著作權聲明文字 */}
      </div>
    </>
  );
}

export default CopyrightPage;