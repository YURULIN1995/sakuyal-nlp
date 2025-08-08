import SEO from '@components/Head/SEO';
import TextSlot from '@components/TextSlot';
import TextImageSlot from '@components/TextImageSlot';
import BicolorBackground from '@components/BicolorBackground';
import PageTitle from '@components/PageTitle';
import { authorIntroData, testimonialsData } from '@data/aboutPageData.js';
import styles from '@styles/AboutPage.module.scss';

function AboutPage() {
  return (
    <>
      <SEO title="關於我" description="認識 Sakuyal 自然語言煉金術的創辦人。" />
      
      <BicolorBackground>
        <div className={styles.titleContainer}>
          <PageTitle title={authorIntroData.titleLine1} />
        </div>
      </BicolorBackground>
      <TextSlot
        paragraph={authorIntroData.paragraph}
        buttonText={authorIntroData.buttonText}
        buttonLink={authorIntroData.buttonLink}
        paddingReset={false} 
      />

      {testimonialsData.map(testimonial => (
        <TextImageSlot
          key={testimonial.id}
          titleLine1={testimonial.titleLine1}
          titleLine2={testimonial.titleLine2}
          paragraph={testimonial.paragraph}
          imageUrl={testimonial.imageUrl}
          imageAlt={testimonial.imageAlt}
          isReversed={testimonial.isReversed}
          imageContainerLayoutClassName={styles.imageCircle}
        />
      ))}
    </>
  );
}

export default AboutPage;