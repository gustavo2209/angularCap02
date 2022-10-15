import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { productos } from '../comp/dataP';
import { IProducto } from '../comp/IProducto';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  productos:IProducto[]=[];
  carrito:IProducto[]=[];

  private prodSubject:BehaviorSubject<IProducto[]>=new BehaviorSubject(this.carrito);
  public items:Observable<IProducto[]>=this.prodSubject.asObservable();

  constructor() { 
    this.productos=productos;
  }

  getProductos():IProducto[]{
    return this.productos;
  }

  modificarCarrito(producto:IProducto){
    let indice = this.carrito.findIndex((p) => p.nombre === producto.nombre);
    if(indice === -1){
      this.carrito.push(producto);
    }else{
      this.carrito[indice].cantidad = producto.cantidad;
    }

    if(producto.cantidad === 0){
      this.carrito.splice(indice, 1);
    }
  }

  limpiarCarrito(){
    this.carrito.splice(0,this.carrito.length);
  }
}
