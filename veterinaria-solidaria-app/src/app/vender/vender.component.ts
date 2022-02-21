import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { VenderService } from '../admin/services/vender.service';

@Component({
  selector: 'app-vender',
  templateUrl: './vender.component.html',
  styleUrls: ['./vender.component.css']
})
export class VenderComponent implements OnInit {

  personaForm = this.formbuilder.group({
    rutcliente: ['', [Validators.required, Validators.maxLength(15)]],
    nombrecli: ['', [Validators.required, Validators.maxLength(15)]],
    apellidopat: ['', [Validators.required, Validators.maxLength(20)]],
    apellidomat: ['', [Validators.required, Validators.maxLength(20)]],
    telefono: ['', [Validators.required, Validators.maxLength(20)]],
    direccion: ['', [Validators.required, Validators.maxLength(20)]],
    documento: ['',[Validators.required, Validators.maxLength(20)]],
    formapago: ['',[Validators.required, Validators.maxLength(20)]],
    ntransaccion: ['', [Validators.required, Validators.maxLength(20)]],
    totalventa: ['0'],
    
  })

  agregaproducto: boolean = false;

  mostrarformulario(){
    this.agregaproducto = !this.agregaproducto;
  }

  productoForm= this.formbuilder.group({
    idproducto: ['', [Validators.required]],
    nproducto: ['', [Validators.required]],
    cantidad: ['', [Validators.required]],
    precio: ['', [Validators.required]],
    
  })

  

  productos:any[] = []

   add() {
    console.log(this.productoForm.value)
    let lala = parseInt(this.personaForm.value.totalventa);
    lala += (parseInt(this.productoForm.value.cantidad)*parseInt(this.productoForm.value.precio));
    this.personaForm.controls['totalventa'].setValue(lala)
    this.productos.push(this.productoForm.value)
    this.productoForm.reset();
    
   }

   
   

  constructor(private formbuilder: FormBuilder,
              private venderService: VenderService) { }

  ngOnInit(): void {
  }

  personaSubmit(){
    this.venderService.guardarVenta(this.personaForm.value).subscribe(d=>{
      console.log(d);
    })
    console.log(this.personaForm.value) 
  }

  productoSubmit(){
    console.log(this.productoForm.value)
    
  }

}
