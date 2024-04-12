import mongoose from "mongoose";

const Salida = new mongoose.Schema({
    numero: {type: Number, unique: true},
    fechaEntrega: {type:String, require:true },
    idBodeguero: {type:mongoose.Schema.Types.ObjectId,ref:'Usuario', require:true},
    idPedido: {type:mongoose.Schema.Types.ObjectId,ref:'Pedido', require:true},
    total: {type:Number, require:true},
    entregado: {type:Boolean, default: true},
    estado:{type:Boolean, default:0},
    createAT : {type:Date,default: Date.now }
});


export default mongoose.model("Salida", Salida)