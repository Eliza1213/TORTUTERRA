const express = require("express");
const InformacionTortuga = require("../models/InformacionTortuga");
const router = express.Router();

// Crear nueva información de tortuga
router.post("/", async (req, res) => {
  try {
    const { nombre, tipo, descripcion, longevidad, alimentacion, habitat, amenazas, imagen } = req.body;

    if (!nombre || !tipo || !descripcion || !longevidad || !alimentacion || !habitat) {
      return res.status(400).json({ error: "Todos los campos son obligatorios" });
    }

    const nuevaInformacionTortuga = new InformacionTortuga({
      nombre,
      tipo,
      descripcion,
      longevidad,
      alimentacion,
      habitat,
      amenazas,
      imagen,
    });

    await nuevaInformacionTortuga.save();
    res.status(201).json({ mensaje: "Información de Tortuga creada con éxito", informacionTortuga: nuevaInformacionTortuga });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear la información de la tortuga" });
  }
});

// Leer todas las tortugas
router.get("/", async (req, res) => {
  try {
    const tortugas = await InformacionTortuga.find();
    res.status(200).json(tortugas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener la información de las tortugas" });
  }
});

// Leer una tortuga por ID
router.get("/:id", async (req, res) => {
  try {
    const informacionTortuga = await InformacionTortuga.findById(req.params.id);
    if (!informacionTortuga) {
      return res.status(404).json({ error: "Tortuga no encontrada" });
    }
    res.status(200).json(informacionTortuga);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener la tortuga" });
  }
});

// Actualizar una tortuga
router.put("/:id", async (req, res) => {
  try {
    const { nombre, tipo, descripcion, longevidad, alimentacion, habitat, amenazas, imagen } = req.body;
    const informacionTortuga = await InformacionTortuga.findByIdAndUpdate(
      req.params.id,
      { nombre, tipo, descripcion, longevidad, alimentacion, habitat, amenazas, imagen },
      { new: true }
    );

    if (!informacionTortuga) {
      return res.status(404).json({ error: "Tortuga no encontrada" });
    }

    res.status(200).json({ mensaje: "Información de la tortuga actualizada", informacionTortuga });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al actualizar la tortuga" });
  }
});

// Eliminar una tortuga
router.delete("/:id", async (req, res) => {
  try {
    const informacionTortuga = await InformacionTortuga.findByIdAndDelete(req.params.id);
    if (!informacionTortuga) {
      return res.status(404).json({ error: "Tortuga no encontrada" });
    }

    res.status(200).json({ mensaje: "Información de la tortuga eliminada" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al eliminar la tortuga" });
  }
});

module.exports = router;
