// src/components/Navbar/NavbarPc.jsx (恢復 Workaround)
import { NavLink, useLocation } from 'react-router-dom'; // <-- 加回 useLocation
import { navItems } from './navData'; // <-- 使用包含 children 的版本
import styles from '@styles/Navbar/NavbarPc.module.css';

function NavbarPc() {
  const location = useLocation(); // <-- 加回 useLocation

  const getNavLinkClass = (navLinkProps, item) => {
    let isActive = navLinkProps.isActive; // 先取得 NavLink 判斷的 isActive (可能錯誤)

    // --- 針對「作品集」進行特殊處理 (Workaround) ---
    if (item.name === '作品集') {
      // 不論 NavLink 怎麼判斷，我們自己根據路徑來決定 isActive
      isActive = location.pathname.startsWith('/portfolio'); // 手動判斷
      // 你可以保留這個 log 來觀察 NavLink 的錯誤判斷
      console.log(
         `[NavbarPc Workaround] 作品集 Link | URL: ${location.pathname} | Manual isActive: ${isActive} | NavLink isActive: ${navLinkProps.isActive}`
      );
    }
    // -------------------------------------------

    // 根據（可能已被覆蓋的）isActive 狀態來決定是否添加 activeLink class
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
            // 確保 to 指向 PC 版期望的路徑
            to={item.name === '作品集' ? '/portfolio' : (item.path || '#')}
            // 使用 getNavLinkClass (它內部會處理作品集的特殊情況)
            className={(navLinkRenderProps) => getNavLinkClass(navLinkRenderProps, item)}
            end={item.path === '/'}
            onClick={(e) => { if (item.path === '#') e.preventDefault(); }} // 如果 navData 中作品集 path 是 #
          >
            {item.name}
            {item.children && (
              <span className={styles.dropdownArrowPc}> ▾</span>
            )}
          </NavLink>

          {/* Dropdown Menu */}
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