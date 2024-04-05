import Detsalida from "../models/detSalida.js";

const httpDetSalida = {
    getAlldetSalida: async (req, res) => {
        try {
            const detsalidas = await Detsalida.find().populate("idproducto").populate("idsalida");

            const detSalidas = detsalidas.map(async (e) => {
                e.detSalida = await Detsalida.find({ idPedido: e._id });
            });

            await Promise.all(detSalidas);

            res.json(detsalidas);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getPordetSalidaId: async (req, res) => {
        try {
            const salida = await Detsalida.findById(req.params.id).populate("idproducto").populate("idsalida");
            if (!salida) {
                return res.status(404).json({ mensaje: "Salida no encontrada" });
            }
            res.json(salida);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    postdetSalida: async (req, res) => {
        try {
            const { cantidadentregada, idsalida, idproducto, cantidadpendeinte } = req.body;

            const ultimoSalida = await Detsalida.findOne().sort({ numero: -1 });
            console.log(ultimoSalida);
            let numero = ultimoSalida ? ultimoSalida.numero : 0;
            numero += 1

            console.log(numero);

            const nuevoSalida = new Detsalida({ cantidadentregada, idsalida, idproducto, cantidadpendeinte });
            const salidaGuardado = await nuevoSalida.save();
            res.status(201).json(salidaGuardado);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    putdetSalidaInactivar: async (req, res) => {
        try {
            const { id } = req.params;
            const salidas = await Detsalida.findByIdAndUpdate(id, { estado: 0 }, { new: true });
            res.json({ salidas });
        } catch (error) {
            res.status(400).json({ error });
        }
    },

    putdetSalidaActivar: async (req, res) => {
        try {
            const { id } = req.params;
            const salidas = await Detsalida.findByIdAndUpdate(id, { estado: 1 }, { new: true });
            res.json({ salidas });
        } catch (error) {
            res.status(400).json({ error });
        }
    },
}

export default httpDetSalida