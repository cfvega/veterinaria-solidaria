import { Router } from "express";

import controller from '../controllers/comprasController';

class ComprasRutas {


    router: Router = Router();
    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('', controller.index);
        this.router.get('/:idcompra', controller.comprasPorIdCompra);
        this.router.post('/', controller.crear);
        this.router.put('/:idcompra', controller.actualizar);
        this.router.delete('/:idcompra', controller.delete);

        
    }

}

const comprasRutas = new ComprasRutas();
export default comprasRutas.router;