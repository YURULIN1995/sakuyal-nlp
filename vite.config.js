import { defineConfig } from 'vite';
import sitemap from 'vite-plugin-sitemap';
import react from '@vitejs/plugin-react';
import path from 'path';
import { navItems } from './src/components/Navbar/navData'; // (為了動態路徑範例) 從你的 navData 獲取作品集 ID。注意：更佳的做法是從實際的數據源讀取，這裡先用 navData 作為範例
const portfolioItem = navItems.find(item => item.name === '作品集');
const portfolioIds = portfolioItem?.children?.map(child => child.path.split('/').pop()) || [];

export default defineConfig({
  plugins: [
    react(),
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
        '/copyright',
        '/disclaimer'
      ],
      // 根據你的 portfolioIds 產生路徑。實際應用中，portfolioIds 應該來自更可靠的數據源 (API, CMS, 本地檔案)。這一步是在 build time 執行的。
      // 如果有 blog/:slug 也可以用類似方式加入 ...blogSlugs.map(slug => `/blog/${slug}`)
      dynamicPaths: [
        ...portfolioIds.map(id => `/portfolio/${id}`),
      ],
      readable: true,
    }),

  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@data': path.resolve(__dirname, 'src/data'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@hooks': path.resolve(__dirname, 'src/hooks')
    }
  },
  server: { port: 5173 }
})
