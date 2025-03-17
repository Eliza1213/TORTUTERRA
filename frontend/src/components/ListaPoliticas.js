import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ListarPoliticas = () => {
  const [politicas, setPoliticas] = useState([]);

  useEffect(() => {
    const fetchPoliticas = async () => {
      const response = await fetch("http://localhost:4000/api/politicas"); // Endpoint de la API de políticas
      const data = await response.json();
      setPoliticas(data);
    };

    fetchPoliticas();
  }, []);

  // Función para eliminar una política con confirmación
  const handleEliminar = async (id) => {
    const confirmacion = window.confirm(
      "¿Estás seguro de que deseas eliminar esta política?"
    );

    if (confirmacion) {
      const response = await fetch(`http://localhost:4000/api/politicas/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        // Actualiza la lista de políticas después de eliminar
        setPoliticas(politicas.filter((politica) => politica._id !== id));
      }
    }
  };

  return (
    <div className="politicas-container">
      <h2>Políticas</h2>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {politicas.map((politica) => (
            <tr key={politica._id}>
              <td>{politica.titulo}</td>
              <td>
                <Link to={`/politicasAdmin/actualizar/${politica._id}`} className="btn">
                  Actualizar
                </Link>
                <button
                  onClick={() => handleEliminar(politica._id)}
                  className="btn"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListarPoliticas;
