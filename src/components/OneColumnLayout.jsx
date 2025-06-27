import styles from '@styles/OneColumnLayout.module.scss';

/**
 * 接收單欄內容的通用佈局元件
 * @param {React.ReactNode} children - 任何要放入佈局中的內容
 * @param {string} className - 附加到 container 的額外 class
 */
function OneColumnLayout({ children, className = '' }) {
  const containerClasses = `${styles.container} ${className}`;

  return (
    <div className={containerClasses}>
      {children}
    </div>
  );
}

export default OneColumnLayout;