import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'consultaProductos'
})
export class ConsultaProductosPipe implements PipeTransform {

  transform(value: any[], consulta: string): any {
    const resultado = [];

    for(const producto of value){
      if(producto.marca.toLowerCase().indexOf(consulta.toLowerCase()) > -1){
        resultado.push(producto);
      }
    }
    return resultado;
  }

}
