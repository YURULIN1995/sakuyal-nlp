// 檔案: src/components/BicolorBackground.jsx

import styles from '@styles/BicolorBackground.module.scss';

function BicolorBackground({ children, className = '' }) {
  const sectionClasses = `${styles.bicolorSection} ${className}`;

  return (
    <section className={sectionClasses}>
      <div className={styles.backgroundLayer}>
        <div className={styles.bgLeft}></div>
        <div className={styles.bgRight}></div>
      </div>
      
      <div className={styles.contentLayer}>
        {children}
      </div>
    </section>
  );
}

export default BicolorBackground;