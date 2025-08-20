// src/data/servicesPageData.js

// --- 圖示匯入 ---
import IconCakeRoll from '@assets/icons/cake-roll.svg?react';
import IconTeapot from '@assets/icons/teapot.svg?react';
import IconShoppingCart from '@assets/icons/shopping-cart.svg?react';
import IconInfoCircle from '@assets/icons/info-circle.svg?react';

/**
 * 服務項目的單一資料來源 (Single Source of Truth)
 * 所有服務相關的內容都從這裡管理
 */
export const serviceItems = [
  {
    id: 'service-01',
    iconName: IconTeapot,
    iconId: 'teapot',
    title: "服務01",
    overview: "🐷🐷🐷🐷🐷🐷，🐷🐷🐷🐷、🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷，🐷🐷🐷🐷🐷🐷。🐷🐷🐷🐷🐷🐷，🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷。",
    description: '🐷🐷�🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷',
    imageUrl: 'https://placehold.co/2560x1677/a9d3a4/4a6e4f',
    imageAlt: '服務01',
    isReversed: false
  },
  {
    id: 'service-02',
    iconName: IconCakeRoll,
    iconId: 'wagashi',
    title: "服務02",
    overview: "🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷！🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷，🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷。",
    description: '🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷',
    imageUrl: 'https://placehold.co/2560x1677/a9d3a4/4a6e4f',
    imageAlt: '服務02',
    isReversed: true
  },
  {
    id: 'service-03',
    iconName: IconShoppingCart,
    iconId: 'shoppingCart',
    title: "服務03",
    overview: "🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷，🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷。🐷🐷🐷🐷🐷🐷，🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷。",
    description: '🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷 \n\n 🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷',
    imageUrl: 'https://placehold.co/2560x1677/a9d3a4/4a6e4f',
    imageAlt: '服務03',
    isReversed: false
  }
];

export const servicesPageData = {
  /**
   * 首頁「服務」區塊的內容
   */
  overview: {
    leftTitle: "服務",
    leftParagraph: "無論你是想透過靜心茶道找回平靜，在手作和菓子中發揮創意，或是探索極致的抹茶風味，我們都能提供專業細緻的體驗。",
    leftButtonText: "填寫服務預約表單",
    leftButtonLink: "#",
    imageUrl: "/images/wagashi.jpg",
    imageAlt: "服務總覽示意圖",
  },

  /**
   * 服務頁 (ServicesPage) 的頁首內容
   */
  header: {
    titleLine: "服務項目",
    buttonText: "預約諮詢",
    buttonLink: "#"
  },

  /**
   * 服務頁的服務流程內容
   */
  process: {
    title: "服務流程",
    steps: [
      {
        id: "process-step-01",
        icon: IconInfoCircle,
        title: "步驟01",
        description: "🐷🐷🐷🐷🐷🐷🐷🐷🐷，🐷🐷🐷🐷🐷🐷🐷，🐷🐷🐷🐷🐷🐷🐷🐷，🐷🐷🐷🐷🐷🐷🐷🐷。"
      },
      {
        id: "process-step-02",
        icon: IconInfoCircle,
        title: "步驟02",
        description: "🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷，🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷，🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷。"
      },
      {
        id: "process-step-03",
        icon: IconInfoCircle,
        title: "步驟03",
        description: "🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷，🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷，🐷🐷🐷🐷🐷🐷。"
      },
      {
        id: "process-step-04",
        icon: IconInfoCircle,
        title: "步驟04",
        description: "🐷🐷🐷🐷🐷🐷🐷🐷，🐷🐷🐷🐷🐷🐷🐷🐷，🐷🐷🐷🐷🐷🐷🐷🐷🐷，🐷🐷🐷🐷🐷🐷🐷🐷。"
      }
    ]
  },

  /**
   * 服務頁的常見問題內容
   */
  faq: {
    faqTitle: "常見問題",
    questionStacks: [
      {
        id: "faq-01",
        title: "問題01",
        answer: "答案01"
      },
      {
        id: "faq-02",
        title: "問題02",
        answer: "答案02"
      },
      {
        id: "faq-03",
        title: "問題03",
        answer: "答案03"
      },
    ]
  }
};