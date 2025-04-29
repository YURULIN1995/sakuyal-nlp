import { NavLink } from 'react-router-dom';
import { navItems } from './navData';
import styles from '@styles/Navbar/NavbarPc.module.css'; // <-- 匯入對應的 CSS Module

function NavbarPc() {

  // 產生 NavLink class 的函式
  const getNavLinkClass = ({ isActive }) =>
    `${styles.navLink} ${isActive ? styles.activeLink : ''}`;

  // 產生下拉選單中 NavLink class 的函式
  const getDropdownLinkClass = ({ isActive }) =>
    `${styles.dropdownLink} ${isActive ? styles.activeLink : ''}`; // 重複使用 activeLink class

  return (
    // 套用 .navList class
    <ul className={styles.navList}>
      {navItems.map((item) => (
        <li
          key={item.name}
          // 套用 .navItem class，如果有子選單則額外加上 .dropdown class
          className={`${styles.navItem} ${item.children ? styles.dropdown : ''}`}
        >
          <NavLink
            to={item.path}
            className={getNavLinkClass} // 使用函式設定 class
            end={item.path === '/'}     // 根路徑使用 end
          >
            {item.name} {item.children ? '▾' : ''}
          </NavLink>

          {/* 下拉選單 */}
          {item.children && (
            // 套用 .dropdownList class
            <ul className={styles.dropdownList}>
              {item.children.map((child) => (
                // 套用 .dropdownItem class
                <li key={child.name} className={styles.dropdownItem}>
                  <NavLink
                    to={child.path}
                    className={getDropdownLinkClass} // 使用函式設定 class
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