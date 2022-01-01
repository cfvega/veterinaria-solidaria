import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VenderComponent } from './vender/vender.component';

const routes: Routes = [
  {
    path:'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  },
  {
    path: 'vender',
    component: VenderComponent
  },
  {
    path: '**',
    redirectTo: 'admin'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
