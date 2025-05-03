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

  const handleDropdownToggle = (itemName, event) => {
    event.preventDefault();
    event.stopPropagation();
    setOpenDropdown(prevOpen => (prevOpen === itemName ? null : itemName));
    console.log("Toggling dropdown:", itemName);
  };

  const handleSubItemClick = () => {
    setIsMainMenuOpen(false);
    setOpenDropdown(null);
  };

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
            {!item.children ? (
              <NavLink
                to={item.path}
                className={({ isActive }) => `${styles.navLinkMobile} ${isActive ? styles.activeLink : ''}`}
                onClick={toggleMainMenu}
                end={item.path === '/'}
              >
                {item.name}
              </NavLink>
            ) : (
              <button
                type="button"
                className={`${styles.navLinkMobile} ${styles.hasDropdown} ${openDropdown === item.name ? styles.isOpen : ''}`}
                onClick={(e) => handleDropdownToggle(item.name, e)}
                aria-expanded={openDropdown === item.name}
                aria-controls={`submenu-${item.name}`}
              >
                <span className={styles.linkText}>{item.name}</span>
                <span className={styles.arrow}>▶</span>
              </button>
            )}

            {item.children && (
              <ul
                id={`submenu-${item.name}`} // 對應 aria-controls
                className={`${styles.dropdownListMobile} ${openDropdown === item.name ? styles.isOpen : ''}`}
              >
                <li key="all-portfolio" className={styles.dropdownItemMobile}>
                  <NavLink
                  to="/portfolio"
                  className={getDropdownLinkClass}
                  onClick={handleSubItemClick}
                  >
                    所有作品
                  </NavLink>
                </li>

                {item.children.map((child) => (
                  <li key={child.name} className={styles.dropdownItemMobile}>
                    <NavLink
                        to={child.path}
                        className={getDropdownLinkClass}
                        onClick={handleSubItemClick}
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