import ViewportMeta from '@components/Head/ViewportMeta';
import SEO from '@components/Head/SEO';
import PageHeaderBicolorBackground from '@components/PageHeaderBicolorBackground';
import TextImageSlot from '@components/TextImageSlot';
import DividerTitleLeft from '@components/DividerTitleLeft';
import BackgroundColor from '@components/BackgroundColor';
import OneColumnLayout from '@components/OneColumnLayout';
import TestimonialPostCard from '@components/Testimonials/TestimonialPostCard';
import { siteMeta } from '@data/siteMeta.js';
import { authorData } from '@data/aboutData.js';
import { serviceTestimonials } from '@data/servicesPageData.js';

function AboutPage() {
  const { title, description } = siteMeta.pages.about;

  return (
    <>
      <ViewportMeta/>
      <SEO title={title} description={description} />
      <PageHeaderBicolorBackground title={authorData.titleLine}/>
      <BackgroundColor>
        <OneColumnLayout>
          <TextImageSlot
            paragraph={authorData.paragraph}
            buttonText={authorData.buttonText}
            buttonLink={authorData.buttonLink}
            imageUrl={authorData.imageUrl}
            imageAlt={authorData.imageAlt}
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
          authorTitle={item.authorTitle}
          fullText={item.fullText}
        />
        )}
      </OneColumnLayout>
    </>
  );
}

export default AboutPage;
