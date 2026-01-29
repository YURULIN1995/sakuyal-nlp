import { Link } from 'react-router-dom';
import Navbar from '@components/Navbar';
import styles from '@styles/Header.module.scss';
import { siteMeta } from '@data/siteMeta.js';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Link to="/" className={styles.logoLink}>
          <img src={siteMeta.logoUrl} alt={siteMeta.siteName} className={styles.logoImg} />
        </Link>
        <Navbar />
      </div>
    </header>
  );
}
export default Header;