import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ActualizarProducto = () => {
  const { id } = useParams(); // Obtiene el ID del producto desde la URL
  const navigate = useNavigate(); // Para redirigir después de actualizar
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");
  const [imagenes, setImagenes] = useState("");

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/productos/${id}`);
        if (!response.ok) throw new Error("Error al obtener el producto");
        const data = await response.json();
        setNombre(data.nombre);
        setDescripcion(data.descripcion);
        setPrecio(data.precio);
        setStock(data.stock);
        setImagenes(data.imagenes.join(", ")); // Convierte el array en una cadena separada por comas
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducto();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedProducto = {
      nombre,
      descripcion,
      precio: parseFloat(precio),
      stock: parseInt(stock, 10),
      imagenes: imagenes.split(",").map((img) => img.trim()), // Convierte la cadena de vuelta a un array
    };

    try {
      const response = await fetch(`http://localhost:4000/api/productos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedProducto),
      });

      if (response.ok) {
        alert("Producto actualizado con éxito");
        navigate("/productosAdmin/listar"); // Redirige a la lista de productos
      } else {
        alert("Error al actualizar producto");
      }
    } catch (error) {
      console.error("Error en la actualización:", error);
    }
  };

  return (
    <div className="productos-container">
      <h2>Actualizar Producto</h2>
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
          type="text"
          placeholder="Imágenes (separadas por comas)"
          value={imagenes}
          onChange={(e) => setImagenes(e.target.value)}
          required
        />
        <button type="submit">Actualizar Producto</button>
      </form>
    </div>
  );
};

export default ActualizarProducto;
