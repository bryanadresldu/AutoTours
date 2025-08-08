import React from 'react';
import './Testimonios.css';

// Datos de los testimonios para mantener el código limpio
const testimonialsData = [
  {
    text: "Gracias a AUTO-TOURS descubrimos los lugares más increíbles de la ciudad sin preocuparnos por el tráfico.",
    img: "https://i.pravatar.cc/80?img=12",
    name: "Ana Gómez",
    origin: "Turista de España"
  },
  {
    text: "Los guías fueron muy amables y el recorrido súper completo. ¡Una experiencia inolvidable!",
    img: "https://i.pravatar.cc/80?img=22",
    name: "Carlos López",
    origin: "Viajero frecuente"
  },
  {
    text: "Pude conocer la historia y los principales puntos turísticos de forma cómoda y segura.",
    img: "https://i.pravatar.cc/80?img=32",
    name: "Laura Méndez",
    origin: "Turista Argentina"
  }
];

const Testimonios = () => {
  return (
    <section id="testimonios" className="testimonials-section animated-background-section">
      <h2 className="testimonials-title">
        Lo que dicen nuestros <span>clientes</span>
      </h2>
      <p className="testimonials-subtitle">
        La satisfacción de quienes viajan con nosotros es nuestra mejor carta de presentación.
      </p>
      <div className="testimonials-container">
        {testimonialsData.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <p className="testimonial-text">"{testimonial.text}"</p>
            <div className="testimonial-user">
              <img src={testimonial.img} alt={`Foto de ${testimonial.name}`} className="testimonial-user-image" />
              <div className="testimonial-user-info">
                <h4>{testimonial.name}</h4>
                <span>{testimonial.origin}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonios;