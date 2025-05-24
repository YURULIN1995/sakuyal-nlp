import SEO from '@components/Head/SEO';
import Hero from '@components/Hero';
import KanbanSection from '@components/KanbanSection';
import ServicesSection from '@components/ServicesSection';
import FeaturedPostsSection from '@components/FeaturedPostsSection';
import { freeTrialData, aboutSectionData, servicesOverviewData } from '@data/matchaData.js';
import { featuredPostsData } from '@data/blogData.js';

function HomePage() {
  return (
    <>
      <SEO/>
      <Hero {...freeTrialData} />
      <KanbanSection {...aboutSectionData} />
      <ServicesSection {...servicesOverviewData} />
      <FeaturedPostsSection/>
    </>
  );
}

export default HomePage;