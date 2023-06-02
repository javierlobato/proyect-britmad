import SvgIcon from "../../atoms/Icon/SvgIcon";
import './styles.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <h3 className="logo" > <SvgIcon type="logobritmad"/> <a href="#"></a> </h3>

  
      <div className="links-wrapper active">
        
        <ul className="links">
          <li><a href="#">Quienes Somos</a></li>
          <li><a href="#">Nuestros Servicios</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
    </div>
  </nav>
  );
};

export default Navbar;
