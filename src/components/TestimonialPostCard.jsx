import styles from '@styles/TestimonialPostCard.module.scss';

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
      {/* 1. 左側容器：包裹作者身份相關資訊 */}
      <div className={styles.leftWrap}>
        <img src={imageUrl} alt={imageAlt} className={styles.avatar} />
          <p className={styles.authorName}>{authorName}</p>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
      
      {/* 2. 右側容器：包裹心得全文 */}
      <div className={styles.rightWrap}>
        <div className={styles.body}>
          <p>{fullText}</p>
        </div>
      </div>
    </div>
  );
}

export default PostCard;