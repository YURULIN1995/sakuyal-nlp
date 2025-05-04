import Hero from '@components/Hero';
import SEO from '@components/Head/SEO';
import KanbanSection from '@components/KanbanSection';
// import { heroData } from '@data/heroData.js'; //正式文案，測試完畢後改用這個，刪除測試文案。
import { matchaData } from '@data/heroData.js'; //測試用抹茶點心文案

function HomePage() {
  return (
    <>
      <SEO title="首頁" description="歡迎來到 Sakuyal 自然語言煉金術..." />
      <Hero
        imageUrl={matchaData.imageUrl}
        imageAlt={matchaData.imageAlt}
        titleLine1={matchaData.imagetitleLine1}
        titleLine2={matchaData.imagetitleLine2}
        paragraph={matchaData.paragraph}
        buttonText={matchaData.buttonText}
        buttonLink={matchaData.buttonLink}
        socialLinks={matchaData.socialLinks}
      >
      </Hero>
      <KanbanSection />
      <KanbanSection />
      <KanbanSection />
    </>
  );
}
export default HomePage;