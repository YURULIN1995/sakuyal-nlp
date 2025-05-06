import SEO from '@components/Head/SEO';
import Hero from '@components/Hero';
import KanbanSection from '@components/KanbanSection';
import { freeTrialData, aboutSectionData, servicesSectionData, blogSectionData } from '@data/matchaData.js';
function HomePage() {
  return (
    <>
      <SEO/>
      <Hero {...freeTrialData} />
      <KanbanSection {...aboutSectionData} />
      <KanbanSection {...servicesSectionData} />
      <KanbanSection {...blogSectionData} />
    </>
  );
}

export default HomePage;