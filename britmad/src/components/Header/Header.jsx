import './header.css';
import logoBritmad from "./../../assets/logoBritmad.png"



const Header = () => {
    return (
        <header className='header'>
            <nav className='navBar'>
                <div className='header__logo'>
                    <img className="logo" src={logoBritmad} alt="logoBrimat" />
                </div>
                <ul className="nav__links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </nav>            
        </header>
    );
};

export default Header;
