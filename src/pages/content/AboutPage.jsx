import SEO from '@components/SEO';
import PageHeaderBicolorBackground from '@components/PageHeaderBicolorBackground';
import BackgroundColor from '@components/BackgroundColor';
import OneColumnLayout from '@components/OneColumnLayout';
import TwoColumnLayout from '@components/TwoColumnLayout';
import { siteMeta } from '@data/siteMeta.js';
import { authorData } from '@data/aboutData.js';
import styles from '@styles/AboutPage.module.scss';

function AboutPage() {
  const { title, description } = siteMeta.pages.about;

  const leftContent = (
    <div className={styles.textWrapper}>
      <p className={styles.paragraph}>{authorData.paragraph}</p>
      
      {authorData.buttonText && (
        <a 
          href={authorData.buttonLink} 
          className={styles.button}
          target="_blank" 
          rel="noopener noreferrer"
        >
          {authorData.buttonText}
        </a>
      )}
    </div>
  );

  const rightContent = (
    <img 
      src={authorData.imageUrl} 
      alt={authorData.imageAlt} 
      className={styles.authorImage} 
      loading="lazy"
    />
  );

  return (
    <>
      <SEO title={title} description={description} />
      <PageHeaderBicolorBackground title={authorData.titleLine}/>
      
      <BackgroundColor>
        <OneColumnLayout>
          <TwoColumnLayout 
            left={leftContent} 
            right={rightContent} 
          />
        </OneColumnLayout>
      </BackgroundColor>
    </>
  );
}

export default AboutPage;