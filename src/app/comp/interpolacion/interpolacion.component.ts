import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  templateUrl: './interpolacion.component.html',
  styleUrls: ['./interpolacion.component.css']
})
export class InterpolacionComponent implements OnInit {

  title = 'angular-set-app';
  subtitulo:string='capitulo 2 Angular';
  precio: number=12.75;
  
  constructor() { }

  ngOnInit(): void {
  }

}
