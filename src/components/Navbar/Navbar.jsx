import useIsMobile from '@hooks/useIsMobile';
import NavbarPc from './NavbarPc';
import NavbarMobile from './NavbarMobile';

function Navbar() {
  const isMobile = useIsMobile(921);
  console.log("Navbar component, isMobile:", isMobile);

  return (
    <nav>
      {isMobile ? <NavbarMobile /> : <NavbarPc />}
    </nav>
  );
}

export default Navbar;