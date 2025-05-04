import styles from '@styles/Hero.module.css';

// 接收資料作為 props
function Hero({
  imageUrl,
  imageAlt = "Hero 圖片",
  titleLine1,
  titleLine2,
  paragraph,
  buttonText,
  buttonLink,
  socialLinks = [] // 提供預設空陣列
}) {
  return (
    <section className={styles.heroSection}>
      {/* 背景層 */}
      <div className={styles.backgroundLayer}>
        <div className={styles.bgLeft}></div>
        <div className={styles.bgRight}></div>
      </div>

      {/* 內容容器 */}
      <div className={styles.contentContainer}>
        {/* 內部左右欄容器 */}
        <div className={styles.innerColumns}>
          {/* 左欄：文字內容 - 直接在這裡渲染 */}
          <div className={styles.textContainer}>
            {/* 標題 */}
            {(titleLine1 || titleLine2) && ( // 如果有標題內容才渲染
              <h2 className={styles.heroTitle}>
                {titleLine1}{titleLine1 && titleLine2 && <br/>} {/* 只有兩行都有時才換行 */}
                {titleLine2}
              </h2>
            )}
            {/* 段落 */}
            {paragraph && ( // 如果有段落內容才渲染
              <p className={styles.heroParagraph}>
                {paragraph}
              </p>
            )}
            {/* 按鈕 (使用 a 標籤) */}
            {buttonText && buttonLink && ( // 如果有按鈕文字和連結才渲染
              <a className={styles.heroButton} href={buttonLink} target="_blank" rel="noopener noreferrer">
                {buttonText}
              </a>
            )}
            {/* 社交連結 */}
            {socialLinks.length > 0 && ( // 如果有社交連結才渲染
              <ul className={styles.socialList}>
                {socialLinks.map(social => (
                  <li key={social.id}>
                    {/* 注意：這裡的 socialLink 樣式需要加在 a 標籤上 */}
                    <a
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className={styles.socialLink} // *** 套用 socialLink 樣式 ***
                    >
                      <i className={social.iconClass} aria-hidden="true"></i>
                    </a>
                  </li>
                ))}
              </ul>
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