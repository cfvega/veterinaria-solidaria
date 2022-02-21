import { Router } from "express";

import controller from '../controllers/productosController';

class ProductosRoutas {


    router: Router = Router();
    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('', controller.index);
        this.router.get('/:idproducto', controller.productosPorId);
        this.router.post('/', controller.crear);
        this.router.put('/:idproducto', controller.actualizar);
        this.router.delete('/:idproducto', controller.delete);

        
    }

}

const productosRutas = new ProductosRoutas();
export default productosRutas.router;