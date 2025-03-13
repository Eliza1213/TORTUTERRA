import React, { useState } from "react";

const CrearTortuga = () => {
  const [nombre, setNombre] = useState("");
  const [tipo, setTipo] = useState("terrestre");
  const [descripcion, setDescripcion] = useState("");
  const [longevidad, setLongevidad] = useState("");
  const [alimentacion, setAlimentacion] = useState("");
  const [habitat, setHabitat] = useState("");
  const [amenazas, setAmenazas] = useState("");
  const [imagen, setImagen] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newTortuga = { nombre, tipo, descripcion, longevidad, alimentacion, habitat, amenazas, imagen };

    const response = await fetch("http://localhost:4000/api/informacionTortugas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTortuga),
    });

    if (response.ok) {
      alert("Tortuga creada con éxito");
    } else {
      alert("Error al crear tortuga");
    }
  };

  return (
    <div className="tortugas-container">
      <h2>Crear Tortuga</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <select
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
        >
          <option value="terrestre">Terrestre</option>
          <option value="acuática">Acuática</option>
          <option value="marina">Marina</option>
        </select>
        <textarea
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Longevidad (en años)"
          value={longevidad}
          onChange={(e) => setLongevidad(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Alimentación"
          value={alimentacion}
          onChange={(e) => setAlimentacion(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Hábitat"
          value={habitat}
          onChange={(e) => setHabitat(e.target.value)}
          required
        />
        <textarea
          placeholder="Amenazas"
          value={amenazas}
          onChange={(e) => setAmenazas(e.target.value)}
        />
        <input
          type="text"
          placeholder="URL de la imagen"
          value={imagen}
          onChange={(e) => setImagen(e.target.value)}
        />
        <button type="submit">Crear Tortuga</button>
      </form>
    </div>
  );
};

export default CrearTortuga;
