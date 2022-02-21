import { Request, Response } from "express";
import query from "../basedatos";

const data = [
    { idventa: 1, fechaventa: "", totalventa: 10, formapago: "", nrotransaccion:"" },
    { idventa: 2, fechaventa: "", totalventa: 5, formapago: "", nrotransaccion:"" },
    { idventa: 3, fechaventa: "", totalventa: 100, formapago: "", nrotransaccion:"" },
    { idventa: 4, fechaventa: "", totalventa: 42, formapago: "", nrotransaccion:"" },

];

class VentasController {

    public async index( req: Request, res: Response ) {

        const allventas = await query ('SELECT * FROM venta')
        
        res.json( allventas );
        
    }
    public async ventasPorId(req: Request, res: Response) {
        const idventa = req.params.idventa;
        const allventas = await query ('SELECT * FROM venta WHERE idventa=?',[idventa])
        
        console.log(idventa);
        res.json({status: true, message: data[parseInt(idventa)]});
    }
    public async crear(req: Request, res: Response) {
        console.log(req.body);
        const venta = req.params.venta;
        const allventas = await query('INSERT into venta set ?', [req.body], (error: any, rows: any) =>{
            if(error) return res.send(error)

            res.json({msg:"venta creada"})

        }
        )
    }

    public async delete(req: Request, res: Response) {

        const idventa = req.params.idventa;
        const allventas = await query('DELETE FROM venta WHERE  idventa = ?', [idventa], (error: any, rows: any) =>{
            if(error) return res.send(error)

            res.send("venta eliminada")
        }
        )
    }

    public async actualizar(req: Request, res: Response) {
        const venta = req.params.idventa;
        const allventas = await query('UPDATE venta set ?  WHERE idventa=?', [req.body, venta], (error: any, rows: any) =>{
            if(error) return res.send(error)

            res.send("venta actualizada")
        })


    }


    public async guardarVenta(req: Request, res: Response) {
       
        const allventas = await query('INSERT into venta set ?', [req.body], (error: any, rows: any) =>{
            if(error) return res.send(error)

            res.json({msg:"listo"})

        }
        )
    }


}

const controller = new VentasController();
export default controller;