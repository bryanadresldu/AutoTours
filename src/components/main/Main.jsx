import { useState, useEffect, useCallback, useRef } from "react"; // 1. Importamos useRef
import Typed from 'typed.js'; // 2. Importamos la librería typed.js
import "./Main.css";
import lugar1 from "../../assets/main1.webp";
import lugar2 from "../../assets/main2.webp";
import lugar3 from "../../assets/main3.webp";
import lugar4 from "../../assets/main4.webp";

const slideImages = [lugar1, lugar2, lugar3, lugar4];

const Main = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // --- Lógica del Slider (sin cambios) ---
  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === slideImages.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slideImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const timer = setTimeout(goToNext, 4000);
    return () => clearTimeout(timer);
  }, [goToNext]);
  
  // --- NUEVA LÓGICA PARA TYPED.JS ---

  // 3. Creamos una referencia que apuntará al elemento span
  const el = useRef(null);

  useEffect(() => {
    // Opciones de configuración para la animación
    const typedOptions = {
      strings: ['AUTO-TOURS', 'Tu Aventura', 'Tu Destino'], // Texto que se escribirá
      typeSpeed: 70,   // Velocidad de escritura
      backSpeed: 50,   // Velocidad de borrado
      loop: true,      // Repetir la animación
      cursorChar: '|', // Caracter del cursor
    };

    // 4. Creamos la instancia de Typed.js cuando el componente se monta
    const typed = new Typed(el.current, typedOptions);

    // 5. Función de limpieza: se ejecuta cuando el componente se desmonta
    return () => {
      typed.destroy();
    };
  }, []); // El array vacío [] asegura que el efecto se ejecute solo una vez

  return (
      <main className="main animated-background-section">
      <div className="main__text">
        <h1>
          {/* 6. En lugar de texto estático, el span ahora está vacío y tiene la referencia */}
          ¡Bienvenido a <span ref={el}></span>!
        </h1>
        <p>
          Explora nuestros servicios, promociones exclusivas y descarga nuestra app
          para llevar la experiencia contigo a donde vayas.
        </p>
        <a href="#servicios" className="main__cta-button">
          Ver Servicios
        </a>
      </div>

      <div className="main__gallery">
        <div className="slider">
          <button onClick={goToPrevious} className="slider__arrow slider__arrow--left">
            ❮
          </button>
          <img
            key={currentIndex} 
            src={slideImages[currentIndex]}
            alt="Lugares turísticos"
            className="slider__image"
          />
          <button onClick={goToNext} className="slider__arrow slider__arrow--right">
            ❯
          </button>
        </div>
      </div>
    </main>
  );
};

export default Main;