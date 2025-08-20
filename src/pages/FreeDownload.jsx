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
          <p>只要輸入您的姓名與 Email，我們就會立刻將下載連結寄到您的信箱。</p>
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
