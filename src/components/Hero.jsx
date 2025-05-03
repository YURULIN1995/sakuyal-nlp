import styles from '@styles/Hero.module.css';

// 接收 props 和 children
function Hero({ imageUrl, imageAlt = "Hero 圖片", children }) {
  return (
    // 使用 heroSection class
    <section className={styles.heroSection}>
      {/* 左側區塊，渲染傳入的 children */}
      <div className={styles.left}>
        {children} {/* <--- 在這裡渲染內容 */}
      </div>
      {/* 右側區塊，渲染圖片 */}
      <div className={styles.right}>
        {imageUrl && ( // 如果有圖片 URL 才渲染
          <img
            src={imageUrl}
            alt={imageAlt}
            className={styles.image} // <--- 可以為圖片加個 class
            loading="lazy"
            style={{ maxWidth: '100%', height: 'auto' }} // 基本樣式
          />
        )}
      </div>
    </section>
  );
}

export default Hero;