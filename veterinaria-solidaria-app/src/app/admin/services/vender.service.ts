import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VenderService {

  constructor(private http: HttpClient) { }

  guardarVenta(data:any){
    let body = {
      'totalventa': data.totalventa,
      'formapago': data.formapago,
      'nrotransaccion': data.ntransaccion,
      'rutcliente': data.rutcliente,
    }

    // body.append('totalventa', data.totalventa);
    // body.append('formapago', data.formapago);
    // body.append('nrotransaccion', data.nrotransaccion);
    // body.append('rutcliente', data.rutcliente);
    console.log(data);
    console.log(body);

    return this.http.post('http://localhost:3000/ventas/', body);
  
  
  }


}
