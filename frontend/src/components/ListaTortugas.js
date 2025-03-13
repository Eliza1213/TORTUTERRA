import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ListarTortugas = () => {
  const [tortugas, setTortugas] = useState([]);

  useEffect(() => {
    const fetchTortugas = async () => {
      const response = await fetch("http://localhost:4000/api/informacionTortugas");
      const data = await response.json();
      setTortugas(data);
    };

    fetchTortugas();
  }, []);

  // Función para eliminar una tortuga con confirmación
  const handleEliminar = async (id) => {
    const confirmacion = window.confirm(
      "¿Estás seguro de que deseas eliminar esta tortuga?"
    );

    if (confirmacion) {
      const response = await fetch(`http://localhost:4000/api/informacionTortugas/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        // Actualiza la lista de tortugas después de eliminar
        setTortugas(tortugas.filter((tortuga) => tortuga._id !== id));
      }
    }
  };

  return (
    <div className="tortugas-container">
      <h2>Tortugas</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Tipo</th>
            <th>Descripción</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {tortugas.map((tortuga) => (
            <tr key={tortuga._id}>
              <td>{tortuga.nombre}</td>
              <td>{tortuga.tipo}</td>
              <td>{tortuga.descripcion}</td>
              <td>
                <Link to={`/informacionTortugas/actualizar/${tortuga._id}`} className="btn">
                  Actualizar
                </Link>
                <button
                  onClick={() => handleEliminar(tortuga._id)}
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

export default ListarTortugas;
