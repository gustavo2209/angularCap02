import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/servicios/carrito.service';
import { IProducto } from '../IProducto';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  carrito:IProducto[]=[];

  constructor(private productoService:CarritoService) { }

  ngOnInit(): void {
    this.productoService.items.subscribe(data => this.carrito=data);
  }

  limpiarCarrito(){
    this.productoService.limpiarCarrito();
  }

  getTotal():number{
    let total = 0;

    this.carrito.forEach(p=>{
      total+=p.cantidad*p.precio;
    })

    return total;
  }

}
