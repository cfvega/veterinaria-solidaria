import { Request, Response } from "express";
import query from "../basedatos";

const data = [
    { idproducto: 1, nombreprod: "Paracetamol 500mg", descripcion:"", precioprod: 290, tipo:"", stock: 10  },
    { idproducto: 2, nombreprod: "Xumadol 1g x 20 sobres", descripcion:"", precioprod: 290, tipo:"", stock: 5},
    { idproducto: 3, nombreprod: "Ibuprofeno 600mg x 30", descripcion:"", precioprod: 290, tipo:"", stock: 100 },
    { idproducto: 4, nombreprod: "Quetiapina 50mg", descripcion:"", precioprod: 290, tipo:"", stock: 42},
];

class ProductosController {

    public async index( req: Request, res: Response ) {

        const allproductos = await query('SELECT * FROM producto')

        res.json( allproductos );

    }
    public async productosPorId(req: Request, res: Response) {
        const idproducto = req.params.idproducto;
        const allproductos = await query('SELECT * FROM producto WHERE idproducto=?',[idproducto])

        console.log(idproducto);
        res.json({status: true, message: allproductos});
    }
    public async crear(req: Request, res: Response) {
        const producto = req.params.producto;
        const allproductos = await query('INSERT into producto set ?', [req.body], (error: any, rows: any) =>{
            if(error) return res.send(error)

            //res.send("producto creado")
            res.json({msg:"producto creado"})
        }
        )
    }

    public async delete(req: Request, res: Response) {

        const idproducto = req.params.idproducto;
        const allproductos = await query('DELETE FROM producto WHERE  idproducto = ?', [idproducto], (error: any, rows: any) =>{
            if(error) return res.json(error)

            res.json("producto eliminado")
        }
        )
    }

    public async actualizar(req: Request, res: Response) {
        const producto = req.params.idproducto;
        const allproductos = await query('UPDATE producto set ?  WHERE idproducto=?', [req.body, producto], (error: any, rows: any) =>{
            if(error) return res.json(error)

            res.json("producto actualizado")
        })


    }


}

const controller = new ProductosController();
export default controller;