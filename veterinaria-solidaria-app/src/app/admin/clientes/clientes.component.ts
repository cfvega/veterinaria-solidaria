import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['rutcliente', 'nombrecli', 'apellidopat', 'apellidomat','fechanac','direccion','telefono','email'];
  dataSource = new MatTableDataSource<PeriodicClientes>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() { }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    
  }

}

export interface PeriodicClientes {
  rutcliente: number;
  nombrecli: string;
  apellidopat: number;
  apellidomat: string;
  fechanac: string;
  direccion: string;
  telefono: string;
  email: string;
}

const ELEMENT_DATA: PeriodicClientes[] = [
  {rutcliente: 1, nombrecli: 'Hydrogen', apellidopat: 1.0079, apellidomat: 'H', fechanac:'h', direccion:'h', telefono:'h', email:'h'},
  {rutcliente: 2, nombrecli: 'Hydrogen', apellidopat: 1.0079, apellidomat: 'H', fechanac:'h', direccion:'h', telefono:'h', email:'h'},
  {rutcliente: 3, nombrecli: 'Hydrogen', apellidopat: 1.0079, apellidomat: 'H', fechanac:'h', direccion:'h', telefono:'h', email:'h'},
  {rutcliente: 4, nombrecli: 'Hydrogen', apellidopat: 1.0079, apellidomat: 'H', fechanac:'h', direccion:'h', telefono:'h', email:'h'},
  {rutcliente: 5, nombrecli: 'Hydrogen', apellidopat: 1.0079, apellidomat: 'H', fechanac:'h', direccion:'h', telefono:'h', email:'h'},
  {rutcliente: 6, nombrecli: 'Hydrogen', apellidopat: 1.0079, apellidomat: 'H', fechanac:'h', direccion:'h', telefono:'h', email:'h'},
  {rutcliente: 7, nombrecli: 'Hydrogen', apellidopat: 1.0079, apellidomat: 'H', fechanac:'h', direccion:'h', telefono:'h', email:'h'},
  {rutcliente: 8, nombrecli: 'Hydrogen', apellidopat: 1.0079, apellidomat: 'H', fechanac:'h', direccion:'h', telefono:'h', email:'h'},
  {rutcliente: 9, nombrecli: 'Hydrogen', apellidopat: 1.0079, apellidomat: 'H', fechanac:'h', direccion:'h', telefono:'h', email:'h'},
  {rutcliente: 10, nombrecli: 'Hydrogen', apellidopat: 1.0079, apellidomat: 'H', fechanac:'h', direccion:'h', telefono:'h', email:'h'},
  {rutcliente: 11, nombrecli: 'Hydrogen', apellidopat: 1.0079, apellidomat: 'H', fechanac:'h', direccion:'h', telefono:'h', email:'h'},
  {rutcliente: 12, nombrecli: 'Hydrogen', apellidopat: 1.0079, apellidomat: 'H', fechanac:'h', direccion:'h', telefono:'h', email:'h'},
  {rutcliente: 13, nombrecli: 'Hydrogen', apellidopat: 1.0079, apellidomat: 'H', fechanac:'h', direccion:'h', telefono:'h', email:'h'},
  {rutcliente: 14, nombrecli: 'Hydrogen', apellidopat: 1.0079, apellidomat: 'H', fechanac:'h', direccion:'h', telefono:'h', email:'h'},
  {rutcliente: 15, nombrecli: 'Hydrogen', apellidopat: 1.0079, apellidomat: 'H', fechanac:'h', direccion:'h', telefono:'h', email:'h'},
  {rutcliente: 16, nombrecli: 'Hydrogen', apellidopat: 1.0079, apellidomat: 'H', fechanac:'h', direccion:'h', telefono:'h', email:'h'},
  {rutcliente: 17, nombrecli: 'Hydrogen', apellidopat: 1.0079, apellidomat: 'H', fechanac:'h', direccion:'h', telefono:'h', email:'h'},
  {rutcliente: 18, nombrecli: 'Hydrogen', apellidopat: 1.0079, apellidomat: 'H', fechanac:'h', direccion:'h', telefono:'h', email:'h'},
  {rutcliente: 19, nombrecli: 'Hydrogen', apellidopat: 1.0079, apellidomat: 'H', fechanac:'h', direccion:'h', telefono:'h', email:'h'},
  {rutcliente: 20, nombrecli: 'Hydrogen', apellidopat: 1.0079, apellidomat: 'H', fechanac:'h', direccion:'h', telefono:'h', email:'h'},
  
];
