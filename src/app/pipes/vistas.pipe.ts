import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vistas'
})
export class VistasPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    let resultado = '';
    if(value > 50 && value < 100){
      resultado = `${value} vistas. Usted recién esta iniciando como Youtuber`
    }
    else if(value > 100 && value < 200){
      resultado = `${value} vistas. Usted ya cuenta con audiencia como Youtuber`
    }
    else if(value >= 200){
      resultado = `${value} vistas. Usted ya cuenta con mucha audiencia como Youtuber`
    }
    return resultado;
  }

}
