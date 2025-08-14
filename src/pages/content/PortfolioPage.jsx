import SEO from '@components/Head/SEO';
import styles from '@styles/PortfolioPage.module.scss';
import PageHeaderBicolorBackground from '@components/PageHeaderBicolorBackground';
import BackgroundColor from '@components/BackgroundColor';
import OneColumnLayout from '@components/OneColumnLayout'; // 【新增】匯入版面元件
import { portfolioTitle } from '@data/portfolioPageData.js';

function PortfolioPage() {
  console.log("Rendering PortfolioPage");

  return (
    <>
      <SEO title="作品集" description="這是Sakuyal 自然語言煉金術的作品集頁面。" />
      <PageHeaderBicolorBackground title={portfolioTitle.titleLine}/>
      <BackgroundColor color="lightGreen">
        {/* 【修改】使用 OneColumnLayout 來包裹內容 */}
        <OneColumnLayout>
          <p style={{textAlign: 'center'}}>lightGreeeeeeeeeeeeeeeeeeeeeeeeeeeeen</p>
        </OneColumnLayout>
      </BackgroundColor>
    </>
  );
}

export default PortfolioPage;
