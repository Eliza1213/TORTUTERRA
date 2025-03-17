const express = require("express");
const multer = require("multer");
const Producto = require("../models/Producto");

const router = express.Router();

// Configuración de multer para guardar imágenes
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Carpeta donde se guardarán las imágenes
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // Nombre único para la imagen
  },
});
const upload = multer({ storage });

// Ruta para crear un producto con imagen
router.post("/", upload.single("imagen"), async (req, res) => {
  try {
    const { nombre, descripcion, precio, stock } = req.body;
    const imagen = req.file ? `/uploads/${req.file.filename}` : null; // Ruta relativa de la imagen

    // Crear y guardar el producto
    const nuevoProducto = new Producto({
      nombre,
      descripcion,
      precio,
      stock,
      imagenes: [imagen], // Guardamos la ruta de la imagen
    });

    await nuevoProducto.save();
    res.status(201).json({ mensaje: "Producto creado con éxito", producto: nuevoProducto });
  } catch (error) {
    console.error("Error al crear producto:", error.message);
    res.status(500).json({ error: "Error al crear producto" });
  }
});

module.exports = router;
