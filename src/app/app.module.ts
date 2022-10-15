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
import { BusquedaPlatosComponent } from './comp/busqueda-platos/busqueda-platos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConsultaPipe } from './pipes/consulta.pipe';
import { FormTemplateComponent } from './comp/form-template/form-template.component';
import { FormModelComponent } from './comp/form-model/form-model.component';
import {HttpClientModule} from '@angular/common/http';
import { GestorEmpleadoComponent } from './comp/gestor-empleado/gestor-empleado.component';
import { PlatosNIComponent } from './comp/platos-ni/platos-ni.component';
import { ArregloProductosComponent } from './comp/arreglo-productos/arreglo-productos.component';
import { ConsultaProductosPipe } from './pipes/consulta-productos.pipe';
import { GestorCarritoComponent } from './comp/gestor-carrito/gestor-carrito.component';
import { ListaProdComponent } from './comp/lista-prod/lista-prod.component';
import { CarritoComponent } from './comp/carrito/carrito.component';

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
    EmpleadosComponent,
    BusquedaPlatosComponent,
    ConsultaPipe,
    FormTemplateComponent,
    FormModelComponent,
    GestorEmpleadoComponent,
    PlatosNIComponent,
    ArregloProductosComponent,
    ConsultaProductosPipe,
    GestorCarritoComponent,
    ListaProdComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
