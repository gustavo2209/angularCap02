import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent implements OnInit {

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

  // DIRECTIVAS ATRIBUTOS

  evaluaCalificacion(calificacion:any){
    let color:string='';

    color=calificacion>8?'gold':'red';
    return color;
  }

  ngOnInit(): void {
  }

}
