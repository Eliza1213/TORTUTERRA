import React, { useState } from 'react';
import '../styles/header.css'; // Asegúrate de incluir el archivo CSS

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica para realizar la búsqueda con el término `searchTerm`
    console.log('Buscando:', searchTerm);
  };

  return (
    <header className="header">
      <h1>TortuTerra</h1>
      <div className="header-content">
        <form onSubmit={handleSearchSubmit}>
          <input 
            type="text" 
            placeholder="Buscar..." 
            className="search-bar" 
            value={searchTerm} 
            onChange={handleSearchChange} 
          />
        </form>
        <div className="session-links">
          <a href="/login">Iniciar sesión</a>
          <a href="/registro">Registrar</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
