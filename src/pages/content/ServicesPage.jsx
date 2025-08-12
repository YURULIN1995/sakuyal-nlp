import SEO from '@components/Head/SEO';
import styles from '@styles/ServicesPage.module.scss';
import PageHeaderBicolorBackground from '@components/PageHeaderBicolorBackground';
import { servicesTitle } from '@data/servicesPageData.js';

function ServicesPage() {
  console.log("Rendering ServicesPage");

  return (
    <>
      <SEO title="服務項目" description="這是Sakuyal 自然語言煉金術的服務項目頁面。" />
      <PageHeaderBicolorBackground title={servicesTitle.titleLine}/>
    </>
  );
}

export default ServicesPage;