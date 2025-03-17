import React, { useState } from "react";

const CrearProducto = () => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");
  const [imagen, setImagen] = useState(null); // Aquí se almacena el archivo de imagen

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Crear el FormData para enviar el archivo y otros datos
    const formData = new FormData();
    formData.append("nombre", nombre);
    formData.append("descripcion", descripcion);
    formData.append("precio", parseFloat(precio));
    formData.append("stock", parseInt(stock, 10));
    formData.append("imagen", imagen); // Agregamos la imagen al FormData

    const response = await fetch("http://localhost:4000/api/productos", {
      method: "POST",
      body: formData, // Enviamos el FormData
    });

    if (response.ok) {
      alert("Producto creado con éxito");
    } else {
      alert("Error al crear producto");
    }
  };

  return (
    <div className="productos-container">
      <h2>Crear Producto</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre del producto"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <textarea
          placeholder="Descripción del producto"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Precio"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          required
        />
        <input
          type="file"
          onChange={(e) => setImagen(e.target.files[0])} // Cargamos la imagen seleccionada
          required
        />
        <button type="submit">Crear Producto</button>
      </form>
    </div>
  );
};

export default CrearProducto;
