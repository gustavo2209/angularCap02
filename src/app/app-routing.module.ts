import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaPlatosComponent } from './comp/busqueda-platos/busqueda-platos.component';
import { DirectivaComponent } from './comp/directiva/directiva.component';
import { EmpleadosComponent } from './comp/empleados/empleados.component';
import { FormTemplateComponent } from './comp/form-template/form-template.component';
import { HomeComponent } from './comp/home/home.component';
import { PageNotFoundComponent } from './comp/page-not-found/page-not-found.component';
import { PipesComponent } from './comp/pipes/pipes.component';

const routes: Routes = [
  {path:'tuberias', component:PipesComponent},
  {path:'directivas-totales', component:DirectivaComponent},
  {path:'', component:HomeComponent},
  {path:'empleados-directivaFor', component:EmpleadosComponent},
  {path:'busqueda-platos-restaurante', component:BusquedaPlatosComponent},
  {path:'form-template', component:FormTemplateComponent},
  {path:'**', pathMatch:'full', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
