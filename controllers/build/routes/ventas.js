"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ventasController_1 = __importDefault(require("../controllers/ventasController"));
class VentasRoutas {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('', ventasController_1.default.index);
        this.router.get('/:idventa', ventasController_1.default.ventasPorId);
        this.router.post('/', ventasController_1.default.crear);
        this.router.put('/:idventa', ventasController_1.default.actualizar);
        this.router.delete('/:idventa', ventasController_1.default.delete);
    }
}
const ventasRutas = new VentasRoutas();
exports.default = ventasRutas.router;
