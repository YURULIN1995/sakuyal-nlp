import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// 建立與您 Sanity 專案的連線
export const client = createClient({
  // 請替換成您在 sanity.json 或 manage.sanity.io 中找到的 Project ID
  projectId: 'j34l0bzq', 
  // 您的 dataset 名稱，通常是 'production'
  dataset: 'production',         
  // `false` 可確保您拿到最新的資料，`true` 則可以利用 CDN 快取加速
  useCdn: true,                  
  // 建議使用您開始專案的日期，格式為 YYYY-MM-DD
  apiVersion: '2025-10-15',      
});

// 建立一個 imageUrlBuilder 實例，以便在您的元件中使用
const builder = imageUrlBuilder(client);

/**
 * 從 Sanity 的圖片物件產生圖片網址的輔助函式
 * @param {object} source - 從 Sanity API 拿到的圖片物件 (例如 post.mainImage)
 * @returns {object} - 一個可以用來產生 URL 的 builder 物件
 */
export function urlFor(source) {
  return builder.image(source);
}
