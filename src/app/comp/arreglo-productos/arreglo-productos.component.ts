import { Component, OnInit } from '@angular/core';
import { productos } from '../data';

@Component({
  selector: 'app-arreglo-productos',
  templateUrl: './arreglo-productos.component.html',
  styleUrls: ['./arreglo-productos.component.css']
})
export class ArregloProductosComponent implements OnInit {

  productos = productos;
  consulta:string='';

  constructor() { }

  ngOnInit(): void {
  }

}
