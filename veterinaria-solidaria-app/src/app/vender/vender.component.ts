import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vender',
  templateUrl: './vender.component.html',
  styleUrls: ['./vender.component.css']
})
export class VenderComponent implements OnInit {

  personaForm = this.formbuilder.group({
    rut: ['', [Validators.required, Validators.maxLength(15)]],
    nombre: ['', [Validators.required, Validators.maxLength(15)]],
    apellidop: ['', [Validators.required, Validators.maxLength(20)]],
    apellidom: ['', [Validators.required, Validators.maxLength(20)]],
    telefono: ['', [Validators.required, Validators.maxLength(20)]],
    direccion: ['', [Validators.required, Validators.maxLength(20)]],
    sector: ['', [Validators.required, Validators.maxLength(20)]],
    documento: ['',[Validators.required, Validators.maxLength(20)]],
    formapago: ['',[Validators.required, Validators.maxLength(20)]],
    ntransaccion: ['', [Validators.required, Validators.maxLength(20)]]
    
  })

  productoForm= this.formbuilder.group({
    id: ['', [Validators.required]],
    nproducto: ['', [Validators.required]],
    cantidad: ['', [Validators.required]],
    precio: ['', [Validators.required]],
   
  })

  

  productos:any[] = []

   add() {
    console.log(this.productoForm.value)
    this.productos.push(this.productoForm.value)
    this.productoForm.reset();
    
   }

   
   

  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  personaSubmit(){
    console.log(this.personaForm.value)
    
  }
  productoSubmit(){
    console.log(this.productoForm.value)
    
  }

}
