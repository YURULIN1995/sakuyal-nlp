import SEO from '@components/Head/SEO';
import Hero from '@components/Hero';
import KanbanSection from '@components/KanbanSection';
import ServicesSection from '@components/ServicesSection';
import FeaturedPostsSection from '@components/FeaturedPostsSection';
import { freeTrialData } from '@data/freeTrialData.js';
import { aboutData } from '@data/aboutData.js';
import { servicesPageData, serviceItems } from '@data/servicesPageData.js';


function HomePage() {
  return (
    <>
      <SEO/>
      <Hero {...freeTrialData} />
      <KanbanSection {...aboutData} />
      <ServicesSection 
        {...servicesPageData.overview} 
        rightColumnItems={serviceItems} 
      />
      <FeaturedPostsSection/>
    </>
  );
}

export default HomePage;
