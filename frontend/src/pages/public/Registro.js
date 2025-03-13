import React, { useState } from 'react';
import '../../styles/Registro.css';
import Boton from '../../components/Boton';

function Registro() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    apellido: '',
    user: '',
    telephone: '',
    email: '',
    password: '',
    confirmPassword: '',
    pregunta: '',
    respuesta: ''
  });

  const [error, setError] = useState('');

  // Expresión regular para validar correo
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  // Expresión regular para validar teléfono (número de 10 dígitos)
  const phoneRegex = /^\d{10}$/;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const validateForm = () => {
    if (!formData.name || !formData.apellido || !formData.user) {
      setError('Por favor, completa todos los campos obligatorios.');
      return false;
    }
    if (!emailRegex.test(formData.email)) {
      setError('Por favor, ingresa un correo electrónico válido.');
      return false;
    }
    if (!phoneRegex.test(formData.telephone)) {
      setError('Por favor, ingresa un número de teléfono válido (10 dígitos).');
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Las contraseñas no coinciden.');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Datos enviados:', formData);
      alert('Registro exitoso');
    }
  };

  return (
    <div className="registro-container">
      <form className="registro-form" onSubmit={handleSubmit}>
        <h2>Crear Cuenta</h2>

        {step === 1 && (
          <>
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ingresa tu nombre"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="apellido">Apellido</label>
              <input
                type="text"
                id="apellido"
                name="apellido"
                value={formData.apellido}
                onChange={handleChange}
                placeholder="Ingresa tu apellido"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="user">Usuario</label>
              <input
                type="text"
                id="user"
                name="user"
                value={formData.user}
                onChange={handleChange}
                placeholder="Ingresa nombre de usuario"
                required
              />
            </div>
            <Boton type="button" onClick={nextStep}>Siguiente</Boton>
          </>
        )}

        {step === 2 && (
          <>
            <div className="form-group">
              <label htmlFor="email">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Ingresa tu correo"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Ingresa tu contraseña"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirmar Contraseña</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Repite tu contraseña"
                required
              />
            </div>
            <Boton type="button" onClick={prevStep}>Volver</Boton>
            <Boton type="button" onClick={nextStep}>Siguiente</Boton>
          </>
        )}

        {step === 3 && (
          <>
            <div className="form-group">
              <label htmlFor="telephone">Teléfono</label>
              <input
                type="text"
                id="telephone"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                placeholder="Número de teléfono 10 dígitos"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="pregunta">Pregunta Secreta</label>
              <input
                type="text"
                id="pregunta"
                name="pregunta"
                value={formData.pregunta}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="respuesta">Respuesta Secreta</label>
              <input
                type="text"
                id="respuesta"
                name="respuesta"
                value={formData.respuesta}
                onChange={handleChange}
                required
              />
            </div>
              <Boton type="button" onClick={prevStep}>Volver</Boton>
            
              <Boton type="submit">Registrarse</Boton>
          </>
        )}

        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
}

export default Registro;
