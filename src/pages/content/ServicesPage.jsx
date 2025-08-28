import SEO from '@components/Head/SEO';
import BackgroundColor from '@components/BackgroundColor';
import PageHeaderBicolorBackground from '@components/PageHeaderBicolorBackground';
import OneColumnLayout from '@components/OneColumnLayout';
import ServiceCard from '@components/ServiceCard';
import Button from '@components/Button';
import ServicesProcess from '@components/ServicesProcess';
import TargetAudience from '@components/TargetAudience';
import BeforeAfter from '@components/BeforeAfter';
import Faq from '@components/Faq';
import { servicesPageData, serviceItems, targetAudienceData, beforeAfterData } from '@data/servicesPageData.js';
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
        <TargetAudience data={targetAudienceData} />
      </BackgroundColor>
      <BackgroundColor color="white">
        <BeforeAfter data={beforeAfterData} />
      </BackgroundColor>
      <BackgroundColor color="lightGreen">
        <Faq />
      </BackgroundColor>
    </>
  );
}

export default ServicesPage;