import Proceso from "../models/proceso.js";

const httpproceso = {
  //GET
  getproceso: async (req, res) => {
    try {
      const area = await Proceso.find(); // Cambia la referencia a "cliente" por "area"

      if (area.length === 0) {
        res.json({ msg: "No hay areas registradas" });
      } else {
        res.json({ area });
      }
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  getprocesoid: async (req, res) => {
    try {
      const { id } = req.params;
      const area = await Proceso.findOne({ id }); // Cambia la referencia a "cliente" por "area"

      if (!area) {
        res.json({ msg: "area no encontrada" });
      } else {
        res.json({ area });
      }
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  postagregarproceso: async (req, res) => {
    try {
      const { codigo, presupuesto, fecha } = req.body;
      const area = new Proceso({ codigo, presupuesto, presupuestoDisponible:presupuesto, fecha});
  
      await area.save();
  
      res.json({ area });
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  

  putprocesoInactivar: async (req, res) => {
    try {
      const { id } = req.params;
      const area = await Proceso.findByIdAndUpdate(id, { estado: 0 }, { new: true });
      res.json({ area });
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  putprocesoActivar: async (req, res) => {
    try {
      const { id } = req.params;
      const area = await Proceso.findByIdAndUpdate(id, { estado: 1 }, { new: true });
      res.json({ area });
    } catch (error) {
      res.status(400).json({ error });
    }
  },
};

export default httpproceso;
