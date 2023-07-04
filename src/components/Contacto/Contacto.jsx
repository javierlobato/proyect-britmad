import "./contacto.css";

const Contacto = () => {
    return (
        <footer id='contacto'>
            <div className="footer-contacto">
                <h3>Contacto</h3>
                <div className="footer_info">
                    <div className="footer-email">
                        <div className="circulo-naranja"></div>
                        <p>Email: contacto@example.com</p>
                    </div>
                    <div className="footer-telefono">
                        <div className="circulo-blanco"></div>
                        <p>Teléfono: 123-456-7890</p>
                    </div>
                </div>
            </div>
            <div className="footer-derechos">
                <p>&copy; 2023 Todos los derechos reservados</p>
            </div>
        </footer>
    );
};

export default Contacto;
