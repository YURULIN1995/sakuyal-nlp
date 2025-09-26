import { siteMeta } from '@data/siteMeta.js';

export const contactData = {
  titleLine1: "聯絡",
  titleLine2: "與我聯繫",
  paragraph: "有任何問題，以及服務諮詢或合作邀約，都歡迎透過以下方式與我聯絡。我會盡快與您聯繫！",
  imageUrl: "https://placehold.co/1024x473/a9d3a4/4a6e4f",
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
