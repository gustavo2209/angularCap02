import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/servicios/carrito.service';
import { IProducto } from '../IProducto';

@Component({
  selector: 'app-lista-prod',
  templateUrl: './lista-prod.component.html',
  styleUrls: ['./lista-prod.component.css']
})
export class ListaProdComponent implements OnInit {

  productos:IProducto[]=[];

  constructor(private productoService:CarritoService) { }

  ngOnInit(): void {
    this.productos = this.productoService.getProductos();
  }
  
  adiciona(producto:IProducto){
    if(producto.cantidad<producto.stock){
      producto.cantidad++;
      this.productoService.modificarCarrito(producto);
    }else{
      console.log("No se cuenta con stock");
    }
  }

  decrementa(producto:IProducto){
    if(producto.cantidad >0){
      producto.cantidad--;
      this.productoService.modificarCarrito(producto);
    }
  }

}
