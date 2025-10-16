import { urlFor } from '@/sanity.client.js';

// 定義您希望產生的各種圖片寬度版本
const imageWidths = [300, 768, 800, 1024, 1477];

/**
 * ResponsiveImage 元件
 * 角色：接收一個 Sanity 圖片物件，並將其渲染成一個帶有 srcset 和 sizes 的 <img> 標籤，
 * 讓瀏覽器可以根據裝置寬度下載最適合的圖片版本。
 * @param {object} source - 從 Sanity 傳來的圖片物件 (例如 post.mainImage)
 * @param {string} sizes - 告訴瀏覽器圖片在不同視窗寬度下的顯示尺寸
 * @param {string} className - 傳遞給 <img> 標籤的 class
 * @param {string} loading - 圖片的載入策略，預設為 'lazy'
 */
function ResponsiveImage({ source, sizes, className, loading = 'lazy' }) {
  // 安全檢查：如果沒有傳入 source，就不要渲染任何東西
  if (!source) {
    return null;
  }

  // 步驟 1：產生 srcset 字串
  // 遍歷我們定義的寬度，為每個寬度產生一個對應的圖片 URL
  const srcSet = imageWidths
    .map(width => `${urlFor(source).width(width).auto('format').url()} ${width}w`)
    .join(', ');

  // 步驟 2：使用一個較小的尺寸作為預設的 src，以防瀏覽器不支援 srcset
  const defaultSrc = urlFor(source).width(530).auto('format').url();

  return (
    <img
      src={defaultSrc}      // 預設圖片來源
      srcSet={srcSet}       // 響應式圖片來源組合
      sizes={sizes}         // 圖片顯示尺寸提示
      alt={source.alt || ' '} // 確保永遠有 alt 屬性，即使是空的
      className={className}
      loading={loading}
    />
  );
}

export default ResponsiveImage;