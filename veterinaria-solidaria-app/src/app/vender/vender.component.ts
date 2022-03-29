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
    documento: ['0',[Validators.required, Validators.maxLength(20)]],
    formapago: ['0',[Validators.required, Validators.maxLength(20)]],
    ntransaccion: ['', [Validators.maxLength(20)]],
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
    this.venderService.guardarVenta(this.personaForm.value, this.productos).subscribe(d=>{
      console.log(d);
      if(d.status) {
        this.personaForm.reset();
        this.productos = [];
        this.productoForm.reset();
        this.agregaproducto = false;
        document.getElementById('btnMODAL')?.click();
      }
    })
    console.log(this.personaForm.value) 
  }

  productoSubmit(){
    console.log(this.productoForm.value)
    
  }

  loadClient(rutEvent: any) {
    const rut = rutEvent.value;
    this.venderService.getUsuario(rut).subscribe((resp:any) => {
      this.personaForm.controls['nombrecli'].setValue(resp.message?.nombrecli);
      this.personaForm.controls['apellidopat'].setValue(resp.message?.apellidopat);
      this.personaForm.controls['apellidomat'].setValue(resp.message?.apellidomat);
      this.personaForm.controls['telefono'].setValue(resp.message?.telefono);
      this.personaForm.controls['direccion'].setValue(resp.message?.direccion);
    });

  }

  searchCodigo(cod:any) {
    const codigo = cod.value;
    this.venderService.getProducto(codigo).subscribe(d=>{
      console.log(d)
      this.productoForm.controls['nproducto'].setValue(d.message[0].nombreprod)
      this.productoForm.controls['precio'].setValue(d.message[0].precioprod)
    //   idproducto: ['', [Validators.required]],
    // nproducto: ['', [Validators.required]],
    // cantidad: ['', [Validators.required]],
    // precio: ['', [Validators.required]],
    })
  }

}
