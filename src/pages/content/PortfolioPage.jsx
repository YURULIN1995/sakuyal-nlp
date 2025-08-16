import SEO from '@components/Head/SEO';
import styles from '@styles/PortfolioPage.module.scss';
import PageHeaderBicolorBackground from '@components/PageHeaderBicolorBackground';
import BackgroundColor from '@components/BackgroundColor';
import OneColumnLayout from '@components/OneColumnLayout';
import PortfolioItem from '@components/PortfolioItem'; // 匯入 PortfolioItem 元件
import { portfolioTitle, portfoliosList } from '@data/portfolioPageData.js';

function PortfolioPage() {
  return (
    <>
      <SEO title="作品集" description="這是Sakuyal 自然語言煉金術的作品集頁面。" />
      <PageHeaderBicolorBackground title={portfolioTitle.titleLine}/>
      
      <BackgroundColor color="lightGreen">
        <OneColumnLayout>
          <div className={styles.portfolioListContainer}>
            {portfoliosList.map(item => (
              <PortfolioItem key={item.id} item={item} />
            ))}
          </div>
        </OneColumnLayout>
      </BackgroundColor>
    </>
  );
}

export default PortfolioPage;
