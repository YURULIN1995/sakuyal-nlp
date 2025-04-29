// src/components/Navbar/NavbarMobile.jsx
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navItems } from './navData'; // 從共享檔案匯入
import styles from '@styles/Navbar/NavbarMobile.module.css'; // <-- 匯入對應的 CSS Module

function NavbarMobile() {
  const [isMainMenuOpen, setIsMainMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // 追蹤哪個下拉選單是開啟的 (用 item.name)

  // 開關主選單
  const toggleMainMenu = () => {
    setIsMainMenuOpen(!isMainMenuOpen);
    // 如果是關閉主選單，同時關閉所有子選單
    if (isMainMenuOpen) {
      setOpenDropdown(null);
    }
  };

  // 開關子選單
  const handleDropdownToggle = (itemName, event) => {
    event.preventDefault(); // 阻止 NavLink 的默認跳轉行為
    setOpenDropdown(openDropdown === itemName ? null : itemName);
  };

  // 點擊子選單項目後關閉主選單
  const handleSubItemClick = () => {
      setIsMainMenuOpen(false);
      setOpenDropdown(null);
  };

  // --- className 產生函式 ---
  const getNavLinkClass = ({ isActive }, item) => {
    let classes = `${styles.navLinkMobile}`;
    if (item.children) {
      classes += ` ${styles.hasDropdown}`; // 添加標識 class
      if (openDropdown === item.name) {
         classes += ` ${styles.isOpen}`; // 添加標識 class 控制箭頭
      }
    }
    if (isActive) {
      classes += ` ${styles.activeLink}`;
    }
    return classes;
  };

  const getDropdownLinkClass = ({ isActive }) =>
    `${styles.dropdownLinkMobile} ${isActive ? styles.activeLink : ''}`;
  // -------------------------

  const hamburgerClasses = `${styles.hamburgerMenu} ${isMainMenuOpen ? styles.isOpen : ''}`;
  const navListClasses = `${styles.navListMobile} ${isMainMenuOpen ? styles.isOpen : ''}`;

  return (
    <>
      {/* 漢堡按鈕 */}
      <button className={hamburgerClasses} onClick={toggleMainMenu} aria-label="Toggle menu" aria-expanded={isMainMenuOpen}>
        <span className={styles.hamburgerBar}></span>
        <span className={styles.hamburgerBar}></span>
        <span className={styles.hamburgerBar}></span>
      </button>

      {/* 行動版選單列表 (永遠渲染，靠 class 控制顯示) */}
      <ul className={navListClasses}>
        {navItems.map((item) => (
          <li key={item.name} className={styles.navItemMobile}>
            <NavLink
              to={item.path}
              // 使用 getNavLinkClass 來動態產生 class
              className={({isActive}) => getNavLinkClass({isActive}, item)}
              // 如果有子選單，點擊時觸發 handleDropdownToggle；否則關閉主選單
              onClick={item.children ? (e) => handleDropdownToggle(item.name, e) : toggleMainMenu}
              end={item.path === '/'}
            >
              {/* 不再需要在文字後加 '▾'，由 CSS ::after 處理 */}
              {item.name}
            </NavLink>
            {/* 下拉選單 */}
            {item.children && (
              // 根據 openDropdown 狀態添加 isOpen class
              <ul className={`${styles.dropdownListMobile} ${openDropdown === item.name ? styles.isOpen : ''}`}>
                {item.children.map((child) => (
                  <li key={child.name} className={styles.dropdownItemMobile}>
                    {/* 點擊子項目時關閉整個主選單 */}
                    <NavLink
                        to={child.path}
                        className={getDropdownLinkClass}
                        onClick={handleSubItemClick} // 點擊子項目關閉選單
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
    </>
  );
}

export default NavbarMobile;