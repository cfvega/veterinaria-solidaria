import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class VentasService {

  getVentas(){
    return this.http.get<any>("http://localhost:3000/ventas");
  }
  


  constructor(private http:HttpClient) { 
    
  }

  crearVenta(data: any){
    return this.http.post<any>("http://localhost:3000/ventas", data)
  }

  test(){
    return this.http.get<any>('https://pichideguadigital.cl:3000/adq-bodega_api/warehouse/centers');
  }

}