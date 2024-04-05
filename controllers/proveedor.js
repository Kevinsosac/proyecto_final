import Proveedor from "../models/proveedor.js";

const httpproveedor = {
getproveedor: async (req, res) => {
    try {
        const producto = await Proveedor.find()
        res.json({producto})
    } catch (error) {
        res.status(400).json({error})
    }
},
getproveedorid: async (req, res) =>{
    const { cedula } = req.params
    try {
        const producto = await Proveedor.find({ cedula })
        res.json({ producto })
    } catch (error) {
        res.json({ error })
    }
},
getproveedornombre: async (req, res) =>{
    const { nombre } = req.params
    try {
        const producto = await Proveedor.find({ nombre })
        res.json({ producto })
    } catch (error) {
        res.json({ error })
    }
},
postAgregarproveedor: async (req, res) => {
    try {
        const { nombre, apellido , cedula, correo, telefono, empresa, } = req.body;

        const productos = new Proveedor({nombre, apellido , cedula, correo, telefono, empresa,});
        await productos.save();
        res.json({ productos });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
},
putproveedor: async (req, res) => {
    try {
        const { id } = req.params
        const { nombre, apellido , cedula, correo, telefono, empresa,} = req.body
        const productos = await Proveedor.findByIdAndUpdate(id,{ nombre, apellido , cedula, correo, telefono, empresa,}, { new: true })
        await productos.save()
        res.json({ productos })
    } catch (error) {
        res.status(400).json({ error })
    }
},

putproveedorInactivar: async (req, res) => {
    try {
      const { id } = req.params;
      const productos = await Proveedor.findByIdAndUpdate(
        id,
        { estado: 0 },
        { new: true }
      );
      res.json(productos);
    } catch (error) {
      res.status(400).json({ error });
    }
  },

putproveedorActivar: async (req, res) => {
    try {
      const { id } = req.params;
      const productos = await Proveedor.findByIdAndUpdate(
        id,
        { estado: 1 },
        { new: true }
      );
      res.json(productos);
    } catch (error) {
      res.status(400).json({ error });
    }
  },
};
// deleteproducto: async (req, res) => {
//     try {
//         const { id } = req.params
//         const productos = await Producto.findByIdAndDelete(id)
//         res.json({productos})
//     } catch (error) {
//         res.status(400).json({ error })
//     }
// },

export default httpproveedor