import { Router } from "express";
import { check } from "express-validator";
import validarCampos from "../middlewares/validar.js";
import httpSalida from "../controllers/salida.js";
import { validarJWT } from "../middlewares/validar-jwt.js";
// import helpersUsuario from "../helpers/usuario.js";
// import helpersDestino from "../helpers/destino.js";

const router = new Router();

router.get("/all", validarJWT, httpSalida.getAllSalida);
router.get("/buscarId/:id",
  [
    validarJWT,
    check().notEmpty(),
    validarCampos,
  ],
  httpSalida.getSalidaPorId
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