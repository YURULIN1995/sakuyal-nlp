import { siteMeta } from '@data/siteMeta.js';

export const disclaimerData = {
  content: [
    {
      type: 'paragraph',
      text: `歡迎您來到 ${siteMeta.siteName}（以下稱「本網站」）。當您瀏覽和使用本網站時，即表示您同意遵守以下免責聲明。若您不同意任何條款，請立即停止使用本網站。`
    },
    {
      type: 'heading',
      text: '資訊的準確性'
    },
    {
      type: 'paragraph',
      text: '本網站所提供的所有內容，包括但不限於文章、教學、評論及其他資料，僅供參考與資訊分享之用。我們力求資訊的準確與即時，但無法保證所有內容的完整性、可靠性或適用性。任何因信賴本網站內容而導致的決策或行為，其風險應由您自行承擔。'
    },
    {
      type: 'heading',
      text: '外部連結'
    },
    {
      type: 'paragraph',
      text: '本網站可能包含指向第三方網站的連結。這些連結僅為方便使用者而提供。本網站無法控制這些外部網站的內容，亦不對其準確性、合法性或安全性負責。點擊任何外部連結，即表示您將自行承擔一切風險。'
    },
    {
      type: 'heading',
      text: '無專業建議'
    },
    {
      type: 'paragraph',
      text: '本網站的內容不構成任何形式的專業建議（包括但不限於法律、財務、醫療或技術建議）。在根據本網站資訊採取任何行動前，建議您諮詢相關領域的專業人士。'
    },
    {
      type: 'heading',
      text: '責任限制'
    },
    {
      type: 'paragraph',
      text: '在任何情況下，對於因使用或無法使用本網站所造成的任何直接、間接、附帶、衍生性或懲罰性的損害，本網站及其經營者概不負責。'
    },
    {
      type: 'heading',
      text: '聲明修訂'
    },
    {
      type: 'paragraph',
      text: '本網站保留隨時修改本免責聲明的權利，恕不另行通知。建議您定期查閱以獲取最新資訊。'
    }
  ]
};