import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  descripcion:string='JavaScript es un lenguaje repotenciado con la inclusión en el Front';
  precio:number=1234.5672;
  IGV:number=0.18;
  sueldoFutbolista:number=3436743871;
  dia:Date=new Date();
  saldoCuentaAhorro:number=2345;
  
  nroVistas:number=200;

  constructor() { }

  ngOnInit(): void {
  }

}
