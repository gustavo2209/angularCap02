import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmpleadoService } from 'src/app/servicios/empleado.service';
import { Empleado } from './Empleado';
import { IEmpleado } from './IEmpleado';

@Component({
  selector: 'app-gestor-empleado',
  templateUrl: './gestor-empleado.component.html',
  styleUrls: ['./gestor-empleado.component.css']
})
export class GestorEmpleadoComponent implements OnInit {

  empleados:IEmpleado[] = [];
  empObj:Empleado = new Empleado();

  formValue = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    apellidos:new FormControl('', [Validators.required]),
    edad:new FormControl('', [Validators.required, Validators.pattern(/^-?\d*(\.\d{0})?$/), Validators.maxLength(2), Validators.min(18), Validators.max(70)]),
    cargo:new FormControl('', [Validators.required])
  })

  constructor(private empleadoService:EmpleadoService) { }

  listar(){
    this.empleadoService.getEmpleados().subscribe((resp:any)=>{
      console.log(resp);
      this.empleados=resp;
    })
  }

  muestraBtnR:boolean=true;
  muestraBtnA:boolean=false;

  registrar(){
    this.empObj.nombre = this.formValue.value.nombre!;
    this.empObj.apellidos = this.formValue.value.apellidos!;
    this.empObj.edad = parseInt(this.formValue.value.edad!);
    this.empObj.cargo = this.formValue.value.cargo!;
    this.empObj.estado = 1;

    this.empleadoService.nuevoEmpleado(this.empObj).subscribe(resp=>{
      console.log("se registró al empleado correctamente");
      this.formValue.reset();
      this.listar();
    })
  }

  editar(empleado:IEmpleado){
    this.muestraBtnA=true;
    this.muestraBtnR=false;

    this.empObj.id = empleado.id;
    this.formValue.controls['nombre'].setValue(empleado.nombre);
    this.formValue.controls['apellidos'].setValue(empleado.apellidos);
    this.formValue.controls['edad'].setValue(empleado.edad.toString());
    this.formValue.controls['cargo'].setValue(empleado.cargo);
  }

  actualizar(){
    this.empObj.nombre = this.formValue.value.nombre!;
    this.empObj.apellidos = this.formValue.value.apellidos!;
    this.empObj.cargo = this.formValue.value.cargo!;
    this.empObj.edad = parseInt(this.formValue.value.edad!);

    this.empleadoService.actualizarEmpleado(this.empObj, this.empObj.id).subscribe(resp=>{
      console.log("se actualizó correctamente la información");
      this.formValue.reset();
      this.muestraBtnA=false;
      this.muestraBtnR=true;
      this.listar();
    })
  }

  eliminarLogica(empleado:IEmpleado){
    
    this.empObj.id = empleado.id;

    this.empObj.nombre = empleado.nombre!;
    this.empObj.apellidos = empleado.apellidos!;
    this.empObj.cargo = empleado.cargo!;
    this.empObj.edad = empleado.edad!;
    this.empObj.estado = 0;

    this.empleadoService.actualizarEmpleado(this.empObj, this.empObj.id).subscribe(resp=>{
      console.log("se eliminó de forma lógica correctamente la información");
      this.listar();
    })
  }

  cancelar(){
    this.muestraBtnA=false;
    this.muestraBtnR=true;
    this.formValue.reset();
  }

  eliminar(empleado:IEmpleado){
    this.empleadoService.eliminarEmpleado(empleado.id).subscribe(resp=>{
      console.log("Se eliminó correctamente");
      this.listar();
    })
  }

  ngOnInit(): void {
    this.listar();
  }

}
