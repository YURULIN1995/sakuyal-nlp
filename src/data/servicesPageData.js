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
};

export const targetAudienceData = {
  title: "適用對象",
  lists: [
    {
      id: "applicable",
      text: "適用者",
      iconName: "IconCheck",
      items: [
        { id: "applicable-01", text: "描述一" },
        { id: "applicable-02", text: "描述二" },
        { id: "applicable-03", text: "描述三" }
      ]
    },
    {
      id: "notApplicable",
      text: "不適用者",
      iconName: "IconX",
      items: [
        { id: "notApplicable-01", text: "描述四" },
        { id: "notApplicable-02", text: "描述五" },
        { id: "notApplicable-03", text: "描述六" }
      ]
    }
  ],
  problems: [
    {id: "problem-01", text: "困擾一"},
    {id: "problem-02", text: "困擾二"},
    {id: "problem-03", text: "困擾三"},
    {id: "problem-04", text: "困擾四"}
  ],
  effects: [
    {id: "effect-01", text: "效果一"},
    {id: "effect-02", text: "效果二"},
    {id: "effect-03", text: "效果三"},
    {id: "effect-04", text: "效果四"}
  ],
  pros: [
    {id: "pro-01", text: "優點一: 不再只學理論，學會實際動手做"},
    {id: "pro-02", text: "優點二: 有具體步驟，知道每個動作為何重要"},
    {id: "pro-03", text: "優點三: 🪴🪴🪴流程與步驟公開"},
    {id: "pro-04", text: "優點四: 不用擔心背景，誰都可以參加，就算是沒🪴🪴基礎、不懂🪴🪴的你"},
    {id: "pro-05", text: "優點五: 短短⭐堂課就能學到🐷🐷必備的🪴🪴及🪴🪴方法"},
    {id: "pro-06", text: "優點六: 技能未來長期實用，不僅限於當下"}
  ]
};

export const beforeAfterData = {
  title: "使用前後比較",
  lists: [
    {
      id: "before",
      text: "使用前",
      iconName: "IconMoodSadSquint",
      items: [
        { id: "before-01", text: "問題一" },
        { id: "before-02", text: "問題二" },
        { id: "before-03", text: "問題三" }
      ]
    },
    {
      id: "after",
      text: "使用後",
      iconName: "IconMoodSmileBeam",
      items: [
        { id: "after-01", text: "改善四" },
        { id: "after-02", text: "改善五" },
        { id: "after-03", text: "改善六" }
      ]
    }
  ]
};

export const faq = {
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
};