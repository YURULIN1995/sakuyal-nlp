import SEO from '@components/Head/SEO';
import TextImageSlot from '@components/TextImageSlot';
import BicolorBackground from '@components/BicolorBackground';
import PageTitle from '@components/PageTitle';
import DividerTitleLeft from '@components/DividerTitleLeft';
import BackgroundColor from '@components/BackgroundColor';
import OneColumnLayout from '@components/OneColumnLayout';
// import AvatarText from '@components/AvatarText';
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

      {/* --- 客戶推薦區塊 (使用新結構) --- */}
      <OneColumnLayout>
        <DividerTitleLeft  title={testimonialsData.title } />
        <div className={styles.testimonialsList}>
        {/* 2. 遍歷 testimonialsData 物件中的 "list" 陣列 */}
        </div>
      </OneColumnLayout>
    </>
  );
}

export default AboutPage;