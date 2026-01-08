import styles from '@styles/PortfolioItem.module.scss';
import IconCheck from '@assets/icons/check.svg?react';

/**
 * 顯示單一作品集項目的區塊
 * @param {object} item - 來自 portfoliosList 的單一作品物件
 */
function PortfolioItem({ item }) {
  const { title, description, featuresListItem, imageUrl, imageAlt, buttonText, buttonLink } = item;

  return (
    <div className={styles.itemContainer}>
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
                <span>{feature.text}</span>
              </li>
            ))}
          </ul>
        )}

        {buttonText && buttonLink && (
          <a href={buttonLink} target="_blank" rel="noopener noreferrer" className={styles.portfolioButton}>
            {buttonText}
          </a>
        )}
      </div>
    </div>
  );
}

export default PortfolioItem;
