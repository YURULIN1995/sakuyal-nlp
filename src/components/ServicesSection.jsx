import styles from '@styles/ServicesSection.module.scss'; 

function ServicesSection({
  leftTitle,
  leftParagraph,
  leftButtonText,
  leftButtonLink,
  imageUrl,
  imageAlt = "服務圖片",
  rightColumnItems = []
}) {
  return (
    <div className={styles.container}>
      <div className={styles.columnsContainer}>
        {/* 左欄 */}
        <div className={styles.leftColumn}>
          {leftTitle && 
            <div className={styles.titleWrapper}>
              <h2 className={styles.serviceTitle}>{leftTitle}</h2>
            </div>
          }
          {leftParagraph && <p className={styles.serviceParagraph}>{leftParagraph}</p>}
          {leftButtonText && leftButtonLink && (
            <a
              href={leftButtonLink}
              className={styles.sectionButton}
              target="_blank" rel="noopener noreferrer">
              {leftButtonText}
            </a>
          )}
        </div>

        {/* 中間欄 (圖片) */}
        {imageUrl && (
          <div className={styles.middleColumn}>
            <img src={imageUrl} alt={imageAlt} loading="lazy" />
          </div>
        )}

        {/* 右欄 (多組標題+內文) */}
        {rightColumnItems.length > 0 && (
          <div className={styles.rightColumn}>
            {rightColumnItems.map(item => (
              <div key={item.id} className={styles.rightColumnItem}>
                {item.title && <h4 className={styles.rightColumnTitle}>{item.title}</h4>}
                {item.paragraph && <p className={styles.serviceParagraph}>{item.paragraph}</p>}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ServicesSection;