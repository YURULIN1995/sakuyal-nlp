// 檔案: src/pages/AboutPage.jsx

import SEO from '@components/Head/SEO';
import TextSlot from '@components/TextSlot';
import TextImageSlot from '@components/TextImageSlot';
import { authorIntroData, testimonialsData } from '@data/aboutPageData.js';
import styles from '@styles/AboutPage.module.scss';

function AboutPage() {
  return (
    <>
      <SEO title="關於我" description="這是關於我的頁面" />
      
      <div className={styles.pageContainer}>
        {/* 第一區塊：您的個人簡介 */}
        <TextSlot
          titleLine1={authorIntroData.titleLine1}
          paragraph={authorIntroData.paragraph}
          buttonText={authorIntroData.buttonText}
          buttonLink={authorIntroData.buttonLink}
        />

        {/* 第二區塊：客戶推薦心得 (使用 map 迴圈) */}
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
      </div>
    </>
  );
}

export default AboutPage;