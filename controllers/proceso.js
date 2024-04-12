import Proceso from "../models/proceso.js";

const httpproceso = {
  //GET
  getproceso: async (req, res) => {
    try {
      const proceso = await Proceso.find(); // Cambia la referencia a "cliente" por "proceso"

      if (proceso.length === 0) {
        res.json({ msg: "No hay procesos registradas" });
      } else {
        res.json({ proceso });
      }
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  getprocesoid: async (req, res) => {
    try {
      const { id } = req.params;
      const proceso = await Proceso.findOne({ id }); // Cambia la referencia a "cliente" por "proceso"

      if (!proceso) {
        res.json({ msg: "proceso no encontrada" });
      } else {
        res.json({ proceso });
      }
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  postagregarproceso: async (req, res) => {
    try {
      const { codigo, presupuesto, fecha } = req.body;
      const proceso = new Proceso({ codigo, presupuesto, presupuestoDisponible:presupuesto, fecha});
  
      await proceso.save();
  
      res.json({ proceso });
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  

  putprocesoInactivar: async (req, res) => {
    try {
      const { id } = req.params;
      const proceso = await Proceso.findByIdAndUpdate(id, { estado: 0 }, { new: true });
      res.json({ proceso });
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  putprocesoActivar: async (req, res) => {
    try {
      const { id } = req.params;
      const proceso = await Proceso.findByIdAndUpdate(id, { estado: 1 }, { new: true });
      res.json({ proceso });
    } catch (error) {
      res.status(400).json({ error });
    }
  },
};

export default httpproceso;
