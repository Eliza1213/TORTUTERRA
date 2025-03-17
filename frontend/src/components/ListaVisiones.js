import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Importar Bootstrap

const ListarVisiones = () => {
  const [visiones, setVisiones] = useState([]);

  useEffect(() => {
    const fetchVisiones = async () => {
      const response = await fetch("http://localhost:4000/api/visiones");
      const data = await response.json();
      setVisiones(data);
    };

    fetchVisiones();
  }, []);

  // Función para eliminar una visión con confirmación
  const handleEliminar = async (id) => {
    const confirmacion = window.confirm(
      "¿Estás seguro de que deseas eliminar esta visión?"
    );

    if (confirmacion) {
      const response = await fetch(`http://localhost:4000/api/visiones/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        // Actualiza la lista de visiones después de eliminar
        setVisiones(visiones.filter((vision) => vision._id !== id));
      }
    }
  };

  return (
    <div className="container mt-5">
      {/* Encabezado */}
      <h2 className="text-center text-success mb-4">Visiones</h2>
      
      {/* Tabla de visiones */}
      <table className="table table-bordered table-hover text-center">
        <thead className="table-success">
          <tr>
            <th>Título</th>
            <th>Descripción</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {visiones.length > 0 ? (
            visiones.map((vision) => (
              <tr key={vision._id}>
                <td>{vision.titulo}</td>
                <td>{vision.descripcion}</td>
                <td>
                  <Link 
                    to={`/visionesAdmin/actualizar/${vision._id}`} 
                    className="btn btn-warning btn-sm me-2"
                  >
                    Actualizar
                  </Link>
                  <button
                    onClick={() => handleEliminar(vision._id)}
                    className="btn btn-danger btn-sm"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-muted">
                No hay visiones disponibles.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ListarVisiones;
