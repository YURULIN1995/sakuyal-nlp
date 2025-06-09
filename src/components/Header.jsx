import { Link } from 'react-router-dom';
import Navbar from '@components/Navbar/Navbar';
import styles from '@styles/Header.module.scss';

function Header() {
  const logoUrl = '/images/sakuyal_logo_transparent_113x90.svg';

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