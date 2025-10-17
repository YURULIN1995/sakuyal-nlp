import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { client, urlFor } from '@/sanity.client.js';
import styles from '@styles/PostPage.module.scss';
import ViewportMeta from '@components/Head/ViewportMeta';
import SEO from '@components/Head/SEO';
import OneColumnLayout from '@components/OneColumnLayout';
import Post from '@components/Post';

function PostPage(props) {
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { postSlug } = useParams();

  useEffect(() => {
    if (!postSlug) return;

    const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    "title": titleChinese,
    "slug":  slug.current,
    "mainImage": imageAndAlt[0].image,
    "imageAlt": imageAndAlt[0].imageAlt,
    "category": category[0]->categoryNameChinese,
    "categorySlug": category[0]->slug.current,
    "content": paragraph,
    }`;

    const params = { slug: postSlug };

    setIsLoading(true);
    setError(null);

    client.fetch(query, params)
    .then((data) => {setPost(data)})
    .catch((err) => {
      console.error("Sanity fetch error:", err);
      setError("無法載入文章，請稍後再試。");
    })
    .finally(() => {
      setIsLoading(false);
    });

  }, [postSlug]);

  return (
    <>
      <ViewportMeta/>
      <SEO 
      title={post ? post.title : '文章載入中...'} 
      description={post ? post.excerpt || '文章內容' : ''} 
      />
      <div className={styles.transparentTop}></div>
      <div className={styles.container}>
        <OneColumnLayout className={styles.content}>
          { isLoading ? (<p className={styles.isLoading}>文章載入中...請稍候</p>) : error ? (<p className={styles.error}>{error}</p>) : !post? (<p className={styles.noPost}>文章不存在</p>) : (<Post post={post} />) }
        </OneColumnLayout>
        
        <div className={styles.widget}>
          <p>Widget</p>
        </div>
      </div>
    </>
  );
}

export default PostPage;