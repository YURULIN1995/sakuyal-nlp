export const siteMeta = {
  siteName: "Sakuyal 自然語言煉金術", // 請填入貴站站名
  siteAuthorName: "🐷🐷", // 請填入站主稱呼
  // 若您有登記公司行號，請於""內填寫企業名稱與統一編號
  // businessName: "朔夜有限公司", // 請填入企業名稱
  // unifiedBusinessNo: "26758904", // 請填入統一編號
  // 網站核心主題與關鍵字，請依貴站的實際情形填寫
  logoUrl: '/images/logo/sakuyal_logo_transparent_47x63.svg', //請更換為您的網站大Logo的圖片路徑
  coreTheme: {
    topic: "打造高客服留客率客服AI", //請填入網站的核心主題或主要服務，做到某件事/成為某個職業角色。例如："學會沖煮一杯好咖啡"或"成為軟裝師"
    stepCount: "x", //請填入主要賣點的步驟或方法數量，例如："5"
    caseCount: "y", //請填入主要賣點的案例或範例數量，例如："3"
    wastedEffort: "白費功夫", //請填入目標客群為了達成 'topic' 而常做的無效努力，例如："考一堆證照"
  },

  outlinks: {
    instagram:
    {
      name: "🐷🐷IG", // IG名稱，選填
      url: "#", // IG網址，選填
    }, 
    facebookFreeGroup:
    {
      name: "🐷🐷FB社團", //facebook免費社團名稱, 選填
      url: "#", //facebook免費社團網址, 選填
    }, 
    email: "sakuya@sakuyal.com", //請填入聯絡用電子郵件信箱
    reservationLink: "#", //請填入預約服務的連結
  },
 
  price: {
    selfStudyCourse: 9000, // 副產品：自學課程（selfStudyCourse），官網原價 NT$9000。您可以自行填入原價。若要變更副產品名稱，請洽開發人員 sakuyal 同步修改 upsell.jsx。
    selfStudyCourseUpsell: 1080, // 副產品：自學課程特賣（selfStudyCourseUpsell），特賣頁特價 NT$1080。您可以自行填入特價。
  },

  pages: { // SEO 文字，各頁標題與頁面描述，必填
    home: {
      title: null,
      description: "歡迎來到茶之心，一個培育專業茶道師的搖籃！在此您不僅學會品茶，裏千家茶道，還能學習各種和西和璧的Fine Dining 餐茶搭配！" // 請置換 description 內的描述為符合貴站的內容，字數≤30中文字，將顯示於 Google 搜尋引擎摘要。
    },
    about: {
      title: "關於我",
      description: "認識 Sakuyal 自然語言煉金術的創辦人，以及我們的品牌故事與理念。" // 請置換內容
    },
    services: {
      title: "服務項目",
      description: "探索我們提供的客製化網站開發、內容管理系統整合與數位行銷策略服務。" // 請置換內容
    },
    portfolio: {
      title: "作品集",
      description: "瀏覽我們過去的成功案例，了解我們如何為客戶打造高效能、高質感的網站。" // 請置換內容
    },
    blog: {
      title: "文章",
      description: "閱讀關於網站開發、SEO 優化與數位行銷的最新趨勢與深度分析文章。" // 請置換內容
    },
    contact: {
      title: "聯絡",
      description: "準備好開始您的專案了嗎？立即聯繫我進行免費諮詢。" // 請置換內容
    },
    privacyPolicy: {
      title: "隱私權政策",
      description: "歡迎您來到 Sakuyal 自然語言鍊金術，為了讓您能夠安心使用本網站的各項服務與資訊，特此向您說明本網站的隱私權保護政策，以保障您的權益。" //請更改為貴站站名
    },
    disclaimer: {
      title: "免責聲明",
      description: "我在上述所說，以及網站所分享的結果，都是我個人的結果。請務必理解我的結果並非典型。" // 請置換為免責聲明之摘要
    },
    copyright: {
      title: "著作權聲明",
      description: "本網站（Sakuyal 自然語言煉金術）上刊載的所有內容，除著作權法規定不得為著作權之標的（如法律、命令、公務員撰擬之講稿、新聞稿等--請參考著作權法第9條規定）外，其他包括但不限於文字、圖片、影像、音訊、軟體、商標及網站架構，皆由本網站依法擁有其智慧財產權。" //請更改為貴站站名與著作權聲明摘要
    },
    refundPolicy: {
        title: "退款政策",
        description: "感謝您選擇 Sakuyal 自然語言煉金術 的教練課程。我們很開心能陪伴您一起打造理想中的品牌網站。為了保障每位學員的學習權益，也讓課程資源被妥善運用，我們在合理清晰的退費政策基礎上，提供課程服務。" //請更改為貴站站名與商品或服務內容
    },
    freeDownload: {
        title: "免費下載",
        description: "下載我們的免費資源，開始優化您的網站。" // 請置換內容
    },
    upsell: {
        title: "加購優惠",
        description: "只有這個頁面有比官網便宜很多的服務加購優惠唷！關閉此頁就沒有了喔！" // 請置換內容
    }
  }
};
