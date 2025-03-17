const mongoose = require("mongoose");

// Esquema para el modelo Producto
const productoSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, default: mongoose.Types.ObjectId },
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  precio: { type: Number, required: true },
  stock: { type: Number, required: true },
  imagenes: { type: [String], required: true }, // Un arreglo de cadenas para las imágenes
  ultima_actualizacion: { type: Date, default: Date.now },
});

// Crear el modelo Producto
const Producto = mongoose.model("Producto", productoSchema);

module.exports = Producto;
