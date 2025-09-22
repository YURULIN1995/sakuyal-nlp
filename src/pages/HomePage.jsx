import ViewportMeta from '@components/Head/ViewportMeta';
import SEO from '@components/Head/SEO';
import Hero from '@components/Hero';
import KanbanSection from '@components/KanbanSection';
import ServicesSection from '@components/ServicesSection';
import FeaturedPostsSection from '@components/FeaturedPostsSection';
import { freeDownloadData } from '@data/freeDownloadData.js';
import { aboutHomepageData } from '@data/aboutData.js';
import { servicesSection, serviceItems } from '@data/servicesPageData.js';


function HomePage() {
  return (
    <>
      <ViewportMeta/>
      <SEO/>
      <Hero {...freeDownloadData} />
      <KanbanSection {...aboutHomepageData} />
      <ServicesSection 
        {...servicesSection.overview} 
        rightColumnItems={serviceItems} 
      />
      <FeaturedPostsSection/>
    </>
  );
}

export default HomePage;