const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// Definir el esquema de usuario
const usuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  ap: { type: String, required: true },
  am: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  telefono: { type: String, required: true },
  preguntaSecreta: { type: String, required: true },
  respuestaSecreta: { type: String, required: true },
  rol: { type: String, default: "usuario", enum: ["administrador", "usuario"] }, // Rol por defecto: usuario
});

// Método para comparar contraseñas
usuarioSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// Ocultar contraseña al convertir el documento a JSON
usuarioSchema.set("toJSON", {
  transform: function (doc, ret) {
    delete ret.password; // Elimina la contraseña de los datos enviados al cliente
    return ret;
  },
});

const Usuario = mongoose.model("Usuario", usuarioSchema);

module.exports = Usuario;
