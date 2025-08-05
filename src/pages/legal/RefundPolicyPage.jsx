// 檔案: src/pages/legal/RefundPolicyPage.jsx

import SEO from '@components/Head/SEO';
import OneColumnLayout from '@components/OneColumnLayout';
import { refundPolicyData } from '@data/legal/refundPolicyData.js';
import styles from '@styles/LegalPages.module.scss'; // 繼續共用同一個樣式檔

function RefundPolicyPage() {
  const pageContent = refundPolicyData;

  return (
    <>
      <SEO title={pageContent.title} description="本網站的退款政策說明" />
      
      <OneColumnLayout className={styles.pageWrapper}>
        <h1 className={styles.title}>{pageContent.title}</h1>
        
        {pageContent.content.map((block, index) => {
          switch (block.type) {
            case 'heading':
              return <h2 key={index} className={styles.subheading}>{block.text}</h2>;
            case 'paragraph':
              return <p key={index} className={styles.paragraph}>{block.text}</p>;
            case 'list':
              return (
                <ul key={index} className={styles.list}>
                  {block.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              );
            default:
              return null;
          }
        })}
      </OneColumnLayout>
    </>
  );
}

export default RefundPolicyPage;