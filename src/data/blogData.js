import ArrowRightIcon from '@assets/icons/arrow-right.svg?react';
import { categories } from '@data/categoryData.js';

const generateExcerpt = (contentArray, maxLength = 53) => {
  if (!contentArray || contentArray.length === 0) {
    return '';
  }
  const allText = contentArray.map(block => {
    if (block.children) {
      return block.children.map(span => span.text).join('');
    }
    return '';
  }).join(' ');
  const plainText = allText.replace(/<[^>]*>/g, '');
  const excerpt = plainText.slice(0, maxLength);
  return plainText.length > maxLength ? excerpt + '...' : excerpt;
};

const placeholderColors = [
  { bg: 'a9d3a4', text: '4a6e4f' }, // 您的主題綠色
  { bg: 'f3e8d3', text: '8c6d46' }, // 溫暖米色
  { bg: 'd4e2f3', text: '4a6e8c' }, // 柔和藍色
  { bg: 'f3d4e4', text: '8c4a6a' }, // 淡雅紫色
];

export const postsSource = [
  {
    _id: 'post1',
    slug: { _type: 'slug', current: '3-mindsets-for-5x-ai-retention' },
    mainImage: {
      _type: 'image',
      alt: '服務流程設計',
      asset: { _type: 'reference', _ref: 'mock-image-ref-1' }
    },
    category: [{ _key: 'ref-key-1', _ref: 'cat_humanize_ai', _type: 'reference'}],
    publishedAt: '2025-10-05',
    titleChinese: '打造5倍高留客率AI的個3大關鍵思維',
    paragraph: [
      { "_key": "69b8a8e8378c", "_type": "block", "children": [{ "_key": "e7a2e7bf0c32", "_type": "span", "marks": [], "text": "您是否曾經遇到AI對你的生活造成困擾的情況呢？以下歸納常見的客服AI設計問題，來看看如何把 AI改的更聰明、更有人性吧！" }], "markDefs": [], "style": "normal" },
      { "_key": "0afb4c8f902c", "_type": "block", "children": [{ "_key": "0f8c96cbc3c8", "_type": "span", "marks": [], "text": "01:釐清「人性化」終點：你的AI是在服務人，還是取代人？" }], "markDefs": [], "style": "h2" },
      { "_key": "464526f9243c", "_type": "block", "children": [{ "_key": "ac2a3d4d86fe", "_type": "span", "marks": [], "text": "三大原則" }], "markDefs": [], "style": "h3" },
      { "_key": "2366a3577432", "_type": "block", "children": [{ "_key": "174fa9e0bc4a", "_type": "span", "marks": ["strong"], "text": "真實性 > 偽裝" }], "level": 1, "listItem": "number", "markDefs": [], "style": "h4" },
      { "_key": "bb7ad3a429db", "_type": "block", "children": [{ "_key": "83b8b7ba0ff9", "_type": "span", "marks": [], "text": "與其用預錄影片假裝是直播研討會 ，不如大方承認這是「可隨時觀看的線上工作坊」，並利用 AI 在問答環節協助分類問題、或在使用者註冊後，根據他的興趣推薦特定段落。" }, { "_key": "c45c62e24a3e", "_type": "span", "marks": ["strong"], "text": "誠實的AI，比虛偽的真人更能贏得信賴。" }], "level": 2, "listItem": "number", "markDefs": [], "style": "normal" },
      { "_key": "4f7093fb8e31", "_type": "block", "children": [{ "_key": "47afe4196b2f", "_type": "span", "marks": ["strong"], "text": "有效性 > 即時性" }], "level": 1, "listItem": "number", "markDefs": [], "style": "h4" },
      { "_key": "8c6cdf48c748", "_type": "block", "children": [{ "_key": "c0c11966d72f", "_type": "span", "marks": [], "text": "客戶要的不是一個24小時回覆罐頭訊息 的機器人，而是一個能" }, { "_key": "b63724872003", "_type": "span", "marks": ["strong"], "text": "真正解決問題" }, { "_key": "83971476901a", "_type": "span", "marks": [], "text": "的管道。AI 的首要任務應該是精準判斷問題，如果無法獨立解決，就應清楚地告知使用者「我已將您的問題轉交給課程顧問/技術專家，我們會在N小時內回覆您」，而不是用無效的答案鬼打牆 。這能有效管理客戶期待，避免因無效溝通而流失。" }], "level": 2, "listItem": "number", "markDefs": [], "style": "normal" },
      { "_key": "4084c47a8b60", "_type": "block", "children": [{ "_key": "aa05228f6527", "_type": "span", "marks": ["strong"], "text": "可靠性 > 創造性" }], "level": 1, "listItem": "number", "markDefs": [], "style": "h4" },
      { "_key": "191a73e6e9a6", "_type": "block", "children": [{ "_key": "fddaa0d1daa2", "_type": "span", "marks": [], "text": "對於資訊型產品，客服 AI 絕不能隨意產生它不確定的答案 。例如，當被問到「請問老師的A課程和B課程有什麼不同？」時，AI 如果無法根據資料回答，寧可說「這是一個好問題，我需要請課程顧問為您做更詳細的比較」，也絕不能自己「創造」一個不存在的優惠方案或課程內容。" }, { "_key": "76631efb08c6", "_type": "span", "marks": ["strong"], "text": "一次無法兌現的承諾，就足以永久摧毀客戶的信賴。" }], "level": 2, "listItem": "number", "markDefs": [], "style": "normal" },
      { "_key": "8da531e3306d", "_type": "block", "children": [{ "_key": "cd45d3c46c5c", "_type": "span", "marks": [], "text": "02:為何你的AI總是被封鎖？用「逐步實驗」打造客戶願意一再互動的AI" }], "markDefs": [], "style": "h2" },
      { "_key": "9bd79fab88af", "_type": "block", "children": [{ "_key": "d90dfceae909", "_type": "span", "marks": [], "text": "為建立信賴感的具體步驟" }], "markDefs": [], "style": "h3" },
      { "_key": "db7fb7a23e8a", "_type": "block", "children": [{ "_key": "d3fbfb7140f6", "_type": "span", "marks": [], "text": "用「真人資料」教AI學會同理心" }], "level": 1, "listItem": "number", "markDefs": [], "style": "h4" },
      { "_key": "6b01a29585be", "_type": "block", "children": [{ "_key": "825e508e8a96", "_type": "span", "marks": [], "text": "要累積的，不只是冰冷的問答資料庫，而是你" }, { "_key": "94bdd56cc863", "_type": "span", "marks": ["strong"], "text": "最優秀的課程顧問、客服人員與客戶的真實互動紀錄" }, { "_key": "7add7ae5e76f", "_type": "span", "marks": [], "text": " 。讓 AI 從中學習的不是「標準答案」，而是" }, { "_key": "71d1ba3897fb", "_type": "span", "marks": ["strong"], "text": "溝通的語氣、安撫焦慮學員的方式、以及挖掘學員真正需求的提問技巧" }, { "_key": "9d546d88c9fc", "_type": "span", "marks": [], "text": "。這樣的 AI 在互動時才會有「人味」，而不是「機器味」。" }], "level": 2, "listItem": "number", "markDefs": [], "style": "normal" },
    ],
  },
  {
    id: 'post2',
    slug: { _type: 'slug', current: 'self-checkout-in-japan'},
    mainImage: {
      _type: 'image',
      alt: '自動化體驗優化',
      asset: { _type: 'reference', _ref: 'mock-image-ref-2' },
    },
    category: [{ _key: 'ref-key-2', _ref:'cat_automation_experience_optimization', _type: 'reference'}],
    publishedAt: '2025-09-15',
    titleChinese: '什麼是有溫度的自動化？我在日本超市自助結帳的體驗',
    paragraph: [
      {_key: 'block2-1',
      _type: 'block',
      style: 'normal',
      children: [{_type: 'span', key: 'span2-1-1', text: '有許多長輩對於自動化的機器感到陌生，儘管現在他們已經學會使用各種通訊軟體與股票下單軟體，但面對不常用的機器介面仍然感到陌生。我到日本京都旅遊，在超市裡看到許多自助結帳機，前面有很多位導引員，主動詢問是否需要協助。原來，日本有許多長輩，不習慣用多元支付，更別說自助結帳機了。我這才恍然大悟，身為軟體工程師，我常常以為我設計的東西都已經很好用了，實際上不同的族群來用我設計的界面，可能發生我從沒想過得問題。重聽的長輩，聽不見過小的音量。我的男友不懂日文，如果看到翻譯品質不佳的中文就無法操作。有些步驟如果沒有播放UI提示文字，消費者不知道下一步應該做什麼。唐鳳曾經說：數位轉型最重要的是，找到長輩，讓他們能在5分鐘內學會一個新操作。這樣長輩才會有成就感，願意學更多，而不是反對數位轉型。', marks:[]}]
      }
    ]
  },
  {
    id: 'post3',
    slug: { _type: 'slug', current: 'choosing-your-first-matcha-set'},
    mainImage: {
      _type: 'image',
      alt: '抹茶茶具',
      asset: { _type: 'reference', _ref: 'mock-image-ref-3' }
    },
    category: [{ _key: 'ref-key-3', _ref: 'cat_object_appreciation', _type: 'reference' }],
    publishedAt: '2025-09-22',
    titleChinese: '如何挑選你的第一組抹茶道具？茶筅、茶碗、茶杓入門指南',
    paragraph: null,
    excerpt_fallback: '工欲善其事，必先利其器。本篇將帶您認識抹茶道具的基礎，並提供實用的選購建議。',
  },
  {
    id: 'post4',
    slug: { _type: 'slug', current: 'another-ai-article' },
    mainImage: {
      _type: 'image',
      alt: '貼文04',
      asset: { _type: 'reference', _ref: 'mock-image-ref-4' }
    },
    category: [{ _key: 'ref-key-4', _ref: 'cat_another_ai_article', _type: 'reference' }],
    publishedAt: '2025-09-29',
    titleChinese: '🐷🐷🐷🐷🐷：🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷',
    excerpt_fallback: '🐷🐷🐷🐷🐷🐷🐷🐷🐷，🐷🐷🐷🐷🐷🐷，🐷🐷🐷🐷🐷🐷、🐷🐷🐷🐷🐷，🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷。',
  },
  {
    id: 'post5',
    slug: { _type: 'slug', current: 'another-ai-article' },
    mainImage: {
      _type: 'image',
      alt: '貼文05',
      asset: { _type: 'reference', _ref: 'mock-image-ref-5' }
    },
    category: [{ _key: 'ref-key-5', _ref: 'cat_another_ai_article', _type: 'reference' }],
    publishedAt: '2025-09-29',
    titleChinese: '🐷🐷🐷🐷🐷🐷🐷：🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷',
    excerpt_fallback: '🐷🐷🐷🐷🐷🐷🐷🐷🐷，🐷🐷🐷🐷🐷🐷🐷。🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷。',
  },
];

export const displayPostsData = postsSource.map((post, index) => {
  const categoryRef = post.category?.[0]?._ref;
  const categoryData = categoryRef ? categories.find(c => c._id === categoryRef) : null;
  
  const excerpt = post.paragraph
    ? generateExcerpt(post.paragraph)
    : (post.excerpt_fallback || '');

    const colorIndex = index % placeholderColors.length;
    const color = placeholderColors[colorIndex];
    const placeholderText = encodeURIComponent(post.slug.current);
    const imageUrl = `https://placehold.co/1200x630/${color.bg}/${color.text}?text=${placeholderText}`;

    return {
      id: post._id,
      slug: post.slug.current,
      imageUrl: imageUrl,
      imageAlt: post.mainImage ? post.mainImage.alt : '文章主圖',
      category: categoryData ? categoryData.name : '未分類',
      categorySlug: categoryData ? categoryData.slug : 'uncategorized',
      publishedAt: post.publishedAt,
      title: post.titleChinese,
      content: post.paragraph,
      excerpt: excerpt,
    };
});

export const featuredPostsData = displayPostsData.slice(0, 3);