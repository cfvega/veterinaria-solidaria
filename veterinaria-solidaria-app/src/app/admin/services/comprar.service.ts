import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class ComprarService {

  

  constructor(private http:HttpClient) { 
    
  }

  test(){
    return this.http.get<any>('https://pichideguadigital.cl:3000/adq-bodega_api/warehouse/centers');
  }

}
