import mongoose from "mongoose";

const Schema = mongoose.Schema;

const detalle_pedido = new Schema({
  cantidad: { type: Number, required: true },
  idpedido: { type: mongoose.Schema.Types.ObjectId,ref:'pedido', required: true },
  idproducto: { type: mongoose.Schema.Types.ObjectId,ref: 'producto', require: true},
  estado:{type: Boolean, default:1},
  createAT : {type: Date, default: Date.now}

});

export default mongoose.model("Detalle_pedido", detalle_pedido)