import { useState, useEffect } from 'react';
import { client, urlFor } from '@/sanity.client.js';
import OneColumnLayout from '@components/OneColumnLayout.jsx';
import PostsList from '@components//PostsList';
import styles from '@styles/FeaturedPostsSection.module.scss';

function FeaturedPostsSection({ title = "精選文章" }) {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const query = `*[_type == "post"] | order(publishedAt desc)[0...3] {
      _id,
      "title": titleChinese,
      "slug": slug.current,
      "mainImage": imageAndAlt[0].image,
      "imageAlt": imageAndAlt[0].imageAlt,
      "category": category[0]->categoryNameChinese,
      "categorySlug": category[0]->slug.current,
      "excerpt": array::join(string::split((pt::text(paragraph)), "")[0...50], "") + "...",
      publishedAt
    }`;

    setIsLoading(true);
    client.fetch(query)
      .then((data) => {
        const processedData = data.map(post => ({
          ...post,
          imageUrl: post.mainImage ? urlFor(post.mainImage).width(800).url() : `https://placehold.co/400x210/cccccc/ffffff?text=No+Image`,
        }));
        setPosts(processedData);
      })
      .catch((err) => {
        console.error("Failed to fetch featured posts:", err);
        setError("無法載入精選文章，請稍後再試。");
      })
      .finally(() => {
        setIsLoading(false);
      });

  }, []);

  const renderContent = () => {
    if (isLoading) {
      return <p>載入中...</p>;
    }

    if (error) {
      // 顯示您截圖中的錯誤訊息
      return <p>無法載入精選文章，請稍後再試。</p>;
    }

    if (posts.length === 0) {
      return <p>目前沒有文章。</p>;
    }

    // 3. 【關鍵修正】補上 return，將處理好的 posts 傳給 PostsList 元件
    return <PostsList posts={posts} />;
  }

  return (
    <section className={styles.featuredPostsWrapper}>
      <OneColumnLayout className={styles.layoutReset}>
        <div className={styles.titleWrapper}>
          <h2 className={styles.sectionTitle}>{title}</h2>
        </div>
        
        {renderContent()}

      </OneColumnLayout>
    </section>
  );
}

export default FeaturedPostsSection;

