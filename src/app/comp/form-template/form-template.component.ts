import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css']
})
export class FormTemplateComponent implements OnInit {

  resultado:any;
  frutas:any=[];

  constructor() { }

  validaPrecio(event:any){
    const reg = /^-?\d*(\.\d{0,2})?$/;
    let input = event.target.value + String.fromCharCode(event.charCode);
 
    if (!reg.test(input)) {
      event.preventDefault();
    }
  }

  onSubmit(value:any){
    console.log(value);
    this.resultado = value;
    this.frutas.push(value);
  }

  ngOnInit(): void {
  }

}
