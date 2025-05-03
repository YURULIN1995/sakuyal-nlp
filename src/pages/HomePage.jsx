import Hero from '@components/Hero';
import SEO from '@components/Head/SEO';
import KanbanSection from '@components/KanbanSection';
import { heroData } from '@data/heroData.js';
import styles from '@styles/HomePage.module.css';

function HomePage() {
  return (
    <>
      <SEO title="首頁" description="歡迎來到 Sakuyal 自然語言煉金術..." />
      <Hero
        imageUrl={heroData.imageUrl}
        imageAlt={heroData.imageAlt}
      >
        <h2 className={styles.heroTitle}>
          {heroData.titleLine1}<br/>
          {heroData.titleLine2}
        </h2>
        <p className={styles.heroParagraph}>
          {heroData.paragraph}
        </p>
        <a className={styles.heroButton} href={heroData.buttonLink} target="_blank" rel="noopener noreferrer">
           {heroData.buttonText}
        </a>
        <ul className={styles.socialList}>
          {heroData.socialLinks.map(social => (
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