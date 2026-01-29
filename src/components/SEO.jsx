import { siteMeta } from '@data/siteMeta.js';

function SEO({ title, description }) {
  const { siteName } = siteMeta;
  const pageTitle = title ? `${title} - ${siteName}` : siteName;
 
  return (
    <>
      <title>{pageTitle}</title>
      {description && <meta name="description" content={description} />}
    </>
  );
}
 
export default SEO;
