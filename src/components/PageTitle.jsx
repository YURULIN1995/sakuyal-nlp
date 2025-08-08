import styles from '@styles/PageTitle.module.scss';

/**
 * 通用的頁面主標題元件，包含一個裝飾線
 * @param {string} title - 要顯示的標題文字
 */
function PageTitle({ title }) {
  if (!title) {
    return null; // 如果沒有傳入 title，就不渲染
  }

  return (
    <div className={styles.titleWrapper}>
      {/* 頁面主標題使用 h1 標籤在語意上是正確的 */}
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
}

export default PageTitle;