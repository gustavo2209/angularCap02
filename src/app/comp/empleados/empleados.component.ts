import { Component, OnInit } from '@angular/core';
import { empleados } from '../data';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

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
