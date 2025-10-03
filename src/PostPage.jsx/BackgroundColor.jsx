import styles from '@styles/BackgroundColor.module.scss';

/**
 * 一個通用的內容區塊包裹元件
 * @param {React.ReactNode} children - 任何要放入區塊中的內容
 * @param {string} [color='lightGreen'] - 背景顏色變體
 * @param {string} [className=''] - 外部傳入的額外 class
 */
function BackgroundColor({ children, color = 'lightGreen', className = '' }) {
  // 將所有 class 組合在一起
  const containerClasses = `${styles.backgroundColor} ${styles[color]} ${className}`;

  return (
    <section className={containerClasses}>
      {children}
    </section>
  );
}

export default BackgroundColor;
