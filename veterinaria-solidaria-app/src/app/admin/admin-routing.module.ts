import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComprasComponent } from './compras/compras.component';
import { VentasComponent } from './ventas/ventas.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'compras', component: ComprasComponent },
      { path: 'ventas', component: VentasComponent },
      { path: '**', redirectTo: 'compras', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
