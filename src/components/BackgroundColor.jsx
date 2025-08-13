import styles from '@styles/BackgroundColor.module.scss';

/**
 * 一個通用的內容區塊包裹元件
 * @param {React.ReactNode} children - 任何要放入區塊中的內容
 * @param {string} [color='lightGreen'] - 背景顏色變體 ('lightGreen', 'white', etc.)
 */
function BackgroundColor({ children, color = 'lightGreen' }) {
  // 動態組合 class 名稱，例如 "backgroundColor lightGreen" 或 "backgroundColor white"
  const containerClasses = `${styles.background} ${styles[color]}`;

  return (
    <section className={containerClasses}>
      {children}
    </section>
  );
}

export default BackgroundColor;