import { defineConfig } from 'vite';
import sitemap from 'vite-plugin-sitemap';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';
import { client } from './src/sanity.client.js';

// --- Helper Function: 抓取所有路徑 ---
async function getAllRoutes() {
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

  let blogRoutes = [];
  let portfolioRoutes = [];

  try {
    // 1. 抓取文章
    const postQuery = `*[_type == "post"] { "slug": slug.current }`;
    const posts = await client.fetch(postQuery);
    if (posts?.length) {
      blogRoutes = posts.map(post => `/blog/post/${post.slug}`);
      console.log(`✅ Sitemap: 已加入 ${blogRoutes.length} 篇部落格文章`);
    }

    // 2. 抓取作品集
    const portfolioItemQuery = `*[_type == "portfolioItem"] { "slug": slug.current }`;
    const items = await client.fetch(portfolioItemQuery);
    if (items?.length) {
      portfolioRoutes = items.map(item => `/portfolio/${item.slug}`);
      console.log(`✅ Sitemap: 已加入 ${portfolioRoutes.length} 筆作品集項目`);
    }

  } catch (error) {
    console.error("❌ Sitemap: 資料抓取失敗 (請檢查 Sanity 設定或環境變數)", error.message);
    // 即使失敗，也要回傳靜態頁面，避免 Build 當掉
  }

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
      // ✅ 修正：直接移除 rollupOptions 的 manualChunks
      // 讓 Vite 自動處理分割，這能解決 "Circular chunk" 錯誤
    },
    server: { port: 5173 }
  };
});