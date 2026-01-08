import styles from '@styles/ServiceCard.module.scss';

/**
 * 服務項目卡片元件，支援左右交錯的響應式版面
 * @param {string} title - 服務標題
 * @param {string} description - 服務描述
 * @param {string} imageUrl - 圖片URL
 * @param {string} imageAlt - 圖片替代文字
 */
function ServiceCard({ title, description, imageUrl, imageAlt}) {

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={imageUrl} alt={imageAlt} />
      </div>
      <div className={styles.textWrapper}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}

export default ServiceCard;