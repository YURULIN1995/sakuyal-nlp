import { Outlet } from 'react-router-dom';
import Header from '@/PostPage.jsx/Header';
import Footer from '@/PostPage.jsx/Footer';
import ScrollToTopButton from '@/PostPage.jsx/ScrollToTopButton';
import styles from '@styles/Layout.module.scss';

function Layout() {
  return (
    <div className={styles.layoutContainer}>
      <Header />
      <main className={styles.mainContent}>
        <Outlet />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default Layout;
