import { defineConfig } from 'vite';
import sitemap from 'vite-plugin-sitemap';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';
import { client } from './src/sanity.client.js';

// --- 修正後的 Helper Function: 抓取所有路徑 (包含靜態與動態) ---
// --- 修正後的 Helper Function ---
async function getAllRoutes() {
  // 1. 定義靜態頁面
  const staticRoutes = [
    '/about',
    '/services',
    '/portfolio',
    '/blog',
    '/contact',
    '/privacy-policy',
    '/disclaimer',
    '/refund-policy',
    '/free-download',
    '/upsell'
  ];

  // 準備兩個空陣列來接資料 (要在 try 外面宣告，下面才讀得到！)
  let blogRoutes = [];
  let portfolioRoutes = []; // 👈 修正 1: 改名並移到外面

  // 2. 抓取 Sanity 文章
  try {
    const postQuery = `*[_type == "post"] { "slug": slug.current }`;
    const posts = await client.fetch(postQuery);

    if (posts && posts.length > 0) {
      blogRoutes = posts.map(post => `/blog/post/${post.slug}`);
      console.log(`✅ Sitemap: Sanity 連線成功！已加入 ${blogRoutes.length} 篇部落格文章`);
    } else {
      console.warn("⚠️ Sitemap: Sanity 連線成功，但未發現任何文章。");
    }
  } catch (error) {
    console.error("❌ Sitemap: Sanity 文章抓取失敗:", error.message);
  }

  // 3. 抓取 Sanity 作品集
  try {
    // 您的 App.jsx 路由是: path="portfolio/:portfolioSlug"
    // 所以這裡抓資料要對應這個結構
    const portfolioItemQuery = `*[_type == "portfolioItem"] { "slug": slug.current }`;
    const items = await client.fetch(portfolioItemQuery); // 這裡先用暫存變數接原始資料

    if (items && items.length > 0) {
      // 👈 修正 2: 進行 .map() 轉換，把物件變網址字串
      portfolioRoutes = items.map(item => `/portfolio/${item.slug}`);
      
      console.log(`✅ Sitemap: Sanity 連線成功！已加入 ${portfolioRoutes.length} 筆作品集項目`);
    } else {
      console.warn("⚠️ Sitemap: Sanity 連線成功，但未發現任何作品集項目。");
    }

  } catch (error) {
    console.error("❌ Sitemap: Sanity 作品集抓取失敗:", error.message);
  }
   
  // 4. 合併成一個大陣列回傳
  // 👈 修正 3: 使用正確的變數名稱 (portfolioRoutes)
  return [...staticRoutes, ...blogRoutes, ...portfolioRoutes];
}

// --- Vite Config ---
export default defineConfig(async () => {
  // 等待資料抓取完成
  const allRoutes = await getAllRoutes();

  return {
    plugins: [
      react(),
      svgr(),
      sitemap({
        hostname: 'https://sakuyal.com',
        exclude: ['/404'],
        // 🚨 修正重點：參數名稱必須是 dynamicRoutes
        // 且這裡放入「所有」您希望出現在 Sitemap 的路徑
        dynamicRoutes: allRoutes, 
        readable: true,
      })
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@data': path.resolve(__dirname, 'src/data'),
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@styles': path.resolve(__dirname, 'src/styles'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
      }
    },
    build: {
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
                return 'react-vendor';
              }
            }
            return 'vendor';
          }
        }
      }
    },
    server: { port: 5173 }
  };
});