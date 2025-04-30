// src/components/Navbar/NavbarPc.jsx
import { NavLink } from 'react-router-dom';
import { navItems } from './navData';
import styles from '@styles/Navbar/NavbarPc.module.css';

function NavbarPc() {
  const getNavLinkClass = ({ isActive }) =>
    `${styles.navLink} ${isActive ? styles.activeLink : ''}`;

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
            to={item.path}
            className={getNavLinkClass}
            end={item.path === '/'}
          >
            {/* --- 修改這裡 --- */}
            {item.name}
            {/* 如果有子選單，渲染帶有 class 的 span 包裹箭頭 */}
            {item.children && (
              <span className={styles.dropdownArrowPc}> ▾</span>
              // 注意 '▾' 前面可以加個空格，或用 margin 調整間距
            )}
            {/* ------------- */}
          </NavLink>

          {/* Dropdown Menu (保持不變) */}
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