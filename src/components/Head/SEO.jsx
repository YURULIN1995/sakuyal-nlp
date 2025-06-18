function SEO({ title, description }) {
    const siteName = "Sakuyal 自然語言煉金術";
    // 如果傳入了 title prop，就用 "頁面標題 - 網站名稱"，否則只用網站名稱
    const pageTitle = title ? `${title} - ${siteName}` : siteName;
  
    return (
      <>
        <title>{pageTitle}</title>
        {description && <meta name="description" content={description} />}
      </>
    );
  }
  
  export default SEO;