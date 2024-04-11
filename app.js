import express from "express";
import mongoose from "mongoose";
import "dotenv/config"
import usuario from "./routes/usuario.js";
import ficha from "./routes/ficha.js";
import items_presupuesto from "./routes/contrato.js"
import area from "./routes/area.js"
import dislote_contrato from "./routes/distribucion_lote_contrato.js"
import producto from "./routes/producto.js";
import Conexion_dependenica_contrato from "./routes/conexio_dependencia_contrato.js"
import lote from "./routes/lote.js";
import Disdependencia from "./routes/distribucion_dependencia.js"
import pedido from "./routes/pedido.js"
import proceso from "./routes/proceso.js"
import detalle_pedido from "./routes/detalle_pedido.js"
import DetSalida from  "./routes/detSalida.js"
import dependencia from "./routes/dependencia.js";
import dis_lote_depen from "./routes/distribucion_lote_contrato.js"
import disdepenred from "./routes/distribucion_depen_red.js";
import salida from "./routes/salida.js"
import proveedor from "./routes/proveedor.js"
import detSalida from "./routes/detSalida.js";
import contrato from "./routes/contrato.js";
import conexion_red_lote from "./routes/conexion_red_lote.js"
import red from "./routes/red.js";
import entrada from "./routes/entrada.js"
import disarea_destino from "./routes/distribucion_area_destino.js"
import disred_area from "./routes/distribucion_red_area.js"
import dislote_depen from "./routes/distribucion_lote_dependencia.js"
import cors from 'cors'


const app = express();
app.use(express.json());
app.use(cors());
app.use(   "/usuario", usuario)
app.use(   "/dislote_contrato", dislote_contrato)
app.use(   "/dependencia", dependencia)
app.use(   "/detSalida", DetSalida)
app.use(   "/disdepenred", disdepenred)
app.use(   "/red", red)
app.use(   "/ficha", ficha)
app.use(   "/disarea_destino", disarea_destino)
app.use(   "/contrato", items_presupuesto)
app.use(   "/area", area)
app.use(   "/conexiondepencontrato", Conexion_dependenica_contrato)
app.use(   "/producto", producto)
app.use(   "/entrada", entrada)
app.use(   "/pedido", pedido)
app.use(   "/c", dis_lote_depen)
app.use(   "/lote", lote)
app.use(   "proveedor", proveedor)
app.use(   "/contrato", contrato)
app.use(   "/dislote_depen", dislote_depen)
app.use(   "/disdependencia", Disdependencia)
app.use(   "/detalle_pedido", detalle_pedido)
app.use(   "/proceso", proceso)
app.use(   "/disred_area", disred_area)
app.use(   "/conexion_red_lote", conexion_red_lote)
app.use(   "/contrato", contrato)
app.use(   "/salida", salida)
app.use(   "/detsalida", detSalida)


mongoose.connect(process.env.mongoDB)
  .then(() => console.log('Connected!'));

  app.listen(process.env.PORT, ()=> {
    console.log(`Servidor escuchando en el puerto ${process.env.PORT}`);
  })