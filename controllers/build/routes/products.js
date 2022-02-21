"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productosController_1 = __importDefault(require("../controllers/productosController"));
class ProductosRoutas {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('', productosController_1.default.index);
        this.router.get('/:idproducto', productosController_1.default.productosPorId);
        this.router.post('', productosController_1.default.crear);
        this.router.put('/:idproducto', productosController_1.default.actualizar);
    }
}
const productosRutas = new ProductosRoutas();
exports.default = productosRutas.router;
