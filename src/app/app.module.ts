import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivaComponent } from './comp/directiva/directiva.component';
import { EvaluaSwitchComponent } from './comp/evalua-switch/evalua-switch.component';
import { InterpolacionComponent } from './comp/interpolacion/interpolacion.component';
import { EvaluaDirectAtribComponent } from './comp/evalua-direct-atrib/evalua-direct-atrib.component';
import { EvaluaDirectEstructComponent } from './comp/evalua-direct-estruct/evalua-direct-estruct.component';
import { PipesComponent } from './comp/pipes/pipes.component';
import { VistasPipe } from './pipes/vistas.pipe';
import { NavegadorComponent } from './comp/navegador/navegador.component';
import { PageNotFoundComponent } from './comp/page-not-found/page-not-found.component';
import { HomeComponent } from './comp/home/home.component';
import { EmpleadosComponent } from './comp/empleados/empleados.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivaComponent,
    EvaluaSwitchComponent,
    InterpolacionComponent,
    EvaluaDirectAtribComponent,
    EvaluaDirectEstructComponent,
    PipesComponent,
    VistasPipe,
    NavegadorComponent,
    PageNotFoundComponent,
    HomeComponent,
    EmpleadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
