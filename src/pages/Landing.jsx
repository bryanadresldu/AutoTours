import Header from "../components/header/Header";
import Main from "../components/main/Main";
import Nosotros from "../components/nosotros/Nosotros";
import Servicios from "../components/servicios/Servicios";
import Descarga from "../components/descarga/Descarga"; 
import Footer from "../components/footer/Footer";
import Catalogo from "../components/catalogo/Catalogo";
import Galeria from "../components/galeria/Galeria"; 
import Contacto from "../components/contacto/Contacto"; 
import Testimonios from "../components/testimonios/Testimonios";

import './Landing.css';

const Landing = () => {
    return (
        <> 
            <Header />
            <main className="page-content">
                <Main />
                <Nosotros />
                <Servicios />
                <Galeria /> 
                <Catalogo />
                <Descarga /> 
                <Testimonios/>
                <Contacto /> 
                <Footer />
            </main>
        </>
    );
}

export default Landing;