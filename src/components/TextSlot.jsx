import styles from '@styles/TextSlot.module.scss';
import OneColumnLayout from '@components/OneColumnLayout.jsx';

function TextSlot({
  // Data Props
  titleLine1,
  titleLine2,
  paragraph,
  buttonText,
  buttonLink,
  // Layout Prop
  layoutClassName = '',
}) {
  return (
    <OneColumnLayout className={layoutClassName}>
      {(titleLine1 || titleLine2) && (
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>
            {titleLine1}{titleLine1 && titleLine2 && <br />}
            {titleLine2}
          </h2>
        </div>
      )}
      {paragraph && <p className={styles.paragraph}>{paragraph}</p>}
      {buttonText && buttonLink && (
        <a className={styles.button} href={buttonLink} target="_blank" rel="noopener noreferrer">
          {buttonText}
        </a>
      )}
    </OneColumnLayout>
  );
}

export default TextSlot;