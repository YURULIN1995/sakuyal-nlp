import ArrowRightIcon from '@assets/icons/arrow-right.svg?react';

const generateExcerpt = (contentArray, maxLength = 53) => {
  if (!contentArray || contentArray.length === 0) {
    return '';
  }

  // 將所有區塊的純文字內容合併
  const allText = contentArray.map(block => {
    if (block.children) {
      return block.children.map(span => span.text).join('');
    }
    if (block.items) {
      // 處理列表項目
      return block.items.map(itemSpans => 
        itemSpans.map(span => span.text).join('')
      ).join(' ');
    }
    return '';
  }).join(' ');

  const plainText = allText.replace(/<[^>]*>/g, '');
  const excerpt = plainText.slice(0, maxLength);

  if (plainText.length > maxLength) {
    return excerpt + '...';
  }

  return excerpt;
};

export const postsSource = [
  {
    id: 'post1',
    slug: '/postpage',
    imageUrl: '/images/service-work-flow-design.jpg',
    imageAlt: '服務流程設計',
    category: '人性化AI',
    publishTime: '2025-10-08',
    title: '打造5倍高留客率AI的個3大關鍵思維',
    content: [
        { type: 'p', children: [{ text: '您是否曾經遇到AI對你的生活造成困擾的情況呢？以下歸納常見的客服AI設計問題，來看看如何把 AI改的更聰明、更有人性吧！'}] },
        { type: 'h2', children: [{ text: '01:釐清「人性化」終點：你的AI是在服務人，還是取代人？' }] },
        { type: 'p', children: [{ text: '3大原則' }] },
        { type: 'h3', children: [{ text: '原則1：' }, { text: '真實性 > 偽裝', marks: ['strong'] }] },
        { type: 'p', children: [{ text: '與其用預錄影片假裝是直播研討會 ，不如大方承認這是「可隨時觀看的線上工作坊」，並利用 AI 在問答環節協助分類問題、或在使用者註冊後，根據他的興趣推薦特定段落。' }, { text: '誠實的AI，比虛偽的真人更能贏得信賴。', marks: ['strong'] }] },
        { type: 'h3', children: [{ text: '原則2：' }, { text: '有效性 > 即時性', marks: ['strong'] }] },
        { type: 'p', children: [{ text: '客戶要的不是一個24小時回覆罐頭訊息 的機器人，而是一個能' }, { text: '真正解決問題', marks: ['strong'] }, { text: '的管道。AI 的首要任務應該是精準判斷問題，如果無法獨立解決，就應清楚地告知使用者「我已將您的問題轉交給課程顧問/技術專家，我們會在N小時內回覆您」，而不是用無效的答案鬼打牆 。這能有效管理客戶期待，避免因無效溝通而流失。' }] },
        { type: 'h3', children: [{ text: '原則3：' }, { text: '可靠性 > 創造性', marks: ['strong'] }] },
        { type: 'p', children: [{ text: '對於資訊型產品，客服 AI 絕不能隨意產生它不確定的答案 。例如，當被問到「請問老師的A課程和B課程有什麼不同？」時，AI 如果無法根據資料回答，寧可說「這是一個好問題，我需要請課程顧問為您做更詳細的比較」，也絕不能自己「創造」一個不存在的優惠方案或課程內容。' }, { text: '一次無法兌現的承諾，就足以永久摧毀客戶的信賴。', marks: ['strong'] }] },
        { type: 'h2', children: [{ text: '02:為何你的AI總是被封鎖？用「逐步實驗」打造客戶願意一再互動的AI' }] },
        { type: 'p', children: [{ text: '為建立信賴感的具體步驟' }] },
        { type: 'h3', children: [{ text: '步驟1：用「真人資料」教AI學會同理心' }] },
        { type: 'p', children: [{ text: '要累積的，不只是冰冷的問答資料庫，而是你' }, { text: '最優秀的課程顧問、客服人員與客戶的真實互動紀錄', marks: ['strong'] }, { text: ' 。讓 AI 從中學習的不是「標準答案」，而是' }, { text: '溝通的語氣、安撫焦慮學員的方式、以及挖掘學員真正需求的提問技巧', marks: ['strong'] }, { text: '。這樣的 AI 在互動時才會有「人味」，而不是「機器味」。' }] },
        { type: 'h3', children: [{ text: '步驟2：用「特化型AI」在單點取得極致精準' }] },
        { type: 'p', children: [{ text: '客戶封鎖 AI，往往是因為它「什麼都想管，卻什麼都做不好」。與其追求一個萬能的 AI ，不如打造一個' }, { text: '只專注於一件事並做到極致的特化型AI', marks: ['strong'] }, { text: '。' }] },
        { type: 'p', children: [{ text: '資訊產品舉例：' }] },
        { type: 'ul', items: [
            [{ text: '案例A：一個只負責「' }, { text: '課程推薦', marks: ['strong'] }, { text: '」的 AI。它能深度理解用戶的學習背景和目標，從數百堂課中推薦最適合的三門，而不是隨便丟連結。' }],
            [{ text: '案例B： 一個只處理「' }, { text: '軟體安裝與環境設定', marks: ['strong'] }, { text: '」問題的 AI。對於電腦繪圖、程式設計等課程，這是學員最常見的痛點。一個能精準指導的 AI，會大幅提升學員的初期體驗，降低放棄率。' }]
        ]},
        { type: 'p', children: [{ text: '結論： ' }, { text: '精準解決一個痛點，遠比平庸地應付十個問題，更能建立客戶的信賴感，讓他願意再次互動', marks: ['strong'] }, { text: '。' }] },
        { type: 'h2', children: [{ text: '03:別讓你的「高效率」成為客戶的「騷擾」：如何找到最剛好的自動化甜蜜點' }] },
        { type: 'p', children: [{ text: '尊重客戶感受，避免過度行銷', marks: ['strong'] }, { text: '。' }] },
        { type: 'h3', children: [{ text: '情境1：課程推薦的「' }, { text: '跟蹤感', marks: ['strong'] }, { text: '」' }] },
        { type: 'ul', items: [
            [{ text: 'Before: 一位使用者剛上完你的「新手攝影入門」免費課程，AI 立刻推送「嗨！我們偵測到您已完課，現在購買我們價值$500的『專業攝影師全攻略』享8折優惠！」這種「過度精確」會讓使用者感到被監視和壓迫，而非被幫助。' }],
            [{ text: 'After : AI 可以在使用者完課一天後，寄送一封標題為「恭喜你完成第一步！」的關懷信，內容是複習入門課的重點，並在信末溫和地提到「若未來想進階，可以參考我們的『專業攝影師全攻略』，許多學長姐都從這裡開始」。這就從「催促推銷」變成了「貼心引導」 。' }]
        ]},
        { type: 'h3', children: [{ text: '情境2：' }, { text: '對「一次性學習產品」的無效行銷', marks: ['strong'] }] },
        { type: 'ul', items: [
            [{ text: 'Before: 你的客戶是一位設計系學生，他購買了一堂針對畢業製作的「作品集設計衝刺課」。這對他而言是階段性、一次性的需求。如果 AI 在他購買後，還不斷推播其他作品集課程，只會讓他覺得這個品牌「根本不了解我」。' }],
            [{ text: 'After :AI 應該將這位客戶標記為「已完成階段性目標」，停止推薦同類課程。轉而推送一些對他長期職涯有益的內容，例如「如何準備面試」、「業界設計師訪談」等免費資源，藉此維持長期關係，等待他未來有新的學習需求。' }]
        ]},
        { type: 'h3', children: [{ text: '電子報的「' }, { text: '轟炸感', marks: ['strong'] }, { text: '」' }] },
        { type: 'ul', items: [
            [{ text: 'Before:  對於賣課程或服務的業主，電子報的價值在於「建立專業形象」而非「瘋狂促銷」。一星期寄5次，只會讓你的專業內容變成廉價的廣告。' }],
            [{ text: 'After: 將頻率降至一週一次 ，並提供高度價值的內容，例如：行業新知、技巧教學、學員成功案例等。可以選擇在' }, { text: '週四晚上或週五下午', marks: ['strong'] }, { text: '寄送，因為這通常是上班族心情放鬆、願意規劃週末或下班後學習的時間點。' }]
        ]},
        { type: 'p', children: [{ text: '與其花時間去適應不合身的AI系統，不如打造一套能完美融入您服務流程的專屬AI。'}, { text: '想知道您的事業該如何導入AI，才能有效提升留客率嗎？', marks: ['br'] }, { text: '預約45分鐘的免費AI導入評估', marks: ['mark'] }, { text: '。' }] },
    ]
  },
  {
    id: 'post2',
    slug: '#',
    imageUrl: '/images/tea-ceremony.jpg',
    imageAlt: '茶道體驗',
    category: '實用教學',
    title: '初學者必看：第一次參加茶會的禮儀與準備',
    excerpt: '從服裝到心態，為您詳細解說參加茶會的注意事項，讓您自信地踏出茶道學習的第一步。',
  },
  {
    id: 'post3',
    slug: '#',
    imageUrl: '/images/matcha-dougu.jpg',
    imageAlt: '抹茶茶具',
    category: '器物鑑賞',
    title: '如何挑選你的第一組抹茶道具？茶筅、茶碗、茶杓入門指南',
    excerpt: '工欲善其事，必先利其器。本篇將帶您認識抹茶道具的基礎，並提供實用的選購建議。',
  },
  {
    id: 'post4',
    slug: '#',
    imageUrl: 'https://placehold.co/1920x1077/a9d3a4/4a6e4f',
    imageAlt: '貼文04',
    category: '分類02',
    title: '🐷🐷🐷🐷🐷：🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷',
    excerpt: '🐷🐷🐷🐷🐷🐷🐷🐷🐷，🐷🐷🐷🐷🐷🐷，🐷🐷🐷🐷🐷🐷、🐷🐷🐷🐷🐷，🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷。',
  },
  {
    id: 'post5',
    slug: '#',
    imageUrl: 'https://placehold.co/1920x1077/a9d3a4/4a6e4f',
    imageAlt: '貼文05',
    category: '分類03',
    title: '🐷🐷🐷🐷🐷🐷🐷：🐷🐷🐷🐷🐷🐷🐷',
    excerpt: '🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷，🐷🐷🐷🐷🐷🐷🐷。🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷。',
  },
];

export const displayPostsData = postsSource.map(post => ({
  ...post,
  excerpt: generateExcerpt(post.content),
}));

export const featuredPostsData = displayPostsData.slice(0, 3);