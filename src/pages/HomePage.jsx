import SEO from '@components/Head/SEO';
import Hero from '@components/Hero';
import KanbanSection from '@components/KanbanSection';
import ServicesSection from '@components/ServicesSection';
import FeaturedPostsSection from '@components/FeaturedPostsSection';
import { freeDownloadData } from '@data/freeDownloadData.js';
import { aboutHomepageData } from '@data/aboutData.js';
import { servicesPageData, serviceItems } from '@data/servicesPageData.js';


function HomePage() {
  return (
    <>
      <SEO/>
      <Hero {...freeDownloadData} />
      <KanbanSection {...aboutHomepageData} />
      <ServicesSection 
        {...servicesPageData.overview} 
        rightColumnItems={serviceItems} 
      />
      <FeaturedPostsSection/>
    </>
  );
}

export default HomePage;
