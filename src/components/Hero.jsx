import styles from '@styles/Hero.module.scss';
import TwoColumnLayout from '@components/TwoColumnLayout.jsx';
import BicolorBackground from '@components/BicolorBackground.jsx';
import SocialLinks from '@components/SocialLinks.jsx';

function Hero(props) {
  const { 
    titleLine1, 
    titleLine2, 
    paragraph, 
    buttonText, 
    buttonLink, 
    imageUrl, 
    imageAlt, 
    socialLinks 
  } = props;

  // 1. 左側內容
  const leftSlot = (
    <div className={styles.textContent}>
      {(titleLine1 || titleLine2) && (
        <h1 className={styles.title}>
          {titleLine1}{titleLine1 && titleLine2 && <br />}
          {titleLine2}
        </h1>
      )}
      
      {paragraph && <p className={styles.paragraph}>{paragraph}</p>}
      
      {buttonText && buttonLink && (
        <a 
          className={styles.button} 
          href={buttonLink} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          {buttonText}
        </a>
      )}
      
      {socialLinks && (
        <div className={styles.socialLinks}>
          <SocialLinks links={socialLinks} />
        </div>
      )}
    </div>
  );

  // 2. 右側圖片
  const rightSlot = imageUrl ? (
    <img 
      src={imageUrl} 
      alt={imageAlt || "Hero Image"} 
      className={styles.heroImage} 
      // Hero 圖片是視窗第一眼看到的，建議使用 eager loading 提升 LCP 分數
      loading="eager" 
    />
  ) : null;

  return (
    <BicolorBackground className={styles.heroSection}>
      {/* 加上 Container 限制寬度與 Padding */}
      <div className={styles.container}>
        <TwoColumnLayout
          left={leftSlot}
          right={rightSlot}
        />
      </div>
    </BicolorBackground>
  );
}

export default Hero;