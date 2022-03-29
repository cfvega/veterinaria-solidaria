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
    { idproducto: 1, nombreprod: "Paracetamol 500mg", descripcion: "", precioprod: 290, tipo: "", stock: 10 },
    { idproducto: 2, nombreprod: "Xumadol 1g x 20 sobres", descripcion: "", precioprod: 290, tipo: "", stock: 5 },
    { idproducto: 3, nombreprod: "Ibuprofeno 600mg x 30", descripcion: "", precioprod: 290, tipo: "", stock: 100 },
    { idproducto: 4, nombreprod: "Quetiapina 50mg", descripcion: "", precioprod: 290, tipo: "", stock: 42 },
];
class ProductosController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const allproductos = yield (0, basedatos_1.default)('SELECT * FROM producto');
            res.json(allproductos);
        });
    }
    productosPorId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const idproducto = req.params.idproducto;
            const allproductos = yield (0, basedatos_1.default)('SELECT * FROM producto WHERE idproducto=?', [idproducto]);
            console.log(idproducto);
            res.json({ status: true, message: allproductos });
        });
    }
    crear(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const producto = req.params.producto;
            const allproductos = yield (0, basedatos_1.default)('INSERT into producto set ?', [req.body], (error, rows) => {
                if (error)
                    return res.send(error);
                //res.send("producto creado")
                res.json({ msg: "producto creado" });
            });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const idproducto = req.params.idproducto;
            const allproductos = yield (0, basedatos_1.default)('DELETE FROM producto WHERE  idproducto = ?', [idproducto], (error, rows) => {
                if (error)
                    return res.json(error);
                res.json("producto eliminado");
            });
        });
    }
    actualizar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const producto = req.params.idproducto;
            const allproductos = yield (0, basedatos_1.default)('UPDATE producto set ?  WHERE idproducto=?', [req.body, producto], (error, rows) => {
                if (error)
                    return res.json(error);
                res.json("producto actualizado");
            });
        });
    }
}
const controller = new ProductosController();
exports.default = controller;
