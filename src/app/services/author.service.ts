import { Injectable } from '@angular/core';
import { UsuarioService } from './usuario-service.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Activity, ResponseAPI, Author, ReporteExcel } from '../models/model';
const urlAPI= environment.urlAPI;
@Injectable({
  providedIn: 'root'
})

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

 
  constructor(
    private HttpClient:HttpClient
    ,private UsuarioService: UsuarioService
    ) {

     }

     getAuthors() {
      
      const url = `${ urlAPI }/Author`;
      return this.HttpClient.get<Author[]>( url, this.UsuarioService.headers );
    }

    getAuthor(id:number) {
      
      const url = `${ urlAPI }/Author/${id}`;
      return this.HttpClient.get<Author[]>( url, this.UsuarioService.headers );
    }


    createAuthor(data:Author) {

       const url = `${ urlAPI }/Author`;

      return this.HttpClient.post<ResponseAPI>( url,data, this.UsuarioService.headers);
    }


    
    updateAuthor(id:number,data:Author) {
      const url = `${ urlAPI }/Author/${id}`;
      return this.HttpClient.put<ResponseAPI>( url,data, this.UsuarioService.headers);
    }
    
    deleteAuthor(id:number) {
      const url = `${ urlAPI }/Author/${id}`;
      return this.HttpClient.delete<ResponseAPI>( url, this.UsuarioService.headers);
    }



}
