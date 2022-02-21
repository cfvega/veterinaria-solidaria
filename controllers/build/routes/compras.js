"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const comprasController_1 = __importDefault(require("../controllers/comprasController"));
class ComprasRutas {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('', comprasController_1.default.index);
        this.router.get('/:idcompra', comprasController_1.default.comprasPorIdCompra);
        this.router.post('/', comprasController_1.default.crear);
        this.router.put('/:idcompra', comprasController_1.default.actualizar);
        this.router.delete('/:idcompra', comprasController_1.default.delete);
    }
}
const comprasRutas = new ComprasRutas();
exports.default = comprasRutas.router;
