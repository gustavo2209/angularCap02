import { Component, OnInit } from '@angular/core';
import { platos, platosInternacionales } from '../data';

@Component({
  selector: 'app-platos-ni',
  templateUrl: './platos-ni.component.html',
  styleUrls: ['./platos-ni.component.css']
})
export class PlatosNIComponent implements OnInit {

  muestraPlatosN:boolean=false;
  muestraPlatosI:boolean=false;

  platosN = platos;
  platosI = platosInternacionales;

  mostrarPlatosN(){
    this.muestraPlatosN =!this.muestraPlatosN;
  }

  mostrarPlatosI(){
    this.muestraPlatosI =!this.muestraPlatosI;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
