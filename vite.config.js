import { defineConfig } from 'vite';
import sitemap from 'vite-plugin-sitemap';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';
import { client } from './src/sanity.client.js';
import { navItems } from './src/data/navData';
// import { portfoliosList } from '@/data/portfolioPageData.js';

// --- Helper Function: 專門負責抓取所有動態路徑 ---
async function getDynamicPaths() {
  let paths = [];
  // --- A. 處理 Portfolio 路徑 (使用靜態檔案) ---
  // 暫時不寫，等待改用 Sanity 後再統一處理

  // --- B. 處理 Blog 路徑 (使用 Sanity 遠端) ---
  try {
    const query = `*[_type == "post"] { "slug": slug.current }`;
    const posts = await client.fetch(query);

    if (posts && posts.length > 0) {
     const blogPaths = posts.map(post => `/blog/post/${post.slug}`);
     paths = [...paths, ...blogPaths];
     console.log(`✅ Sitemap: Sanity 連線成功！已加入 ${blogPaths.length} 篇部落格文章`);
    } else {
      console.warn("⚠️ Sitemap: Sanity 連線成功，但未發現任何文章。");
    }
  } catch (error) {
    console.error("❌ Sitemap: Sanity 抓取失敗 (將略過部落格路徑)。錯誤:", error.message);
  }

  return paths;
}

// --- Vite Config ---
export default defineConfig(async () =>{
  const dynamicPaths = await getDynamicPaths();

  return {
    plugins: [
      react(),
      svgr(),
      sitemap({
        hostname: 'https://sakuyal.com',
        exclude: ['/404'],
        staticPaths: [
          '/',
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
        ],
        dynamicPaths: dynamicPaths,
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
        '@styles': path.resolve(__dirname, 'src/styles')
      }
    },
    server: { port: 5173}
  };
});
