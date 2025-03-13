const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 4000;

// Middlewares
app.use(express.json());
app.use(cors());

// Conectar a MongoDB
connectDB();

// Definir rutas
app.use("/api/usuarios", require("./routes/usuarioRoutes"));
app.use("/api/usuarios/login", require("./routes/usuarioLoginRoutes")); 
app.use("/api/misiones", require("./routes/MisionRoutes")); // Rutas de Misión
app.use("/api/visiones", require("./routes/VisionRoutes")); // Rutas de Visión
app.use("/api/preguntas", require("./routes/PreguntaRoutes"));
app.use("/api/informacionTortuga", require("./routes/InformacionTortugaRoutes"));

app.listen(port, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${port}`);
});
//correr servidor = npm run dev 
//npm wit distribu  swif alert para etiquetas de alerta
