import React, { useState } from "react";

const Registro = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    ap: "",
    am: "",
    username: "",
    email: "",
    password: "",
    telefono: "",
    preguntaSecreta: "",
    respuestaSecreta: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/api/usuarios/registro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Usuario registrado con éxito");
        setFormData({
          nombre: "",
          ap: "",
          am: "",
          username: "",
          email: "",
          password: "",
          telefono: "",
          preguntaSecreta: "",
          respuestaSecreta: "",
        });
      } else {
        const errorData = await response.json();
        alert(errorData.error || "Error al registrar usuario");
      }
    } catch (error) {
      console.error("Error al registrar usuario:", error);
      alert("Hubo un problema al registrar al usuario");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registro de Usuario</h2>
      <input type="text" name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} required />
      <input type="text" name="ap" placeholder="Apellido Paterno" value={formData.ap} onChange={handleChange} required />
      <input type="text" name="am" placeholder="Apellido Materno" value={formData.am} onChange={handleChange} required />
      <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <input type="password" name="password" placeholder="Contraseña" value={formData.password} onChange={handleChange} required />
      <input type="text" name="telefono" placeholder="Teléfono" value={formData.telefono} onChange={handleChange} required />
      
      <select name="preguntaSecreta" value={formData.preguntaSecreta} onChange={handleChange} required>
        <option value="">Seleccione una pregunta secreta</option>
        <option value="¿Cuál es tu personaje favorito?">¿Cuál es tu personaje favorito?</option>
        <option value="¿Cómo se llama tu primera mascota?">¿Cómo se llama tu primera mascota?</option>
        <option value="¿En qué ciudad naciste?">¿En qué ciudad naciste?</option>
      </select>
      <input type="text" name="respuestaSecreta" placeholder="Respuesta Secreta" value={formData.respuestaSecreta} onChange={handleChange} required />
      
      <button type="submit">Registrar</button>
    </form>
  );
};

export default Registro;

