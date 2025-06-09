import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { navItems } from '@data/navData.js';
import styles from '@styles/Navbar/Navbar.module.scss';

function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 手機版狀態保留
  const [openDropdown, setOpenDropdown] = useState(null); // 手機版狀態保留

  // ... 把手機版的 handlers (toggleMenu, handleDropdownToggle 等) 搬過來
  // 把 PC 版的 getNavLinkClass 搬過來並稍作調整
  const getNavLinkClass = (navLinkProps, item) => {
    let isActive = item.path === '/' ? navLinkProps.isActive : location.pathname.startsWith(item.path);
    // 針對「作品集」的特殊判斷
    if (item.name === '作品集') {
      isActive = location.pathname.startsWith('/portfolio');
    }
    return `${styles.navLink} ${isActive ? styles.activeLink : ''}`;
  };

  return (
    <nav className={styles.navbar}>
      {/* 1. 手機版漢堡選單 (SCSS 會在桌面版時隱藏它) */}
      <button className={`${styles.hamburgerMenu} ${isMenuOpen ? styles.isOpen : ''}`} onClick={toggleMenu}>
      </button>

      {/* 2. 統一的導覽列表 */}
      {/* 手機上，它由 isMenuOpen 控制；桌面上，它由 SCSS 控制顯示 */}
      <ul className={`${styles.navList} ${isMenuOpen ? styles.isOpen : ''}`}>
        {navItems.map((item) => (
          <li
            key={item.name}
            className={`${styles.navItem} ${item.children ? styles.dropdown : ''}`}
          >
            {/* 主要連結/按鈕 */}
            <NavLink
              to={item.children ? '/portfolio' : item.path} // 簡化邏輯
              className={(props) => getNavLinkClass(props, item)}
              // ... 其他 props
            >
              {item.name}
              {item.children && <span className={styles.dropdownArrow}>▾</span>}
            </NavLink>

            {/* 下拉選單 (PC 版靠 :hover，手機版靠點擊) */}
            {item.children && (
              <ul className={styles.dropdownList}>
                {/* 手機版可能需要一個「所有作品」的連結 */}
                <li className={styles.dropdownItem}>
                   <NavLink to="/portfolio">所有作品</NavLink>
                </li>
                {item.children.map((child) => (
                  <li key={child.name} className={styles.dropdownItem}>
                    <NavLink to={child.path}>{child.name}</NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;