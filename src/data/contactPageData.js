import { siteMeta } from '@data/siteMeta.js';

export const contactData = {
  titleLine1: "聯絡",
  titleLine2: "與我聯繫",
  paragraph: "有任何問題，以及服務諮詢或合作邀約，都歡迎透過以下方式與我聯絡。我會盡快與您聯繫！",
  imageUrl: "/images/林育如大頭貼日本橫濱 2019.jpg", //建議大小 寬1024px 高473px
  imageAlt: "聯絡頁面示意圖"
};

export const contactLink = [
  {
    id: "contact-mail",
    icon: "IconMail",
    contactName: "Mail",
    contactUrl: `mailto:${siteMeta.outlinks.email}`
  },
  {
    id: "contact-line",
    icon: "LINE",
    contactName: "LINE",
    contactUrl: "#"
  },
  {
    id: "contact-messenger",
    icon: "Messenger",
    contactName: "Messenger",
    contactUrl: "#"
  }
];
