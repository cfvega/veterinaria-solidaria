import { Router } from "express";

import controller from '../controllers/clientesController';

class ClientesRoutas {


    router: Router = Router();
    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('', controller.index);
        this.router.get('/:rutcliente', controller.clientesPorRut);
        this.router.post('/', controller.crear);
        this.router.put('/:rutcliente', controller.actualizar);
        this.router.delete('/:rutcliente', controller.delete);

        
    }

}

const clientesRutas = new ClientesRoutas();
export default clientesRutas.router;