import "./app.css";
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-scroll';

import Header from "./components/Header/Header";
import HeroImage from "./components/HeroImage/HeroImage";
import QuienesSomos from "./components/QuienesSomos/QuienesSomos";
import Servicios from "./components/Servicios/Servicios";
import Contacto from "./components/Contacto/Contacto";

import "./app.css";

function App() {
  return (
    <BrowserRouter>
      <Header>
        <ul>
          <li><Link to="quienessomos" smooth={true}>Quiénes somos</Link></li>
          <li><Link to="servicios" smooth={true} offset={50}>Servicios</Link></li>
          <li><Link to="contacto" smooth={true}>Contacto</Link></li>
        </ul>
      </Header>
      <HeroImage id="heroimage"/>
      <QuienesSomos id="quienessomos" />
      <Servicios id="servicios" />
      <Contacto id="contacto" />
    </BrowserRouter>
  )
}

export default App;