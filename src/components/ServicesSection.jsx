// src/components/ServicesSection.jsx

import styles from '@styles/ServicesSection.module.scss';

// 從你自己的 assets/icons 資料夾中，將 SVG 當作 React 元件引入
import IconCakeRoll from '@assets/icons/cake-roll.svg?react';
import IconTeapot from '@assets/icons/teapot.svg?react';
import IconShoppingCart from '@assets/icons/shopping-cart.svg?react';

// iconMap 現在對應到的是我們自己引入的 SVG 元件
const iconMap = {
  teapot: IconTeapot,
  wagashi: IconCakeRoll,
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

        {/* --- Left Column --- */}
        <div className={styles.leftColumn}>
          <div className={styles.titleWrapper}>
            <h2 className={styles.serviceTitle}>{leftTitle}</h2>
          </div>
          <p className={styles.serviceParagraph}>{leftParagraph}</p>
          {leftButtonText && (
            <a href={leftButtonLink} className={styles.sectionButton}>{leftButtonText}</a>
          )}
        </div>

        {/* --- Middle Column --- */}
        <div className={styles.middleColumn}>
          <img src={imageUrl} alt={imageAlt} loading="lazy" />
        </div>

        {/* --- Right Column --- */}
        <div className={styles.rightColumn}>
          {rightColumnItems.map(item => {
            const IconComponent = iconMap[item.iconId];
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