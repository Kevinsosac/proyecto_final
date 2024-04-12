import mongoose from "mongoose";

const Detsalida = new mongoose.Schema({
    cantidadentregada: {type:Number, require:true },
    idsalida: {type:mongoose.Schema.Types.ObjectId,ref:'Salida', require:true},
    idproducto: {type:mongoose.Schema.Types.ObjectId,ref:'Producto', require:true},
    cantidadpendeinte: {type:Number, require:true},
    estado:{type:Boolean, default:0},
    createAT : {type:Date,default: Date.now }
});


export default mongoose.model("Detsalida", Detsalida)