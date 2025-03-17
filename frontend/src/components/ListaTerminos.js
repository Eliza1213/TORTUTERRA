import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ListarTerminos = () => {
  const [terminos, setTerminos] = useState([]);

  useEffect(() => {
    const fetchTerminos = async () => {
      const response = await fetch("http://localhost:4000/api/terminos");
      const data = await response.json();
      setTerminos(data);
    };

    fetchTerminos();
  }, []);

  // Función para eliminar un término con confirmación
  const handleEliminar = async (id) => {
    const confirmacion = window.confirm(
      "¿Estás seguro de que deseas eliminar este término?"
    );

    if (confirmacion) {
      const response = await fetch(`http://localhost:4000/api/terminos/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        // Actualiza la lista de términos después de eliminar
        setTerminos(terminos.filter((termino) => termino._id !== id));
      }
    }
  };

  return (
    <div className="terminos-container">
      <h2>Términos</h2>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {terminos.map((termino) => (
            <tr key={termino._id}>
              <td>{termino.titulo}</td>
              <td>
                <Link to={`/terminosAdmin/actualizar/${termino._id}`} className="btn">
                  Actualizar
                </Link>
                <button
                  onClick={() => handleEliminar(termino._id)}
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

export default ListarTerminos;
