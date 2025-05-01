// src/components/Navbar/NavbarPc.jsx (Revised for navData with path:'#')
import { NavLink, useLocation } from 'react-router-dom';
// 假設 navData.js 中 作品集 path 為 '#'
import { navItems } from './navData';
import styles from '@styles/Navbar/NavbarPc.module.css';

function NavbarPc() {
  const getNavLinkClass = (navLinkProps) => {
    const isActive = navLinkProps.isActive;
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
            to={item.path || '#'}
            className={getNavLinkClass}
            end={item.path === '/'}
            onClick={(e) => { if (!item.path || item.path === '#') e.preventDefault(); }}
          >
            {item.name}
            {item.children && (
              <span className={styles.dropdownArrowPc}> ▾</span>
            )}
          </NavLink>

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