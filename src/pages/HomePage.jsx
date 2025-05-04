import Hero from '@components/Hero';
import SEO from '@components/Head/SEO';
import KanbanSection from '@components/KanbanSection';
// import { heroData } from '@data/heroData.js'; //正式文案，測試完畢後改用這個，刪除測試文案。
import { matchaData } from '@data/heroData.js'; //測試用抹茶點心文案
import styles from '@styles/HomePage.module.css';

function HomePage() {
  return (
    <>
      <SEO title="首頁" description="歡迎來到 Sakuyal 自然語言煉金術..." />
      <Hero
        imageUrl={matchaData.imageUrl}
        imageAlt={matchaData.imageAlt}
      >
        <h2 className={styles.heroTitle}>
          {matchaData.titleLine1}<br/>
          {matchaData.titleLine2}
        </h2>
        <p className={styles.heroParagraph}>
          {matchaData.paragraph}
        </p>
        <a className={styles.heroButton} href={matchaData.buttonLink} target="_blank" rel="noopener noreferrer">
           {matchaData.buttonText}
        </a>
        <ul className={styles.socialList}>
          {matchaData.socialLinks.map(social => (
            <li key={social.id}>
              <a href={social.link} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                 <i className={social.iconClass} aria-hidden="true"></i>
              </a>
            </li>
          ))}
        </ul>
      </Hero>
      <KanbanSection />
      <KanbanSection />
      <KanbanSection />
    </>
  );
}
export default HomePage;