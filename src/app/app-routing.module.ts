import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivaComponent } from './comp/directiva/directiva.component';
import { EmpleadosComponent } from './comp/empleados/empleados.component';
import { HomeComponent } from './comp/home/home.component';
import { PageNotFoundComponent } from './comp/page-not-found/page-not-found.component';
import { PipesComponent } from './comp/pipes/pipes.component';

const routes: Routes = [
  {path:'tuberias', component:PipesComponent},
  {path:'directivas-totales', component:DirectivaComponent},
  {path:'', component:HomeComponent},
  {path:'empleados-directivaFor', component:EmpleadosComponent},
  {path:'**', pathMatch:'full', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
