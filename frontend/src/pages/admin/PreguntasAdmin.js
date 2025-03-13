import React from "react";
import '../../styles/Preguntas.css';
import { Link, Route, Routes } from "react-router-dom";
import CrearPregunta from "../../components/CrearPregunta";
import ListaPreguntas from "../../components/ListaPreguntas";
import ActualizarPregunta from "../../components/ActualizarPregunta";

const PreguntasAdmin = () => {
  return (
    <div className="preguntas-container">
      <h1>Administración de Preguntas</h1>

      <div className="preguntas-buttons">
        <Link to="/preguntasAdmin/crear" className="btn">➕ Alta Pregunta</Link>
        <Link to="/preguntasAdmin/listar" className="btn">📋 Ver Preguntas</Link>
      </div>

      <Routes>
        <Route path="crear" element={<CrearPregunta />} />
        <Route path="listar" element={<ListaPreguntas />} />
        <Route path="actualizar/:id" element={<ActualizarPregunta />} />
      </Routes>
    </div>
  );
};

export default PreguntasAdmin;
