import { useState, useEffect } from 'react';
import styles from '@styles/ScrollToTopButton.module.scss';
import IconArrowUp from '@components/IconArrowUp';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      type="button"
      className={`${styles.scrollTopButton} ${isVisible ? styles.visible : ''}`}
      onClick={scrollToTop}
      aria-label="回到頁首"
    >
      <IconArrowUp className={styles.icon} />
    </button>
  );
}

export default ScrollToTopButton;