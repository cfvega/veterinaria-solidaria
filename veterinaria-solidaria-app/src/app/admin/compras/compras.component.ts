import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ComprasService } from '../services/compras.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['idcompra', 'nrofactura', 'proveedor', 'fechafactura', 'fechacompra', 'opciones'];
  dataSource = new MatTableDataSource<any>();

  compraForm = this.formbuilder.group({
    idcompra: [''],
    nrofactura: ['', [Validators.required, Validators.maxLength(20)]],
    proveedor: ['', [Validators.required, Validators.maxLength(20)]],
    fechafactura: ['', [Validators.required, Validators.maxLength(100)]],
    fechacompra: ['', [Validators.required, Validators.maxLength(100)]]
    
  })

  crearcompraForm = this.formbuilder.group({
    nrofactura: ['', [Validators.required, Validators.maxLength(20)]],
    proveedor: ['', [Validators.required, Validators.maxLength(20)]],
    fechafactura: ['', [Validators.required, Validators.maxLength(100)]],
    fechacompra: ['', [Validators.required, Validators.maxLength(100)]]
    
  })

  editarcompras: boolean = false;

  mostrarformulario(parameter:any=""){
    this.editarcompras = true;
    console.log(parameter);
    this.compraForm.controls["idcompra"].setValue(parameter.idcompra);
    this.compraForm.controls["nrofactura"].setValue(parameter.nrofactura);
    this.compraForm.controls["proveedor"].setValue(parameter.proveedor);
    this.compraForm.controls["fechafactura"].setValue(parameter.fechafactura);
    this.compraForm.controls["fechacompra"].setValue(parameter.fechacompra);

  }

  delete(idcompra:any){
    this.ComprasServices.eliminar(idcompra).subscribe(response =>{
      console.log(response);
      this.loadCompra();
    })
  }

  update(){
    this.ComprasServices.updateCompra(this.compraForm.value).subscribe(response =>{
      console.log(response);
      this.loadCompra();
    })
    
  }

  
  //crear
  crearcompra: boolean = false;
  mostrarcrearformulario(){
    this.crearcompra = !this.crearcompra;
  }

  crear(){
    this.ComprasServices.crearCompra(this.crearcompraForm.value).subscribe(response => {
      console.log(response);
      this.loadCompra();
    })
  }

  compras:any[] = []

   add() {
    console.log(this.compraForm.value)
    this.compras.push(this.compraForm.value)
    this.compraForm.reset();
    
   }

   //crear
   crearcompras:any[] = []

   crea() {
    console.log(this.crearcompraForm.value);
    this.crearcompras.push(this.crearcompraForm.value);
    this.crearcompraForm.reset();
    
   }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(public ComprasServices: ComprasService, private formbuilder: FormBuilder  ) { }



  ngAfterViewInit() {

  }
  
  ngOnInit(): void {
    this.loadCompra();
  }

  loadCompra(){
    this.ComprasServices.getCompras().subscribe(response => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator =this.paginator;
      console.log(response);
    })
  }
  
}


