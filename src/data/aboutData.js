import { siteMeta } from '@data/siteMeta.js';
import { ctas } from '@data/userExperienceWriting.js';

export const aboutHomepageData = {
  titleLine1: `${siteMeta.siteName}`, // 從siteMeta.js 代入站名
  titleLine2: null, //副標題：網站宗旨，可塡，例："培育茶道專家的搖籃"。亦可留白，填入 null。
  paragraph: "茶之心協助來自不同背景的學習者，悠遊於裏千家茶道的優美境地，為您的茶道旅程提供清晰的理解與實用的指引。我們助您不僅學習精準的點前(てまえ, temae)形式，更能真實體會茶之「心」(こころ, kokoro)——領略器物(どうぐ, dōgu)之美、鑑賞時節之韵，並感受其中蘊含的款待。體驗一條通往文化深度與個人滋養的獨特路徑，隨時隨地皆可探尋。讓我們為您構築學習的階梯，使您得以專注領略茶道的靜謐之美與內在修為。", // 請您撰寫網站宗旨。
  buttonText: `${ctas.about.secondary}`, // 請在userExperienceWriting.js ctas about裡新增、選擇、變更與 按鈕連結 相應的名稱。
  buttonLink: "/about", // 預設是「關於我」的連結,可變更。變更請參照 App.jsx 各頁面路由的名稱。
};

export const authorData = {
  titleLine: `關於${siteMeta.siteAuthorName}`,
  paragraph: `Hi,我是${siteMeta.siteAuthorName}! \n 我是個有💐年經驗的🌿🌿🌿🌿🌿🌿🌿也是一個🐷🐷培訓教練，曾在🪴🪴🪴🪴從事☘️☘️☘️☘️，在工作中最喜歡🌱的部分，因此開始🌷🌷🌷🌷🌷🌷。 \n 我已經幫助🌼位學生從零開始☘️☘️☘️☘️生涯，許多人成功轉職或開始接案，即使他們沒有相關🎍🎍背景或從來沒有學過🌹🌹🌹🌹。 \n 我能為你提供清晰的步驟和技巧，幫助你節省大量摸索、試錯的時間。幫助想要${siteMeta.coreTheme.topic}的你，將你的興趣轉為專業，有機會從事夢想中的工作。`, // 請撰寫，如有分行請使用分行符號 \n 區隔
  buttonText: `${ctas.portfolio.primary}`, // // 請在userExperienceWriting.js ctas portfolio 裡新增、選擇、變更與 按紐連結 相應的名稱。
  buttonLink: "/portfolio", // 預設是「作品集」的連結,可客製
  imageUrl: "https://placehold.co/1108x836/a9d3a4/4a6e4f", // 網站主視覺照02的圖片路徑，建議尺寸：1108x836 px 橫式
  imageAlt: `${siteMeta.siteAuthorName}`,
};