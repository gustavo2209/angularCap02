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

  muestraEmpleados:boolean=true;

  mostrarEmpleados(){
    this.muestraEmpleados =!this.muestraEmpleados;
  }

  examenCalificado:number=1;

  continuarExamen(){
    if(this.examenCalificado > 3){
      this.examenCalificado=6;
    }else{
      this.examenCalificado++;
    }
  }

  reiniciarExamen(){
    this.examenCalificado = 1;
  }

  // OTRO EJEMPLO DE NGSWITCH

  evaluacion:number=1;
  evaluaciones=[
    {
      id:1, 
      nombre:'Examen de Java Fundamentals developer', 
      dificultad: 'intermedio',
      preg1: 'desarrolle un algoritmo de numeros primos'
    },
    {
      id:2, 
      nombre:'Examen de Java Web developer', 
      dificultad: 'intermedio',
      preg1: 'desarrolle una pagina que permita el ingreso de montos a pagar'
    },
    {
      id:3, 
      nombre:'Examen de Java Advanced', 
      dificultad: 'avanzado',
      preg1: 'aplique el patron observer'
    },
    {
      id:4, 
      nombre:'Examen de Java Front developer', 
      dificultad: 'intermedio',
      preg1: 'identifique el jsx para renderizar el componente producto'
    },
    {
      id:5, 
      nombre:'Examen de Angular developer', 
      dificultad: 'intermedio',
      preg1: 'desarrolle un componente que muestre los numeros primos'
    }
  ]

  continuarEvaluaciones(){
    this.evaluacion = this.evaluacion === this.evaluaciones.length - 1?1:this.evaluacion+1;
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
}
