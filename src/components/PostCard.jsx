import styles from '@styles/PostCard.module.scss';

/**
 * PostCard 元件：用於顯示長篇內容，如客戶完整心得或文章摘要。
 * @param {string} fullText - 主要的長篇內文。
 * @param {string} authorName - 作者名稱。
 * @param {string} [subtitle] - (可選) 副標題，如作者職稱或文章日期。
 * @param {string} imageUrl - 作者頭像圖片URL。
 * @param {string} imageAlt - 圖片的替代文字。
 */
function PostCard({ fullText, authorName, subtitle, imageUrl, imageAlt }) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <img src={imageUrl} alt={imageAlt} className={styles.avatar} />
        <div className={styles.authorInfo}>
          <p className={styles.authorName}>{authorName}</p>
          {/* 只有在 subtitle 存在時才渲染，保持元件彈性 */}
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
      </div>
      <div className={styles.body}>
        {/* 主要變更：這裡現在顯示 fullText 的內容 */}
        <p>{fullText}</p>
      </div>
    </div>
  );
}

export default PostCard;