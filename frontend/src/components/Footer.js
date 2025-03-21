import React from "react";
import { Link } from "react-router-dom"; // Importación necesaria para usar Link
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <ul>
          <li><a href="/terminos">Términos y Condiciones</a></li>
          <li><a href="/privacy">Política de Privacidad</a></li>
        </ul>
      </div>
      <div className="footer-info">
        <p>&copy; 2025 Mi Sitio Web. Todos los derechos reservados.</p>
        <Link to="/politica-privacidad">Política de Privacidad</Link>
      </div>
    </footer>
  );
}

export default Footer;

