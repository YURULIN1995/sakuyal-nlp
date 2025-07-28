import styles from '@styles/ServicesSection.module.scss';

// 使用 Vite + SVGR 的推薦語法：在路徑結尾加上 "?react"
import IconPlant from '@assets/icons/plant.svg?react';
import IconLeaf from '@assets/icons/leaf.svg?react';
import IconShoppingCart from '@assets/icons/shopping-cart.svg?react';

const iconMap = {
  seedling: IconPlant,
  leaf: IconLeaf,
  shoppingCart: IconShoppingCart
};

function ServicesSection({
  leftTitle,
  leftParagraph,
  leftButtonText,
  leftButtonLink,
  imageUrl,
  imageAlt,
  rightColumnItems = []
}) {
  return (
    <section className={styles.container}>
      <div className={styles.columnsContainer}>

        {/* Left Column */}
        <div className={styles.leftColumn}>
          <div className={styles.titleWrapper}>
            <h2 className={styles.serviceTitle}>{leftTitle}</h2>
          </div>
          <p className={styles.serviceParagraph}>{leftParagraph}</p>
          {leftButtonText && (
            <a href={leftButtonLink} className={styles.sectionButton}>{leftButtonText}</a>
          )}
        </div>

        {/* Middle Column */}
        <div className={styles.middleColumn}>
          <img src={imageUrl} alt={imageAlt} loading="lazy" />
        </div>

        {/* Right Column */}
        <div className={styles.rightColumn}>
          {rightColumnItems.map(item => {
            const IconComponent = iconMap[item.iconId];
            return (
              <div key={item.id} className={styles.rightColumnItem}>
                {IconComponent && (
                  <div className={styles.iconCircle}>
                    <IconComponent />
                  </div>
                )}
                <h3 className={styles.rightColumnTitle}>{item.title}</h3>
                <p className={styles.rightColumnParagraph}>{item.paragraph}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;