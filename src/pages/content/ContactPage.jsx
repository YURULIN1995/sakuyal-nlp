import ViewportMeta from '@components/Head/ViewportMeta';
import SEO from '@components/Head/SEO';
import styles from '@styles/ContactPage.module.scss';
import PageHeaderBicolorBackground from '@components/PageHeaderBicolorBackground';
import BackgroundColor from '@components/BackgroundColor';
import { contactData } from '@data/contactPageData.js';
import ContactLinks from '@components/ContactLinks';
import ContactForm from '@components/ContactForm';
import Divider from '@components/Divider';
import { siteMeta } from '@data/siteMeta.js';

function ContactPage() {
  const { title, description } = siteMeta.pages.contact;

  return (
    <div className={styles.pageWrapper}>
      <ViewportMeta/>
      <SEO title={title} description={description} />
      <PageHeaderBicolorBackground title={contactData.titleLine1}/>
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