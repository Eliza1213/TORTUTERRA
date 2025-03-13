import '../../styles/Tortugas.css';
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import CrearTortuga from "../../components/CrearTortuga";
import ListaTortugas from "../../components/ListaTortugas";
import ActualizarTortuga from "../../components/ActualizarTortuga";

const TortugasAdmin = () => {
  return (
    <div className="tortugas-container">
      <h1>Administración de Tortugas</h1>

      <div className="tortugas-buttons">
        <Link to="/tortugasAdmin/crear" className="btn">➕ Alta Tortuga</Link>
        <Link to="/tortugasAdmin/listar" className="btn">📋 Ver Tortugas</Link>
      </div>

      <Routes>
        <Route path="crear" element={<CrearTortuga />} />
        <Route path="listar" element={<ListaTortugas />} />
        <Route path="actualizar/:id" element={<ActualizarTortuga />} />
      </Routes>
    </div>
  );
};

export default TortugasAdmin;
