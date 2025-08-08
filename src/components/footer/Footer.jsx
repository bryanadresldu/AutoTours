import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Footer.css';

// Se eliminó la importación del logo ya que no se usa
import { FaFacebookF, FaTwitter, FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer = () => {
    useEffect(() => {
        AOS.init({
            once: true,
            duration: 800,
            delay: 200 
        });
    }, []);

    return (
        <footer className="footer-section" data-aos="fade-up">
            <div className="footer-container">
                {/* Columna 1: Descripción y Redes Sociales */}
                <div className="footer-column">
                    {/* Se eliminó la etiqueta <img> del logo */}
                    <h3 className="footer-title">AUTO-TOURS</h3>
                    <p className="footer-description">
                        Combinamos movilidad segura con rutas turísticas auténticas para que descubras cada destino de forma cómoda y confiable.
                    </p>
                    <div className="footer-social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
                        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><FaTiktok /></a>
                    </div>
                </div>

                {/* Columna de Navegación eliminada */}

                {/* Columna 2 (antes 3): Enlaces de Interés */}
                <div className="footer-column">
                    <h3 className="footer-title">Soporte</h3>
                    <ul className="footer-links">
                        <li><a href="/faq">Preguntas Frecuentes</a></li>
                        <li><a href="/blog">Blog de Noticias</a></li>
                        <li><a href="/terminos">Términos y Condiciones</a></li>
                    </ul>
                </div>

                {/* Columna 3 (antes 4): Contacto */}
                <div className="footer-column">
                    <h3 className="footer-title">Contacto</h3>
                    <ul className="footer-contact-info">
                        <li><strong>Llámanos:</strong> <a href="tel:+593962985693">(593) 962-985-693</a></li>
                        <li><strong>Escríbenos:</strong> <a href="mailto:autotours@gmail.com">autotours@gmail.com</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} AUTO-TOURS | Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;