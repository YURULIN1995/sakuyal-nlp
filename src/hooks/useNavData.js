import { useState, useEffect } from 'react';
// 記得確認這個 alias 是否正確，如果不行的話改回相對路徑 '../sanity.client'
import { client } from '@/sanity.client'; 
import { navItems as staticNavItems } from '@data/navData';

export function useNavData() {
  const [navData, setNavData] = useState(staticNavItems);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 🚨 這裡進行了關鍵修正 🚨
        const query = `{
          "categories": *[_type == "category"] | order(categoryNameEnglish asc) {
            // 修正 1: 對應 categoryType.js 的欄位
            "title": categoryNameChinese, 
            "slug": slug.current
          },
          "portfolioItems": *[_type == "portfolioItem"] | order(_createdAt desc) {
             // 修正 2: 對應 commonFields.js 的欄位
            "title": titleChinese,
            "slug": slug.current
          }
        }`;

        const data = await client.fetch(query);
        // console.log("🔍 Debug Sanity 資料:", data); // 如果出來了就可以註解掉這行

        const { categories, portfolioItems } = data;
        
        // --- 以下邏輯保持不變 ---
        const newNavItems = structuredClone(staticNavItems);
        
        // 1. 處理作品集
        const portfolioNav = newNavItems.find(item => item.path === '/portfolio');
        if (portfolioNav && portfolioItems.length > 0) {
          portfolioNav.children = portfolioItems.map(item => ({
            name: item.title, // 因為上面已經改名成 title 了，這裡直接用
            path: `/portfolio/${item.slug}`
          }));
        }

        // 2. 處理文章分類
        const blogNav = newNavItems.find(item => item.path === '/blog');
        if (blogNav && categories.length > 0) {
          blogNav.children = categories.map(cat => ({
            name: cat.title, // 同樣直接用 title
            path: `/blog/${cat.slug}` 
          }));
        }

        setNavData(newNavItems);

      } catch (error) {
        console.error("導覽列資料載入失敗:", error);
      }
    };

    fetchData();
  }, []);

  return navData;
}