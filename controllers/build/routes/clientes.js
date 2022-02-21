"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clientesController_1 = __importDefault(require("../controllers/clientesController"));
class ClientesRoutas {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('', clientesController_1.default.index);
        this.router.get('/:rutcliente', clientesController_1.default.clientesPorRut);
        this.router.post('/', clientesController_1.default.crear);
        this.router.put('/:rutcliente', clientesController_1.default.actualizar);
        this.router.delete('/:rutcliente', clientesController_1.default.delete);
    }
}
const clientesRutas = new ClientesRoutas();
exports.default = clientesRutas.router;
