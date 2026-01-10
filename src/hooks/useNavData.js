import { useState, useEffect } from 'react';
import { client } from '@/sanity.client'; 
import { navItems as staticNavItems } from '@data/navData';

export function useNavData() {
  const [navData, setNavData] = useState(staticNavItems);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `{
          "categories": *[_type == "category"] | order(categoryNameEnglish asc) {
            "title": categoryNameChinese, 
            "slug": slug.current
          },
          "portfolioItems": *[_type == "portfolioItem"] | order(_createdAt asc) {
            "title": titleChinese,
            "slug": slug.current
          }
        }`;

        const data = await client.fetch(query);
        const { categories, portfolioItems } = data;
        const newNavItems = structuredClone(staticNavItems);
        const portfolioNav = newNavItems.find(item => item.path === '/portfolio');

        if (portfolioNav && portfolioItems.length > 0) {
          portfolioNav.children = portfolioItems.map(item => ({
            name: item.title,
            path: `/portfolio/${item.slug}`
          }));
        }

        const blogNav = newNavItems.find(item => item.path === '/blog');
        if (blogNav && categories.length > 0) {
          blogNav.children = categories.map(cat => ({
            name: cat.title,
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