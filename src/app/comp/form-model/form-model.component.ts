import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-model',
  templateUrl: './form-model.component.html',
  styleUrls: ['./form-model.component.css']
})
export class FormModelComponent implements OnInit {

  resultado:any;
  frutas:any=[];

  frutaForm = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    precio: new FormControl('', [Validators.required, Validators.pattern(/^-?\d*(\.\d{0,3})?$/)])
  })

  constructor() { }

  ngOnInit(): void {
  }

  enviar(){
    this.resultado = this.frutaForm.value;
    this.frutas.push(this.resultado);
  }

}
