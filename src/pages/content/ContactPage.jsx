import SEO from '@components/Head/SEO';
import styles from '@styles/ContactPage.module.scss';
import PageHeaderBicolorBackground from '@components/PageHeaderBicolorBackground';
import BackgroundColor from '@components/BackgroundColor';
import { contactData } from '@data/contactPageData.js';
import ContactLinks from '@components/ContactLinks';
import ContactForm from '@components/ContactForm';
import Divider from '@components/Divider';

function ContactPage() {
  return (
    // 【新增】用 pageWrapper 包裹整個頁面
    <div className={styles.pageWrapper}>
      <SEO title="聯絡" description="這是 Sakuyal 自然語言煉金術的聯絡頁面。" />
      <PageHeaderBicolorBackground title={contactData.titleLine1}/>
      
      {/* 【修改】傳入新的 className */}
      <BackgroundColor color="lightGreen" className={styles.growingSection}>
        <div className={styles.contactSection}>
          <div className={styles.contactTextWrap}>
            <h2 className={styles.title}>{contactData.titleLine2}</h2>
            <p className={styles.paragraph}>{contactData.paragraph}</p>
            <ContactLinks />
          </div>
          <div className={styles.contactImageWrap}>
            <img 
              src={contactData.imageUrl} 
              alt={contactData.imageAlt} 
              className={styles.contactImage} 
            />
          </div>
        </div>
        
        <Divider />
        <ContactForm />
      </BackgroundColor>
    </div>
  );
}

export default ContactPage;
