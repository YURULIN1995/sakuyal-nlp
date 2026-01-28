import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useNavData } from '@hooks/useNavData'; 
import styles from '@styles/Navbar/Navbar.module.scss';

function Navbar() {
  const location = useLocation();
  const navItems = useNavData(); 

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

  const hasChildren = (item) => {
    return item.children && item.children.length > 0;
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

      <ul className={`${styles.navList} ${isMenuOpen ? styles.isOpen : ''}`}>
        {navItems.map((item) => (
          <li
            key={item.name}
            className={`${styles.navItem} ${hasChildren(item) ? styles.dropdown : ''}`}
          >
            <NavLink
              to={item.path}
              onClick={(e) => {
                if (hasChildren(item)) {
                  handleDropdownToggle(e, item.name);
                } else {
                  setIsMenuOpen(false);
                }
              }}
              className={(props) => `${getNavLinkClass(props, item)} ${hasChildren(item) ? styles.hasDropdown : ''} ${openDropdown === item.name ? styles.isOpen : ''}`}
            >
              {item.name}
              {hasChildren(item) && <span className={styles.arrow}>▾</span>}
            </NavLink>

            {hasChildren(item) && (
              <ul className={`${styles.dropdownList} ${openDropdown === item.name ? styles.isOpen : ''}`}>
                {item.showOverviewLink && (
                  <li className={styles.dropdownItem}>
                    <NavLink to={item.path} className={styles.dropdownLink} onClick={() => setIsMenuOpen(false)}>所有{item.name}</NavLink>
                  </li>
                )}
                {item.children.map((child) => (
                  <li key={child.path} className={styles.dropdownItem}>
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