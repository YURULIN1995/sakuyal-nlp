import SEO from '@components/SEO';
import OneColumnLayout from '@components/OneColumnLayout';
import { siteMeta } from '@data/siteMeta.js';
import { refundPolicyData } from '@data/legal/refundPolicyData.js';
import styles from '@styles/LegalPages.module.scss';

function RefundPolicyPage() {
  const { title, description } = siteMeta.pages.refundPolicy;
  return (
    <>
      <SEO title={title} description={description} />
      <OneColumnLayout className={styles.pageWrapper}>
        <h1 className={styles.title}>{title}</h1>
        
        {refundPolicyData.content.map((block, index) => {
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