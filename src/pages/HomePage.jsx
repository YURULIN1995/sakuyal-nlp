import SEO from '@components/Head/SEO';
import Hero from '@components/Hero';
import KanbanSection from '@components/KanbanSection';
import ServicesSection from '@components/ServicesSection';
import { freeTrialData, aboutSectionData, servicesOverviewData, blogSectionData } from '@data/matchaData.js';
function HomePage() {
  return (
    <>
      <SEO/>
      <Hero {...freeTrialData} />
      <KanbanSection {...aboutSectionData} />
      <ServicesSection {...servicesOverviewData} />
      <KanbanSection {...blogSectionData} />
    </>
  );
}

export default HomePage;