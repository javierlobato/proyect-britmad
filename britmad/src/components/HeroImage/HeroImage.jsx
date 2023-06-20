import HeroImageBanner from "./../../assets/heroimage_banner.svg";
import ImgPort from "./../../assets/img_port.png";

import './heroImage.css';


const HeroImage = () => {

    return (

        <section className="heroImage">

            <div className="heroImage__background">
                <img src={HeroImageBanner} alt="Hero Image" />
            </div>
            <div className="heroImage__text">
                <h3>BRITMAD S.A.S brinda competitividad a importadores y exportadores colombianos.</h3>
                <p>Los servicios que ofrece suplen con los más altos estándares de calidad, personal idóneo altamente calificado en cada una de las áreas que nos desempeñamos.</p>
            </div>

            <div className="heroimage__image">
                <img src={ImgPort} alt="" />
            </div>         

        </section>
    )

}

export default HeroImage;