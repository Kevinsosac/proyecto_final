import Salida from "../models/salida.js";
import DetSalida from '../models/detSalida.js';

const httpSalida = {
    getAllSalida: async (req, res) => {
        try {
            const salidas = await Salida.find().populate("idPedido").populate("idBodeguero");

            const detSalidas = salidas.map(async (e) => {
                e.detSalida = await DetSalida.find({ idPedido: e._id });
            });

            await Promise.all(detSalidas);

            res.json(salidas);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getPorSalidaId: async (req, res) => {
        try {
            const salida = await Salida.findById(req.params.id).populate("idPedido").populate("idBodeguero");
            if (!salida) {
                return res.status(404).json({ mensaje: "Salida no encontrada" });
            }
            res.json(salida);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    postSalida: async (req, res) => {
        try {
            const { idBodeguero, idPedido, entregado, total } = req.body;

            const ultimoSalida = await Salida.findOne().sort({ numero: -1 });
            console.log(ultimoSalida);
            let numero = ultimoSalida ? ultimoSalida.numero : 0;
            numero += 1

            console.log(numero);

            const nuevoSalida = new Salida({ idBodeguero, idPedido, total, entregado, numero });
            const salidaGuardado = await nuevoSalida.save();
            res.status(201).json(salidaGuardado);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    putSalidaInactivar: async (req, res) => {
        try {
            const { id } = req.params;
            const salidas = await Salida.findByIdAndUpdate(id, { estado: 0 }, { new: true });
            res.json({ salidas });
        } catch (error) {
            res.status(400).json({ error });
        }
    },

    putSalidaActivar: async (req, res) => {
        try {
            const { id } = req.params;
            const salidas = await Salida.findByIdAndUpdate(id, { estado: 1 }, { new: true });
            res.json({ salidas });
        } catch (error) {
            res.status(400).json({ error });
        }
    },
}

export default httpSalida