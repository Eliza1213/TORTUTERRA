import '../../styles/Politicas.css';
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import CrearPolitica from "../../components/CrearPolitica";
import ListaPoliticas from "../../components/ListaPoliticas";
import ActualizarPolitica from "../../components/ActualizarPolitica";

const PoliticasAdmin = () => {
  return (
    <div className="politicas-container">
      <h1>Administración de Políticas</h1>

      <div className="politicas-buttons">
        <Link to="/politicasAdmin/crear" className="btn">➕ Alta Política</Link>
        <Link to="/politicasAdmin/listar" className="btn">📋 Ver Políticas</Link>
      </div>
      
      <Routes>
        <Route path="crear" element={<CrearPolitica />} />
        <Route path="listar" element={<ListaPoliticas />} />
        <Route path="actualizar/:id" element={<ActualizarPolitica />} />
      </Routes>
    </div>
  );
};

export default PoliticasAdmin;
