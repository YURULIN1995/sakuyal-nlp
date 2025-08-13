import styles from '@styles/ServicesSection.module.scss';

function ServicesSection({
  leftTitle,
  leftParagraph,
  leftButtonText,
  leftButtonLink,
  imageUrl,
  imageAlt,
  rightColumnItems = []
}) {IconInfoCircle
  return (
    <section className={styles.container}>
      <div className={styles.columnsContainer}>

        {/* --- Left Column --- */}
        <div className={styles.leftColumn}>
          <div className={styles.leftColumnContent}>
            <div className={styles.titleWrapper}>
              <h2 className={styles.serviceTitle}>{leftTitle}</h2>
            </div>
            <p className={styles.serviceParagraph}>{leftParagraph}</p>
            {leftButtonText && (
              <a href={leftButtonLink} className={styles.sectionButton}>{leftButtonText}</a>
            )}
          </div>
        </div>

        {/* --- Middle Column --- */}
        <div className={styles.middleColumn}>
          <img src={imageUrl} alt={imageAlt} loading="lazy" />
        </div>

        {/* --- Right Column --- */}
        <div className={styles.rightColumn}>
          {rightColumnItems.map(item => {
            // Directly use the icon component passed from props
            const IconComponent = item.icon;
            return (
              <div key={item.id} className={styles.rightColumnItem}>
                {IconComponent && (
                  <div className={styles.iconWrap}>
                    <IconComponent />
                  </div>
                )}
                <div className={styles.textWrap}>
                  <h3 className={styles.rightColumnTitle}>{item.title}</h3>
                  <p className={styles.rightColumnParagraph}>{item.paragraph}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
