import PropTypes from 'prop-types';
import imgservice1 from "./../../assets/imgservice1.png";
import imgservice2 from "./../../assets/imgservice2.png";
import imgservice3 from "./../../assets/imgservice3.png";
import imgservice4 from "./../../assets/imgservice4.png";

import './tarjetas.css';

const Tarjeta = ({ id, titulo, contenido, imagen }) => {
    const tarjetaClass = `tarjeta tarjeta-${id}`;

    return (
        <div className={tarjetaClass}>
            <img className="tarjeta__imagen" src={imagen} alt={titulo} />
            <div className="tarjeta__textos">
                <h3 className="tarjeta__titulo">{titulo}</h3>
                <p className="tarjeta__parrafo">{contenido}</p>
            </div>
        </div>
    );
};

Tarjeta.propTypes = {
    id: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    contenido: PropTypes.string.isRequired,
    imagen: PropTypes.string.isRequired,
};

const Tarjetas = () => {
    const tarjetasData = [
        {
            id: 1,
            titulo: 'ACESORIA Y CONSULTORIA',
            contenido: 'Brindar asesoría en aspectos organizativos, administrativos, derechos humanos, técnicas y programas gubernamentales para el fomento, producción y funcionamiento de los diferentes estamentos públicos, comunales, privados, ONG, organizaciones cooperativas, precooperativas y demás entidades sin ánimo de lucro.',
            imagen: imgservice1,
        },
        {
            id: 2,
            titulo: 'OPERACIONES PORTUARIAS Y ADUANERAS',
            contenido: 'En Britmad sabemos lo que está en riesgo y que su negocio depende de la entrega oportuna y confiable de almacenamiento en frío de los productos perecibles. Sabemos que no hay margen para el error, ya que lo que podría ser una leve equivocación o inexactitud de cálculo en algunas industrias, es una catástrofe costosa en la suya. Es por eso que Britmad no sólo vende contenedores secos y refrigerados, sino que también entrega el servicio técnico 24/7 a estos equipos, grupos electrógenos, sistemas de chasis y otros productos de almacenamiento.',
            imagen: imgservice2,
        },
        {
            id: 3,
            titulo: 'Fabricación Y Estructuración DE MOVILIARIOS',
            contenido: 'Nuestros Contenedores Secos y Refrigerados son parte de la “infraestructura esencial” que mantienen el fluido de mercancías, alimentos, suministros médicos, almacenamiento y otras necesidades críticas estamos para ayudarte comercialización y asesoría a la hora de comprar tu contenedor.',
            imagen: imgservice3,
        },
        {
            id: 4,
            titulo: 'ENERGIA SOLAR FOTOVOLTAICA',
            contenido: 'Nuestros Contenedores Secos y Refrigerados son parte de la “infraestructura esencial” que mantienen el fluido de mercancías, alimentos, suministros médicos, almacenamiento y otras necesidades críticas estamos para ayudarte comercialización y asesoría a la hora de comprar tu contenedor.',
            imagen: imgservice4,
        },
    ];

    return (
        <div className="tarjetas__container">
            {tarjetasData.map((tarjeta, index) => {
                const isOdd = index % 2 === 0;
                const tarjetaTextosClass = isOdd ? 'tarjeta__textos impares' : 'tarjeta__textos pares';

                return (
                    <div className="tarjeta" key={tarjeta.id}>
                        <img className="tarjeta__imagen" src={tarjeta.imagen} alt={tarjeta.titulo} />
                        <div className={tarjetaTextosClass} >

                            <h3 className="tarjeta__titulo">{tarjeta.titulo}</h3>
                            <p className="tarjeta__parrafo">{tarjeta.contenido}</p>

                        </div>
                    </div>
                );
            })}
        </div>
    );
};


export default Tarjetas;
