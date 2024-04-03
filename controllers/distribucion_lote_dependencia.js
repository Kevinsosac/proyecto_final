import Distribucion_lote_depen from "../models/distribucion_lote_dependencia.js"

const httpDistribucion_lote_dependencia = {
    getAllDistribucion_lote_dependencia: async (req, res) => {
        try {
            const Distribucion_area_destino = await Distribucion_lote_depen.find();

            if (Distribucion_area_destino.length === 0) {
                res.json({ msg: "No hay distribuciones registradas" });
            } else {
                res.json({ Distribucion_area_destino });
            }
        } catch (error) {
            res.status(400).json({ error });
        }
    },
    getdetalle_Distribucion_lote_dependenciaid: async (req, res) => {
        try {
            const { id } = req.params
            const Distribucion_area_destino = await Distribucion_lote_depen.findById({ id })
            res.json({ Distribucion_area_destino })
        } catch (error) {
            res.json({ error })
        }
    },
    postAgregarDistribucion_lote_dependencia: async (req, res) => {
        try {
            const { Presupuesto, iddiscontratolote, iddisdependencia } = req.body
            const Distribucion_area_destino = new Distribucion_lote_depen({Presupuesto,presupuestoDisponible:Presupuesto, iddiscontratolote, iddisdependencia })

            await Distribucion_area_destino.save()
            res.json({ Conexion_red_lote })
        } catch (error) {
            res.status(400).json({ error: "ESO ESTA RE MAL CARE VRG" })
        }

    },

    putDistribucion_lote_dependenciaInactivar: async (req, res) => {
        try {
            const { id } = req.params;
            const Distribucion_area_destino = await Distribucion_lote_depen.findByIdAndUpdate(id, { estado: 0 }, { new: true });
            res.json({ Distribucion_area_destino });
        } catch (error) {
            res.status(400).json({ error });
        }
    },

    putDistribucion_lote_dependencia: async (req, res) => {
        try {
            const { id } = req.params;
            const Distribucion_area_destino = await Distribucion_lote_depen.findByIdAndUpdate(id, { estado: 1 }, { new: true });
            res.json({ Distribucion_area_destino });
        } catch (error) {
            res.status(400).json({ error });
        }
    },
}

export default httpDistribucion_lote_dependencia