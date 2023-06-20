import logoBritmad from "./../../assets/logoBritmad.png"
import './header.css';



const Header = () => {
    return (
        <header className='header'>
            <nav className='navBar'>
                <div className='header__logo'>
                    <img className="logo" src={logoBritmad} alt="logoBrimat" />
                </div>
                <ul className="nav__links">
                    <li><a href="#">QUIENES SOMOS</a></li>
                    <li><a href="#">SERVICIOS</a></li>
                    <li><a href="#">CONTACTO</a></li>
                </ul>
            </nav>            
        </header>
    );
};

export default Header;
