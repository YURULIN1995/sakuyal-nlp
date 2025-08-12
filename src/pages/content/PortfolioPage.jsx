import SEO from '@components/Head/SEO';
import styles from '@styles/PortfolioPage.module.scss';
import BicolorBackground from '@components/BicolorBackground';
import PageTitle from '@components/PageTitle';
import { portfolioTitle } from '@data/portfolioPageData.js';

function PortfolioPage() {
  console.log("Rendering PortfolioPage");

  return (
    <>
      <SEO title="作品集" description="這是Sakuyal 自然語言煉金術的作品集頁面。" />

      <BicolorBackground>
        <div className={styles.titleContainer}>
          <PageTitle title={portfolioTitle.titleLine} />
        </div>
      </BicolorBackground>
    </>
  );
}

export default PortfolioPage;