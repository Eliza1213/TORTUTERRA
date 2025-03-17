import React, { useState } from "react";

const CrearPolitica = () => {
  const [titulo, setTitulo] = useState(""); // Estado para el título de la política
  const [contenido, setContenido] = useState(""); // Estado para el contenido de la política

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nuevaPolitica = { titulo, contenido }; // Objeto para enviar al backend

    try {
      const response = await fetch("http://localhost:4000/api/politicas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevaPolitica),
      });

      if (response.ok) {
        alert("Política creada con éxito");
        setTitulo(""); // Limpia el formulario
        setContenido("");
      } else {
        alert("Error al crear política");
      }
    } catch (error) {
      console.error("Error al crear política:", error);
    }
  };

  return (
    <div className="politicas-container">
      <h2>Crear Política</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
        />
        <textarea
          placeholder="Contenido"
          value={contenido}
          onChange={(e) => setContenido(e.target.value)}
          required
        />
        <button type="submit">Crear Política</button>
      </form>
    </div>
  );
};

export default CrearPolitica;
