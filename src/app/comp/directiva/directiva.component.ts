import { Component, OnInit } from '@angular/core';
import { empleados } from '../data';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent implements OnInit {

  // directivas estructurales
  muestraCurso:boolean=false;
  textoBtnCurso:string="Mostrar cursos disponibles";

  matriculaAbierta:boolean=false;

  mostrarCurso(){
    console.log("ud ha hecho click sobre el boton");
    this.muestraCurso=!this.muestraCurso;
    this.textoBtnCurso=this.muestraCurso?"Ocultar cursos":"Mostrar cursos disponibles";
  }

  //ngFor

  muestraEmpleados:boolean=true;

  mostrarEmpleados(){
    this.muestraEmpleados =!this.muestraEmpleados;
  }

  constructor(){
    this.muestraEmpleadosCalificacionMayor7();
    this.mueestraEmpleadosMaximaCalificacion();
  }

  empCalificaM7:any[]=[];
  empCalifMaxima:any[]=[];

  muestraEmpleadosCalificacionMayor7(){
    let empCalif7 = this.empleados.filter((empleado) => empleado.calificacion>7);
    this.empCalificaM7 = empCalif7;
    console.table(this.empCalificaM7);
  }
  
  mueestraEmpleadosMaximaCalificacion(){
    let maximaCalificacion = this.empCalificaM7.reduce((x,y) => {
      return (x.calificacion<=y.calificacion?y:x)
    })

    this.empCalifMaxima=this.empCalificaM7.filter((empleado) => empleado.calificacion === maximaCalificacion.calificacion);
    console.log(this.empCalifMaxima);
  }

  empleados = empleados;

  // DIRECTIVAS ATRIBUTOS

  evaluaCalificacion(calificacion:any){
    let color:string='';

    color=calificacion>8?'gold':'red';
    return color;
  }

  ngOnInit(): void {
  }

}
