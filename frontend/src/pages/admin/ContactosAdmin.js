import '../../styles/Contactos.css'; // Asegúrate de tener un archivo CSS para estilos personalizados
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import CrearContacto from "../../components/CrearContacto";
import ListaContactos from "../../components/ListaContactos";
import ActualizarContacto from "../../components/ActualizarContacto";

const ContactosAdmin = () => {
  return (
    <div className="contactos-container">
      <h1>Administración de Contactos</h1>

      <div className="contactos-buttons">
        <Link to="/contactosAdmin/crear" className="btn">➕ Alta Contacto</Link>
        <Link to="/contactosAdmin/listar" className="btn">📋 Ver Contactos</Link>
      </div>

      <Routes>
        <Route path="crear" element={<CrearContacto />} />
        <Route path="listar" element={<ListaContactos />} />
        <Route path="actualizar/:id" element={<ActualizarContacto />} />
      </Routes>
    </div>
  );
};

export default ContactosAdmin;
