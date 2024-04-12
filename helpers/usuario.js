import Usuario from "../models/usuario.js";

const helpersUsuario = {
  checkExistingUsuarioCode: async (cedula, req) => {
    const existingUsuario = await Usuario.findOne({ cedula });

    const { _id } = req.req.body;
    console.log(req.req.body);
    if (existingUsuario) {
      if (existingUsuario._id != _id && req.req.method === "PUT")
        throw new Error("la cedula ya esta registrada en la base de datos.");
      else if (req.req.method === "POST")
        throw new Error("la cedula ya esta registrada en la base de datos.");
    }
  },
  
  existeCorreoNewPass: async(correo, req) => {
    const existe = await Usuario.findOne({ correo });

    if (!existe) {
      throw new Error(`El correo no se encuentra registrado`);
    }

    req.req.UsuarioUpdate = existe;
  },
  ExistingUsuario: async (usuario, req) => {
    const existUsuarioo = await Usuario.findOne({ usuario });

    const {_id } = req.req.body
    console.log(req.req.body);
    if (existUsuarioo) {
       if (existUsuarioo._id != _id && req.req.method === "PUT")
         throw new Error("El nombre de usuario ya esta registrada en la base de datos.");
       else if (req.req.method === "POST")
         throw new Error("El nombre de usuario ya esta registrada en la base de datos.");
     }
  },
  validarPassword: async (password, req) => {
    const vali = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d.*\d)(?=.*[@#$%^&+=!]).{8,}$/;
    if (!vali.test(password)) {
      throw new Error("La contraseña no cumple con los requisitos.");
    }
    return true;
  },
  existeCorreo: async (correo, req) => {
    const existe = await Usuario.findOne({ correo });
    if (!existe && req.req.method === "GET") {
      throw new Error(`El correo no se encuentra registrado`);
    }

    if (existe) {
      if (req.req.method === "PUT" && req.req.body._id != existe._id) {
        throw new Error(`Ya existe ese correo en la base de datos!!! `);
      } else if (req.req.method === "POST") {
        throw new Error(`Ya existe ese correo en la base de datos!!! `);
      }
    }
    req.req.UsuarioUpdate = existe;
  },
};

export default helpersUsuario;
