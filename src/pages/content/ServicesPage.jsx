import SEO from '@components/Head/SEO';
import styles from '@styles/ServicesPage.module.scss';
import BackgroundColor from '@components/BackgroundColor';
import PageHeaderBicolorBackground from '@components/PageHeaderBicolorBackground';
import OneColumnLayout from '@components/OneColumnLayout';
import ServiceCard from '@components/ServiceCard';
import Button from '@components/Button';
import ServicesProcess from '@components/ServicesProcess';
import TargetAudience from '@components/TargetAudience';
import Faq from '@components/Faq';
// 我們需要從 servicesPageData.js 中取得 targetAudienceData
import { servicesPageData, serviceItems, targetAudienceData } from '@data/servicesPageData.js';
import { siteMeta } from '@data/siteMeta.js';

function ServicesPage() {
  const { title, description } = siteMeta.pages.services;

  return (
    <>
      <SEO title={title} description={description} />
      <PageHeaderBicolorBackground title={servicesPageData.header.titleLine} />
      <BackgroundColor>
        <OneColumnLayout>
          {serviceItems.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
              imageAlt={service.imageAlt}
              isReversed={service.isReversed}
            />
          ))}
          <Button text={servicesPageData.header.buttonText} link={servicesPageData.header.buttonLink} />
        </OneColumnLayout>
      </BackgroundColor>
      <BackgroundColor color="white">
        <ServicesProcess />
      </BackgroundColor>
      <BackgroundColor color="lightGreen">
        {/* 將 targetAudienceData 作為 prop 傳遞給 TargetAudience 元件 */}
        <TargetAudience data={targetAudienceData} />
      </BackgroundColor>
      <BackgroundColor color="white">
        <Faq />
      </BackgroundColor>
    </>
  );
}

export default ServicesPage;