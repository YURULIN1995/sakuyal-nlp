import styles from '@styles/DividerTitleLeft.module.scss';

/**
 * 通用的頁面主標題元件，包含一個裝飾線
 * @param {string} title - 要顯示的標題文字
 */
function DividerTitleLeft({ title }) {
  if (!title) {
    return null; // 如果沒有傳入 title，就不渲染
  }

  return (
    <div className={styles.dividerTitleWrapper}>
      <h2 className={styles.subtitle}>{title}</h2>
    </div>
  );
}

export default DividerTitleLeft;