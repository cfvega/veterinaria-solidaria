import { Request, Response } from "express";
import query from "../basedatos";

const data = [
    { rutcliente: 1, nombrecli: "Pepito", apellidopat: "Potter", apellidomat: "hola", fechanac:"", direccion:"", telefono:"", email:"" },
    { rutcliente: 2, nombrecli: "Juanito", apellidopat: "Whisly", apellidomat: "alo", fechanac:"", direccion:"", telefono:"", email:"" },
    { rutcliente: 3, nombrecli: "Arturito", apellidopat: "Mc Llister", apellidomat: "elo", fechanac:"", direccion:"", telefono:"", email:"" },
    { rutcliente: 4, nombrecli: "Rorrito", apellidopat: "Mercedes", apellidomat: "ilo", fechanac:"", direccion:"", telefono:"", email:"" },

];

class ClientesController {

    public async index( req: Request, res: Response ) {
        
        const allclientes = await query('SELECT * FROM cliente')

        // const allclientes = data[0] 

        res.json( allclientes );

    }
    public async clientesPorRut(req: Request, res: Response) {
        const rutcliente = req.params.rutcliente;
        const allclientes = await query('SELECT * FROM cliente WHERE rutcliente=?',[rutcliente])

        // const allclientes = data[(parseInt(rutcliente) )]

        
        res.json({status: true, message: allclientes[0]});
        // res.json({status: true, message: data[parseInt(rutcliente) -1]});

    }

    public async crear(req: Request, res: Response) {

        const cliente = req.params.cliente;
        const allclientes = await query('INSERT into cliente set ?', [req.body], (error: any, rows: any) =>{
            if(error) return res.send(error)

            res.json({msg:"cliente creado"})

        }
        )

        // const rutcliente = req.params.rutcliente;
        // const {antiguo, nuevo} = req.body;

        // const allclientes = await query("INSERT into cliente VALUES (?,?,?,?,?,?,?,?)", [rutcliente, nombrecli, apellidopat, apellidomat, fechanac, direccion, telefono, email]);



        // //AQUI DB

        //  res.json({ status: true, massage: `cliente: ${data[parseInt(rutcliente)].nombrecli} A.paterno: ${antiguo} A.materno: ${nuevo} fue creado`});
    }

    public async delete(req: Request, res: Response) {

        const rutcliente = req.params.rutcliente;
        const allclientes = await query('DELETE FROM cliente WHERE  rutcliente = ?', [rutcliente], (error: any, rows: any) =>{
            if(error) return res.json(error)

            res.json("cliente eliminado")
        }
        )
    }

    

    public async actualizar(req: Request, res: Response) {
        const cliente = req.params.rutcliente;
        const allclientes = await query('UPDATE cliente set ?  WHERE rutcliente=?', [req.body, cliente], (error: any, rows: any) =>{
            if(error) return res.send(error)

            res.send("cliente actualizado")
        })


    }

}

const controller = new ClientesController();
export default controller;