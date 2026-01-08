import { defineConfig } from 'vite';
import sitemap from 'vite-plugin-sitemap';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';
import { client } from './src/sanity.client.js';
import { navItems } from './src/data/navData';

const portfolioItem = navItems.find(item => item.name === '作品集');
const portfolioIds = portfolioItem?.children?.map(child => child.path.split('/').pop()) || [];

export default defineConfig({
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
        '/copyright',
        '/disclaimer',
        '/refund-policy',
        '/free-download',
        '/upsell'
      ],
      dynamicPaths: [
        ...portfolioIds.map(id => `/portfolio/${id}`), 
        // ...blogSlugs.map(slug => `/blog/post/${slug}`) 尚未定義完成，需從 Sanity 抓取
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
