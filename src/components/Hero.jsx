import styles from '@styles/Hero.module.css';

function Hero() {
  return (
    // 使用 heroSection 作為最外層容器的 class
    <section className={styles.heroSection}>
      {/* 左側區塊 */}
      <div className={styles.left}>
      </div>
      {/* 右側區塊 */}
      <div className={styles.right}>
      </div>
    </section>
  );
}

export default Hero;