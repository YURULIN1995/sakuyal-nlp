import { defineConfig } from 'vite';
import sitemap from 'vite-plugin-sitemap';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr'; // 1. 在這裡引入 svgr
import path from 'path';
import { navItems } from './src/components/Navbar/navData';

// (為了動態路徑範例) 從你的 navData 獲取作品集 ID。
const portfolioItem = navItems.find(item => item.name === '作品集');
const portfolioIds = portfolioItem?.children?.map(child => child.path.split('/').pop()) || [];

export default defineConfig({
  plugins: [
    react(),
    svgr(), // 2. 在這裡把 svgr() 加入到 plugins 陣列中
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
      // 根據你的 portfolioIds 產生路徑
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
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@assets': path.resolve(__dirname, 'src/assets')
    }
  },
  server: { port: 5173 }
})
