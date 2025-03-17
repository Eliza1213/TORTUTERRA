import '../../styles/Productos.css'; // Cambia la hoja de estilos si tienes una específica para productos
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import CrearProducto from "../../components/CrearProducto";
import ListaProductos from "../../components/ListaProductos";
import ActualizarProducto from "../../components/ActualizarProducto";

const ProductosAdmin = () => {
  return (
    <div className="productos-container">
      <h1>Administración de Productos</h1>

      <div className="productos-buttons">
        <Link to="/productosAdmin/crear" className="btn">➕ Alta Producto</Link>
        <Link to="/productosAdmin/listar" className="btn">📋 Ver Productos</Link>
      </div>

      <Routes>
        <Route path="crear" element={<CrearProducto />} />
        <Route path="listar" element={<ListaProductos />} />
        <Route path="actualizar/:id" element={<ActualizarProducto />} />
      </Routes>
    </div>
  );
};

export default ProductosAdmin;
