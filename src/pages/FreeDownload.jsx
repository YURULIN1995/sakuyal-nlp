import SEO from '@components/Head/SEO';
import SubscriptionForm from '@components/SubscriptionForm';
import { siteMeta } from '@data/siteMeta.js';
import styles from '@styles/FreeDownload.module.scss';

function FreeDownload() {
  const { title, description } = siteMeta.pages.freeDownload;

  return (
    <div className={styles.pageContainer}>
      <SEO title={title} description={description} />
      
      <main className={styles.contentWrapper}>
        <div className={styles.textSection}>
          <h1>免費下載：</h1>
        </div>
        
        <div className={styles.formSection}>
          <SubscriptionForm 
            onSuccessRedirectTo="/buy-now" 
          />
        </div>
      </main>
    </div>
  );
}

export default FreeDownload;
