import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompPerezosoComponent } from './comp-perezoso/comp-perezoso.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:'comp-perezoso', component:CompPerezosoComponent}
]

@NgModule({
  declarations: [
    CompPerezosoComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class SecundarioModule { }
