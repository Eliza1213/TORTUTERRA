import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ListarProductos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      const response = await fetch("http://localhost:4000/api/productos");
      const data = await response.json();
      setProductos(data);
    };

    fetchProductos();
  }, []);

  // Función para eliminar un producto con confirmación
  const handleEliminar = async (id) => {
    const confirmacion = window.confirm(
      "¿Estás seguro de que deseas eliminar este producto?"
    );

    if (confirmacion) {
      const response = await fetch(`http://localhost:4000/api/productos/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        // Actualiza la lista de productos después de eliminar
        setProductos(productos.filter((producto) => producto._id !== id));
      }
    }
  };

  return (
    <div className="productos-container">
      <h2>Productos</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto._id}>
              <td>{producto.nombre}</td>
              <td>${producto.precio.toFixed(2)}</td>
              <td>
                <Link to={`/productosAdmin/actualizar/${producto._id}`} className="btn">
                  Actualizar
                </Link>
                <button
                  onClick={() => handleEliminar(producto._id)}
                  className="btn"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListarProductos;
