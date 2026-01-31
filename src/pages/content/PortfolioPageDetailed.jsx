import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import TwoColumnLayout from '@components/TwoColumnLayout';
import styles from '@styles/PortfolioPageDetailed.module.scss';

// --- 靜態 Dummy Data (之後會換成 Sanity 資料) ---
const dummyData = {
  title: "LOREM IPSUM PROJECT TITLE",
  intro: "這是一個專案的簡短介紹。Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  
  // 模擬 Sanity 的 Rich Text 或長文
  description: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    
    1. First challenge we faced
    2. Second challenge we faced
    3. How we solved it
  `,
  
  // 模擬 Features Array
  features: [
    { title: "React Framework", text: "Built with modern React hooks." },
    { title: "Sanity CMS", text: "Headless CMS for easy content management." },
    { title: "RWD Design", text: "Fully responsive across all devices." },
    { title: "SEO Optimized", text: "Server-side rendering friendly structure." },
  ],
  
  // 模擬 Gallery Array
  gallery: [1, 2, 3, 4] 
};

function PortfolioPageDetailed() {
  // 1. 接收網址上的參數 (對應 App.jsx 中的 :portfolioSlug)
  const { portfolioSlug } = useParams();

  // (測試用) 你可以在 console 看到目前網址是哪個作品
  console.log("Current Project Slug:", portfolioSlug);

  // 2. 換頁後自動捲動到最上方
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [portfolioSlug]);

  // --- 準備 TwoColumnLayout 的內容 ---
  
  // 左欄：詳細描述
  const leftContent = (
    <div className={styles.descriptionArea}>
      <h2 className={styles.sectionTitle}>About the Project</h2>
      <p className={styles.paragraph}>{dummyData.description}</p>
    </div>
  );

  // 右欄：特色列表
  const rightContent = (
    <div className={styles.featuresArea}>
      <h3 className={styles.sectionTitle}>Key Features</h3>
      <ul className={styles.featureList}>
        {dummyData.features.map((feature, index) => (
          <li key={index} className={styles.featureItem}>
            <span className={styles.checkIcon}>✓</span>
            <div>
              <strong>{feature.title}</strong>
              <p>{feature.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className={styles.pageContainer}>
      
      {/* 0. 返回按鈕 (Optional) */}
      <div style={{ marginBottom: '20px' }}>
        <Link to="/portfolio" style={{ textDecoration: 'none', color: '#666' }}>
          ← Back to Portfolio
        </Link>
      </div>

      {/* 1. Hero Section */}
      <section className={styles.heroSection}>
        <h1 className={styles.mainTitle}>{dummyData.title}</h1>
        <p className={styles.introText}>{dummyData.intro}</p>
        
        {/* 灰色假圖區塊 (Main Image) */}
        <div className={styles.placeholderMainImage}>
          <span>Main Image (16:9 Aspect Ratio)</span>
        </div>
      </section>

      {/* 2. Core Content (TwoColumnLayout) */}
      <section className={styles.contentSection}>
        <TwoColumnLayout 
          left={leftContent} 
          right={rightContent} 
          className={styles.twoColWrapper} 
        />
      </section>

      {/* 3. Gallery Section */}
      <section className={styles.gallerySection}>
        <h2 className={styles.sectionTitle}>Project Gallery</h2>
        <div className={styles.gridGallery}>
          {dummyData.gallery.map((item, index) => (
            <div key={index} className={styles.placeholderGalleryImage}>
              <span>Gallery Image {item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CTA Section */}
      <section className={styles.ctaSection}>
        <button className={styles.visitButton}>
          Visit Live Website ↗
        </button>
      </section>

    </div>
  );
}

export default PortfolioPageDetailed;