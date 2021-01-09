import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { OtroComponent } from './otro/otro.component';

const routes: Routes = [
  {path: 'inicio',component:InicioComponent},
  {path: 'otro',component:OtroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
