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
    title: "建立客服AI訓練平台",
    overview: "根據個人使用習慣客製專屬羽量級 sanity.io後台,直覺好上手喔🐷！",
    description: '🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷',
    imageUrl: 'https://placehold.co/2560x1677/a9d3a4/4a6e4f',
    imageAlt: '客製個人行銷網站前後台',
    isReversed: false
  },
  {
    id: 'service-02',
    iconName: IconCakeRoll,
    iconId: 'wagashi',
    title: "客服AI訓練品質迭代優化",
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
    title: "客戶體驗優化諮詢",
    overview: "真正能理解人類的，還是人類。想知道哪服務環節盡量不用AI反而能留住更多客戶嗎？提供什麼工具給第一線客服員能購提昇問題判斷精準率呢？又如何用AI建立客服人員訓練工具，提昇團隊服務品質呢？",
    description: '🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷 \n\n 🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷',
    imageUrl: 'https://placehold.co/2560x1677/a9d3a4/4a6e4f',
    imageAlt: '服務03',
    isReversed: false
  }
];

export const servicesSection = {
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
};

// 服務流程
export const serviceProcess = {
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

};


 export const serviceTestimonials = {
  name: "客戶見證",
  list: [
    { id: 't-01', authorName: "林小姐", authorTitle: "家庭主婦", imageUrl: "https://placehold.co/50/f1f6e9/a9d3a4", imageAlt: "林小姐", fullText: "簡單易學，內容豐富，循序漸進，超有成就感！" },
    { id: 't-02', authorName: "張小姐", authorTitle: "超市店員", imageUrl: "https://placehold.co/50/f1f6e9/a9d3a4", imageAlt: "張小姐", fullText: "老師刪除了大量無效的步驟，我的學習突飛猛進，我也可以輕鬆在一星期內完成作品集了！" },
    { id: 't-03', authorName: "王小姐", authorTitle: "甜點師", imageUrl: "https://placehold.co/50/f1f6e9/a9d3a4", imageAlt: "王小姐", fullText: "省時省力的學習步驟！沒想到一天只花一小時跟著學習單練習竟然在一個月內能完成這麼美的作品！" },
    { id: 't-04', authorName: "李先生", authorTitle: "專案經理", imageUrl: "https://placehold.co/50/f1f6e9/a9d3a4", imageAlt: "李先生", fullText: "原來可以不用那麼累。只要按照老師給的基本模組設計圖和最少必要的步驟按照自己的需求微調就能把畫面做的有個性又實用！" },
    { id: 't-05', authorName: "陳先生", authorTitle: "自由工作者", imageUrl: "https://placehold.co/50/f1f6e9/a9d3a4", imageAlt: "陳先生", fullText: "老師非常懂每個元件製作的基本原理，就算要製作相當繁複的功能，也可以尋求高度客製服務改到滿意為止。非常划算！" },
    { id: 't-06', authorName: "顏小姐", authorTitle: "學生", imageUrl: "https://placehold.co/50/f1f6e9/a9d3a4", imageAlt: "顏小姐", fullText: "老師回覆訊息非常快。通常3小時以內會給予完整的回答。只要事先填好官網的問題欄位描述，上傳截圖，就能迅速收到詳細的解決方案！" },
    { id: 't-07', authorName: "蔡先生", authorTitle: "創業者", imageUrl: "https://placehold.co/50/f1f6e9/a9d3a4", imageAlt: "蔡先生", fullText: "暖心又嚴格的督促與叮嚀。老師非常關心學員的時間與精力分配，除了跟催進度，也會聽取學員的時間分配困難給予更簡化的任務。減輕我的壓力。" },
    { id: 't-08', authorName: "莊小姐", authorTitle: "待業者", imageUrl: "https://placehold.co/50/f1f6e9/a9d3a4", imageAlt: "莊小姐", fullText: "以前都不知道連這種功能都寫的出來！老師不只是教一個固定框架而已，針對學的特別快的學員，會教更多功能的發想與創造的方法！" },
  ]
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