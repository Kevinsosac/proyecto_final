import { Router } from "express";
import { check } from "express-validator";
import validarCampos from "../middelwares/validator.js";
import httpSalida from "../controllers/salida.js";
import { validarJWT } from "../middelwares/validar.js";
const router = new Router();

router.get("/all", httpSalida.getAllSalida);
router.get("/buscarId/:id", httpSalida.getPorSalidaId);

router.post("/agregar",
  [
    check("numero", "el numero es obligatorio").not().isEmpty(),
    check("fechaEntrega", "el fecha Entrega es obligatorio").not().isEmpty(),
    check("idBodeguero", "el idbodeguero es obligatorio").not().isEmpty(),
    check("idPedido", "el idPedido es obligatorio").not().isEmpty(),
    check("total", "el total es obligatorio").not().isEmpty(),
    validarCampos,
  ],
  httpSalida.postSalida
);

router.put("/inactivar/:id",httpSalida.putSalidaInactivar); 
router.put("/activar/:id", httpSalida.putSalidaActivar); 


export default router;