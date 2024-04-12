import { Router } from "express";
import httpusuario from "../controllers/usuario.js";
import { check } from "express-validator";
import validarCampos from "../middelwares/validator.js";
import helpersUsuario from "../helpers/usuario.js";
const router = new Router();

// router.post("/recuperar-password", httpusuario.recuperarPassword);

// router.post("/confirmarcodigo/:codigo", httpusuario.confirmarCodigo);

// router.put("/nuevaPassword", [
//     check('Correo').custom(helpersUsuario.CorreoExistente2),
//     validarCampos
// ], httpusuario.nuevaPassword);

router.get("/usuario", httpusuario.getusuario);

router.get(
  "/recuperar-codigo/:correo",
  [check("correo").custom(helpersUsuario.existeCorreo), validarCampos],
  httpusuario.codigoRecuperar
);

router.get(
  "/confirmar-codigo/:codigo",
  [check("codigo", "Ingrese el código").not().isEmpty(), validarCampos],
  httpusuario.confirmarCodigo
);
router.put(
  "/nueva-password",
  [
    check("correo", "Por favor ingrese el correo").not().isEmpty(),
    check("correo", "No es un correo válido").isEmail(),
    check("correo").custom(helpersUsuario.existeCorreoNewPass),
    check("codigo", "Ingrese el código").not().isEmpty(),
    check("password", "Ingrese la password").not().isEmpty(),
    check(
      "password",
      "La contraseña debe contener al menos 1 mayúscula, 1 minúscula, al menos 2 números y un carácter especial"
    ).custom(helpersUsuario.validarPassword),
    validarCampos,
  ],
  httpusuario.nuevaPassword
);
router.get(
  "/usuario/:cedula",
  [check("cedula", "la cedula es obligatoria").not().isEmpty(), validarCampos],
  httpusuario.getusuariocedula
);
router.post(
  "/agregar",
  [
    check("nombre", "el nombre es obligatorio").not().isEmpty(),
    check("cedula", "la cedula es obligatoria").not().isEmpty(),
    check("cedula", "la cedula es obligatoria").custom(
      helpersUsuario.checkExistingUsuarioCode
    ),
    check("telefono", "el telefono es obligatorio").not().isEmpty(),
    check("correo", "el correo es obligatorio").not().isEmpty(),
    check("usuario", "el usuario es obligatorio").not().isEmpty(),
    check("usuario", "el usuario es obligatorio").custom(
      helpersUsuario.ExistingUsuario
    ),
    check("password", "la contraseña es obligatoria").not().isEmpty(),
    check("rol", "el rol es obligatorio").not().isEmpty(),
    validarCampos,
  ],
  httpusuario.registroUsuario
);
router.put(
  "/usuario/:id",
  [
    check("nombre", "el nombre es obligatorio").not().isEmpty(),
    check("cedula", "la cedula es obligatoria").not().isEmpty(),
    check("cedula", "la cedula es obligatoria").custom(
      helpersUsuario.checkExistingUsuarioCode
    ),
    check("telefono", "el telefono es obligatorio").not().isEmpty(),
    check("usuario", "el usuario es obligatorio").not().isEmpty(),
    check("usuario", "el usuario es obligatorio").custom(
      helpersUsuario.ExistingUsuario
    ),
    check("password", "la contraseña es obligatoria").not().isEmpty(),
    check("rol", "el rol es obligatorio").not().isEmpty(),
    validarCampos,
  ],
  httpusuario.putEditarusuario
);
router.put("/inactivar/:id", httpusuario.putusuarioInactivar);
router.put("/activar/:id", httpusuario.putusuarioActivar);
router.post("/login", httpusuario.login);

export default router;
