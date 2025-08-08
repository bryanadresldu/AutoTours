import { useEffect, useState } from 'react';
import { obtenerTours } from '../../utils/firebaseUtils'; // Asegúrate que la ruta sea correcta
import './Catalogo.css';

const Catalogo = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true); // Estado para la carga

  useEffect(() => {
    const cargarTours = async () => {
      try {
        const datos = await obtenerTours();
        setTours(datos);
      } catch (error) {
        console.error("Error al cargar los tours:", error);
      } finally {
        setLoading(false); // Finaliza la carga
      }
    };
    cargarTours();
  }, []);

  return (
    <section className="catalogo-container animated-background-section">
      <h2 className="catalogo-title">
        Explora Nuestros <span>Tours Exclusivos</span>
      </h2>
      <p className="catalogo-subtitle">
        Descubre rutas inolvidables diseñadas para que vivas una experiencia única.
      </p>

      <div className="catalogo-list">
        {loading ? (
          <p className="catalogo-loading">Cargando tours...</p>
        ) : tours.length === 0 ? (
          <p className="catalogo-no-tours">
            De momento no hay tours disponibles. ¡Vuelve pronto!
          </p>
        ) : (
          tours.map(tour => (
            <div className="tour-card" key={tour.id}>
              <img src={tour.imagen} alt={`Imagen de ${tour.nombre}`} className="tour-card__image" />
              <div className="tour-card__info">
                <h3 className="tour-card__title">{tour.nombre}</h3>
                <p className="tour-card__description">{tour.descripcion}</p>
                <div className="tour-card__footer">
                  <span className="tour-card__price">${tour.precio}</span>
                  {/* --- CAMBIO AQUÍ: Se ha eliminado el botón --- */}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Catalogo;