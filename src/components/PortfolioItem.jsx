import { Link } from 'react-router-dom'; // 1. 引入 Link 元件
import styles from '@styles/PortfolioItem.module.scss';
import IconCheck from '@assets/icons/check.svg?react';

/**
 * 顯示單一作品集項目的區塊
 * @param {object} item - 來自 portfoliosList 的單一作品物件
 */
function PortfolioItem({ item }) {
  const { title, description, featuresListItem, imageUrl, imageAlt, buttonText, buttonLink } = item;

  // 2. 判斷是否為內部連結 (檢查是否以 / 開頭)
  const isInternalLink = buttonLink?.startsWith('/');

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

        {/* 3. 按鈕邏輯：根據連結類型選擇使用 <Link> 或 <a> */}
        {buttonText && buttonLink && (
          isInternalLink ? (
            // 情況 A：內部連結 (使用 Link 元件，不換頁、不開新視窗)
            <Link to={buttonLink} className={styles.portfolioButton}>
              {buttonText}
            </Link>
          ) : (
            // 情況 B：外部連結 (維持原本的 a 標籤，開新視窗)
            <a 
              href={buttonLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.portfolioButton}
            >
              {buttonText}
            </a>
          )
        )}
      </div>
    </div>
  );
}

export default PortfolioItem;