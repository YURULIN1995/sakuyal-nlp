import { siteMeta } from '@data/siteMeta.js';
import { ctas } from '@data/userExperienceWriting.js';

export const aboutHomepageData = {
  titleLine1: `${siteMeta.siteName}`, // 從siteMeta.js 代入站名
  titleLine2: null, //副標題：網站宗旨，可塡，例："培育茶道專家的搖籃"。亦可留白，填入 null。
  paragraph: 'Sakuyal 自然語言鍊金術 幫助來自不同領域的個人品牌創業者們，為他們解決各種技術問題，讓他們能夠更順利的完成高留客率客服AI。 \n 除了客製精簡後台，更運用AAO優化提升搜尋引擎AI摘要曝光率，以及服務智慧建議儀表板，留住每個環節可能流失的客戶，再次轉換成實際客戶。打造可以24小時、不斷進化的系統，而不用浪費時間學習複雜技術，能夠更專注優化自己的服務流程。', // 請您撰寫網站宗旨。
  buttonText: `${ctas.about.secondary}`, // 請在userExperienceWriting.js ctas about裡新增、選擇、變更與 按鈕連結 相應的名稱。
  buttonLink: "/about", // 預設是「關於我」的連結,可變更。變更請參照 App.jsx 各頁面路由的名稱。
};

export const authorData = {
  titleLine: `關於${siteMeta.siteAuthorName}`,
  paragraph: `我是個有5年經驗的自然語言工程師，也是AI智能客服訓練師。最擅長NER（命名實體識別）與情緒分析（Sentiment Analysis）任務。在工作中最喜歡優化人機互動人性化的部分。一直以來嚮往能夠自由選擇技術架構，有充分的時間學習更精湛的軟體工藝的生活。的因此於2015年9月創立Sakuyal 自然語言鍊金術網站。 \n 我已經幫助🌼位個人品牌創業者從零開始AI數位轉型，即使他們沒有軟體相關背景或從來沒有學過AI工具。 \n 我能為你提供清晰的步驟和技巧，幫助你節省大量摸索、試錯的時間。幫助想要${siteMeta.coreTheme.topic}的你，讓你的個人品牌網站兼顧服務個人化與規模化。`, // 請撰寫，如有分行請使用分行符號 \n 區隔
  buttonText: `${ctas.portfolio.primary}`, // // 請在userExperienceWriting.js ctas portfolio 裡新增、選擇、變更與 按紐連結 相應的名稱。
  buttonLink: "/portfolio", // 預設是「作品集」的連結,可客製
  imageUrl: "images/林育如大頭貼 日本 醫療翻譯員時期.jpeg", // 網站主視覺照02的圖片路徑，建議尺寸：1108x836 px 橫式
  imageAlt: `${siteMeta.siteAuthorName}`,
};