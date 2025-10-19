export const navItems = [
  { name: '關於我', path: '/about' },
  { name: '服務項目', path: '/services' },
  {
    name: '作品集',
    path: '/portfolio',
    showOverviewLink: true, // 用來控制是否顯示「總覽」連結
    children: [
      { name: '作品 01', path: '/portfolio/01' },
      { name: '作品 02', path: '/portfolio/02' },
      { name: '作品 03', path: '/portfolio/03' },
    ]
  },
  { name: '文章', path: '/blog',
    showOverviewLink: true,
    children: [
      { name: '人性化AI', path: '/blog/humanize-ai'},
      { name: '服務設計', path: '/blog/service-design'},
      { name: '一人創業', path: '/blog/solo-business'}
    ]
   },
  { name: '聯絡', path: '/contact' },
]