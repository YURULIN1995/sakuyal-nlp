import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navItems } from './navData';

function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false);
  console.log("Rendering NavbarMobile, isOpen:", isOpen);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log('Menu toggled!', !isOpen);
  };

  return (
    <>
      <button onClick={toggleMenu} aria-label="Toggle menu" aria-expanded={isOpen}>
        {isOpen ? "[關閉]" : "[選單]"}
      </button>

      {isOpen && (
        <ul>
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                onClick={!item.children ? toggleMenu : (e) => {
                    e.preventDefault();
                    console.log("Dropdown parent clicked, not navigating.");
                 }}
                end={item.path === '/'}
              >
                {item.name} {item.children ? '▾' : ''}
              </NavLink>
              {item.children && (
                 <ul>
                   {item.children.map((child) => (
                     <li key={child.name}>
                       <NavLink to={child.path} onClick={toggleMenu}>
                         {child.name}
                       </NavLink>
                     </li>
                   ))}
                 </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default NavbarMobile;