import { siteMeta } from './siteMeta.js';

const { topic, stepCount, caseCount } = siteMeta.coreTheme;
const mainTitle = `免費下載：${topic}的${stepCount}步驟與${caseCount}個案例`;

export const freeDownloadData = {
  imageUrl: "https://placehold.co/470x300/a9d3a4/4a6e4f",
  imageAlt: mainTitle,
  titleLine1: "超過🐷🐷人下載：",
  titleLine2: mainTitle,
  paragraph: "🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷。",
  paragraph2: "不需(白費功夫)與花時間到處爬文摸索",
  paragraph3: "在這份免費下載的PDF檔案裡，我會分享:",
  paragraph4: "",
  features: [
    {id: 'feature-01', featureText: `從零開始${topic}的${stepCount}步驟，直接從對的方向開始，不浪費時間與心力。`},
    {id: 'feature-02', featureText: `多數人對於${topic}的誤解與真相。`},
    {id: 'feature-03', featureText: `我幫助某些對象的${caseCount}個案例。`}
  ],
  buttonText: "免費下載 ⇒",
  buttonText2: `確認送出，我想${topic}！`,
  buttonLink: "/free-download/", 
  socialLinks: [
    { id: 'fb', name: 'Facebook', link: '#', iconClass: 'fab fa-facebook' },
    { id: 'ig', name: 'Instagram', link: '#', iconClass: 'fab fa-instagram' },
    { id: 'email', name: 'Email', link: 'mailto:sakuya@sakuyal.com', iconClass: 'fas fa-envelope' },
    { id: 'line', name: 'Line', link: '#', iconClass: 'fab fa-line' }
  ]
}; 
