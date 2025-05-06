import styles from '@styles/ServicesSection.module.css'; // 匯入自己的樣式

/**
 * Services Section 的資料結構範例 (需要更新 copyWritingData.js)
 * const servicesData = {
 * leftTitle: "...",
 * leftParagraph: "...",
 * imageUrl: "...",
 * imageAlt: "...",
 * rightColumnItems: [
 * { id: 'svc1', title: "標題一", paragraph: "內文一..." },
 * { id: 'svc2', title: "標題二", paragraph: "內文二..." },
 * { id: 'svc3', title: "標題三", paragraph: "內文三..." }
 * ]
 * };
 */

function ServicesSection({
  leftTitle,
  leftParagraph,
  imageUrl,
  imageAlt = "服務圖片",
  rightColumnItems = []
}) {
  return (
    <div className={styles.container}>
      <div className={styles.columnsContainer}>
        {/* 左欄 */}
        <div className={styles.leftColumn}>
          {leftTitle && <h2 className={styles.serviceTitle}>{leftTitle}</h2>}
          {leftParagraph && <p className={styles.serviceParagraph}>{leftParagraph}</p>}
        </div>

        {/* 中間欄 (圖片) */}
        {imageUrl && (
          <div className={styles.middleColumn}>
            <img src={imageUrl} alt={imageAlt} loading="lazy" />
          </div>
        )}

        {/* 右欄 (多組標題+內文) */}
        {rightColumnItems.length > 0 && (
          <div className={styles.rightColumn}>
            {rightColumnItems.map(item => (
              <div key={item.id} className={styles.rightColumnItem}>
                {item.title && <h3 className={styles.serviceTitle}>{item.title}</h3>} {/* 可能用 h3 或調整 title 樣式 */}
                {item.paragraph && <p className={styles.serviceParagraph}>{item.paragraph}</p>}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ServicesSection;