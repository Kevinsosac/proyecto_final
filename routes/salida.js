import { Router } from "express";
import { check } from "express-validator";
import validarCampos from "../middelwares/validator.js";
import httpSalida from "../controllers/salida.js";
import { validarJWT } from "../middelwares/validar.js";
const router = new Router();

router.get("/all", validarJWT, httpSalida.getAllSalida);
router.get("/buscarId/:id",
  [
    validarJWT,
    check().notEmpty(),
    validarCampos,
  ],
  httpSalida.getPorSalidaId
);

router.post("/agregar",
  [
    validarJWT,
    check().notEmpty(),
    validarCampos,
  ],
  httpSalida.postSalida
);

router.put("/inactivar/:id",httpSalida.putSalidaInactivar); 
router.put("/activar/:id", httpSalida.putSalidaActivar); 


export default router;