import SEO from '@components/Head/SEO';
import styles from '@styles/ContactPage.module.scss';
import PageHeaderBicolorBackground from '@components/PageHeaderBicolorBackground';
import BackgroundColor from '@components/BackgroundColor';
import { contactData } from '@data/contactPageData.js';

function ContactPage() {
  console.log("Rendering ContactPage");

  return (
    <>
      <SEO title="聯絡" description="這是 Sakuyal 自然語言煉金術的聯絡頁面。" />
      <PageHeaderBicolorBackground title={contactData.titleLine1}/>
      <BackgroundColor color="lightGreen">
        <div className={styles.contactSection}>
          <div className={styles.contactTextWrap}>
            <h2 className={styles.title}>{contactData.titleLine2}</h2>
            <p className={styles.paragraph}>{contactData.paragraph}</p>
          </div>
          <div className={styles.contactImageWrap}>
            {/* 【新增】顯示圖片 */}
            <img 
              src={contactData.imageUrl} 
              alt={contactData.imageAlt} 
              className={styles.contactImage} 
            />
          </div>
        </div>
      </BackgroundColor>
    </>
  );
}

export default ContactPage;
