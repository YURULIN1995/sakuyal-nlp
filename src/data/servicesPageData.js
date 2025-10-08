// --- 圖示匯入 ---
import IconMessageCircleUser from '@assets/icons/message-circle-user.svg?react';
import IconBrowser from '@assets/icons/browser.svg?react';
import IconBusinessplan from '@assets/icons/businessplan.svg?react';
import IconInfoCircle from '@assets/icons/info-circle.svg?react';
import IconVectorBezier2 from '@assets/icons/vector-bezier-2.svg?react';
import IconAutomation from '@assets/icons/automation.svg?react';
import IconTransform from '@assets/icons/transform.svg?react';
import IconPlant from '@assets/icons/plant.svg?react';

/**
 * 服務項目的單一資料來源 (Single Source of Truth)
 * 所有服務相關的內容都從這裡管理
 */
export const serviceItems = [
  {
    id: 'service-01',
    iconName: IconMessageCircleUser,
    title: "人性化 AI 服務流程設計",
    overview: "導入人類參與循環，協助你訓練出符合你的決策與說話風格的AI助手。你隨時都能介入AI服務流程，你的客戶也可以隨時選擇直接與您對話。",
    description: '陪伴你建立出隨時都能指導/修正AI生成結果的服務流程。你可以藉由標籤、評價按鈕、給予文字反饋等方式教育你的AI助手。我也能協助你調整模型，使模型的表現更符合你的特殊需求。',
    imageUrl: '/images/support.jpg',
    imageAlt: '人性化 AI 服務流程設計',
    isReversed: false
  },
  {
    id: 'service-02',
    iconName: IconBrowser,
    title: "品牌網站建置",
    overview: "除了為你節省主機費與網站維護費，還提供精簡後台、AI內容提示助手、單色系自動配色工具，讓你輕鬆管理品牌網站。",
    description: '我精選的技術組合讓您免繳傳統主機的固定月費，又能得到企業級的資安防護，每一塊錢都花在刀口上！ \n 直覺好上手的網站客製化後台，讓你跟厚重的操作文件說bye-bye! \n 獨家AI內容助手協助你，從選題到撰寫專業文案，高效產出不卡關！ \n 如果你和我一樣為配色傷透腦筋，使用單色自動調色盤，選一個您最愛的顏色，一鍵更換全站風格！',
    imageUrl: 'images/website.jpg',
    imageAlt: '品牌服務載體網站建置',
    isReversed: true
  },
  {
    id: 'service-03',
    iconName: IconBusinessplan,
    title: "AI 驅動型客戶轉換流程",
    overview: "透過 AI 代理優化(AAO)，讓您的內容搶佔 Google AI 摘要，最大化品牌能見度。後台整合分析所有互動數據，揪出服務流失點，並提供具體建議，助您持續優化成交率。",
    description: '你的文案與文章可以更符合搜尋引擎AI摘要的格式，讓它為客戶強力主打您的產品與服務。你可以利用這套系統分析行銷數據大幅節省人力與時間成本，依照AI的具體建議改善服務的每個環節，提昇留客率！',
    imageUrl: 'images/dashboard.jpg',
    imageAlt: 'AI 驅動型客戶轉換流程',
    isReversed: false
  }
];

export const servicesSection = {
  /**
   * 首頁「服務」區塊的內容
   */
  overview: {
    leftTitle: "服務",
    leftParagraph: "客製網站後台",
    leftButtonText: "填寫服務預約表單",
    leftButtonLink: "#",
    imageUrl: "/images/programming.jpg",
    imageAlt: "服務總覽示意圖",
  },
};

// 服務流程
export const serviceProcess = {
title: "服務流程",
steps: [
  {
    id: "process-step-01",
    icon: IconMessageCircleUser,
    title: "預約諮詢",
    description: "本服務分4期收款。確認需求後，提案方案。選擇方案後請付頭款，約定分期驗收項目與時間。"
  },
  {
    id: "process-step-02",
    icon: IconVectorBezier2,
    title: "服務設計",
    description: "討論您既有的服務設計，提出優化流程，再詳談哪些環節必須由真人服務才能獲取客戶信任。針對有必要、重複性高的任務規劃自動化流程。"
  },
  {
    id: "process-step-03",
    icon: IconBrowser,
    title: "網站建置",
    description: "請依服務說明手冊提供站主基本資料。建置網站前後台，待功能驗收無誤並付清二期款，網站即上線並交付後台帳密。交付後 7 天內請觀看教學影片操作，任何操作問題請於網站交付後 14 天內提出。"
  },
  {
    id: "process-step-04",
    icon: IconTransform,
    title: "AI 驅動型客戶轉換系統製作",
    description: "建置AI 驅動型客戶轉換系統，串接到您的個人網站上。待功能驗收無誤後，請繳清三期款。將交付AI 驅動型客戶轉換系統儀表板後台帳密。佈署後7天內請觀看教學影片操作，任何操作問題請於系統交付後 14 天內提出。"
  },
  {
    id: "process-step-05",
    icon: IconAutomation,
    title: "總驗收與程式碼交付",
    description: "請逐一檢查各項功能均能正常運作。功能驗收無誤，請繳清尾款。將交付網站的程式碼。網站與系統於交付後1年內享有免費保固。"
  },
  
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
        { id: "applicable-01", text: "已經有自己的品牌網站的人。" },
        { id: "applicable-02", text: "雖然還沒蓋網站，已經有自己的服務與產品的人，想要跳出平台競爭的人。" },
        { id: "applicable-03", text: "想要擺脫厚重的說明書與技術專有名詞，打造從客戶的感受為出發點的人性化自動化系統。" },
        { id: "applicable-04", text: "將時間與精力的產出最大化，專住在少數真正影響品牌留客率的任務。" },
        { id: "applicable-05", text: "願意投資自己，真心想改變的人。" }
      ]
    },
    {
      id: "notApplicable",
      text: "不適用者",
      iconName: "IconX",
      items: [
        { id: "notApplicable-01", text: "缺乏客戶信任建立意識的人" },
        { id: "notApplicable-02", text: "沒有自己的服務與產品的人" },
        { id: "notApplicable-03", text: "沒有建立服務標準流程的人" },
        { id: "notApplicable-04", text: "無法花時間與心力給予AI反饋的人" },
        { id: "notApplicable-05", text: "捏造假見證的人" }
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