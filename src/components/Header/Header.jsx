import './header.css';

import logoBritmad from "./../../assets/logoBritmad.png"
import { Link } from 'react-scroll'; // Cambia este import

const Header = () => {
    return (
        <header className='header'>
            <nav className='navBar'>
                <div className='header__logo'>                   
                    <Link to="heroimage" smooth={true}> <img className="logo" src={logoBritmad} alt="logoBrimat" /></Link>
                </div>
                <ul className="nav__links">
                    <li><Link to="quienessomos" smooth={true}>QUIENES SOMOS</Link></li>
                    <li><Link to="servicios" smooth={true}>SERVICIOS</Link></li>
                    <li><Link to="contacto" smooth={true}>CONTACTO</Link></li>
                </ul>
            </nav>            
        </header>
    );
};

export default Header;

