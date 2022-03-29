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
        const p: any[] = req.body.productos;
        delete req.body.productos;
        
        const venta = req.params.venta;
        const allventas = await query('INSERT into venta set ?', [req.body], async (error: any, rows: any) =>{
            console.log(error)
            if(error) return res.send(error);
            const id = rows.insertId;
            p.forEach(async (e) => {
                await query("INSERT INTO detalleventa SET ?", {cantidad:e.cantidad,preciounitventa:e.precio,idproducto:e.idproducto,idventa:id})
                const ptx = await query("SELECT stock from producto where ?", {idproducto: e.idproducto});
                const nstock = ptx[0].stock - e.cantidad;
                await query("UPDATE producto SET stock =? WHERE idproducto=?",[nstock, e.idproducto]);
            });

            
            res.json({status: true, msg:"venta creada"})

            
        }
        );
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