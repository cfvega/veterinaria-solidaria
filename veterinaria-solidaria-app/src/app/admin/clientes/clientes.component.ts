import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ClientesService } from '../services/clientes.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit, AfterViewInit {

 
  displayedColumns: string[] = ['rutcliente', 'nombrecli', 'apellidopat', 'apellidomat','fechanac','direccion','telefono','email', 'opciones'];
  dataSource = new MatTableDataSource<any>();

  clienteForm = this.formbuilder.group({
    rutcliente: [''],
    nombrecli: ['', [Validators.required, Validators.maxLength(15)]],
    apellidopat: ['', [Validators.required, Validators.maxLength(20)]],
    apellidomat: ['', [Validators.required, Validators.maxLength(20)]],
    fechanac: ['', [Validators.required, Validators.maxLength(20)]],
    direccion: ['', [Validators.required, Validators.maxLength(50)]],
    telefono: ['', [Validators.required, Validators.maxLength(20)]],
    email: ['',[Validators.required, Validators.maxLength(50)]]
    
  })

  crearclienteForm = this.formbuilder.group({
    rutcliente: ['', [Validators.required, Validators.maxLength(15)]],
    nombrecli: ['', [Validators.required, Validators.maxLength(15)]],
    apellidopat: ['', [Validators.required, Validators.maxLength(20)]],
    apellidomat: ['', [Validators.required, Validators.maxLength(20)]],
    fechanac: ['', [Validators.required, Validators.maxLength(20)]],
    direccion: ['', [Validators.required, Validators.maxLength(50)]],
    telefono: ['', [Validators.required, Validators.maxLength(20)]],
    email: ['',[Validators.required, Validators.maxLength(50)]]
    
  })

  //actualizar
  editarcliente: boolean = false;
  mostrarformulario(cliente: any=""){
    this.editarcliente = !this.editarcliente;
    console.log(cliente);
    this.clienteForm.controls["rutcliente"].setValue(cliente.rutcliente);
    this.clienteForm.controls["nombrecli"].setValue(cliente.nombrecli);
    this.clienteForm.controls["apellidopat"].setValue(cliente.apellidopat);
    this.clienteForm.controls["apellidomat"].setValue(cliente.apellidomat);
    this.clienteForm.controls["fechanac"].setValue(cliente.fechanac);
    this.clienteForm.controls["direccion"].setValue(cliente.direccion);
    this.clienteForm.controls["telefono"].setValue(cliente.telefono);
    this.clienteForm.controls["email"].setValue(cliente.email);

  }

  //eliminar

  delete(rutcliente:any){
    this.ClientesServices.eliminar(rutcliente).subscribe(response =>{
      console.log(response);
      this.loadCliente();
    })
  }

  update(){
    this.ClientesServices.updateCliente(this.clienteForm.value).subscribe(response =>{
      console.log(response);
      this.loadCliente();
    })
  }


  //crear
  crearcliente: boolean = false;
  mostrarcrearformulario(){
    this.crearcliente = !this.crearcliente;
  }

  crear(){
    this.ClientesServices.crearCliente(this.crearclienteForm.value).subscribe(response => {
      console.log(response);
      this.loadCliente();
    })
  }

   //actualizar
   clientes:any[] = []

   add() {
    console.log(this.clienteForm.value);
    this.clientes.push(this.clienteForm.value);
    this.clienteForm.reset();
    
   }

   //crear
   crearclientes:any[] = []

   crea() {
    console.log(this.crearclienteForm.value);
    this.crearclientes.push(this.crearclienteForm.value);
    this.crearclienteForm.reset();
    
   }


   constructor( public ClientesServices: ClientesService, private formbuilder: FormBuilder ) { }


  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    
  }

  ngOnInit(): void {
    this.loadCliente();
  }



  loadCliente(){
    this.ClientesServices.getClientes().subscribe(response => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      console.log(response)
    })
  }
  
}





