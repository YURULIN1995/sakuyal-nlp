import SEO from '@components/Head/SEO';
import styles from '@styles/ContactPage.module.scss';
import PageHeaderBicolorBackground from '@components/PageHeaderBicolorBackground';
import { contactTitle } from '@data/contactPageData.js';

function ContactPage() {
  console.log("Rendering ContactPage");

  return (
    <>
      <SEO title="聯絡" description="這是 Sakuyal 自然語言煉金術的聯絡頁面。" />
      <PageHeaderBicolorBackground title={contactTitle.titleLine}/>
    </>
  );
}

export default ContactPage;