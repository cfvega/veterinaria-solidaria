import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class ProductosService {

  getProductos(){
    return this.http.get<any>("http://localhost:3000/productos");
  }
  
  constructor(private http:HttpClient) { 
    
  }

  updateProducto(data: any) {
    return this.http.put<any>("http://localhost:3000/productos/"+data.idproducto, data);
  }

  crearProducto(data: any){
    return this.http.post<any>("http://localhost:3000/productos", data)
  }

  eliminar(data: any){
    return this.http.delete<any>("http://localhost:3000/productos/"+data)
  }

  test(){
    return this.http.get<any>('https://pichideguadigital.cl:3000/adq-bodega_api/warehouse/centers');
  }

}