import ArrowRightIcon from '@assets/icons/arrow-right.svg?react';

// 所有文章的完整列表
export const allPostsData = [
  {
    id: 'post1',
    postUrl: '#',
    imageUrl: '/images/handmade-wagashi.jpg',
    imageAlt: '手工和菓子',
    category: '茶道美學',
    title: '和菓子的四季之美：從練切到錦玉羹',
    excerpt: '探索如何透過和菓子將季節的變換融入茶席之中，感受日本傳統美學的細膩與詩意。',
    buttonText: '閱讀更多',
    buttonIcon: ArrowRightIcon,
  },
  {
    id: 'post2',
    postUrl: '#',
    imageUrl: '/images/tea-ceremony.jpg',
    imageAlt: '茶道體驗',
    category: '實用教學',
    title: '初學者必看：第一次參加茶會的禮儀與準備',
    excerpt: '從服裝到心態，為您詳細解說參加茶會的注意事項，讓您自信地踏出茶道學習的第一步。',
    buttonText: '閱讀更多',
    buttonIcon: ArrowRightIcon,
  },
  {
    id: 'post3',
    postUrl: '#',
    imageUrl: '/images/matcha-dougu.jpg',
    imageAlt: '抹茶茶具',
    category: '器物鑑賞',
    title: '如何挑選你的第一組抹茶道具？茶筅、茶碗、茶杓入門指南',
    excerpt: '工欲善其事，必先利其器。本篇將帶您認識抹茶道具的基礎，並提供實用的選購建議。',
    buttonText: '閱讀更多',
    buttonIcon: ArrowRightIcon,
  },
  {
    id: 'post4',
    postUrl: '#',
    imageUrl: 'https://placehold.co/1920x1077/a9d3a4/4a6e4f',
    imageAlt: '貼文04',
    category: '分類02',
    title: '🐷🐷🐷🐷🐷：🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷',
    excerpt: '🐷🐷🐷🐷🐷🐷🐷🐷🐷，🐷🐷🐷🐷🐷🐷，🐷🐷🐷🐷🐷🐷、🐷🐷🐷🐷🐷，🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷。',
    buttonText: '閱讀更多',
    buttonIcon: ArrowRightIcon,
  },
  {
    id: 'post5',
    postUrl: '#',
    imageUrl: 'https://placehold.co/1920x1077/a9d3a4/4a6e4f',
    imageAlt: '貼文05',
    category: '分類03',
    title: '🐷🐷🐷🐷🐷🐷🐷：🐷🐷🐷🐷🐷🐷🐷',
    excerpt: '🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷，🐷🐷🐷🐷🐷🐷🐷。🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷🐷。',
    buttonText: '閱讀更多',
    buttonIcon: ArrowRightIcon,
  },
];

// 精選文章資料現在從 allPostsData 動態產生，只取id編號前三篇
export const featuredPostsData = allPostsData.slice(0, 3);