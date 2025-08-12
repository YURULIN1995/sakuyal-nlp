import SEO from '@components/Head/SEO';
import styles from '@styles/ServicesPage.module.scss';
import BicolorBackground from '@components/BicolorBackground';
import PageTitle from '@components/PageTitle';
import { servicesIntroData } from '@data/servicesPageData.js';

function ServicesPage() {
  console.log("Rendering ServicesPage");

  return (
    <>
      <SEO title="服務項目" description="這是Sakuyal 自然語言煉金術的服務項目頁面。" />
      <BicolorBackground>
        <div className={styles.titleContainer}>
          <PageTitle title={servicesIntroData.titleLine1} />
        </div>
      </BicolorBackground>
    </>
  );
}

export default ServicesPage;