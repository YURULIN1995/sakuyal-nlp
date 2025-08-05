import React from 'react';
// 引入我們需要的元件與樣式
import OneColumnLayout from '@components/OneColumnLayout.jsx'; 
import styles from '@styles/FeaturedPostsSection.module.scss';
// 引入文章資料
import { featuredPostsData } from '@data/blogData.js';

function FeaturedPostsSection() {
  // 檢查是否有資料，沒有就直接不渲染此區塊
  if (!featuredPostsData || featuredPostsData.length === 0) {
    return null;
  }

  return (
    <section className={styles.featuredPostsWrapper}>
      <OneColumnLayout className={styles.layoutReset}>
        <div className={styles.titleWrapper}>
          <h2 className={styles.sectionTitle}>精選文章</h2>
        </div>
        
        <div className={styles.postsGrid}>
          {/* ▼▼▼ 這是被遺失的關鍵部分：將文章資料 map 成文章卡片 ▼▼▼ */}
          {featuredPostsData.map(post => (
            <article key={post.id} className={styles.postCard}>
              {post.imageUrl && (
                <a href={post.postUrl} className={styles.postImageLink}>
                  <img
                    src={post.imageUrl}
                    alt={post.imageAlt}
                    className={styles.postImage}
                    loading="lazy"
                  />
                </a>
              )}
              <div className={styles.postContent}>
                {post.category && <p className={styles.postCategory}>{post.category}</p>}
                <h3 className={styles.postTitle}>
                  <a href={post.postUrl}>{post.title}</a>
                </h3>
                {post.excerpt && <p className={styles.postExcerpt}>{post.excerpt}</p>}
                <a href={post.postUrl} className={styles.readMoreLink}>
                  閱讀更多 &rarr;
                </a>
              </div>
            </article>
          ))}
          {/* ▲▲▲ 渲染邏輯結束 ▲▲▲ */}
        </div>
      </OneColumnLayout>
    </section>
  );
}

export default FeaturedPostsSection;