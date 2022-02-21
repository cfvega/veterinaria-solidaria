import { Request, Response } from "express";
import query from "../basedatos";

const data = [
    { idcompra: 1, nrofactura: "", proveedor: 10, fechafactura:"", fechacompra:"", totalcompra: 290 },
    { idcompra: 2, nrofactura: "", proveedor: 5, fechafactura:"", fechacompra:"", totalcompra: 80000 },
    { idcompra: 3, nrofactura: "", proveedor: 100, fechafactura:"", fechacompra:"", totalcompra: 750 },
    { idcompra: 4, nrofactura: "", proveedor: 42, fechafactura:"", fechacompra:"", totalcompra: 1000 },

];

class ComprasController {

    public async index( req: Request, res: Response ) {

        const allcompras = await query('SELECT * FROM compra')


        res.json( allcompras );

    }
    public async comprasPorIdCompra(req: Request, res: Response) {
        const idcompra = req.params.idcompra;
        const allcompras = await query('SELECT * FROM compra WHERE idcompra=?',[idcompra])

        console.log(idcompra);
        res.json({status: true, message: data[parseInt(idcompra)]});
    }
    public async crear(req: Request, res: Response) {
        const compra = req.params.compra;
        const allcompras = await query('INSERT into compra set ?', [req.body], (error: any, rows: any) =>{
            if(error) return res.send(error)

            res.json({msg:"producto creado"})

        }
        )
    }

    public async delete(req: Request, res: Response) {

        const idcompra = req.params.idcompra;
        const allcompras = await query('DELETE FROM compra WHERE  idcompra = ?', [idcompra], (error: any, rows: any) =>{
            if(error) return res.json(error)

            res.json("compra eliminada")
        }
        )
    }

    public async actualizar(req: Request, res: Response) {
        const compra = req.params.idcompra;
        const allcompras = await query('UPDATE compra set ?  WHERE idcompra=?', [req.body, compra], (error: any, rows: any) =>{
            if(error) return res.json(error)

            res.json("compra actualizada")
        })


    }


}

const controller = new ComprasController();
export default controller;