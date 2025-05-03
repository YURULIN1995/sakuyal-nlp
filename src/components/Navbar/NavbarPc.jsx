import { NavLink, useLocation } from 'react-router-dom';
import { navItems } from './navData';
import styles from '@styles/Navbar/NavbarPc.module.css';

function NavbarPc() {
  const location = useLocation();

  const getNavLinkClass = (navLinkProps, item) => {
    let isActive = navLinkProps.isActive;

    if (item.name === '作品集') {
      isActive = location.pathname.startsWith('/portfolio');
      console.log(
         `[NavbarPc Manual Check] 作品集 Link | URL: ${location.pathname} | Manual isActive: ${isActive} | NavLink isActive (for rendered 'to' prop): ${navLinkProps.isActive}`
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
            to={item.name === '作品集' ? '/portfolio' : (item.path || '#')} // 如果是 "作品集"，強制 PC 版的連結指向 /portfolio，Mobile 版的連結指向 navData.js 中未定義的 path '#'
            className={(navLinkRenderProps) => getNavLinkClass(navLinkRenderProps, item)}
            end={item.path === '/'} // 'end' 屬性只對真實 path 為 '/' 的項目有意義
            // 如果 to 指向 '#' (Mobile 版)，點擊時阻止瀏覽器跳轉到頁面頂部
            onClick={(e) => { if (e.currentTarget.getAttribute('href') === '#') e.preventDefault(); }}
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