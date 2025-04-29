import { NavLink } from 'react-router-dom';
import { navItems} from './navData';

function NavbarPc() {
  console.log("Rendering NavbarPc");

  return (
    <ul>
      {navItems.map((item) => (
        <li key={item.name}>
          <NavLink to={item.path} end={item.path === '/'}>
            {item.name} {item.children ? '▾' : ''}
          </NavLink>
          {item.children && (
            <ul>
              {item.children.map((child) => (
                <li key={child.name}>
                  <NavLink to={child.path}>
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