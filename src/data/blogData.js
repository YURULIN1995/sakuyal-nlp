import ArrowRightIcon from '@assets/icons/arrow-right.svg?react';
import { categories } from '@data/categoryData.js';

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
    slug: '3-mindsets-for-5x-ai-retention',
    imageUrl: '/images/service-work-flow-design.jpg',
    imageAlt: '服務流程設計',
    categoryRef: 'cat_humanize_ai',
    publishedAt: '2025-10-08',
    title: '打造5倍高留客率AI的個3大關鍵思維',
    content: [
      {
        _key: 'block-1',
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', _key: 'span-1-1', text: '您是否曾經遇到AI對你的生活造成困擾的情況呢？以下歸納常見的客服AI設計問題，來看看如何把 AI改的更聰明、更有人性吧！', marks: [] }],
      },
      {
        _key: 'block-2',
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', _key: 'span-2-1', text: '01:釐清「人性化」終點：你的AI是在服務人，還是取代人？', marks: [] }],
      },
      {
        _key: 'block-3',
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', _key: 'span-3-1', text: '3大原則', marks: [] }],
      },
      {
        _key: 'block-4',
        _type: 'block',
        style: 'h3',
        children: [{ _type: 'span', _key: 'span-4-1', text: '原則1：' }, { _type: 'span', _key: 'span-4-2', text: '真實性 > 偽裝', marks: ['strong'] }],
      },
      {
        _key: 'block-5',
        _type: 'block',
        style: 'normal',
        children: [
          { _type: 'span', _key: 'span-5-1', text: '與其用預錄影片假裝是直播研討會 ，不如大方承認這是「可隨時觀看的線上工作坊」，並利用 AI 在問答環節協助分類問題、或在使用者註冊後，根據他的興趣推薦特定段落。', marks: [] },
          { _type: 'span', _key: 'span-5-2', text: '誠實的AI，比虛偽的真人更能贏得信賴。', marks: ['strong'] },
        ],
      },
      {
        _key: 'block-6',
        _type: 'block',
        style: 'h3',
        children: [{ _type: 'span', _key: 'span-6-1', text: '原則2：' }, { _type: 'span', _key: 'span-6-2', text: '有效性 > 即時性', marks: ['strong'] }],
      },
      {
        _key: 'block-7',
        _type: 'block',
        style: 'normal',
        children: [
          { _type: 'span', _key: 'span-7-1', text: '客戶要的不是一個24小時回覆罐頭訊息 的機器人，而是一個能', marks: [] },
          { _type: 'span', _key: 'span-7-2', text: '真正解決問題', marks: ['strong'] },
          { _type: 'span', _key: 'span-7-3', text: '的管道。AI 的首要任務應該是精準判斷問題，如果無法獨立解決，就應清楚地告知使用者「我已將您的問題轉交給課程顧問/技術專家，我們會在N小時內回覆您」，而不是用無效的答案鬼打牆 。這能有效管理客戶期待，避免因無效溝通而流失。', marks: [] },
        ],
      },
       {
        _key: 'block-8',
        _type: 'block',
        style: 'h3',
        children: [{ _type: 'span', _key: 'span-8-1', text: '原則3：' }, { _type: 'span', _key: 'span-8-2', text: '可靠性 > 創造性', marks: ['strong'] }],
      },
      {
        _key: 'block-9',
        _type: 'block',
        style: 'normal',
        children: [
          { _type: 'span', _key: 'span-9-1', text: '對於資訊型產品，客服 AI 絕不能隨意產生它不確定的答案 。例如，當被問到「請問老師的A課程和B課程有什麼不同？」時，AI 如果無法根據資料回答，寧可說「這是一個好問題，我需要請課程顧問為您做更詳細的比較」，也絕不能自己「創造」一個不存在的優惠方案或課程內容。', marks: [] },
          { _type: 'span', _key: 'span-9-2', text: '一次無法兌現的承諾，就足以永久摧毀客戶的信賴。', marks: ['strong'] },
        ],
      },
    ],
  },
  {
    id: 'post2',
    slug: 'beginners-guide-to-tea-ceremony',
    imageUrl: '/images/tea-ceremony.jpg',
    imageAlt: '茶道體驗',
    categoryRef: 'cat_practical_teachig',
    publishedAt: '2025-09-15',
    title: '初學者必看：第一次參加茶會的禮儀與準備',
    excerpt: '從服裝到心態，為您詳細解說參加茶會的注意事項，讓您自信地踏出茶道學習的第一步。',
  },
  {
    id: 'post3',
    slug: 'choosing-your-first-matcha-set',
    imageUrl: '/images/matcha-dougu.jpg',
    imageAlt: '抹茶茶具',
    categoryRef: 'cat_object_appreciation',
    publishedAt: '2025-09-22',
    title: '如何挑選你的第一組抹茶道具？茶筅、茶碗、茶杓入門指南',
    excerpt: '工欲善其事，必先利其器。本篇將帶您認識抹茶道具的基礎，並提供實用的選購建議。',
  },
  {
    id: 'post4',
    slug: 'another-ai-article',
    imageUrl: 'https://placehold.co/1920x1077/a9d3a4/4a6e4f',
    imageAlt: '貼文04',
    categoryRef: 'cat_another-ai-article',
    publishedAt: '2025-09-29',
    title: '🐷🐷🐷🐷🐷：🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷',
    excerpt: '🐷🐷🐷🐷🐷🐷🐷🐷🐷，🐷🐷🐷🐷🐷🐷，🐷🐷🐷🐷🐷🐷、🐷🐷🐷🐷🐷，🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷。',
  },
  {
    id: 'post5',
    slug: 'another-ai-article',
    imageUrl: 'https://placehold.co/1920x1077/a9d3a4/4a6e4f',
    imageAlt: '貼文05',
    categoryRef: 'cat_another-ai-article',
    publishedAt: '2025-09-29',
    title: '🐷🐷🐷🐷🐷🐷🐷：🐷🐷🐷🐷🐷🐷🐷',
    excerpt: '🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷，🐷🐷🐷🐷🐷🐷🐷。🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷。',
  },
];

export const displayPostsData = postsSource.map(post => {
  const category = categories.find(c => c._id === post.categoryRef);
  return {
    ...post,
    category: category ? category.name : '未分類',
    categorySlug: category ? category.slug : 'uncategorized',
    excerpt: generateExcerpt(post.content),
  };
});

export const featuredPostsData = displayPostsData.slice(0, 3);