import { Router } from "express";
import httpproveedor from "../controllers/proveedor.js";
import { check } from "express-validator";
import validarCampos from "../middelwares/validator.js";

const router=new Router()

router.get('/producto', httpproveedor.getproveedor)
router.get('/producto/:cedula',[
    check("cedula", "El codigo es obligatorio").not().isEmpty(),
    validarCampos
], httpproveedor.getproveedorid)
router.get('/producto/:nombre',[
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    validarCampos
], httpproveedor.getproveedornombre)
router.post('/agregar',[
    check("apellido", "el apellido es obligatorio").not().isEmpty(),
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("cedula", "La cedula es obligatoria").not().isEmpty(),
    check("correo", "La correo de medida es obligatoria").not().isEmpty(),
    check("telefono", "El telefono unitario es obligatorio").not().isEmpty(),
    check("empresa", "El empresa unitario es obligatorio").not().isEmpty(),
    validarCampos
],httpproveedor.postAgregarproveedor );
router.put('/producto/:id',[
    check("apellido", "el apellido es obligatorio").not().isEmpty(),
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("cedula", "La cedula es obligatoria").not().isEmpty(),
    check("correo", "La correo de medida es obligatoria").not().isEmpty(),
    check("telefono", "El telefono unitario es obligatorio").not().isEmpty(),
    validarCampos
], httpproveedor.putproveedor);
    
router.put("/inactivar/:id", httpproveedor.putproveedorInactivar); 

router.put("/activar/:id", httpproveedor.putproveedorActivar); 
export default router