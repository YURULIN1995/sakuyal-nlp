export const navItems = [
  { name: '關於我', path: '/about' },
  { name: '服務項目', path: '/services' },
  {
    name: '作品集',
    path: '/portfolio',
    showOverviewLink: true, // 用來控制是否顯示「總覽」連結
    children: []
  },
  { name: '文章', path: '/blog',
    showOverviewLink: true,  // 用來控制是否顯示「總覽」連結
    children: []
   },
  { name: '聯絡', path: '/contact' },
]