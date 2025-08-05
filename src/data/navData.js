export const navItems = [
  { name: '關於我', path: '/about' },
  { name: '服務項目', path: '/services' },
  {
    name: '作品集',
    path: '/portfolio',
    showOverviewLink: true, // 1. (新增) 新增布林值屬性，用來控制是否顯示「總覽」連結
    children: [
      { name: '作品 01', path: '/portfolio/01' },
      { name: '作品 02', path: '/portfolio/02' },
      { name: '作品 03', path: '/portfolio/03' },
    ]
  },
  { name: '文章', path: '/blog' },
  { name: '聯絡', path: '/contact' },
]