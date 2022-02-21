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
    { idcompra: 1, nrofactura: "", proveedor: 10, fechafactura: "", fechacompra: "", totalcompra: 290 },
    { idcompra: 2, nrofactura: "", proveedor: 5, fechafactura: "", fechacompra: "", totalcompra: 80000 },
    { idcompra: 3, nrofactura: "", proveedor: 100, fechafactura: "", fechacompra: "", totalcompra: 750 },
    { idcompra: 4, nrofactura: "", proveedor: 42, fechafactura: "", fechacompra: "", totalcompra: 1000 },
];
class ComprasController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const allcompras = yield (0, basedatos_1.default)('SELECT * FROM compra');
            res.json(allcompras);
        });
    }
    comprasPorIdCompra(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const idcompra = req.params.idcompra;
            const allcompras = yield (0, basedatos_1.default)('SELECT * FROM compra WHERE idcompra=?', [idcompra]);
            console.log(idcompra);
            res.json({ status: true, message: data[parseInt(idcompra)] });
        });
    }
    crear(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const compra = req.params.compra;
            const allcompras = yield (0, basedatos_1.default)('INSERT into compra set ?', [req.body], (error, rows) => {
                if (error)
                    return res.send(error);
                res.json({ msg: "producto creado" });
            });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const idcompra = req.params.idcompra;
            const allcompras = yield (0, basedatos_1.default)('DELETE FROM compra WHERE  idcompra = ?', [idcompra], (error, rows) => {
                if (error)
                    return res.json(error);
                res.json("compra eliminada");
            });
        });
    }
    actualizar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const compra = req.params.idcompra;
            const allcompras = yield (0, basedatos_1.default)('UPDATE compra set ?  WHERE idcompra=?', [req.body, compra], (error, rows) => {
                if (error)
                    return res.json(error);
                res.json("compra actualizada");
            });
        });
    }
}
const controller = new ComprasController();
exports.default = controller;
