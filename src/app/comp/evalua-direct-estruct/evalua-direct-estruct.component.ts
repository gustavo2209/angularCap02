import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evalua-direct-estruct',
  templateUrl: './evalua-direct-estruct.component.html',
  styleUrls: ['./evalua-direct-estruct.component.css']
})
export class EvaluaDirectEstructComponent implements OnInit {

  // directivas estructurales
  muestraCurso:boolean=false;
  textoBtnCurso:string="Mostrar cursos disponibles";

  matriculaAbierta:boolean=false;

  mostrarCurso(){
    console.log("ud ha hecho click sobre el boton");
    this.muestraCurso=!this.muestraCurso;
    this.textoBtnCurso=this.muestraCurso?"Ocultar cursos":"Mostrar cursos disponibles";
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
