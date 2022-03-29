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
    { idventa: 1, fechaventa: "", totalventa: 10, formapago: "", nrotransaccion: "" },
    { idventa: 2, fechaventa: "", totalventa: 5, formapago: "", nrotransaccion: "" },
    { idventa: 3, fechaventa: "", totalventa: 100, formapago: "", nrotransaccion: "" },
    { idventa: 4, fechaventa: "", totalventa: 42, formapago: "", nrotransaccion: "" },
];
class VentasController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const allventas = yield (0, basedatos_1.default)('SELECT * FROM venta');
            res.json(allventas);
        });
    }
    ventasPorId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const idventa = req.params.idventa;
            const allventas = yield (0, basedatos_1.default)('SELECT * FROM venta WHERE idventa=?', [idventa]);
            console.log(idventa);
            res.json({ status: true, message: data[parseInt(idventa)] });
        });
    }
    crear(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const p = req.body.productos;
            delete req.body.productos;
            const venta = req.params.venta;
            const allventas = yield (0, basedatos_1.default)('INSERT into venta set ?', [req.body], (error, rows) => __awaiter(this, void 0, void 0, function* () {
                console.log(error);
                if (error)
                    return res.send(error);
                const id = rows.insertId;
                p.forEach((e) => __awaiter(this, void 0, void 0, function* () {
                    yield (0, basedatos_1.default)("INSERT INTO detalleventa SET ?", { cantidad: e.cantidad, preciounitventa: e.precio, idproducto: e.idproducto, idventa: id });
                    const ptx = yield (0, basedatos_1.default)("SELECT stock from producto where ?", { idproducto: e.idproducto });
                    const nstock = ptx[0].stock - e.cantidad;
                    yield (0, basedatos_1.default)("UPDATE producto SET stock =? WHERE idproducto=?", [nstock, e.idproducto]);
                }));
                res.json({ status: true, msg: "venta creada" });
            }));
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const idventa = req.params.idventa;
            const allventas = yield (0, basedatos_1.default)('DELETE FROM venta WHERE  idventa = ?', [idventa], (error, rows) => {
                if (error)
                    return res.send(error);
                res.send("venta eliminada");
            });
        });
    }
    actualizar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const venta = req.params.idventa;
            const allventas = yield (0, basedatos_1.default)('UPDATE venta set ?  WHERE idventa=?', [req.body, venta], (error, rows) => {
                if (error)
                    return res.send(error);
                res.send("venta actualizada");
            });
        });
    }
    guardarVenta(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const allventas = yield (0, basedatos_1.default)('INSERT into venta set ?', [req.body], (error, rows) => {
                if (error)
                    return res.send(error);
                res.json({ msg: "listo" });
            });
        });
    }
}
const controller = new VentasController();
exports.default = controller;
