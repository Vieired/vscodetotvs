import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroBusca',
  pure: false
})
export class FiltroBuscaPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value.length === 0 || args === undefined) {
      return value;
    }
    console.log("Valor Buscado (args): " + args);
    console.log(value);
    let filter = args.toLocaleLowerCase();
    return value.subtitulo.filter(
      v => v.toLocaleLowerCase().indexOf(filter) != -1
    );
  }

}
