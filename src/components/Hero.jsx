import styles from '@styles/Hero.module.css';

function Hero({ imageUrl, imageAlt = "Hero 圖片", children, buttonText}) {
  return (
    // 1. 外層容器，設定相對定位基準
    <section className={styles.heroSection}>

      {/* 2. 背景層 (絕對定位，底層) */}
      <div className={styles.backgroundLayer}>
        <div className={styles.bgLeft}></div> {/* 左側背景色塊 */}
        <div className={styles.bgRight}></div>{/* 右側背景色塊 */}
      </div>

      {/* 3. 內容容器 (相對定位，上層) */}
      <div className={styles.contentContainer}>
         {/* 4. 內部左右欄容器 */}
         <div className={styles.innerColumns}>
            {/* 左欄：文字內容 */}
            <div className={styles.textContainer}>
              {children} {/* 渲染傳入的內容 */}
              {buttonText && (
              <button type="button" className={styles.heroButton}>
                {buttonText}
              </button>
            )}
            </div>
            {/* 右欄：圖片內容 */}
            <div className={styles.imageContainer}>
              {imageUrl && (
                <img
                  src={imageUrl}
                  alt={imageAlt}
                  className={styles.image}
                  loading="lazy"
                />
              )}
            </div>
         </div>
      </div>

    </section>
  );
}

export default Hero;