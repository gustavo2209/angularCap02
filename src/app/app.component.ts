import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-set-app';
  subtitulo:string='capitulo 2 Angular';
  precio: number=12.75;

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

  muestraEmpleados:boolean=false;

  mostrarEmpleados(){
    this.muestraEmpleados =!this.muestraEmpleados;
  }

  muestraEmpleadosCalifiMayor7(){
    
  }

  empleados:any[]=[
    {
      name:'Roberto Perales',
      edad:23,
      aptitudes:'Solidos conocimientos de Java, C#, Javascript',
      cargo:'Analista de Sistemas',
      calificacion:8
    },
    {
      name:'Maria Ramos',
      edad:23,
      aptitudes:'Solidos conocimientos de Java, C#, Javascript',
      cargo:'Analista Programador',
      calificacion:5
    },
    {
      name:'Hugo Perez',
      edad:23,
      aptitudes:'Solidos conocimientos de Java, C#, Javascript',
      cargo:'Arquitecto de Software',
      calificacion:10
    },
    {
      name:'Sofia Palacios',
      edad:23,
      aptitudes:'Solidos conocimientos de Java, C#, Javascript',
      cargo:'Gestor de Proyectos',
      calificacion:9
    },
    {
      name:'Mercedes rosas',
      edad:23,
      aptitudes:'Solidos conocimientos de Java, C#, Javascript',
      cargo:'Analista de Infraestructura',
      calificacion:8
    },
    {
      name:'Carlos Gonzales',
      edad:23,
      aptitudes:'Solidos conocimientos de Java, C#, Javascript',
      cargo:'Analista Programador Junior',
      calificacion:7
    },
    {
      name:'Pilar Vasquez',
      edad:23,
      aptitudes:'Solidos conocimientos de Java, C#, Javascript',
      cargo:'Analista de Base de Datos',
      calificacion:7
    },
    {
      name:'Teresa Villavicencio',
      edad:23,
      aptitudes:'Solidos conocimientos de Java, C#, Javascript',
      cargo:'Gestor Funcional',
      calificacion:8
    },
    {
      name:'Hernando Salas',
      edad:23,
      aptitudes:'Solidos conocimientos de Java, C#, Javascript',
      cargo:'Oficial de Seguridad',
      calificacion:10
    },
    {
      name:'Graciela Peregrino',
      edad:23,
      aptitudes:'Solidos conocimientos de Java, C#, Javascript',
      cargo:'Coordinador de TI',
      calificacion:9
    }
  ]
}
