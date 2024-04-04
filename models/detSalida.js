import mongoose from "mongoose";

const Detsalida = new mongoose.Schema({
    cantidadentregada: {type:Date, require:true },
    idsalida: {type:mongoose.Schema.Types.ObjectId,ref:'Salida', require:true},
    identrada: {type:mongoose.Schema.Types.ObjectId,ref:'Entrada', require:true},
    cantidadpendeinte: {type:Number},
    estado:{type:Boolean, default:0},
    createAT : {type:Date,default: Date.now }
});


export default mongoose.model("Detsalida", Detsalida)