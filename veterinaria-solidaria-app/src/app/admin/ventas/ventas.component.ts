import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { VentasService } from '../services/ventas.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['idventa', 'fechaventa', 'totalventa', 'formapago','nrotransaccion'];
  dataSource = new MatTableDataSource<any>();

  crearventaForm = this.formbuilder.group({
  
    fechaventa: ['', [Validators.required]],
    totalventa: ['', [Validators.required]],
    formapago: ['', [Validators.required]],
    ntransaccion: ['', [Validators.required]],

  })

   //crear
   crearventa: boolean = false;
   mostrarcrearformulario(){
     this.crearventa = !this.crearventa;
   }
 
   crear(){
    this.VentasServices.crearVenta(this.crearventaForm.value).subscribe(response => {
      console.log(response);
      this.loadVenta();
    })
  }

   //crear
    crearventas:any[] = []

    crea() {
      console.log(this.crearventaForm.value);
      this.crearventas.push(this.crearventaForm.value);
      this.crearventaForm.reset();
      
    }
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor( public VentasServices: VentasService, private formbuilder: FormBuilder ) { }



  ngAfterViewInit() {

  }
  ngOnInit(): void {
    this.loadVenta();
  }

  loadVenta(){
    this.VentasServices.getVentas().subscribe(response =>{
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      console.log(response)
    })
  }

}


