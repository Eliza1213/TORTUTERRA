import '../../styles/Terminos.css';
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import CrearTermino from "../../components/CrearTermino";
import ListaTerminos from "../../components/ListaTerminos";
import ActualizarTermino from "../../components/ActualizarTermino";

const TerminosAdmin = () => {
  return (
    <div className="terminos-container">
      <h1>Administración de Términos</h1>

      <div className="terminos-buttons">
        <Link to="/terminosAdmin/crear" className="btn">➕ Alta Término</Link>
        <Link to="/terminosAdmin/listar" className="btn">📋 Ver Términos</Link>
      </div>

      <Routes>
        <Route path="crear" element={<CrearTermino />} />
        <Route path="listar" element={<ListaTerminos />} />
        <Route path="actualizar/:id" element={<ActualizarTermino />} />
      </Routes>
    </div>
  );
};

export default TerminosAdmin;
