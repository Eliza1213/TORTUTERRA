import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ListarPreguntas = () => {
  const [preguntas, setPreguntas] = useState([]);

  useEffect(() => {
    const fetchPreguntas = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/preguntas");
        if (!response.ok) {
          throw new Error("No se pudo cargar las preguntas");
        }
        const data = await response.json();
        console.log("Preguntas cargadas:", data); // Verifica los datos en consola
        setPreguntas(data);
      } catch (error) {
        console.error("Error al cargar las preguntas:", error);
      }
    };

    fetchPreguntas();
  }, []);

  // Función para eliminar una pregunta con confirmación
  const handleEliminar = async (id) => {
    const confirmacion = window.confirm(
      "¿Estás seguro de que deseas eliminar esta pregunta?"
    );

    if (confirmacion) {
      try {
        const response = await fetch(`http://localhost:4000/api/preguntas/${id}`, {
          method: "DELETE",
        });

        if (response.ok) {
          // Actualiza la lista de preguntas después de eliminar
          setPreguntas((prevPreguntas) =>
            prevPreguntas.filter((pregunta) => pregunta._id !== id)
          );
        } else {
          console.error("No se pudo eliminar la pregunta");
        }
      } catch (error) {
        console.error("Error al eliminar la pregunta:", error);
      }
    }
  };

  return (
    <div className="preguntas-container">
      <h2>Preguntas</h2>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Descripción</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
        {preguntas.map((pregunta) => (
          <tr key={pregunta._id}>
            <td>{pregunta.pregunta || "Sin título"}</td>
            <td>{pregunta.respuesta || "Sin descripción"}</td>
            <td>
              <Link to={`/preguntasAdmin/actualizar/${pregunta._id}`} className="btn">
                Actualizar
              </Link>
              <button
                onClick={() => handleEliminar(pregunta._id)}
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

export default ListarPreguntas;
