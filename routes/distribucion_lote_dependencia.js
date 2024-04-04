import { Router } from "express";
import httpDistribucion_lote_dependencia from "../controllers/distribucion_lote_dependencia.js"
import { check } from "express-validator";
import  validarCampos  from "../middelwares/validator.js";


const router = new Router()

router.get("/all", httpDistribucion_lote_dependencia.getAllDistribucion_lote_dependencia)
router.get("/detalle", httpDistribucion_lote_dependencia.getdetalle_Distribucion_lote_dependenciaid)
router.post("/agregar",[
    check().notEmpty,
    validarCampos
], httpDistribucion_lote_dependencia.postAgregarDistribucion_lote_dependencia)
router.put("/inactivar/:id", httpDistribucion_lote_dependencia.putDistribucion_lote_dependenciaInactivar); 
router.put("/activar/:id", httpDistribucion_lote_dependencia.putDistribucion_lote_dependencia); 

export default router;