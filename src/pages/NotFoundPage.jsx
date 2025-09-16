import { Link } from 'react-router-dom';
import SEO from '@components/Head/SEO';
import styles from '@styles/NotFound.module.scss';
import { notFoundMessages } from '@data/userExperienceWriting.js';

function NotFoundPage() {
  return (
    <>
      <SEO title="找不到頁面-404" />
      <div className={styles.container}>
        <h1 className={styles.errorMessage}>{notFoundMessages.title}</h1>
        <p className={styles.prompt}>{notFoundMessages.prompt}</p>
        <p>
          <Link to="/" className={styles.homeLink}>{notFoundMessages.homeLink}</Link>
        </p>
      </div>
    </>
  );
}

export default NotFoundPage;