import mongoose from "mongoose"

const Proveedor = new mongoose.Schema(
    {
        nombre: {type:String, require:true},
        apellido: {type:String, require:true},
        cedula: {type: Number, require:true},
        correo: {type: String, require:true},
        telefono:{type:Number, require:true},
        empresa:{type:Number, require:true},
        estado:{type: Boolean, default:1},
    }
)

export default mongoose.model("Proveedor", Proveedor)