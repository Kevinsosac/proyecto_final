import Detalle_pedido from "../models/detalle_pedido.js";

const httpdetalle_pedido = {
  // GET
  getAlldetalle_pedido: async (req, res) => {
    try {
      const detalle_pedido = await Detalle_pedido.find();
      res.json({ detalle_pedido });
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  getdetalle_pedidoid: async (req, res) => {
    try {
      const { id } = req.params;
      const detalle_pedido = await Detalle_pedido.findById({ id })
      res.json({ detalle_pedido });
    } catch (error) {
      res.json({ error });
    }
  },

  postdetalle_pedido: async (req, res) => {
    try {
      const { cantidad, idpedido, idproducto } = req.body;
      const detalle_pedido = new Detalle_pedido({
        cantidad,
        idpedido,
        idproducto,
      });
      await detalle_pedido.save();
      res.json(detalle_pedido);
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  // putEditar: async (req, res) => {
  //     try {
  //       const { id } = req.params;
  //       const { cantidad, idPedido, idProducto } = req.body;
  //       const detallePedido = await DetallePedido.findByIdAndUpdate(
  //         id,
  //         { cantidad, idPedido, idProducto },
  //         { new: true }
  //       );
  //       res.json(detallePedido);
  //     } catch (error) {
  //       res.status(400).json({ error });
  //     }
  //   },

  putdetalle_pedidoInactivar: async (req, res) => {
    try {
      const { id } = req.params;
      const detalle_pedido = await Detalle_pedido.findByIdAndUpdate(
        id,
        { estado: 0 },
        { new: true }
      );
      res.json(detalle_pedido);
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  putdetalle_pedidoActivar: async (req, res) => {
    try {
      const { id } = req.params;
      const detalle_pedido = await Detalle_pedido.findByIdAndUpdate(
        id,
        { estado: 1 },
        { new: true }
      );
      res.json(detalle_pedido);
    } catch (error) {
      res.status(400).json({ error });
    }
  },
};
export default httpdetalle_pedido;
