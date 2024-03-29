import mongoose from "mongoose"

const Area = new mongoose.Schema(
    {
        nombre: {type: String, require:true},
        createAd: {type:Date, default:Date.now},
        estado : { type: Boolean, default:1},
    }
)

export default mongoose.model("Area", Area)