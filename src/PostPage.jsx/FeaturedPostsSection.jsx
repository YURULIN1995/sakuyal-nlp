import OneColumnLayout from '@/PostPage.jsx/OneColumnLayout.jsx';
import PostsList from '@/PostPage.jsx/PostsList';
import styles from '@styles/FeaturedPostsSection.module.scss';
import { featuredPostsData } from '@data/blogData.js';

function FeaturedPostsSection({ title = "精選文章" }) {
  return (
    <section className={styles.featuredPostsWrapper}>
      <OneColumnLayout className={styles.layoutReset}>
        <div className={styles.titleWrapper}>
          <h2 className={styles.sectionTitle}>{title}</h2>
        </div>
        
        <PostsList posts={featuredPostsData} />

      </OneColumnLayout>
    </section>
  );
}

export default FeaturedPostsSection;