// 檔案: src/pages/legal/DisclaimerPage.jsx

import SEO from '@components/Head/SEO';
import OneColumnLayout from '@components/OneColumnLayout';
// 1. (修改) 匯入新的資料檔
import { disclaimerData } from '@data/legal/disclaimerData.js';
import styles from '@styles/LegalPages.module.scss'; // 引用共用樣式

function DisclaimerPage() {
  // 2. (修改) 直接使用匯入的資料
  const pageContent = disclaimerData;

  return (
    <>
      <SEO title={pageContent.title} description="本網站的免責聲明" />
      
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

export default DisclaimerPage;