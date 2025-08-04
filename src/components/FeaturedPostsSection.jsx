import React from 'react';
import styles from '@styles/FeaturedPostsSection.module.scss';
import { featuredPostsData } from '@data/blogData.js';

function FeaturedPostsSection() {
  if (!featuredPostsData || featuredPostsData.length === 0) {
    return null;
  }

  return (
    <section className={styles.featuredPostsWrapper}>
      {/* ▼▼▼ 核心修改：為標題加上 wrapper ▼▼▼ */}
      <div className={styles.titleWrapper}>
        <h2 className={styles.sectionTitle}>精選文章</h2>
      </div>
      
      <div className={styles.postsGrid}>
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
      </div>
    </section>
  );
}

export default FeaturedPostsSection;