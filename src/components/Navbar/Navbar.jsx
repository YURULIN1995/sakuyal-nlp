import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { navItems } from '@components/Navbar/navData.js';
import styles from '@styles/Navbar/Navbar.module.scss';

function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 手機版狀態保留
  const [openDropdown, setOpenDropdown] = useState(null); // 手機版狀態保留
  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev); // 如果關閉主選單，也一併關閉所有下拉選單
    if (isMenuOpen) {
      setOpenDropdown(null);
    }
  };

  const handleDropdownToggle = (event, itemName) => {
    event.preventDefault(); // 阻止 NavLink 的跳轉行為
    setOpenDropdown(prevOpen => (prevOpen === itemName ? null : itemName));
  };

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
              to={item.children ? '#' : item.path} // 有子選單的項目，路徑設為 '#' 以便觸發 onClick
              onClick={(e) => {
                if (item.children) {handleDropdownToggle(e, item.name);} // 綁定點擊事件              }
                else {setIsMenuOpen(false);} // 點擊一般連結後關閉選單          }
              }}
              className={(props) => `${getNavLinkClass(props, item)} ${item.children ? styles.hasDropdown : ''} ${openDropdown === item.name ? styles.isOpen : ''}`}
              >
              {item.name}
              {item.children && <span className={styles.arrow}>▾</span>}
            </NavLink>

            {/* 下拉式選單 Dropdown List */}
            {item.children && (
              <ul className={`${styles.dropdownList} ${openDropdown === item.name ? styles.isOpen : ''}`}>
                <li className={styles.dropdownItem}>
                  <NavLink to="/portfolio" className={styles.dropdownLink}>所有作品</NavLink>
                </li>
                {item.children.map((child) => (
                  <li key={child.name} className={styles.dropdownItem}>
                    <NavLink to={child.path} className={styles.dropdownLink}>{child.name}</NavLink>
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