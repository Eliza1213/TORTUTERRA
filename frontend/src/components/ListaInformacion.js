import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ListarInformacion = () => {
  const [informaciones, setInformaciones] = useState([]);

  useEffect(() => {
    const fetchInformaciones = async () => {
      const response = await fetch("http://localhost:4000/api/informaciones");
      const data = await response.json();
      setInformaciones(data);
    };

    fetchInformaciones();
  }, []);

  // Función para eliminar información con confirmación
  const handleEliminar = async (id) => {
    const confirmacion = window.confirm(
      "¿Estás seguro de que deseas eliminar esta información?"
    );

    if (confirmacion) {
      const response = await fetch(`http://localhost:4000/api/informaciones/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        // Actualiza la lista de informaciones después de eliminar
        setInformaciones(informaciones.filter((info) => info._id !== id));
      }
    }
  };

  return (
    <div className="informacion-container">
      <h2>Información sobre Tortugas</h2>
      <table>
        <thead>
          <tr>
            <th>Especie</th>
            <th>Alimentación</th>
            <th>Temperatura Ideal</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {informaciones.map((info) => (
            <tr key={info._id}>
              <td>{info.especie}</td>
              <td>{info.alimentacion}</td>
              <td>{info.temperatura_ideal}</td>
              <td>
                <Link to={`/informacionAdmin/actualizar/${info._id}`} className="btn">
                  Actualizar
                </Link>
                <button
                  onClick={() => handleEliminar(info._id)}
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

export default ListarInformacion;
