import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ActualizarPolitica = () => {
  const { id } = useParams(); // Obtiene el ID de la política desde la URL
  const navigate = useNavigate(); // Para redirigir después de actualizar
  const [titulo, setTitulo] = useState(""); // Estado para el título
  const [contenido, setContenido] = useState(""); // Estado para el contenido

  useEffect(() => {
    const fetchPolitica = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/politicas/${id}`); // Ruta para obtener una política específica
        if (!response.ok) throw new Error("Error al obtener la política");
        const data = await response.json();
        setTitulo(data.titulo);
        setContenido(data.contenido);
      } catch (error) {
        console.error("Error al cargar la política:", error);
      }
    };

    fetchPolitica();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedPolitica = { titulo, contenido };

    try {
      const response = await fetch(`http://localhost:4000/api/politicas/${id}`, {
        method: "PUT", // Método HTTP para actualizar
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedPolitica), // Datos enviados en formato JSON
      });

      if (response.ok) {
        alert("Política actualizada con éxito");
        navigate("/admin/politicas/listar"); // Redirige a la lista de políticas
      } else {
        alert("Error al actualizar política");
      }
    } catch (error) {
      console.error("Error en la actualización:", error);
    }
  };

  return (
    <div className="politicas-container">
      <h2>Actualizar Política</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)} // Actualiza el estado del título
          required
        />
        <textarea
          placeholder="Contenido"
          value={contenido}
          onChange={(e) => setContenido(e.target.value)} // Actualiza el estado del contenido
          required
        />
        <button type="submit">Actualizar Política</button>
      </form>
    </div>
  );
};

export default ActualizarPolitica;
