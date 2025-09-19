import ViewportMeta from '@components/Head/ViewportMeta';
import SEO from '@components/Head/SEO';
import PageHeaderBicolorBackground from '@components/PageHeaderBicolorBackground';
import OneColumnLayout from '@components/OneColumnLayout';
import PostsList from '@components/PostsList'; 
import { blogIntro, allPostsData } from '@data/blogData.js';
import { siteMeta } from '@data/siteMeta.js';
import styles from '@styles/BlogPage.module.scss';

function BlogPage() {
  const { title, description } = siteMeta.pages.blog;

  return (
    <>
      <ViewportMeta/>
      <SEO title={title} description={description} />
      <PageHeaderBicolorBackground title={blogIntro.title} />
      <OneColumnLayout>
        <main className={styles.blogPageContainer}>
        <PostsList posts={allPostsData} />
      </main>
      </OneColumnLayout>
    </>
  );
}

export default BlogPage;