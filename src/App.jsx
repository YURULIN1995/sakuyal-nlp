import { Routes, Route } from 'react-router-dom';
// 匯入版面元件
import Layout from '@components/Layout';

// 匯入所有頁面元件
import HomePage from '@pages/HomePage';
import NotFoundPage from '@pages/NotFoundPage';
import AboutPage from '@pages/content/AboutPage';
import ServicesPage from '@pages/content/ServicesPage';
import PortfolioPage from '@pages/content/PortfolioPage';
import BlogPage from '@pages/content/BlogPage';
import ContactPage from '@pages/content/ContactPage';
import PrivacyPolicyPage from '@pages/legal/PrivacyPolicyPage';
import DisclaimerPage from '@pages/legal/DisclaimerPage';
import CopyrightPage from '@pages/legal/CopyrightPage';
import RefundPolicyPage from '@pages/legal/RefundPolicyPage';
import FreeDownload from '@pages/FreeDownload';
import Upsell from '@pages/Upsell';
import PostPage from '@pages/content/PostPage'

function App() {
  return (
    <Routes>
        {/* --- 路由群組 1: 需要共用 Header/Footer 的頁面 --- */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="disclaimer" element={<DisclaimerPage />} />
          <Route path="copyright" element={<CopyrightPage />} />
          <Route path="refund-policy" element={<RefundPolicyPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:categorySlug" element={<BlogPage />} />
          <Route path="postpage" element={<PostPage />} />
        </Route>

        {/* --- 路由群組 2: 不需要 Header/Footer 的獨立頁面 --- */}
        <Route path="free-download" element={<FreeDownload />} />
        <Route path="upsell" element={<Upsell />} />

        {/* --- 404 頁面 --- */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
  );
}

export default App;
