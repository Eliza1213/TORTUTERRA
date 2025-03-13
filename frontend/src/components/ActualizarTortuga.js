import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ActualizarTortuga = () => {
  const { id } = useParams(); // Obtiene el ID de la tortuga desde la URL
  const navigate = useNavigate(); // Para redirigir después de actualizar
  const [nombre, setNombre] = useState("");
  const [tipo, setTipo] = useState("terrestre");
  const [descripcion, setDescripcion] = useState("");
  const [longevidad, setLongevidad] = useState("");
  const [alimentacion, setAlimentacion] = useState("");
  const [habitat, setHabitat] = useState("");
  const [amenazas, setAmenazas] = useState("");
  const [imagen, setImagen] = useState("");

  useEffect(() => {
    const fetchTortuga = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/informacionTortugas/${id}`);
        if (!response.ok) throw new Error("Error al obtener la tortuga");
        const data = await response.json();
        setNombre(data.nombre);
        setTipo(data.tipo);
        setDescripcion(data.descripcion);
        setLongevidad(data.longevidad);
        setAlimentacion(data.alimentacion);
        setHabitat(data.habitat);
        setAmenazas(data.amenazas);
        setImagen(data.imagen);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTortuga();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedTortuga = { nombre, tipo, descripcion, longevidad, alimentacion, habitat, amenazas, imagen };

    try {
      const response = await fetch(`http://localhost:4000/api/informacionTortugas/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedTortuga),
      });

      if (response.ok) {
        alert("Tortuga actualizada con éxito");
        navigate("/admin/tortugas/listar"); // Redirige a la lista de tortugas
      } else {
        alert("Error al actualizar tortuga");
      }
    } catch (error) {
      console.error("Error en la actualización:", error);
    }
  };

  return (
    <div className="tortugas-container">
      <h2>Actualizar Tortuga</h2>
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
        <button type="submit">Actualizar Tortuga</button>
      </form>
    </div>
  );
};

export default ActualizarTortuga;
