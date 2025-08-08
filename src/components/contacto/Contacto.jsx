import React from 'react';
import './Contacto.css';
// NUEVO: Importamos los iconos profesionales desde React Icons
import { FaRoute, FaHeadset, FaShieldAlt, FaUser, FaEnvelope, FaPhoneAlt, FaPaperPlane } from 'react-icons/fa';

const Contacto = () => {
  return (
    <section id="contacto" className="contacto-section animated-background-section">
      <div className="contacto-container">
        
        <div className="contacto-form-wrapper">
          <div className="contacto-intro">
            <ul className="contacto-intro-list">
              {/* NUEVO: Iconos y texto con estructura mejorada */}
              <li>
                <span className="intro-icon"><FaRoute /></span>
                <p>Conéctate con nosotros y arranca tu próxima aventura.</p>
              </li>
              <li>
                <span className="intro-icon"><FaHeadset /></span>
                <p>Atención directa por chat, correo o teléfono cuando lo necesites.</p>
              </li>
              <li>
                <span className="intro-icon"><FaShieldAlt /></span>
                <p>Viaja seguro, viaja feliz, estamos contigo en cada kilómetro.</p>
              </li>
            </ul>
          </div>

          <h2 className="contacto-form-title">Reserva con nosotros</h2>

          <form 
            className="contact-form" 
            action="https://formsubmit.co/alexandergarcia212@outlook.com" 
            method="POST"
          >
            {/* NUEVO: Agrupamos los inputs con sus iconos */}
            <div className="form-group">
              <FaUser className="input-icon" />
              <input type="text" name="nombre" className="form-input" placeholder="Nombre" required />
            </div>
            
            <div className="form-group">
              <FaEnvelope className="input-icon" />
              <input type="email" name="correo" className="form-input" placeholder="Correo" required />
            </div>
            
            <div className="form-group">
              <FaPhoneAlt className="input-icon" />
              <input type="tel" name="celular" className="form-input" placeholder="Celular" required />
            </div>
            
            <textarea 
              name="observaciones" 
              className="form-textarea" 
              placeholder="Observaciones" 
              rows="4"
            ></textarea>
            
            <label className="form-checkbox-label">
              <input type="checkbox" required />
              <span>Acepto los <a href="/terminos" target="_blank" rel="noopener noreferrer">Términos y Condiciones</a></span>
            </label>

            <input type="hidden" name="_next" value="https://tu-pagina.com/gracias" />
            <input type="hidden" name="_captcha" value="false" />

            <button type="submit" className="form-submit-button">
              Enviar Mensaje
              <FaPaperPlane /> {/* NUEVO: Icono en el botón */}
            </button>
          </form>
        </div>

        <div className="contacto-map-wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31918.39473858968!2d-78.51998292568359!3d-0.17672040000000047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a70ed4eba8f%3A0xc1de621e4bfbd4f2!2sQuito%20City%20Tour%20%26%20Travel!5e0!3m2!1ses-419!2sec!4v1749424173002!5m2!1ses-419!2sec"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de Quito City Tour & Travel"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contacto;