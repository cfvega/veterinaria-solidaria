import { Router } from "express";

import controller from '../controllers/ventasController';

class VentasRoutas {


    router: Router = Router();
    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('', controller.index);
        this.router.get('/:idventa', controller.ventasPorId);
        this.router.post('/', controller.crear);
        this.router.put('/:idventa', controller.actualizar);
        this.router.delete('/:idventa', controller.delete);

        
    }

}

const ventasRutas = new VentasRoutas();
export default ventasRutas.router;