import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ProductosService } from '../services/productos.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['idproducto', 'nombreprod', 'descripcion', 'precioprod','tipo','stock','opciones'];
  dataSource = new MatTableDataSource<any>();

  productosForm = this.formbuilder.group({
    idproducto: [''],
    nombreprod: ['', [Validators.required, Validators.maxLength(15)]],
    descripcion: ['', [Validators.required, Validators.maxLength(20)]],
    precioprod: ['', [Validators.required, Validators.maxLength(20)]],
    tipo: ['', [Validators.required, Validators.maxLength(20)]],
    stock: ['', [Validators.required, Validators.maxLength(50)]]
  })


    crearproductoForm = this.formbuilder.group({
      nombreprod: ['', [Validators.required, Validators.maxLength(15)]],
      descripcion: ['', [Validators.required, Validators.maxLength(20)]],
      precioprod: ['', [Validators.required, Validators.maxLength(20)]],
      tipo: ['', [Validators.required, Validators.maxLength(20)]],
      stock: ['', [Validators.required, Validators.maxLength(50)]]



  })

  editarproductos: boolean = false;

  mostrarformulario(e:any=""){
    this.editarproductos = !this.editarproductos;
    console.log(e);
    this.productosForm.controls["idproducto"].setValue(e.idproducto);
    this.productosForm.controls["nombreprod"].setValue(e.nombreprod);
    this.productosForm.controls["descripcion"].setValue(e.descripcion);
    this.productosForm.controls["precioprod"].setValue(e.precioprod);
    this.productosForm.controls["tipo"].setValue(e.tipo);
    this.productosForm.controls["stock"].setValue(e.stock);

  }

  delete(idproducto:any){
    this.ProductosServices.eliminar(idproducto).subscribe(response =>{
      console.log(response);
      this.loadProducto();
    })
  }
  
  update(){
    this.ProductosServices.updateProducto(this.productosForm.value).subscribe(response =>{
      console.log(response);
      this.loadProducto();
    })
    
  }
  
    //crear
    crearproducto: boolean = false;
    mostrarcrearformulario(){
      this.crearproducto = !this.crearproducto;
    }
  
    crear(){
      this.ProductosServices.crearProducto(this.crearproductoForm.value).subscribe(response => {
        console.log(response);
        this.loadProducto();
      })
    }

  productos:any[] = []

   add() {
    console.log(this.productosForm.value)
    this.productos.push(this.productosForm.value)
    this.productosForm.reset();
    
   }

      //crear
      crearproductos:any[] = []

      crea() {
       console.log(this.crearproductoForm.value);
       this.crearproductos.push(this.crearproductoForm.value);
       this.crearproductoForm.reset();
       
      }



  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(public ProductosServices: ProductosService, private formbuilder: FormBuilder ) { }

  ngAfterViewInit() {
  
  }

  ngOnInit(): void {
    this.loadProducto();
  }

  loadProducto(){
    this.ProductosServices.getProductos().subscribe(response =>{
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      console.log(response)
    })
  }

}


