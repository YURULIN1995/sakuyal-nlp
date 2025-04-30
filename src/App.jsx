import { Routes, Route } from 'react-router-dom';
import Layout from '@components/Layout';
import ViewportMeta from '@components/Head/ViewportMeta';
//匯入所有需要的頁面元件
import HomePage from '@/pages/HomePage';
import NotFoundPage from '@/pages/NotFoundPage';
import AboutPage from '@/pages/content/AboutPage';
import ServicesPage from '@/pages/content/ServicesPage';
import PortfolioPage from '@/pages/content/PortfolioPage';
import BlogPage from '@/pages/content/BlogPage';
import ContactPage from '@/pages/content/ContactPage';


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
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;