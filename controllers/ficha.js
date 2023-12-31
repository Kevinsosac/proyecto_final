import Ficha from "../models/ficha.js"; // Importa el modelo de ficha

const httpFicha = {
  //GET
  getAllFicha: async (req, res) => {
    try {
      const ficha = await Ficha.find(); // Cambia la referencia a "cliente" por "ficha"

      if (ficha.length === 0) {
        res.json({ msg: "No hay fichas registradas" });
      } else {
        res.json({ ficha });
      }
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  getFichaNumero: async (req, res) => {
    try {
      const { numero } = req.params;
      const ficha = await Ficha.findOne({ numero }); // Cambia la referencia a "cliente" por "ficha"

      if (!ficha) {
        res.json({ msg: "Ficha no encontrada" });
      } else {
        res.json({ ficha });
      }
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  getFichaNombre: async (req, res) => {
    try {
      const { nombre } = req.params;
      const ficha = await Ficha.findById(nombre);

      if (!ficha) {
        res.json({ msg: "Ficha no encontrada" });
      } else {
        res.json({ ficha });
      }
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  postFicha: async (req, res) => {
    try {
      const { nombre, numero} = req.body;
      const ficha = new Ficha({ nombre, numero});
  
      await ficha.save();
  
      res.json({ ficha });
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  
  //PUT
  putFicha: async (req, res) => {
    try {
      const { id } = req.params
      const { nombre } = req.body
      const ficha = await Ficha.findByIdAndUpdate(id, { nombre }, { new: true });
      res.json({ ficha })
    } catch (error) {
      res.status(400).json({ error })
    }
  },
  
  putFichaInactivar: async (req, res) => {
    try {
      const { id } = req.params
      const ficha = await Ficha.findByIdAndUpdate(id, { estado: 0 }, { new: true })
      res.json({ ficha })
    } catch (error) {
      res.status(400).json({ error })
  
    }
  },
  putFichaActivar: async (req, res) => {
    try {
      const { id } = req.params
      const ficha = await Ficha.findByIdAndUpdate(id, { estado: 1 }, { new: true })
      res.json({ ficha })
    } catch (error) {
      res.status(400).json({ error })
    }
  },
  
  
  //DELETE
  deleteFicha: async (req, res) => {
    try {
      const { numero } = req.params
      const ficha = await Ficha.findOneAndDelete({ numero })
      res.json({ msg: "cliente eliminado" })
    } catch (error) {
      res.status(400).json({ error })
    }
  
  },
  
  deleteFichaNumero: async () => {
    try {
      const { id } = req.params
      const ficha = await Ficha.findOneAndDelete(id)
      res.json({ msg: "cliente eliminado" })
    } catch (error) {
      res.status(400).json({ error })
    }
  },
};

export default httpFicha;
