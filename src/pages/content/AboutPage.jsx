import SEO from '@components/Head/SEO';
import PageHeaderBicolorBackground from '@components/PageHeaderBicolorBackground';
import TextImageSlot from '@components/TextImageSlot';
import DividerTitleLeft from '@components/DividerTitleLeft';
import BackgroundColor from '@components/BackgroundColor';
import OneColumnLayout from '@components/OneColumnLayout';
import PostCard from '@components/PostCard';
import { authorIntroData, testimonialsSectionData } from '@data/aboutPageData.js';
import styles from '@styles/AboutPage.module.scss';

function AboutPage() {
  return (
    <>
      <SEO title="關於我" description="認識 Sakuyal 自然語言煉金術的創辦人。" />      
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

      {/* --- 客戶推薦區塊 (使用新結構) --- */}
      <OneColumnLayout>
        <DividerTitleLeft  title={testimonialsSectionData.title } />
        {testimonialsSectionData.list.map(item =>
        <PostCard
          key={item.id}
          imageUrl={item.imageUrl}
          imageAlt={item.imageAlt}
          authorName={item.authorName}
          // 將資料中的 authorTitle 傳給 subtitle prop
          subtitle={item.authorTitle}
          // 將資料中的 fullText 傳給 fullText prop
          fullText={item.fullText}
        />
        )}
      </OneColumnLayout>
    </>
  );
}

export default AboutPage;