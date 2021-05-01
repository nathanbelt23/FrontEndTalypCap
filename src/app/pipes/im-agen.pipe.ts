import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';
 const urlImagen= environment.urlImagen;
@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(value: string, tipo: "cover"): string {
  return `${urlImagen}/download/${value}`;
  

}

}
