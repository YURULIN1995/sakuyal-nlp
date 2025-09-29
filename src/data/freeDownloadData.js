import { siteMeta } from '@data/siteMeta.js';
import { ctas } from '@data/userExperienceWriting.js';

const { topic, stepCount, caseCount, wastedEffort } = siteMeta.coreTheme;
const mainTitle = `免費下載：${topic}的${stepCount}步驟與${caseCount}個案例`;

export const freeDownloadData = {
  imageUrl: "https://placehold.co/1884x870/a9d3a4/4a6e4f", // 網站主視覺照01的圖片路徑，建議尺寸(寬x高 px)：1884x870
  imageAlt: mainTitle,
  titleLine1: "超過🐷🐷人下載：",
  titleLine2: mainTitle,
  paragraph: "我幫助想要打造高客服留客率客服AI的個人創業者，藉由簡潔、好上手的的AI客服訓練介面，幫助你專住在客戶體驗優化。",
  paragraph2: `不需(${wastedEffort})與花時間到處爬文摸索`,
  paragraph3: "在這份免費下載的PDF檔案裡，我會分享:",
  paragraph4: "",
  features: [ // 請依實際的免費下載內容撰寫。${變數}的內容來自 siteMeta.js，若要更改域顯示的變數文字，請至 siteMeta.js 更改。
    {id: 'feature-01', featureText: `從零開始${topic}的${stepCount}步驟，直接從對的方向開始，不浪費時間與心力。`},
    {id: 'feature-02', featureText: `多數人對於${topic}的誤解與真相。`},
    {id: 'feature-03', featureText: `我幫助某些對象的${caseCount}個案例。`}
  ],
  buttonText: `${ctas.freeDownload.primary}`, // 請參照 userExperienceWriting.js ctas.freeDownload 新增、選擇、變更文案。
  buttonText2: `確認送出，我想${topic}！`,  // 可客製。${topic} 是網站主題，可移除或保留，若要更改網站全域顯示的 topic 文字，請至 siteMeta.js 更改。
  buttonLink: "/free-download/", 
  socialLinks: [ // 請把下列 link: '' 內的 # 替換成實際的外部連結
    { id: 'fb', name: 'Facebook', link: '#', iconClass: 'fab fa-facebook' },
    { id: 'ig', name: 'Instagram', link: '#', iconClass: 'fab fa-instagram' },
    { id: 'email', name: 'Email', link: `mailto:${siteMeta.outlinks.email}`, iconClass: 'fas fa-envelope' },
    { id: 'line', name: 'Line', link: '#', iconClass: 'fab fa-line' }
  ]
};
