import { useState } from 'react';
import styles from '@styles/TestimonialCarousel.module.scss';

/**
 * PostCard 元件：用於顯示長篇內容，如客戶完整心得或文章摘要。
 * @param {string} fullText - 評論全文。
 * @param {string} authorName - 作者名稱。
 * @param {string} authorTitle - 作者職稱
 * @param {string} imageUrl - 作者頭像圖片URL。
 * @param {string} imageAlt - 圖片的替代文字。
 */

function TestimonialCarousel ({authorName, authorTitle, imageUrl, imageAlt, fullText }){
    return(
            <div className={styles.containerFlex}>
                <div className={styles.containerBlock}>
                    <div className={styles.comment}>
                        <p>{fullText}</p>
                    </div>

                    <div className={styles.identity}>
                        <div className={styles.avatar}><img src={imageUrl} alt={imageAlt} /></div>
                        <div className={styles.nameWrap}>
                            <div>{authorName}</div>
                            {authorTitle && <p className={styles.nameWrapSubtitle}>{authorTitle}</p>}
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default TestimonialCarousel;