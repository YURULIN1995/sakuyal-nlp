// --- 圖示匯入 ---
import IconCakeRoll from '@assets/icons/cake-roll.svg?react';
import IconTeapot from '@assets/icons/teapot.svg?react';
import IconShoppingCart from '@assets/icons/shopping-cart.svg?react';
import IconInfoCircle from '@assets/icons/info-circle.svg?react';
import IconLeaf from '@assets/icons/leaf.svg?react';
import IconDroplet from '@assets/icons/droplet.svg?react';
import IconPlant from '@assets/icons/plant.svg?react';

/**
 * 服務項目的單一資料來源 (Single Source of Truth)
 * 所有服務相關的內容都從這裡管理
 */
export const serviceItems = [
  {
    id: 'service-01',
    iconName: IconTeapot,
    iconId: 'teapot',
    title: "客製個人行銷網站前後台",
    overview: "提供自動單色系調色盤，根據個人使用習慣客製專屬羽量級 sanity.io後台，擺脫厚重的 Wordpress 學習文件。直覺好上手喔🐷！",
    description: '🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷',
    imageUrl: 'https://placehold.co/2560x1677/a9d3a4/4a6e4f',
    imageAlt: '客製個人行銷網站前後台',
    isReversed: false
  },
  {
    id: 'service-02',
    iconName: IconCakeRoll,
    iconId: 'wagashi',
    title: "流程自動化設計＆測試",
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
    title: "Brevo CRM API 串接",
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
    leftParagraph: "好的工具應該貼合使用者的習慣，而不是要求使用者配合複雜反直覺的工具。完全為您客製個人行銷網站的後台。極簡約設計風讓您免除各種素材選擇障礙！",
    leftButtonText: "填寫服務預約表單",
    leftButtonLink: "#",
    imageUrl: "/images/wagashi.jpg",
    imageAlt: "服務總覽示意圖",
  },

  /**
   * 服務頁 (ServicesPage) 的頁首內容
   */
   reservationLink: "#", // 請填入預約服務的連結

  /**
   * 服務頁的服務流程內容
   */
  process: {
    title: "服務流程",
    steps: [
      {
        id: "process-step-01",
        icon: IconInfoCircle,
        title: "了解需求＆選擇技術堆疊",
        description: "🐷🐷Tech-stack🐷🐷🐷🐷，🐷🐷🐷🐷🐷🐷🐷，🐷🐷🐷🐷🐷🐷🐷🐷，🐷🐷🐷🐷🐷🐷🐷🐷。"
      },
      {
        id: "process-step-02",
        icon: IconLeaf,
        title: "製作前台",
        description: "🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷，🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷，🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷。"
      },
      {
        id: "process-step-03",
        icon: IconDroplet,
        title: "製作後台",
        description: "🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷，🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷，🐷🐷🐷🐷🐷🐷。"
      },
      {
        id: "process-step-04",
        icon: IconPlant,
        title: "測試＆交貨",
        description: "🐷🐷🐷🐷🐷🐷🐷🐷，🐷🐷🐷🐷🐷🐷🐷🐷，🐷🐷🐷🐷🐷🐷🐷🐷🐷，🐷🐷🐷🐷🐷🐷🐷🐷。"
      }
    ]
  },
};

export const serviceTestimonials = {
  title: "服務心得分享",
  list: [
  {
    id: 'service-testimonial-01',
    authorName: "A",
    authorTitle: "A身份",
    imageUrl: "https://placehold.co/100/f1f6e9/a9d3a4",
    imageAlt: "A-avatar",
    // 用於首頁「客戶案例分享」的短引言
    highlight: "Lorem ipsum dolor sit amet",
    // 將原來的 text 改名為 fullText，用於「關於我」頁面的完整心得
    fullText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in pulvinar neque. \n\n Phasellus viverra dolor odio, tempor sollicitudin metus laoreet sit amet.",
    // 點擊後可前往的連結，可以是作品集或更詳細的文章 (可選)
    link: "#" 
  },
  {
    id: 'service-testimonial-02',
    authorName: "B",
    authorTitle: "B身份",
    imageUrl: "https://placehold.co/100/f1f6e9/a9d3a4",
    imageAlt: "B-avatar",
    highlight: "Lorem ipsum dolor sit amet",
    fullText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in pulvinar neque. \n\n Phasellus viverra dolor odio, tempor sollicitudin metus laoreet sit amet.",
    link: "#"
  }
  ],
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
    {id: "pro-06", text: "優點六: 技能未來長期實用，不僅限於當下"},
  ],
};



export const beforeAfterData = {
  title: "使用前後比較",
  lists: [
    {
      id: "before",
      text: "使用前",
      iconName: "IconMoodSadSquint",
      items: [
        { id: "b-1", text: "問題1" },
        { id: "b-2", text: "問題2" },
        { id: "b-3", text: "問題3" }
      ]
    },
    {
      id: "after",
      text: "使用後",
      iconName: "IconMoodSmileBeam",
      items: [
        { id: "a-1", text: "改善4" },
        { id: "a-2", text: "改善5" },
        { id: "a-3", text: "改善6" }
      ]
    }
  ]
};

export const servicesFaq = {
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