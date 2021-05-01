import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
const urlImagen= environment.urlImagen;
@Injectable({
  providedIn: 'root'
})
export class FileUploadService {


  constructor(
        public httpClient: HttpClient
  ) { }

  actualizarFoto(
    archivo: File,
    id: string
   
  ) {

    const url = `${urlImagen}/${id}`;


    console.log(url);
    const formData = new FormData();
    formData.append("file", archivo);
    return this.httpClient.put(url, formData);

  }
}
