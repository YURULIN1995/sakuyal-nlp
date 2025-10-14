import { useParams, Link } from 'react-router-dom';
import styles from '@styles/BlogPage.module.scss';
import ViewportMeta from '@components/Head/ViewportMeta';
import SEO from '@components/Head/SEO';
import PageHeaderBicolorBackground from '@components/PageHeaderBicolorBackground';
import OneColumnLayout from '@components/OneColumnLayout';
import PostsList from '@components/PostsList'; 
import { displayPostsData } from '@data/blogData.js';
import { siteMeta } from '@data/siteMeta.js';

function BlogPage() {
  const { categorySlug } = useParams();
  const postsToDisplay = categorySlug
    ? displayPostsData.filter(post => post.categorySlug === categorySlug)
    : displayPostsData;

  const { title, description } = siteMeta.pages.blog;
  const categoryTitle = categorySlug && postsToDisplay.length > 0
    ? `${postsToDisplay[0].category}`
    : null;

  return (
    <>
      <ViewportMeta/>
      <SEO title={title} description={description} />
      <PageHeaderBicolorBackground title={title} />
      <OneColumnLayout>
        <main>
          <p>{categoryTitle}</p>
          <PostsList posts={postsToDisplay} />
        </main>
      </OneColumnLayout>
    </>
  );
}

export default BlogPage;