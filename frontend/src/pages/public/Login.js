import React, { useState } from "react";
import '../../styles/Login.css'
import Boton from "../../components/Boton";

function Login() {
  const [formData, setFormData] = useState({ usuario: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías manejar el envío del formulario
    if (!formData.usuario || !formData.password) {
      setError("Por favor completa todos los campos.");
    } else {
      setError("");
      alert("Inicio de sesión exitoso");
    }
  };

  return (
    <div className="login-container">
      <div>
      <h2>Inicio de Sesión</h2>
      {error && <p className="error">{error}</p>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="usuario">Usuario:</label>
          <input
            type="text"
            id="usuario"
            name="usuario"
            className="input"
            placeholder="Ingresa tu usuario"
            value={formData.usuario}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            className="input"
            placeholder="Ingresa tu contraseña"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <Boton type="submit">Iniciar Sesión</Boton>
      </form>
      </div>
    </div>
  );
}

export default Login;
