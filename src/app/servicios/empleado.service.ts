import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { IEmpleado } from '../comp/gestor-empleado/IEmpleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  url="http://localhost:3000/empleados";

  constructor(private http:HttpClient) {
  }

  getEmpleados(){
    let header = new HttpHeaders().set("Type-content", "application/json");
    return this.http.get(this.url, {
      headers:header
    });
  }

  nuevoEmpleado(data:IEmpleado){
    return this.http.post<IEmpleado>(this.url, data).pipe(map((x)=>data))
  }

  eliminarEmpleado(id:number){
    return this.http.delete<IEmpleado>(`${this.url}/${id}`).pipe(map((resp)=>resp));
  }

  actualizarEmpleado(data:IEmpleado, id:number){
    return this.http.put<IEmpleado>(`${this.url}/${id}`, data).pipe(map((resp)=>resp));
  }
}
