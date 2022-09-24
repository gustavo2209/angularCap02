import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivaComponent } from './comp/directiva/directiva.component';
import { EvaluaSwitchComponent } from './comp/evalua-switch/evalua-switch.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivaComponent,
    EvaluaSwitchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
