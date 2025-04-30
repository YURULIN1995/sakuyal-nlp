// src/components/Navbar/NavbarPc.jsx
import { NavLink, useLocation } from 'react-router-dom';
import { navItems } from './navData';
import styles from '@styles/Navbar/NavbarPc.module.css';

function NavbarPc() {
  const location = useLocation();
  const getNavLinkClass = (navLinkProps, item) => {
    const isActive = navLinkProps.isActive;
    if (item.name === '作品集') {
      console.log(
        `作品集 Link | Current URL: ${location.pathname} | isActive: ${isActive}`
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
            to={item.path}
            // --- 將 item 傳入 className 函式 ---
            className={(navLinkRenderProps) => getNavLinkClass(navLinkRenderProps, item)}
            // -----------------------------------
            end={item.path === '/'}
          >
            {item.name} {item.children ? '▾' : ''}
          </NavLink>

          {/* ... Dropdown Menu ... */}
          {item.children && (
            <ul className={styles.dropdownList}>
              {item.children.map((child) => (
                <li key={child.name} className={styles.dropdownItem}>
                  <NavLink
                    to={child.path}
                    className={getDropdownLinkClass}
                  >
                    {child.name}
                  </NavLink></li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}

export default NavbarPc;