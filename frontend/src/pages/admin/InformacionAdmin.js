import '../../styles/Misiones.css'; // Asegúrate de tener un archivo de estilos adecuado
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import CrearInformacion from "../../components/CrearInformacion";
import ListaInformacion from "../../components/ListaInformacion";
import ActualizarInformacion from "../../components/ActualizarInformacion";

const InformacionAdmin = () => {
  return (
    <div className="informacion-container">
      <h1>Administración de Información</h1>

      <div className="informacion-buttons">
        <Link to="/informacionAdmin/crear" className="btn">➕ Agregar Información</Link>
        <Link to="/informacionAdmin/listar" className="btn">📋 Ver Información</Link>
      </div>

      <Routes>
        <Route path="crear" element={<CrearInformacion />} />
        <Route path="listar" element={<ListaInformacion />} />
        <Route path="actualizar/:id" element={<ActualizarInformacion />} />
      </Routes>
    </div>
  );
};

export default InformacionAdmin;
