import { Component, OnInit } from '@angular/core';
import { platos } from '../data';

@Component({
  selector: 'app-busqueda-platos',
  templateUrl: './busqueda-platos.component.html',
  styleUrls: ['./busqueda-platos.component.css']
})
export class BusquedaPlatosComponent implements OnInit {

  platos = platos;
  consulta:string='';

  constructor() { }

  ngOnInit(): void {
    console.table(platos);
  }

}
