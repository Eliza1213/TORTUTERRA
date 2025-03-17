import React, { useState } from "react";

const CrearTermino = () => {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newTermino = { titulo, descripcion };

    const response = await fetch("http://localhost:4000/api/terminos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTermino),
    });

    if (response.ok) {
      alert("Término creado con éxito");
    } else {
      alert("Error al crear término");
    }
  };

  return (
    <div className="terminos-container">
      <h2>Crear Término</h2>
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
        <button type="submit">Crear Término</button>
      </form>
    </div>
  );
};

export default CrearTermino;
