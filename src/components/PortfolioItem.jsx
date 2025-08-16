import styles from '@styles/PortfolioItem.module.scss';
import IconCheck from '@assets/icons/check.svg?react'; // 引入一個打勾圖示

/**
 * 顯示單一作品集項目的區塊
 * @param {object} item - 來自 portfoliosList 的單一作品物件
 */
function PortfolioItem({ item }) {
  const { title, description, featuresListItem, imageUrl, imageAlt, isReversed } = item;

  // 根據 isReversed prop 動態添加 class
  const itemClasses = `${styles.itemContainer} ${isReversed ? styles.reversed : ''}`;

  return (
    <div className={itemClasses}>
      <div className={styles.imageWrapper}>
        <img src={imageUrl} alt={imageAlt} loading="lazy" />
      </div>
      <div className={styles.textWrapper}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.featuresList}>
          {featuresListItem.map(feature => (
            <li key={feature.id}>
              <IconCheck className={styles.featureIcon} />
              <span>{feature.itemDescription}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PortfolioItem;
