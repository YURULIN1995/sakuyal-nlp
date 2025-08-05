import styles from '@styles/TextImageSlot.module.scss';
import TwoColumnLayout from '@components/TwoColumnLayout.jsx';
import SocialLinks from '@components/SocialLinks.jsx';

function TextImageSlot({
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
        <SocialLinks links={socialLinks} />
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

export default TextImageSlot;