const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 4000;

// Middlewares
app.use(express.json());
app.use(cors());

// Hacer accesible la carpeta 'uploads'
const path = require("path"); // Importar módulo 'path' para rutas
app.use("/uploads", express.static(path.join(__dirname, "uploads"))); // Sirve archivos estáticos desde 'uploads'
// Conectar a MongoDB
connectDB();

// Definir rutas

app.use("/api/misiones", require("./routes/MisionRoutes"));
app.use("/api/misiones", require("./routes/MisionRoutes"));  
app.use("/api/visiones", require("./routes/VisionRoutes")); 
app.use("/api/preguntas", require("./routes/PreguntaRoutes"));
app.use("/api/politicas", require ("./routes/PoliticaRoutes"));
app.use("/api/terminos", require ("./routes/TerminoRoutes"));
app.use("/api/productos", require("./routes/ProductoRoutes"));
app.use("/api/informaciones", require("./routes/InformacionRoutes"));
app.use("/api/contactos", require("./routes/ContactoRoutes"));

app.listen(port, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${port}`);
});
//correr servidor = npm run dev / node server.js
//npm wit distribu  swif alert para etiquetas de alerta
