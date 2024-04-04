import mongoose from "mongoose";

const Distribucion_lote_depen = new mongoose.Schema(
    {
        presupuesto: {type: Number, require:true},
        presupuestoDisponible: {type: Number},
        iddiscontratolote: {type:mongoose.Schema.Types.ObjectId, ref:'Dislote_contrato', require:true},
        iddisdependencia: {type:mongoose.Schema.Types.ObjectId, ref:'Disdependencia', require:true},
        estado : { type: Boolean, default:1}
    }
)

export default mongoose.model("Distribucion_lote_depen", Distribucion_lote_depen)