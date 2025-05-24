// src/data/blogData.js

// 為了方便測試，我們先放一些靜態的假資料
// 未來這些資料可以從 CMS、API 或 Markdown 檔案動態獲取

export const featuredPostsData = [
  {
    id: 'post1',
    title: '抹茶控必看：深入探索宇治抹茶的百年工藝',
    excerpt: '從茶葉的種植到石臼的細膩研磨，一探宇治抹茶背後不為人知的匠心獨運與文化底蘊...',
    imageUrl: '/images/matcha-dougu.jpg',
    imageAlt: '宇治抹茶與茶具',
    postUrl: '/blog/matcha-craft-history', // 之後替換成實際文章連結
    category: '抹茶文化'
  },
  {
    id: 'post2',
    title: '手作和菓子的甜蜜約定：初學者也能輕鬆上手',
    excerpt: '別再只是欣賞！跟著我們的步驟，從紅豆餡的熬煮到精緻的練切造型，親手製作出屬於你的和風甜點...',
    imageUrl: '/images/handmade-wagashi.jpg',
    imageAlt: '色彩繽紛的手作和菓子',
    postUrl: '/blog/wagashi-for-beginners',
    category: '手作教學'
  },
  {
    id: 'post3',
    title: '一期一會：茶道教會我的事',
    excerpt: '在繁忙的都市生活中，茶道如何為我們帶來片刻的寧靜與省思？分享我的茶道學習心得與體悟...',
    imageUrl: '/images/tea-ceremony.jpg',
    imageAlt: '茶道中的一期一會',
    postUrl: '/blog/tea-ceremony-learnings',
    category: '生活體悟'
  }
  // 你可以根據需要增加更多精選文章，通常 2-4 篇比較常見
];