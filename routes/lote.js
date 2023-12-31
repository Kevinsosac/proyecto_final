import { Router } from "express";
import httpLote from "../controllers/lote.js";
import { check } from "express-validator";
import { validarCampos  } from "../middelwares/validator.js";


const router = new Router();

router.get("/all", httpLote.getAllLote);

router.get("/buscar/:nombre", httpLote.getLoteNombre);

router.get("/Lote/:presupuesto", httpLote.getLotePresupuesto);

router.get("/Lote/:id", httpLote.getLoteId);

router.post(
  "/guardar",
  [
    check("nombre", "El nombre de lote es obligatorio").notEmpty(),
    check("nombre", "El nombre debe tener minimo 8 letras").isLength({ min: 8}), 
    check("presupueto", "Debe tener su presupuesto asignado").notEmpty(),
    check("presupuesto", "El presupuesto debe ser un número en pesos colombianos").custom((value) => {
        // Utiliza una expresión regular para verificar si el valor es un número en pesos colombianos (ejemplo: 1,234,567)
        const colombianPesosRegex = /^[0-9]{1,3}(?:,[0-9]{3})*(?:\.[0-9]{1,2})?$/;
        if (!colombianPesosRegex.test(value)) {
          throw new Error("Formato de presupuesto incorrecto. Debe ser un número en pesos colombianos.");
        }
        return true; // Retorna true si la validación es exitosa
      }),
      
    validarCampos 
  ],
  httpLote.postLote 
);

router.put("/editar/:id", [
  check("nombre", "Deseas cambiar el nombre").notEmpty(),
  check("nombre", "El nombre debe tener minimo 8 letras").isLength({ min: 8}), 
  check("presupuesto", "Deseas cambiar el presupuesto actual").custom((value) => {
    // Utiliza una expresión regular para verificar si el valor es un número en pesos colombianos (ejemplo: 1,234,567)
    const colombianPesosRegex = /^[0-9]{1,3}(?:,[0-9]{3})*(?:\.[0-9]{1,2})?$/;
    if (!colombianPesosRegex.test(value)) {
      throw new Error("Formato de presupuesto incorrecto. Debe ser un número en pesos colombianos.");
    }
    return true; // Retorna true si la validación es exitosa
  }),
  
validarCampos 
], httpLote.putLote); 

router.put("/inactivar/:id", httpLote.putLoteInactivar); 

router.put("/activar/:id", httpLote.putLoteActivar); 

router.delete("/eliminar/:nombre", httpLote.deleteLote); 

export default router;

