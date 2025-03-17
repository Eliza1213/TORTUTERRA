import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ActualizarTermino = () => {
  const { id } = useParams(); // Obtiene el ID del término desde la URL
  const navigate = useNavigate(); // Para redirigir después de actualizar
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  useEffect(() => {
    const fetchTermino = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/terminos/${id}`);
        if (!response.ok) throw new Error("Error al obtener el término");
        const data = await response.json();
        setTitulo(data.titulo);
        setDescripcion(data.descripcion);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTermino();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedTermino = { titulo, descripcion };

    try {
      const response = await fetch(`http://localhost:4000/api/terminos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedTermino),
      });

      if (response.ok) {
        alert("Término actualizado con éxito");
        navigate("/admin/terminos/listar"); // Redirige a la lista de términos
      } else {
        alert("Error al actualizar término");
      }
    } catch (error) {
      console.error("Error en la actualización:", error);
    }
  };

  return (
    <div className="terminos-container">
      <h2>Actualizar Término</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
        />
        <textarea
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          required
        />
        <button type="submit">Actualizar Término</button>
      </form>
    </div>
  );
};

export default ActualizarTermino;
