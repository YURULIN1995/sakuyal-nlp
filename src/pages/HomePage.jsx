import Hero from '@components/Hero';
import SEO from '@components/Head/SEO';

function HomePage() {
  return (
    <>
      <SEO title="首頁" description="歡迎來到 Sakuyal 自然語言煉金術..." />
      <Hero />
      <h2>歡迎 (來自 HomePage)</h2>
      <p>在此撰寫內文</p>
    </>
  );
}
export default HomePage;