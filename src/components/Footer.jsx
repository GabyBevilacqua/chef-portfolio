import "../styles/footer.css";
import React, { useState } from "react";

const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <footer className="footer">
      <span className="footer-text">
        <div className="footer">
          <p>© 2025 Gabriela B. Franchi. Todos los derechos reservados.</p>
          <p>
            Sitio web diseñado, programado y creado por {" "}
            <a
              href="https://www.linkedin.com/in/gabriellabevilacqua/"
              target="_blank"
              rel="noopener noreferrer"
              className="designer-link"
            >
              Gabriella Bevilacqua
            </a>
          </p>
        </div>
      </span>
      <button
        className="privacy-link"
        onClick={() => setShowModal(true)}
      >
        Política de privacidad
      </button>
      {showModal && (
        <div
          className="privacy-modal-overlay"
          onClick={() => setShowModal(false)}
        >
          <div className="privacy-modal" onClick={(e) => e.stopPropagation()}>
            <h2>Política de Privacidad</h2>
            <p>
              Última actualización: agosto 2025.<br /> 
              Este sitio web no utiliza cookies
              ni recopila datos personales de forma automática.
            </p>
            <h3>Formulario de contacto</h3>
            <p>
              El formulario de contacto está diseñado únicamente para que los visitantes 
              puedan comunicarse directamente conmigo. Los mensajes enviados se entregan 
              de forma privada a través de correo electrónico. No se almacenan en bases 
              de datos ni se comparten con terceros.
              </p>
              <h3>Enlaces a redes sociales</h3>
              <p>
                Los iconos de redes sociales en este sitio son enlaces directos a mis 
                perfiles oficiales. No se integran widgets externos ni se realiza 
                seguimiento desde estas plataformas a través del sitio.
                </p>
                <h3>Seguridad</h3>
                <p>
                  Este sitio cuenta con una conexión segura (HTTPS) para proteger 
                  la transmisión de información.
                </p>
                <h3>Contacto</h3>
                <p>
                  Si tienes dudas sobre esta política, puedes escribirme directamente 
                  a través del formulario de contacto.
                </p>
            <button className="close-modal" onClick={() => setShowModal(false)}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;