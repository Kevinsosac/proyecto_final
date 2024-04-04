import { Router } from "express";
import { check } from "express-validator";
import httpDetSalida from "../controllers/detSalida.js"
import validarCampos from "../middelwares/validator.js";
import { validarJWT } from "../middelwares/validar.js";
// import helpersUsuario from "../helpers/usuario.js";
// import helpersDestino from "../helpers/destino.js";

const router = new Router();

router.get("/all", validarJWT, httpDetSalida.getAlldetSalida);
router.get("/buscarId/:id",
  [
    validarJWT,
    check().notEmpty(),
    validarCampos,
  ],
  httpDetSalida.getPordetSalidaId
);

router.post("/agregar",
  [
    validarJWT,
    check().notEmpty(),
    validarCampos,
  ],
  httpDetSalida.postdetSalida
);

router.put("/inactivar/:id",httpDetSalida.putdetSalidaInactivar); 
router.put("/activar/:id", httpDetSalida.putdetSalidaActivar); 


export default router;