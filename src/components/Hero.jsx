// src/components/Hero.jsx
import styles from '@styles/Hero.module.css'; // 匯入樣式

function Hero() {
  return (
    // 使用 heroSection 作為最外層容器的 class
    <section className={styles.heroSection}>
      {/* 左側區塊 */}
      <div className={styles.left}>
        {/* 這裡可以放主要的標題或文字 */}
        <h2>這是 Hero 左側區塊</h2>
        <p>
          這裡可以放一些介紹性的文字，或者呼籲行動的按鈕等等。
        </p>
      </div>
      {/* 右側區塊 */}
      <div className={styles.right}>
        {/* 你可以將來在這裡放圖片或內容 */}
        <h2>這是 Hero 右側區塊</h2>
        <p>
          這裡可以放網站站主形象照。
        </p>
      </div>
    </section>
  );
}

export default Hero;