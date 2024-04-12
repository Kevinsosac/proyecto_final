import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ficha = new Schema({
  codigo_ficha: { type: Number, require: true, maxlength: 7 },
  nombre: { type: String, unique: true, require: true },
  nivel_de_formacion: { type: String, require: true },
  fecha_inicio: { type: String, require: true },
  ficha_fin: { type: String, require: true },
  id_area: { type: mongoose.Schema.Types.ObjectId, ref: "Area", require: true },
  estado: { type: Boolean, default: 1 },
  createAT: { type: Date, default: Date.now },
});

export default mongoose.model("ficha", ficha);
