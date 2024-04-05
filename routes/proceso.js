import { Router } from "express";
import httpproceso from "../controllers/proceso.js";
import { check } from "express-validator";
import validarCampos from "../middelwares/validator.js";

const router = new Router();

router.get("/proceso", httpproceso.getproceso);
router.get(
  "/proceso/:id",
  [check("id", "la nombre es obligatoria").not().isEmpty(), validarCampos],
  httpproceso.getprocesoid
);
router.post(
  "/agregar",
  [
    check("codigo", "la nombre es obligatoria").not().isEmpty(),
    check("presupuesto", "la nombre es obligatoria").not().isEmpty(),
    check("fecha", "la nombre es obligatoria").not().isEmpty(),
    validarCampos,
  ],
  httpproceso.postagregarproceso
);
// router.put('/proceso/:id',[
// ], httpproceso.putarea);
router.put("/inactivar/:id", httpproceso.putprocesoInactivar);
router.put("/activar/:id", httpproceso.putprocesoActivar);

export default router;
