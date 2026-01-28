import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

// --- 靜態引入 (保持首頁與版面載入速度) ---
import Layout from '@components/Layout';
import HomePage from '@pages/HomePage';

// --- 動態引入 (Lazy Loading: 點擊時才下載程式碼) --- 
// 內容頁面
const AboutPage = lazy(() => import('@pages/content/AboutPage'));
const ServicesPage = lazy(() => import('@pages/content/ServicesPage'));
const PortfolioPage = lazy(() => import('@pages/content/PortfolioPage'));
const BlogPage = lazy(() => import('@pages/content/BlogPage'));
const ContactPage = lazy(() => import('@pages/content/ContactPage'));
const PostPage = lazy(() => import('@pages/content/PostPage'));
const PortfolioPageDetailed = lazy(() => import('@pages/content/PortfolioPageDetailed'));

// 法律頁面
const PrivacyPolicyPage = lazy(() => import('@pages/legal/PrivacyPolicyPage'));
const DisclaimerPage = lazy(() => import('@pages/legal/DisclaimerPage'));
const CopyrightPage = lazy(() => import('@pages/legal/CopyrightPage'));
const RefundPolicyPage = lazy(() => import('@pages/legal/RefundPolicyPage'));

// 獨立行銷頁面
const FreeDownload = lazy(() => import('@pages/FreeDownload'));
const Upsell = lazy(() => import('@pages/Upsell'));

// 404 頁面
const NotFoundPage = lazy(() => import('@pages/NotFoundPage'));

// --- 載入中元件 (Loading UI) ---
const LoadingSpinner = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '60vh', 
    fontSize: '1.5rem',
    color: '#666'
  }}>
    <i className="fas fa-spinner fa-spin" style={{ marginRight: '10px' }}></i>
    載入中...
  </div>
);

function App() {
  return (
    // 使用 Suspense 包住 Routes，處理 lazy 元件載入時的狀態
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        {/* --- 路由群組 1: 需要共用 Header/Footer 的頁面 --- */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="contact" element={<ContactPage />} />
          
          {/* 法律條款 */}
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="disclaimer" element={<DisclaimerPage />} />
          <Route path="copyright" element={<CopyrightPage />} />
          <Route path="refund-policy" element={<RefundPolicyPage />} />
          
          {/* 動態路由 */}
          <Route path="blog/:categorySlug" element={<BlogPage />} />
          <Route path="blog/post/:postSlug" element={<PostPage />} />
          <Route path="portfolio/:portfolioSlug" element={<PortfolioPageDetailed />} />
        </Route>

        {/* --- 路由群組 2: 不需要 Header/Footer 的獨立頁面 --- */}
        <Route path="free-download" element={<FreeDownload />} />
        <Route path="upsell" element={<Upsell />} />

        {/* --- 404 頁面 --- */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;