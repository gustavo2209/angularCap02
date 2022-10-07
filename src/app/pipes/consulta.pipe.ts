import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'consulta'
})
export class ConsultaPipe implements PipeTransform {

  transform(value: any[], consulta: string): any {
    const resultado = [];

    for(const plato of value){
      if(plato.nombre.toLowerCase().indexOf(consulta.toLowerCase()) > -1){
        resultado.push(plato);
      }
    }
    return resultado;
  }

}
