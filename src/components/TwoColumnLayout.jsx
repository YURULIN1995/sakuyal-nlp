import styles from '@styles/TwoColumnLayout.module.scss';

function TwoColumnLayout({ left, right, className = '' }) {
  return (
    // 這裡的 container 對應上面 SCSS 的 .container
    <div className={`${styles.container} ${className}`}>
      <div className={styles.columnLeft}>{left}</div>
      <div className={styles.columnRight}>{right}</div>
    </div>
  );
}

export default TwoColumnLayout;