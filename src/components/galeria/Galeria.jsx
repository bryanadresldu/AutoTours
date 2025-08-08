import React, { useState } from 'react';
import './Galeria.css';

import imagen1 from "../../assets/gal1.webp";
import imagen2 from '../../assets/gal2.webp';
import imagen3 from '../../assets/gal3.webp';
import imagen4 from '../../assets/gal4.webp';
import imagen5 from '../../assets/gal5.webp';
import imagen6 from '../../assets/gal6.webp';


const galleryImages = [
  { id: 1, src: imagen1, alt: 'Paisaje montañoso con lago' },
  { id: 2, src: imagen2, alt: 'Ciudad costera al atardecer' },
  { id: 3, src: imagen3, alt: 'Camino en un bosque frondoso' },
  { id: 4, src: imagen4, alt: 'Vehículo en una ruta escénica' },
  { id: 5, src: imagen5, alt: 'Vehículo en una ruta escénica' },
  { id: 6, src: imagen6, alt: 'Vehículo en una ruta escénica' }
];

const Galeria = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <section id="galeria" className="galeria-container animated-background-section">
        <h2 className="galeria-title">
          Momentos <span>Inolvidables</span>
        </h2>
        <p className="galeria-subtitle">
          Inspírate para tu próximo viaje con nuestra colección de imágenes.
        </p>

        <div className="galeria-grid">
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className="galeria-item"
              onClick={() => openModal(image.src)}
            >
              <img src={image.src} alt={image.alt} className="galeria-image" />
              <div className="galeria-overlay">
                <span className="overlay-icon">🔍</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedImage && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Vista ampliada" className="modal-image" />
            <button className="modal-close-button" onClick={closeModal}>
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Galeria;