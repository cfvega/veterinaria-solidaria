import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ComprarService } from '../services/comprar.service';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['id', 'name'];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private comprasService:ComprarService) { }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.comprasService.test().subscribe(parameter=>{
      console.log(parameter)
      this.dataSource = new MatTableDataSource<any>(parameter);
      this.dataSource.paginator=this.paginator

    })
  }
  
}

export interface PeriodicElement {
  idcompra: number;
  nfactura: string;
  fechafactura: number;
  fechacompra: string;
  proveedor: string;
  totalcompra: string;
}

const parameter_DATA: PeriodicElement[] = [
  
  {idcompra: 1, nfactura: 'Hydrogen', fechafactura: 1.0079, fechacompra: 'H', proveedor: 'h', totalcompra: 'h'},
  {idcompra: 2, nfactura: 'Hydrogen', fechafactura: 1.0079, fechacompra: 'H', proveedor: 'h', totalcompra: 'h'},
  {idcompra: 3, nfactura: 'Hydrogen', fechafactura: 1.0079, fechacompra: 'H', proveedor: 'h', totalcompra: 'h'},
  {idcompra: 4, nfactura: 'Hydrogen', fechafactura: 1.0079, fechacompra: 'H', proveedor: 'h', totalcompra: 'h'},
  {idcompra: 5, nfactura: 'Hydrogen', fechafactura: 1.0079, fechacompra: 'H', proveedor: 'h', totalcompra: 'h'},
  {idcompra: 6, nfactura: 'Hydrogen', fechafactura: 1.0079, fechacompra: 'H', proveedor: 'h', totalcompra: 'h'},
  {idcompra: 7, nfactura: 'Hydrogen', fechafactura: 1.0079, fechacompra: 'H', proveedor: 'h', totalcompra: 'h'},
  {idcompra: 8, nfactura: 'Hydrogen', fechafactura: 1.0079, fechacompra: 'H', proveedor: 'h', totalcompra: 'h'},
  {idcompra: 9, nfactura: 'Hydrogen', fechafactura: 1.0079, fechacompra: 'H', proveedor: 'h', totalcompra: 'h'},
  {idcompra: 10, nfactura: 'Hydrogen', fechafactura: 1.0079, fechacompra: 'H', proveedor: 'h', totalcompra: 'h'},
  {idcompra: 11, nfactura: 'Hydrogen', fechafactura: 1.0079, fechacompra: 'H', proveedor: 'h', totalcompra: 'h'},
  {idcompra: 12, nfactura: 'Hydrogen', fechafactura: 1.0079, fechacompra: 'H', proveedor: 'h', totalcompra: 'h'},
  {idcompra: 13, nfactura: 'Hydrogen', fechafactura: 1.0079, fechacompra: 'H', proveedor: 'h', totalcompra: 'h'},
  {idcompra: 14, nfactura: 'Hydrogen', fechafactura: 1.0079, fechacompra: 'H', proveedor: 'h', totalcompra: 'h'},
  {idcompra: 15, nfactura: 'Hydrogen', fechafactura: 1.0079, fechacompra: 'H', proveedor: 'h', totalcompra: 'h'},
  {idcompra: 16, nfactura: 'Hydrogen', fechafactura: 1.0079, fechacompra: 'H', proveedor: 'h', totalcompra: 'h'},
  {idcompra: 17, nfactura: 'Hydrogen', fechafactura: 1.0079, fechacompra: 'H', proveedor: 'h', totalcompra: 'h'},
  {idcompra: 18, nfactura: 'Hydrogen', fechafactura: 1.0079, fechacompra: 'H', proveedor: 'h', totalcompra: 'h'},
  {idcompra: 19, nfactura: 'Hydrogen', fechafactura: 1.0079, fechacompra: 'H', proveedor: 'h', totalcompra: 'h'},
  {idcompra: 20, nfactura: 'Hydrogen', fechafactura: 1.0079, fechacompra: 'H', proveedor: 'h', totalcompra: 'h'},


];
