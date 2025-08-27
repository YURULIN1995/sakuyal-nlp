import SEO from '@components/Head/SEO';
import styles from '@styles/PortfolioPage.module.scss';
import PageHeaderBicolorBackground from '@components/PageHeaderBicolorBackground';
import BackgroundColor from '@components/BackgroundColor';
import OneColumnLayout from '@components/OneColumnLayout';
import PortfolioItem from '@components/PortfolioItem'; 
import { portfolioTitle, portfoliosList } from '@data/portfolioPageData.js';
import { siteMeta } from '@data/siteMeta.js';

function PortfolioPage() {
  const { title, description } = siteMeta.pages.portfolio;

  return (
    <>
      <SEO title={title} description={description} />
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