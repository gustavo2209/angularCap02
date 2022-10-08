import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
    nombre: new FormControl(),
    apellidos:new FormControl(),
    edad:new FormControl(),
    cargo:new FormControl()
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
    this.empObj.nombre = this.formValue.value.nombre;
    this.empObj.apellidos = this.formValue.value.apellidos;
    this.empObj.edad = this.formValue.value.edad;
    this.empObj.cargo = this.formValue.value.cargo;

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
    this.formValue.controls['edad'].setValue(empleado.edad);
    this.formValue.controls['cargo'].setValue(empleado.cargo);
  }

  actualizar(){
    this.empObj.nombre = this.formValue.value.nombre;
    this.empObj.apellidos = this.formValue.value.apellidos;
    this.empObj.cargo = this.formValue.value.cargo;
    this.empObj.edad = this.formValue.value.edad;

    this.empleadoService.actualizarEmpleado(this.empObj, this.empObj.id).subscribe(resp=>{
      console.log("se actualizó correctamente la información");
      this.formValue.reset();
      this.muestraBtnA=false;
      this.muestraBtnR=true;
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
