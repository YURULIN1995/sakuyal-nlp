import styles from '@styles/PortfolioItem.module.scss';
import IconCheck from '@assets/icons/check.svg?react';

/**
 * 顯示單一作品集項目的區塊
 * @param {object} item - 來自 portfoliosList 的單一作品物件
 */
function PortfolioItem({ item }) {
  // 從 item 物件中解構出需要的資料
  const { title, description, featuresListItem, imageUrl, imageAlt, isReversed, buttonText, buttonLink } = item;

  const itemClasses = `${styles.itemContainer} ${isReversed ? styles.reversed : ''}`;

  return (
    <div className={itemClasses}>
      <div className={styles.imageWrapper}>
        <img src={imageUrl} alt={imageAlt} loading="lazy" />
      </div>
      <div className={styles.textWrapper}>
        <div className={styles.titleWrapper}>
          <h3 className={styles.title}>{title}</h3>
        </div>
        <p className={styles.description}>{description}</p>
        
        {featuresListItem && featuresListItem.length > 0 && (
          <ul className={styles.featuresList}>
            {featuresListItem.map(feature => (
              <li key={feature.id}>
                <IconCheck className={styles.featureIcon} />
                <span>{feature.itemDescription}</span>
              </li>
            ))}
          </ul>
        )}

        {/* 【新增】如果資料中有按鈕文字和連結，就渲染按鈕 */}
        {buttonText && buttonLink && (
          <a href={buttonLink} className={styles.portfolioButton}>
            {buttonText}
          </a>
        )}
      </div>
    </div>
  );
}

export default PortfolioItem;
