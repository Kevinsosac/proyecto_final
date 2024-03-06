import mongoose from "mongoose"

const Items_presupuesto = new mongoose.Schema(
    {
        nombre: {type: String, require:true},
        presupuesto: {type:Number, require:true},
        presupuestoDisponible: {type:Number},
        año:{type:String, require:true},
        createAd: {type:Date, default:Date.now},
        estado : { type: Boolean, default:1},
    }
)

export default mongoose.model("ItemsPresupuesto", Items_presupuesto)