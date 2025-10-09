import ArrowRightIcon from '@assets/icons/arrow-right.svg?react';

// 所有文章的完整列表
export const allPostsData = [
  {
    id: 'post1',
    slug: '/postpage',
    imageUrl: '/images/service-work-flow-design.jpg',
    imageAlt: '服務流程設計',
    category: '人性化AI',
    publishTime: '2025-10-08',
    title: '打造5倍高留客率AI的個3大關鍵思維',
    excerpt: '您是否曾經遇到AI對你的生活造成困擾的情況呢？以下歸納常見的客服AI設計問題，來看看如何把 AI改的更聰明、更有人性吧！',
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

// 精選文章資料現在從 allPostsData 動態產生，只取id編號前三篇
export const featuredPostsData = allPostsData.slice(0, 3);