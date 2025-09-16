import ViewportMeta from '@components/Head/ViewportMeta';
import SEO from '@components/Head/SEO';
import OneColumnLayout from '@components/OneColumnLayout';
import { siteMeta } from '@data/siteMeta.js';
import { copyrightData } from '@data/legal/copyrightData.js';
import styles from '@styles/LegalPages.module.scss';

function CopyrightPage() {
  const { title, description } = siteMeta.pages.copyright;

  return (
    <>
      <ViewportMeta/>
      <SEO title={title} description={description} />
      <OneColumnLayout className={styles.pageWrapper}>
        <h1 className={styles.title}>{title}</h1>
        
        {copyrightData.js.content.map((block, index) => {
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

export default CopyrightPage;