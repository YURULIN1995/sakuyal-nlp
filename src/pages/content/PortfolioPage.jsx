import { useState, useEffect } from 'react';
import { client, urlFor } from '@/sanity.client.js';
import SEO from '@components/Head/SEO';
import styles from '@styles/PortfolioPage.module.scss';
import PageHeaderBicolorBackground from '@components/PageHeaderBicolorBackground';
import BackgroundColor from '@components/BackgroundColor';
import OneColumnLayout from '@components/OneColumnLayout';
import PortfolioItem from '@components/PortfolioItem'; 
import { siteMeta } from '@data/siteMeta.js';

function PortfolioPage() {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { title, description } = siteMeta.pages.portfolio;

  // 頁面標題
  const pageHeaderTitle = "作品集"; 

  useEffect(() => {
    // 1. GROQ 查詢
    const query = `*[_type == "portfolioItem"] | order(projectDate asc, _createdAt asc) {
      _id,
      "title": titleChinese,
      "titleEnglish": titleEnglish,
      "slug": slug.current,
      "description": description,
      mainImage {
        isExternal,
        externalUrl,
        image,
        imageAlt
      },
      featureDescription, 
      relatedLink 
    }`;

    setIsLoading(true);
    
    client.fetch(query)
      .then((data) => {
        // 2. 資料清洗 (Data Transformation)
        const processedData = data.map(item => {
          let finalImageUrl = 'https://placehold.co/600x400/cccccc/ffffff?text=No+Image'; // 預設圖

          if (item.mainImage) {
            if (item.mainImage.isExternal && item.mainImage.externalUrl) {
              finalImageUrl = item.mainImage.externalUrl;
            } else if (item.mainImage.image) {
              finalImageUrl = urlFor(item.mainImage.image).width(800).url();
            }
          }

          return {
            ...item,
            imageUrl: finalImageUrl,
            imageAlt: item.mainImage?.imageAlt || item.title,
            featuresListItem: item.featureDescription 
              ? item.featureDescription.map(f => ({
                  id: f._key,
                  text: f.featureText
                }))
              : [],

            // --- 🟢 關鍵修改：將連結指向內部動態路由 ---
            // 只要有 slug，就產生內部連結 `/portfolio/xxx`
            // 這樣配合 PortfolioItem 使用 <Link> 時，就能在同分頁跳轉
            buttonLink: item.slug ? `/portfolio/${item.slug}` : null,

            // 按鈕文字
            buttonText: item.slug ? `查看 ${item.title}` : null,
          };
        });

        setPortfolioItems(processedData);
      })
      .catch((err) => {
        console.error("Sanity fetch error:", err);
        setError("無法載入作品集，請稍後再試。");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <SEO title={title} description={description} />
      <PageHeaderBicolorBackground title={pageHeaderTitle}/>
      
      <BackgroundColor color="lightGreen">
        <OneColumnLayout>
          <div className={styles.portfolioListContainer}>
            
            {/* 載入中... */}
            {isLoading && <p style={{textAlign: 'center', padding: '4rem'}}>載入中...</p>}
            
            {/* 錯誤訊息 */}
            {error && <p style={{textAlign: 'center', color: 'red', padding: '4rem'}}>{error}</p>}

            {/* 成功顯示列表 */}
            {!isLoading && !error && portfolioItems.map(item => (
              <PortfolioItem 
                key={item._id} 
                item={item} 
              />
            ))}

            {/* 如果沒有資料 */}
            {!isLoading && !error && portfolioItems.length === 0 && (
               <p style={{textAlign: 'center', padding: '4rem'}}>目前後台尚未新增任何作品。</p>
            )}
          </div>
        </OneColumnLayout>
      </BackgroundColor>
    </>
  );
}

export default PortfolioPage;