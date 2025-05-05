import styles from '@styles/Hero.module.css';
import TwoColumnLayout from '@components/TwoColumnLayout';

function Hero({
  imageUrl,
  imageAlt = "圖片",
  titleLine1,
  titleLine2,
  paragraph,
  buttonText,
  buttonLink,
  socialLinks = []
}) {

  // ***** 在這裡加上 console.log *****
  console.log('titleLine1:', titleLine1);
  console.log('titleLine2:', titleLine2);

  // 組合左欄內容
  const textContent = (
    <>
      {(titleLine1 || titleLine2) && (
        <h2 className={styles.heroTitle}>
          {titleLine1}
          {titleLine1 && titleLine2 && <br/>}
          {titleLine2}
        </h2>
      )}
      {paragraph && <p className={styles.heroParagraph}>{paragraph}</p>}
      {buttonText && buttonLink && (
        <a className={styles.heroButton} href={buttonLink} target="_blank" rel="noopener noreferrer">
          {buttonText}
        </a>
      )}
      {socialLinks && socialLinks.length > 0 && (
        <ul className={styles.socialList}>
          {socialLinks.map(social => (
            <li key={social.id}>
              <a href={social.link} target="_blank" rel="noopener noreferrer" aria-label={social.name} className={styles.socialLink}>
                <i className={social.iconClass} aria-hidden="true"></i>
              </a>
            </li>
          ))}
        </ul>
      )}
    </>
  );

  // 組合右欄內容
  const imageContent = imageUrl ? (
    // 注意：這裡的 image class 來自 TwoColumnLayout.module.css，但 Hero.jsx 不直接 import 它
    // TwoColumnLayout 元件內部會處理 .image 樣式
    // 如果需要 Hero 特有的 image 樣式，可以在 Hero.module.css 定義 .heroImage 並傳遞 className
    <img src={imageUrl} alt={imageAlt} loading="lazy" />
  ) : null;

  return (
    <section className={styles.heroSection}>
      {/* Hero 背景 */}
      <div className={styles.backgroundLayer}>
        <div className={styles.bgLeft}></div>
        <div className={styles.bgRight}></div>
      </div>

      {/* 使用通用佈局元件 */}
      <TwoColumnLayout
        className={styles.heroContainerSpecifics} // 傳入 Hero 特有的容器 class (主要控制 padding)
        textSlot={textContent}
        imageSlot={imageContent}
        // 傳入 Hero 特有的 mobile 樣式 class (控制 order 等)
        textContainerClassName={styles.heroTextContainerMobile}
        imageContainerClassName={styles.heroImageContainerMobile}
      />
    </section>
  );
}

export default Hero;