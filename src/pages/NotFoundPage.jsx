import { Link } from 'react-router-dom';
import SEO from '@components/Head/SEO';
import styles from '@styles/NotFound.module.css'; // <--- 匯入 CSS Module

function NotFoundPage() {
  return (
    <>
      <SEO title="找不到頁面-404" />
      <div className={styles.container}>
        <h1 className={styles.errorMessage}>404 - 這個頁面不存在。</h1>
        <p className={styles.prompt}>指向這裡的連結發生錯誤，請使用搜尋功能查詢其他結果。</p>
        <p>
          <Link to="/" className={styles.homeLink}>返回首頁</Link>
        </p>
      </div>
    </>
  );
}

export default NotFoundPage;