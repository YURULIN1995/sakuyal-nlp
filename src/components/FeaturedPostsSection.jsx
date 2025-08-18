import OneColumnLayout from '@components/OneColumnLayout.jsx';
import PostsList from '@components/PostsList'; // 導入 PostsList
import styles from '@styles/FeaturedPostsSection.module.scss';
import { featuredPostsData } from '@data/blogData.js'; // 這裡仍然只導入精選文章

function FeaturedPostsSection({ title = "精選文章" }) {
  return (
    <section className={styles.featuredPostsWrapper}>
      <OneColumnLayout className={styles.layoutReset}>
        <div className={styles.titleWrapper}>
          <h2 className={styles.sectionTitle}>{title}</h2>
        </div>
        
        {/* 直接使用 PostsList 元件，並傳入精選文章資料 */}
        <PostsList posts={featuredPostsData} />

      </OneColumnLayout>
    </section>
  );
}

export default FeaturedPostsSection;