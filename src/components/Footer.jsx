import { Link } from 'react-router-dom';
import styles from '@styles/Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>Copyright &#169; 2025 Sakuyal 自然語言煉金術 All Rights Reserved.</p>

      {/* Footer Navigation */}
      <nav className={styles.footerNav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link to="/privacy-policy" className={styles.navLink}>
              隱私權政策
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/disclaimer" className={styles.navLink}>
              免責聲明
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/copyright" className={styles.navLink}>
              著作權聲明
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;