// 檔案: src/components/FeaturedPostsSection.jsx

import OneColumnLayout from '@components/OneColumnLayout.jsx';
import styles from '@styles/FeaturedPostsSection.module.scss';
import { featuredPostsData } from '@data/blogData.js';

function FeaturedPostsSection({ title = "精選文章", posts = featuredPostsData }) {
  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <section className={styles.featuredPostsWrapper}>
      <OneColumnLayout className={styles.layoutReset}>
        <div className={styles.titleWrapper}>
          <h2 className={styles.sectionTitle}>{title}</h2>
        </div>

        <div className={styles.postsGrid}>
          {posts.map(post => {
            const ButtonIcon = post.buttonIcon;
            const buttonText = post.buttonText || '閱讀更多';

            return (
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
                    {buttonText}
                    {ButtonIcon && <ButtonIcon className={styles.arrowIcon} />}
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </OneColumnLayout>
    </section>
  );
}

export default FeaturedPostsSection;