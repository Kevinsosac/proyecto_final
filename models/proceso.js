import mongoose from "mongoose"

const Proceso = new mongoose.Schema(
    {
        codigo: {type: String, require:true},
        presupuesto: {type: Number, require:true},
        presupuestoActual: {type: Number, require:true},
        fecha: {type: Date, require:true},
        createAd: {type:Date, default:Date.now},
        estado : { type: Boolean, default:1},
    }
)

export default mongoose.model("Proceso", Proceso)