import { Link } from 'react-router-dom';
import Navbar from '@components/Navbar/Navbar';
import styles from '@styles/Header.module.scss';

function Header() {
  const logoUrl = '/images/logo/sakuyal_logo_transparent_47x63.svg';

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Link to="/" className={styles.logoLink}>
          <img src={logoUrl} alt="Logo" className={styles.logoImg} />
        </Link>
        <Navbar />
      </div>
    </header>
  );
}
export default Header;