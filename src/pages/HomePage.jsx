import SEO from '@components/Head/SEO';
import Hero from '@components/Hero';
import KanbanSection from '@components/KanbanSection';
import ServicesSection from '@components/ServicesSection';
import FeaturedPostsSection from '@components/FeaturedPostsSection';
import { freeTrialData } from '@data/freeTrialData.js';
import { aboutData } from '@data/aboutData.js';
import { servicesOverviewData } from '@data/servicesOverviewData.js';
import { featuredPostsData } from '@data/blogData.js';

function HomePage() {
  return (
    <>
      <SEO/>
      <Hero {...freeTrialData} />
      <KanbanSection {...aboutData} />
      <ServicesSection {...servicesOverviewData} />
      <FeaturedPostsSection/>
    </>
  );
}

export default HomePage;