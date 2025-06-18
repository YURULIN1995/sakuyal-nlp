import styles from '@styles/Hero.module.scss';
import ContentSection from '@components/ContentSection.jsx';

// Hero 現在接收所有 FreeTrial 需要的資料 props
function Hero(props) {
  return (
    <section className={styles.heroSection}>
      {/* Hero 背景 */}
      <div className={styles.backgroundLayer}>
        <div className={styles.bgLeft}></div>
        <div className={styles.bgRight}></div>
      </div>

      {/* 使用 FreeTrail 渲染內容，並傳入 Hero 特定的佈局 class */}
      <ContentSection
        {...props} // 將所有接收到的資料 props 直接透傳下去
        layoutClassName={styles.heroContainerSpecifics}
        textContainerLayoutClassName={styles.heroTextContainerMobile}
        imageContainerLayoutClassName={styles.heroImageContainerMobile}
      />
    </section>
  );
}

export default Hero;