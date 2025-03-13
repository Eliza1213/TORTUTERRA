const mongoose = require("mongoose");

// Definir el esquema de InformacionTortuga con imagen
const informacionTortugaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  tipo: { 
    type: String, 
    required: true, 
    enum: ['terrestre', 'acuática', 'marina'],
  },
  descripcion: { type: String, required: true },
  longevidad: { type: Number, required: true },
  alimentacion: { type: String, required: true },
  habitat: { type: String, required: true },
  amenazas: { type: String }, 
  imagen: { type: String },
  fechaCreacion: { type: Date, default: Date.now },
});

const InformacionTortuga = mongoose.model("InformacionTortuga", informacionTortugaSchema);

module.exports = InformacionTortuga;
