import Tarjetas from "./Tarjetas";

import "./servicios.css";

const Servicios = () => {
  return (
    <>
      <div id="servicios">
        <div>
          <h1 className="titulo">SERVICIOS</h1>
        </div>
        <div className="servicios__tarjetas">
          <Tarjetas />
        </div>
      </div>
    </>
  );
};

export default Servicios;
