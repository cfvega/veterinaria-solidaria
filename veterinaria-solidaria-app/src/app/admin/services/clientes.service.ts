import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class ClientesService {

  getClientes(){
    return this.http.get<any>("http://localhost:3000/clientes");
  }

  constructor(private http:HttpClient) { 

  }

  updateCliente(data: any){
    return this.http.put<any>("http://localhost:3000/clientes/"+data.rutcliente, data);
  }

  crearCliente(data: any){
    return this.http.post<any>("http://localhost:3000/clientes", data)
  }

  eliminar(data: any){
    return this.http.delete<any>("http://localhost:3000/clientes/"+data)
  }

  test(){
    return this.http.get<any>('https://pichideguadigital.cl:3000/adq-bodega_api/warehouse/centers');
  }

}