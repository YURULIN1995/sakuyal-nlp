// src/components/Navbar/NavbarPc.jsx (Revised for navData with path:'#')
import { NavLink, useLocation } from 'react-router-dom';
// 假設 navData.js 中 作品集 path 為 '#'
import { navItems } from './navData';
import styles from '@styles/Navbar/NavbarPc.module.css';

function NavbarPc() {
  const location = useLocation();

  const getNavLinkClass = (navLinkProps, item) => {
    let isActive = navLinkProps.isActive; // Default NavLink calculation

    // 手動判斷 "作品集" 的 active 狀態 (基於 URL，忽略 NavLink 的 isActive)
    if (item.name === '作品集') {
      isActive = location.pathname.startsWith('/portfolio');
      // 可以保留 log 觀察，NavLink isActive 對於 to="#" 或 to="/portfolio" 應該都是 false (除非當前頁面是 /# 或 /portfolio)
      console.log(
         `[NavbarPc Manual Check] 作品集 Link | URL: ${location.pathname} | Manual isActive: ${isActive} | NavLink isActive (for rendered 'to' prop): ${navLinkProps.isActive}`
      );
    }
    return `${styles.navLink} ${isActive ? styles.activeLink : ''}`;
  };

  const getDropdownLinkClass = ({ isActive }) =>
    `${styles.dropdownLink} ${isActive ? styles.activeLink : ''}`;

  return (
    <ul className={styles.navList}>
      {navItems.map((item) => (
        <li
          key={item.name}
          className={`${styles.navItem} ${item.children ? styles.dropdown : ''}`}
        >
          <NavLink
            // --- 關鍵修改：決定 'to' 屬性 ---
            // 如果是 "作品集"，強制 PC 版的連結指向 /portfolio
            // 否則使用 navData 中定義的 path，如果 path 未定義則使用 '#'
            to={item.name === '作品集' ? '/portfolio' : (item.path || '#')}
            // ---------------------------------
            className={(navLinkRenderProps) => getNavLinkClass(navLinkRenderProps, item)}
            // 'end' 屬性只對真實 path 為 '/' 的項目有意義
            end={item.path === '/'}
            // 如果 to 是 '#'，點擊時阻止瀏覽器跳轉到頁面頂部 (可選)
            onClick={(e) => { if (e.currentTarget.getAttribute('href') === '#') e.preventDefault(); }}
          >
            {item.name}
            {/* 箭頭 span (無旋轉) */}
            {item.children && (
              <span className={styles.dropdownArrowPc}> ▾</span>
            )}
          </NavLink>

          {/* 下拉選單 - 直接使用 navData 中的 children */}
          {item.children && (
            <ul className={styles.dropdownList}>
              {item.children.map((child) => (
                <li key={child.name} className={styles.dropdownItem}>
                  <NavLink
                    to={child.path}
                    className={getDropdownLinkClass}
                  >
                    {child.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}

export default NavbarPc;