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
    {id: "pro-06", text: "優點六: 技能未來長期實用，不僅限於當下"},
  ],
};

export const selfStudyCourseData = {
  content: [
    {id: "content-01", text: "🪴🪴入門線上課程 (可無限次數觀看 + 未來內容更新)"},
    {id: "content-02", text: "範本+手冊+圖塊集x2+圖表x4"},
    {id: "content-03", text: "必備實用指令快捷鍵速查手冊"},
    {id: "content-04", text: "提案關鍵字表"},
  ],
  chapterLists: [
    {
    id: "chapter-01",
    title: "將熱情變成一種專業",
    breifIntro: "將你對🪴🪴的熱情轉化為可見的內容和風格",
    items: [
      {id: "chapter-01-01", text: "🪴🪴"},
      {id: "chapter-01-02", text: "🪴🪴"},
      {id: "chapter-01-03", text: "🪴🪴"},
      {id: "chapter-01-04", text: "本單元行動"}
    ]
    },
    {
    id: "chapter-02",
    title: "🪴🪴🪴🪴🪴🪴",
    briefIntro: "🪴🪴🪴🪴🪴🪴🪴🪴🪴🪴",
    items: [
      {id: "chapter-02-01", text: "🪴🪴"},
      {id: "chapter-02-02", text: "🪴🪴"},
      {id: "chapter-02-03", text: "🪴🪴"},
      {id: "chapter-02-04", text: "🪴🪴"}
    ]
    },
  ],
  appendixLists: [
    {
    id: "appendix-01",
    title: "工具清單",
    breifIntro: "可以購買到這些工具的網站、工具型號、價格",
    items: [
      {id: "appendix-01-01", text: "🪴🪴"},
      {id: "appendix-01-02", text: "🪴🪴"},
    ]
    },
    {
    id: "appendix-02",
    title: "提案術語快查表",
    breifIntro: "客戶不一定懂行內話，所以提案的時候改用這些詞彙，比較容易讓客戶理解",
    items: [
      {id: "appendix-02-01", text: "🪴🪴"},
      {id: "appendix-02-02", text: "🪴🪴"},
    ]
    }
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

export const selfStudyCourseFaq = {
  faqTitle: "FAQ",
  questionStacks: [
    {
      id: "faq-01",
      title: "自學課與教練課有什麼不同，有提供問題回覆嗎?",
      answer: "自學課程沒有回覆問題或其他的支援，主要是針對想要認識🪴🪴行業、培養興趣、學習🪴🪴必備能力的人"
    },
    {
      id: "faq-02",
      title: "零基礎的人適合嗎?",
      answer: "本課程是特別為零基礎的人設計的，不需要有🪴🪴背景或🪴🪴基礎，人人都可以上手。"
    },
    {
      id: "faq-03",
      title: "會保證我上完課後，一定會成功嗎?",
      answer: "沒有任何課程可以保證你會成功，但是我已經看到很多用這個方法而成功開始踏出🪴🪴生涯的第一步，包含我自己。但是你需要做出努力，不論是練習或修正，否則也無法一定會成功。"
    },
    {
      id: "faq-04",
      title: "課程費用有包含軟體提供嗎?",
      answer: "本課程不提供軟體。學生需自行取得軟體並安裝於電腦上。 \n 課程的軟體版本、下載點與安裝方式都在附錄1：工具清單中提供。 \n 其餘線上訂閱類服務之免費試用版本皆可涵蓋初期所有需求。我會在課程中教你怎麼使用。"
    },
    {
      id: "faq-05",
      title: "課程是架設在哪一個平台? 使用期限多長呢? 可以用電腦、平板電腦或手機觀看嗎?",
      answer: "課程放在知名平台PODIA上，很好使用。\n 影片為主，並以文字補充。\n 你可以按照自己的時間，隨時學習，反覆觀看，編程單元建議準備電腦與鍵盤比較方便操作，平常也可以用平板或手機複習。 \n 沒有期限、不限觀看次數，只要我還在業內，預計還會很久 🙂 如果我退隱，也會開放檔案讓客戶下載，請不用擔心~ "
    },
    {
      id: "faq-06",
      title: "6個單元的影片夠嗎?",
      answer: " 6個單元的影片課程是否足以讓您成為軟裝師？因為課程影片內容經過專業編輯，消除了任何不必要的訊息，因此您不會浪費任何時間。 \n 但自學課程只是開始。您需要投入額外的時間來練習和完成實作。 \n 不過不用擔心，一些學生在3個月內就完成了課程。透過持續的努力，您也有機會很快擁有🪴🪴必備能力。"
    },
    {
      id: "faq-07",
      title: "課程開始時間?",
      answer: "目前登入課程平台已經可以看到全部6個單元。 \n 目前登入課程平台已經可以看到全部6個單元。 \n 可以依照自己喜歡的順序進行，不需要一個單元看完再解鎖下一個單元。"
    },
    {
      id: "faq-08",
      title: "付款成功後?",
      answer: " 你會在48小時內收到我寄的email，標題為「歡迎加入軟裝入門課程」，還有課程平台PODIA寄給你課程連結的email，你就可以馬上登入。 \n 如果超過48小時沒有收到email，請來信客服: sakuya@sakuyal.com 。"
    },
    {
      id: "faq-09",
      title: "可以退款嗎?",
      answer: " 本課程為資訊產品，當你付款登入後，就可以看到所有的內容，所以無法退款。但是我相信課程可以帶給你的轉變與價值遠高於課程的價格，而且很多已經加入的學員都覺得物超所值，已經開始🪴🪴生涯了。如果你想在購買前確定課程適不適合你，可以寫信給我: sakuya@sakuyal.com  。"
    },
    {
      id: "faq-10",
      title: "付款方式是什麼呢?",
      answer: "線上使用信用卡付款。如果需要用匯款支付，可以寫信給我: sakuya@sakuyal.com  。"
    },
  ]
};