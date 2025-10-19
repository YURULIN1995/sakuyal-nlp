import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { client, urlFor} from '@/sanity.client.js';
import styles from '@styles/BlogPage.module.scss';
import ViewportMeta from '@components/Head/ViewportMeta';
import SEO from '@components/Head/SEO';
import PageHeaderBicolorBackground from '@components/PageHeaderBicolorBackground';
import OneColumnLayout from '@components/OneColumnLayout';
import PostsList from '@components/PostsList'; 
import { siteMeta } from '@data/siteMeta.js';

function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { categorySlug } = useParams();
  const { title: blogTitle, description } = siteMeta.pages.blog;

  useEffect(() => {
    const query = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  "title": titleChinese,
  "slug": slug.current,
  "mainImage": imageAndAlt[0].image,
  "imageAlt": imageAndAlt[0].imageAlt,
  publishedAt,
  "content": paragraph,
  "category": category[0]->categoryNameChinese,
  "categorySlug": category[0]->slug.current,
  "excerpt": array::join(string::split((pt::text(paragraph)), "")[0...50], "") + "...",
}
`;

    setIsLoading(true);
    setError(null);

    client.fetch(query)
    .then((data) => { 
      const processedData = data.map(post => ({
        ...post,
        imageUrl: post.mainImage ? urlFor(post.mainImage).width(800).url() : `https://placehold.co/400x210/cccccc/ffffff?text=No+Image`,
      }));
      setPosts(processedData);
    })
    .catch((err) => {
      console.error("Sanity fetch error:", err);
      setError("無法載入文章，請稍後再試。");
    })
    .finally(() => {
      setIsLoading(false);
    });
  }, []);

  const postsToDisplay = categorySlug
    ? posts.filter(post => post.categorySlug === categorySlug)
    : posts;

    const categoryTitle = categorySlug && postsToDisplay.length > 0
    ? `${postsToDisplay[0].category}`
    : '所有文章';

  return (
    <>
      <ViewportMeta/>
      <SEO title={categoryTitle} description={description} />
      <PageHeaderBicolorBackground title={blogTitle} />
      <OneColumnLayout className={styles.container}>
        <main>
          <h1 className={styles.title}>{categoryTitle}</h1>
          {isLoading && <p>文章載入中...</p>}
          {error && <p className={styles.error}>{error}</p>}
          {!isLoading && !error && (<PostsList posts={postsToDisplay} />)}
        </main>
      </OneColumnLayout>
    </>
  );
}

export default BlogPage;