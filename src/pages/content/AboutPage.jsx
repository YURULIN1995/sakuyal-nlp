import SEO from '@components/Head/SEO';
import PageHeaderBicolorBackground from '@components/PageHeaderBicolorBackground';
import TextImageSlot from '@components/TextImageSlot';
import DividerTitleLeft from '@components/DividerTitleLeft';
import BackgroundColor from '@components/BackgroundColor';
import OneColumnLayout from '@components/OneColumnLayout';
import TestimonialPostCard from '@components/TestimonialPostCard';
import { siteMeta } from '@data/siteMeta.js';
import { authorIntroData } from '@data/aboutPageData.js';
import { serviceTestimonials } from '@data/servicesPageData.js';

function AboutPage() {
  const { title, description } = siteMeta.pages.about;

  return (
    <>
      <SEO title={title} description={description} />
      <PageHeaderBicolorBackground title={authorIntroData.titleLine}/>
      <BackgroundColor>
        <OneColumnLayout>
          <TextImageSlot
            paragraph={authorIntroData.paragraph}
            buttonText={authorIntroData.buttonText}
            buttonLink={authorIntroData.buttonLink}
            imageUrl={authorIntroData.imageUrl}
            imageAlt={authorIntroData.imageAlt}
          />
        </OneColumnLayout>
      </BackgroundColor>

      <OneColumnLayout>
        <DividerTitleLeft  title={serviceTestimonials.title } />
        {serviceTestimonials.list.map(item =>
        <TestimonialPostCard
          key={item.id}
          imageUrl={item.imageUrl}
          imageAlt={item.imageAlt}
          authorName={item.authorName}
          subtitle={item.authorTitle}
          fullText={item.fullText}
        />
        )}
      </OneColumnLayout>
    </>
  );
}

export default AboutPage;
