"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const basedatos_1 = __importDefault(require("../basedatos"));
const data = [
    { rutcliente: 1, nombrecli: "Pepito", apellidopat: "Potter", apellidomat: "hola", fechanac: "", direccion: "", telefono: "", email: "" },
    { rutcliente: 2, nombrecli: "Juanito", apellidopat: "Whisly", apellidomat: "alo", fechanac: "", direccion: "", telefono: "", email: "" },
    { rutcliente: 3, nombrecli: "Arturito", apellidopat: "Mc Llister", apellidomat: "elo", fechanac: "", direccion: "", telefono: "", email: "" },
    { rutcliente: 4, nombrecli: "Rorrito", apellidopat: "Mercedes", apellidomat: "ilo", fechanac: "", direccion: "", telefono: "", email: "" },
];
class ClientesController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const allclientes = yield (0, basedatos_1.default)('SELECT * FROM cliente');
            // const allclientes = data[0] 
            res.json(allclientes);
        });
    }
    clientesPorRut(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const rutcliente = req.params.rutcliente;
            const allclientes = yield (0, basedatos_1.default)('SELECT * FROM cliente WHERE rutcliente=?', [rutcliente]);
            // const allclientes = data[(parseInt(rutcliente) )]
            res.json({ status: true, message: allclientes[0] });
            // res.json({status: true, message: data[parseInt(rutcliente) -1]});
        });
    }
    crear(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const cliente = req.params.cliente;
            const allclientes = yield (0, basedatos_1.default)('INSERT into cliente set ?', [req.body], (error, rows) => {
                if (error)
                    return res.send(error);
                res.json({ msg: "cliente creado" });
            });
            // const rutcliente = req.params.rutcliente;
            // const {antiguo, nuevo} = req.body;
            // const allclientes = await query("INSERT into cliente VALUES (?,?,?,?,?,?,?,?)", [rutcliente, nombrecli, apellidopat, apellidomat, fechanac, direccion, telefono, email]);
            // //AQUI DB
            //  res.json({ status: true, massage: `cliente: ${data[parseInt(rutcliente)].nombrecli} A.paterno: ${antiguo} A.materno: ${nuevo} fue creado`});
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const rutcliente = req.params.rutcliente;
            const allclientes = yield (0, basedatos_1.default)('DELETE FROM cliente WHERE  rutcliente = ?', [rutcliente], (error, rows) => {
                if (error)
                    return res.json(error);
                res.json("cliente eliminado");
            });
        });
    }
    actualizar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const cliente = req.params.rutcliente;
            const allclientes = yield (0, basedatos_1.default)('UPDATE cliente set ?  WHERE rutcliente=?', [req.body, cliente], (error, rows) => {
                if (error)
                    return res.send(error);
                res.send("cliente actualizado");
            });
        });
    }
}
const controller = new ClientesController();
exports.default = controller;
