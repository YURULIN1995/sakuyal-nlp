import styles from '@styles/BackgroundColor.module.scss';
/**
 * 一個通用的內容區塊包裹元件，提供標準的背景色和內邊距
 * @param {React.ReactNode} children - 任何要放入區塊中的內容
 */
function BackgroundColor({ children }) {
  return (
    <section className={styles.backgroundColor}>
      {children}
    </section>
  );
}

export default BackgroundColor;