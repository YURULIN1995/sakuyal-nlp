import SEO from '@components/Head/SEO';
import Hero from '@components/Hero';
import KanbanSection from '@components/KanbanSection';
import { matchaData, aboutSectionData, servicesSectionData, blogSectionData } from '@data/copyWritingData.js';
function HomePage() {
  return (
    <>
      <SEO/>
      <Hero {...matchaData} />
      <KanbanSection {...aboutSectionData} />
      <KanbanSection {...servicesSectionData} />
      <KanbanSection {...blogSectionData} />
    </>
  );
}

export default HomePage;