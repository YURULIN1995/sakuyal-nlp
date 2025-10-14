import { useParams, Link } from 'react-router-dom';
import ViewportMeta from '@components/Head/ViewportMeta';
import SEO from '@components/Head/SEO';
import PageHeaderBicolorBackground from '@components/PageHeaderBicolorBackground';
import OneColumnLayout from '@components/OneColumnLayout';
import PostsList from '@components/PostsList'; 
import { displayPostsData } from '@data/blogData.js';
import { siteMeta } from '@data/siteMeta.js';
import styles from '@styles/BlogPage.module.scss';

function BlogPage() {
   const { categorySlug } = useParams();

  // 根據網址中的 categorySlug 篩選文章
  // 如果沒有 slug，就顯示所有文章
  const postsToDisplay = categorySlug
    ? displayPostsData.filter(post => post.categorySlug === categorySlug)
    : displayPostsData;

  // 從 siteMeta 取得預設的頁面描述
  const { description } = siteMeta.pages.blog;

  // 動態決定頁面標題
  // 1. 檢查是否有 categorySlug 且篩選後有文章
  // 2. 如果是，從第一篇文章取得分類名稱並設為標題
  // 3. 否則，使用 siteMeta 中的預設標題
  const pageTitle = categorySlug && postsToDisplay.length > 0
    ? `${postsToDisplay[0].category}` // 例如：人性化AI"
    : siteMeta.pages.blog.title;           // 例如："所有文章"

  return (
    <>
      <ViewportMeta/>
      <SEO title={pageTitle} description={description} />
      <PageHeaderBicolorBackground title={pageTitle} />
      <OneColumnLayout>
        <main>
          <PostsList posts={postsToDisplay} />
        </main>
      </OneColumnLayout>
    </>
  );
}

export default BlogPage;