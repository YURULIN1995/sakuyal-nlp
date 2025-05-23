import { Routes, Route } from 'react-router-dom';
//匯入每個頁面都需要的 Head 元件
import Layout from '@components/Layout';
import ViewportMeta from '@components/Head/ViewportMeta';
//匯入內容頁面元件
import HomePage from '@pages/HomePage';
import NotFoundPage from '@pages/NotFoundPage';
import AboutPage from '@pages/content/AboutPage';
import ServicesPage from '@pages/content/ServicesPage';
import PortfolioPage from '@pages/content/PortfolioPage';
import BlogPage from '@pages/content/BlogPage';
import ContactPage from '@pages/content/ContactPage';
//匯入法律相關頁面元件
import PrivacyPolicyPage from '@pages/legal/PrivacyPolicyPage';
import DisclaimerPage from '@pages/legal/DisclaimerPage';
import CopyrightPage from '@pages/legal/CopyrightPage';

function App() {
  return (
    <>
      <ViewportMeta />
      <Routes>
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
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;