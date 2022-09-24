import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evalua-switch',
  templateUrl: './evalua-switch.component.html',
  styleUrls: ['./evalua-switch.component.css']
})
export class EvaluaSwitchComponent implements OnInit {

  //ngSwitch
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
  
  constructor() { }

  ngOnInit(): void {
  }

}
