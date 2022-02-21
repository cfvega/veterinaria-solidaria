import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class ComprasService {
  
  getCompras() {
    return this.http.get<any>("http://localhost:3000/compras");

  }
  
  constructor(private http:HttpClient) { 
    
  }

  updateCompra(data: any){
    return this.http.put<any>("http://localhost:3000/compras/"+data.idcompra, data);
  }

  crearCompra(data: any){
    return this.http.post<any>("http://localhost:3000/compras", data)
  }

  eliminar(data: any){
    return this.http.delete<any>("http://localhost:3000/compras/"+data)
  }

  test(){
    return this.http.get<any>('https://pichideguadigital.cl:3000/adq-bodega_api/warehouse/centers');
  }

}
