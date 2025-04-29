// src/components/Header.jsx
import Navbar from '@components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import styles from '@styles/Header.module.css';

function Header() {
  const logoUrl = '/images/sakuyal_logo_transparent_113x90.svg';

  return (
    // 使用 className
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