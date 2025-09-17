import { Link } from 'react-router-dom';
import styles from '@styles/Footer.module.scss';
import { siteMeta } from '@data/siteMeta.js';
import { copyrightData } from '@data/legal/copyrightData.js';

function Footer() {
  const page = siteMeta.pages;
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>{copyrightData.declaration}</p>
      {/* <p>{siteMeta.businessName}（統編：{siteMeta.unifiedBusinessNo}）</p> 您有登記公司行號才需要啟用 */}
      <nav className={styles.footerNav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link to="/privacy-policy" className={styles.navLink}>
              {page.privacyPolicy.title}
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/disclaimer" className={styles.navLink}>
              {page.disclaimer.title}
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/copyright" className={styles.navLink}>
              {page.copyright.title}
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/refund-policy" className={styles.navLink}>
              {page.refundPolicy.title}
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;