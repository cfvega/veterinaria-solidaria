"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const productos_1 = __importDefault(require("./routes/productos"));
const clientes_1 = __importDefault(require("./routes/clientes"));
const ventas_1 = __importDefault(require("./routes/ventas"));
const compras_1 = __importDefault(require("./routes/compras"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/productos/', productos_1.default);
        this.app.use('/clientes/', clientes_1.default);
        this.app.use('/ventas/', ventas_1.default);
        this.app.use('/compras/', compras_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('SERVER ON PORT ', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
