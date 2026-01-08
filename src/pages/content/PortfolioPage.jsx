import { useState, useEffect } from 'react';
import { client, urlFor } from '@/sanity.client.js';
import ViewportMeta from '@components/Head/ViewportMeta';
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
    // 1. GROQ 查詢：對應你剛剛在 Vision 測試成功的結構
    // 我們同時抓取 titleChinese 並重新命名為 title，以符合前端組件習慣
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
        // 這裡的邏輯是將 Sanity 複雜的圖片物件，轉成單純的 imageUrl 字串
        const processedData = data.map(item => {
          let finalImageUrl = 'https://placehold.co/600x400/cccccc/ffffff?text=No+Image'; // 預設圖

          if (item.mainImage) {
            if (item.mainImage.isExternal && item.mainImage.externalUrl) {
              // 情況 A：如果是外部連結，直接使用
              finalImageUrl = item.mainImage.externalUrl;
            } else if (item.mainImage.image) {
              // 情況 B：如果是上傳圖片，用 urlFor 產生網址
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

            // B. 處理按鈕連結
            buttonLink: item.relatedLink, // 對應 Schema 中的 relatedLink
            buttonText: item.relatedLink ? `查看 ${item.title}` : null,
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
      <ViewportMeta/>
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