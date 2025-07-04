import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { navItems } from '@components/Navbar/navData.js';
import styles from '@styles/Navbar/Navbar.module.scss';

function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
    if (isMenuOpen) {
      setOpenDropdown(null);
    }
  };

  const handleDropdownToggle = (event, itemName) => {
    event.preventDefault();
    setOpenDropdown(prevOpen => (prevOpen === itemName ? null : itemName));
    
  };

  const getNavLinkClass = (navLinkProps, item) => {
    let isActive = item.path === '/' ? navLinkProps.isActive : location.pathname.startsWith(item.path);
    if (item.name === '作品集') {
      isActive = location.pathname.startsWith('/portfolio');
    }
    return `${styles.navLink} ${isActive ? styles.activeLink : ''}`;
  };

  return (
    <nav className={styles.navbar}>
      {/* 1. 手機版漢堡選單 (SCSS 會在桌面版時隱藏它) */}
      <button
        className={`${styles.hamburgerMenu} ${isMenuOpen ? styles.isOpen : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        <span className={styles.hamburgerBar}></span>
        <span className={styles.hamburgerBar}></span>
        <span className={styles.hamburgerBar}></span>
      </button>

      {/* 2. 統一的導覽列表 */}
      <ul className={`${styles.navList} ${isMenuOpen ? styles.isOpen : ''}`}>
        {navItems.map((item) => (
          <li
            key={item.name}
            className={`${styles.navItem} ${item.children ? styles.dropdown : ''}`}
          >
            <NavLink
              to={item.path}
              onClick={(e) => {
                if (item.children) {
                  handleDropdownToggle(e, item.name);
                } else {
                  // 點擊一般連結後，關閉主選單
                  setIsMenuOpen(false);
                }
              }}
              className={(props) => `${getNavLinkClass(props, item)} ${item.children ? styles.hasDropdown : ''} ${openDropdown === item.name ? styles.isOpen : ''}`}
            >
              {item.name}
              {item.children && <span className={styles.arrow}>▾</span>}
            </NavLink>

            {/* 下拉式選單 Dropdown List */}
            {item.children  && (
              <ul className={`${styles.dropdownList} ${openDropdown === item.name ? styles.isOpen : ''}`}>
                {item.name == '作品集' && (
                  <li className={styles.dropdownItem}>
                    <NavLink to="/portfolio" className={styles.dropdownLink} onClick={() => setIsMenuOpen(false)}>所有作品</NavLink>
                  </li>

                )}
                {item.children.map((child) => (
                  <li key={child.name} className={styles.dropdownItem}>
                    <NavLink to={child.path} className={styles.dropdownLink} onClick={() => setIsMenuOpen(false)}>{child.name}</NavLink>
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