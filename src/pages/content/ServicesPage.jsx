import SEO from '@components/Head/SEO';
import styles from '@styles/ServicesPage.module.scss';
import BackgroundColor from '@components/BackgroundColor';
import PageHeaderBicolorBackground from '@components/PageHeaderBicolorBackground';
import OneColumnLayout from '@components/OneColumnLayout';
import ServiceCard from '@components/ServiceCard';
import Button from '@components/Button';
import ServicesProcess from '@components/ServicesProcess';
import Faq from '@components/Faq';
import { servicesPageData, serviceItems } from '@data/servicesPageData.js';

function ServicesPage() {
  return (
    <>
      <SEO title="服務項目" description="這是Sakuyal 自然語言煉金術的服務項目頁面。" />
      <PageHeaderBicolorBackground title={servicesPageData.header.titleLine}/>
      <BackgroundColor>
        {/* 服務項目列表區塊 */}
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
        <ServicesProcess/>
      </BackgroundColor>
      <BackgroundColor color="lightGreen">
        <Faq/>
      </BackgroundColor>
    </>
  );
}

export default ServicesPage;
