import SEO from '@components/Head/SEO';
import styles from '@styles/PortfolioPage.module.scss';
import PageHeaderBicolorBackground from '@components/PageHeaderBicolorBackground';
import { contactTitle } from '@data/contactPageData.js';

function PortfolioPage() {
  console.log("Rendering PortfolioPage");

  return (
    <>
      <SEO title="作品集" description="這是Sakuyal 自然語言煉金術的作品集頁面。" />
      <PageHeaderBicolorBackground title={contactTitle.titleLine}/>
    </>
  );
}

export default PortfolioPage;