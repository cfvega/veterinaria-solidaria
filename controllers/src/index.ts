import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';

import productosRutas from './routes/productos';
import clientesRutas from './routes/clientes';
import ventasRutas from './routes/ventas';
import comprasRutas from './routes/compras';

class Server {

    public app: Application;


    constructor() {
        this.app = express();
        this.config();
        this.routes();

    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes(): void {
        this.app.use('/productos/', productosRutas);
        this.app.use('/clientes/', clientesRutas);
        this.app.use('/ventas/', ventasRutas);
        this.app.use('/compras/', comprasRutas);

    }

    start(): void {
        this.app.listen( this.app.get('port'), () => {
            console.log('SERVER ON PORT ', this.app.get('port'));
        });
    }

}

const server = new Server();
server.start();
