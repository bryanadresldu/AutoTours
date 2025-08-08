import React from 'react';
// --- CAMBIO AQUÍ ---
// 1. Importamos los iconos profesionales desde react-icons
import { FaCar, FaMapMarkedAlt, FaClock, FaHeadset } from 'react-icons/fa';
import './Servicios.css'; 
import imagenServicios from '../../assets/imagen4.jpg';

// 2. Reemplazamos los emojis por los componentes de iconos
const serviciosData = [
  {
    icon: <FaCar />,
    title: 'Alquiler de Autos',
    description: 'Elige entre una amplia variedad de vehículos modernos y cómodos para todos tus trayectos, ya sea en la ciudad o fuera de ella.',
  },
  {
    icon: <FaMapMarkedAlt />,
    title: 'Localización en Tiempo Real',
    description: 'Sigue tu vehículo al instante desde tu móvil y conoce su ubicación con precisión en todo momento.',
  },
  {
    icon: <FaClock />,
    title: 'Reservas Rápidas',
    description: 'Reserva en pocos clics y recibe confirmación inmediata. ¡Tu viaje comienza sin demoras!',
  },
  {
    icon: <FaHeadset />,
    title: 'Asistencia 24/7',
    description: 'Nuestro equipo está disponible todo el día para ayudarte ante cualquier inconveniente durante tu recorrido.',
  },
];

const Servicios = () => {
  return (
    <section id="servicios" className="servicios-container animated-background-section">
      <h2 className="servicios-title">
        Nuestros <span>Servicios</span>
      </h2>
      <p className="servicios-subtitle">
        Descubre todo lo que podemos ofrecerte para que tu viaje sea perfecto.
      </p>

      <div className="servicios-content">
        <div className="servicios-list">
          {serviciosData.map((servicio, index) => (
            <div key={index} className="servicio-card">
              <h3>
                {/* 3. El span ahora renderiza el componente del icono */}
                <span className="servicio-icon">{servicio.icon}</span>
                {servicio.title}
              </h3>
              <p>{servicio.description}</p>
            </div>
          ))}
        </div>

        <div className="servicios-image-container">
          <img src={imagenServicios} alt="Collage de servicios de Auto-Tours" className="servicios-image" />
        </div>
      </div>
    </section>
  );
};

export default Servicios;