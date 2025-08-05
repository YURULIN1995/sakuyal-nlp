import { Outlet } from 'react-router-dom';
import Header from '@components/Header';
import Footer from '@components/Footer';
import styles from '@styles/Layout.module.scss';

function Layout() {
  return (
  <div className={styles.layoutContainer}>
    <Header />
    <main className={styles.mainContent}>
      <Outlet />
    </main>
    <Footer />
  </div>
  );
}

export default Layout;