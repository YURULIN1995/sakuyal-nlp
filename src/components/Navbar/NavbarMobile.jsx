// src/components/Navbar/NavbarMobile.jsx (修改後 - 方案 C)
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navItems } from './navData';
import styles from '@styles/Navbar/NavbarMobile.module.css';

function NavbarMobile() {
  const [isMainMenuOpen, setIsMainMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMainMenu = () => {
    setIsMainMenuOpen(prev => {
      const nextIsOpen = !prev;
      if (!nextIsOpen) setOpenDropdown(null);
      return nextIsOpen;
    });
  };

  // 修改：這個 handler 只負責開合下拉，需要阻止預設行為（如果觸發元素是 a）
  const handleDropdownToggle = (itemName, event) => {
    event.preventDefault(); // 阻止可能的預設行為
    event.stopPropagation(); // 阻止冒泡
    setOpenDropdown(prevOpen => (prevOpen === itemName ? null : itemName));
    console.log("Toggling dropdown:", itemName);
  };

  const handleSubItemClick = () => {
    setIsMainMenuOpen(false);
    setOpenDropdown(null);
  };

  // Dropdown 內部連結樣式函式
  const getDropdownLinkClass = ({ isActive }) =>
    `${styles.dropdownLinkMobile} ${isActive ? styles.activeLink : ''}`;

  const hamburgerClasses = `${styles.hamburgerMenu} ${isMainMenuOpen ? styles.isOpen : ''}`;
  const navListClasses = `${styles.navListMobile} ${isMainMenuOpen ? styles.isOpen : ''}`;

  return (
    <>
      <button className={hamburgerClasses} onClick={toggleMainMenu} aria-label="Toggle menu" aria-expanded={isMainMenuOpen}>
        <span className={styles.hamburgerBar}></span>
        <span className={styles.hamburgerBar}></span>
        <span className={styles.hamburgerBar}></span>
      </button>

      <ul className={navListClasses}>
        {navItems.map((item) => (
          <li key={item.name} className={styles.navItemMobile}>
            {/* 判斷是否有子選單 */}
            {!item.children ? (
              <NavLink
                to={item.path}
                className={({ isActive }) => `${styles.navLinkMobile} ${isActive ? styles.activeLink : ''}`}
                onClick={toggleMainMenu} // 點擊普通連結關閉主選單
                end={item.path === '/'}
              >
                {item.name}
              </NavLink>
            ) : (
              <button
                type="button"
                className={`${styles.navLinkMobile} ${styles.hasDropdown} ${openDropdown === item.name ? styles.isOpen : ''}`} // 套用連結樣式、下拉標識、開啟狀態(用於箭頭)
                onClick={(e) => handleDropdownToggle(item.name, e)} // 點擊整個按鈕區域觸發 toggle
                aria-expanded={openDropdown === item.name}
                aria-controls={`submenu-${item.name}`} // 輔助技術關聯
              >
                <span className={styles.linkText}>{item.name}</span>
                <span className={styles.arrow}>▼</span>
              </button>
            )}

            {/* 下拉選單*/}
            {item.children && (
              <ul
                id={`submenu-${item.name}`} // 對應 aria-controls
                className={`${styles.dropdownListMobile} ${openDropdown === item.name ? styles.isOpen : ''}`}
              >
                <li key="all-portfolio" className={styles.dropdownItemMobile}>
                  <NavLink
                  to="/portfolio"
                  className={getDropdownLinkClass}
                  onClick={handleSubItemClick} // 點擊後關閉選單
                  >
                    所有作品
                  </NavLink>
                </li>

                {item.children.map((child) => (
                  <li key={child.name} className={styles.dropdownItemMobile}>
                    <NavLink
                        to={child.path}
                        className={getDropdownLinkClass}
                        onClick={handleSubItemClick} // 點擊子項目關閉主選單
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