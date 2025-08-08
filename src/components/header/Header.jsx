import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "./Header.css";
import logo from "../../assets/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="container__menu">
      <div className="logo">
        <img src={logo} alt="AUTO-TOURS Logo" />
      </div>

      {/* Botón hamburguesa solo para móviles */}
      <div className={`hamburger ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={`container__nav ${menuOpen ? "open" : ""}`}>
        <ScrollLink to="main" smooth={true} duration={500} offset={-70} className="btn-primary" onClick={closeMenu}>Inicio</ScrollLink>
        <ScrollLink to="nosotros-container" smooth={true} duration={500} offset={-70} className="btn-primary" onClick={closeMenu}>Nosotros</ScrollLink>
        <ScrollLink to="servicios-container" smooth={true} duration={500} offset={-70} className="btn-primary" onClick={closeMenu}>Servicios</ScrollLink>
        <ScrollLink to="galeria" smooth={true} duration={500} offset={-70} className="btn-primary" onClick={closeMenu}>Galería</ScrollLink>
        <ScrollLink to="catalogo-container" smooth={true} duration={500} offset={-70} className="btn-primary" onClick={closeMenu}>Catálogo</ScrollLink>
        <ScrollLink to="descarga-container" smooth={true} duration={500} offset={-70} className="btn-primary" onClick={closeMenu}>Descargar App</ScrollLink>
        <ScrollLink to="contacto-section" smooth={true} duration={500} offset={-70} className="btn-primary" onClick={closeMenu}>Contacto</ScrollLink>
      </nav>

      <nav className={`login ${menuOpen ? "open" : ""}`}>
        <NavLink to="/login" className="btn-primary" onClick={closeMenu}>Acceso</NavLink>
      </nav>
    </header>
  );
};

export default Header;
