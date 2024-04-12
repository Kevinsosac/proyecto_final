import mongoose from "mongoose"

const Distribucion_area_destino = new mongoose.Schema(
    {
        Presupuesto_Asignado:{type:Number,require:true},
        Presupuesto_Actual:{type:Number,require:true},
        iddistribucionredArea:{type:mongoose.Schema.Types.ObjectId, ref:'Distribucion_red_area', require:true},
        idDestino:{type:mongoose.Schema.Types.ObjectId, ref:'ficha', require:true},
        year: {type: String, require: true},
        createAd: {type:Date, default:Date.now},
        estado : { type: Boolean, default:1},
    }
)

export default mongoose.model("Distribucion_area_destino", Distribucion_area_destino)