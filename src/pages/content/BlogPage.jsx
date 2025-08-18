import SEO from '@components/Head/SEO';
import PageHeaderBicolorBackground from '@components/PageHeaderBicolorBackground';
import OneColumnLayout from '@components/OneColumnLayout';
import PostsList from '@components/PostsList'; 
import { blogIntro, allPostsData } from '@data/blogData.js';
import styles from '@styles/BlogPage.module.scss';

function BlogPage() {
  return (
    <>
      <SEO title="文章" description="探索關於茶道美學、實用教學與器物鑑賞的深度文章。" />
      <PageHeaderBicolorBackground title={blogIntro.title} />
      <OneColumnLayout>
        <main className={styles.blogPageContainer}>
        <PostsList posts={allPostsData} />
      </main>
      </OneColumnLayout>
    </>
  );
}1400

export default BlogPage;