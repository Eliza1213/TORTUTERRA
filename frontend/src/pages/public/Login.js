import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/api/usuarios/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("usuarioActual", JSON.stringify(data.usuario)); // Guardar usuario en LocalStorage

        alert("Inicio de sesión exitoso");

        // Redirigir según el rol del usuario
        if (data.usuario.rol === "administrador") {
          navigate("/misionesAdmin/listar");
        } else {
          navigate("/VisionesVisualizar/listar");
        }
      } else {
        const errorData = await response.json();
        alert(errorData.error || "Error al iniciar sesión");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      alert("Hubo un problema al iniciar sesión");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Inicio de Sesión</h2>
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <input type="password" name="password" placeholder="Contraseña" value={formData.password} onChange={handleChange} required />
      <button type="submit">Iniciar Sesión</button>
    </form>
  );
};

export default Login;
