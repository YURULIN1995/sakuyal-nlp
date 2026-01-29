import SEO from '@components/SEO';
import SubscriptionForm from '@components/SubscriptionForm';
import { siteMeta } from '@data/siteMeta.js';
import styles from '@styles/FreeDownload.module.scss';
import { freeDownloadData } from '@data/freeDownloadData.js';
import IconCheck from '@assets/icons/check.svg?react';

function FreeDownload() {
  const { title, description } = siteMeta.pages.freeDownload;

  return (
    <>
      <SEO title={title} description={description} />
      <main className={styles.contentWrapper}>
        <div className={styles.textSection}>
          <div className={styles.textInnerWrapper}>
            <img src={freeDownloadData.imageUrl} alt={freeDownloadData.imageAlt} />
            <h1 className={styles.titleLine1}>{freeDownloadData.titleLine1}</h1>
            <h2 className={styles.titleLine2}>{freeDownloadData.titleLine2}</h2>
            <p>{freeDownloadData.paragraph}</p>
          </div>
        </div>
        
        <div className={styles.formSection}>
          {/* --- 更新：將 Features 列表移至此處 --- */}
          <div className={styles.formContentWrapper}>
            <p>{freeDownloadData.paragraph2}</p>
            <p className={styles.shareInfo}>{freeDownloadData.paragraph3}</p>
            <ul className={styles.featuresList}>
              {freeDownloadData.features.map(feature => (
                <li key={feature.id}>
                  <IconCheck className={styles.checkIcon} />
                  <span>{feature.featureText}</span>
                </li>
              ))}
            </ul>
            <SubscriptionForm 
              onSuccessRedirectTo="/upsell" 
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default FreeDownload;
