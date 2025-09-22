import ViewportMeta from '@components/Head/ViewportMeta';
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
import { servicesPageData, serviceItems, targetAudienceData, beforeAfterData, servicesFaq } from '@data/servicesPageData.js';
import { siteMeta } from '@data/siteMeta.js';
import { ctas } from '@data/userExperienceWriting.js';

function ServicesPage() {
  const { title, description } = siteMeta.pages.services;
  const {faqTitle, questionStacks} = servicesFaq;

  return (
    <>
      <ViewportMeta/>
      <SEO title={title} description={description} />
      <PageHeaderBicolorBackground title={title} />
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
          <Button text={ctas.bookService.secondary} to={servicesPageData.reservationLink} />
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
        <Faq title={faqTitle} items={questionStacks}/>
      </BackgroundColor>
    </>
  );
}

export default ServicesPage;