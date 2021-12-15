import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VentasComponent } from './ventas/ventas.component';

const routes: Routes = [
  {
    path:'ventas',
    component: VentasComponent
  },
  {
    path: '**',
    redirectTo: 'ventas'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
