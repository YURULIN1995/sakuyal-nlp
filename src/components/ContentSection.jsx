// src/components/ContentSection/ContentSection.jsx
import styles from '@styles/ContentSection.module.css'; // 匯入自己的樣式
import TwoColumnLayout from '@components/TwoColumnLayout';

function ContentSection({
  // Data Props
  imageUrl,
  imageAlt = "Section Image",
  titleLine1,
  titleLine2,
  paragraph,
  buttonText,
  buttonLink,
  socialLinks = [],
  // Layout Configuration Props (passed down to TwoColumnLayout)
  layoutClassName = '',
  textContainerLayoutClassName = '',
  imageContainerLayoutClassName = '',
  isReversed = false
}) {

  // 組合 Text Slot 內容，使用 ContentSection 的 styles
  const textContent = (
    <>
      {(titleLine1 || titleLine2) && (
        <h2 className={styles.title}>
          {titleLine1}{titleLine1 && titleLine2 && <br />}
          {titleLine2}
        </h2>
      )}
      {paragraph && <p className={styles.paragraph}>{paragraph}</p>}
      {buttonText && buttonLink && (
        <a className={styles.button} href={buttonLink} target="_blank" rel="noopener noreferrer">
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

  const imageContent = imageUrl ? (
    <img src={imageUrl} alt={imageAlt} loading="lazy" />
  ) : null;

  return (
    <TwoColumnLayout
      className={layoutClassName}
      textSlot={textContent}
      imageSlot={imageContent}
      textContainerClassName={textContainerLayoutClassName}
      imageContainerClassName={imageContainerLayoutClassName}
      isReversed={isReversed}
    />
  );
}

export default ContentSection;