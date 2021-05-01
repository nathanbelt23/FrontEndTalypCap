import { Injectable } from '@angular/core';
import { UsuarioService } from './usuario-service.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ResponseAPI, Book, Author } from '../models/model';
import { delay } from 'rxjs/operators';
const urlAPI= environment.urlAPI;

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private HttpClient:HttpClient
    ,private UsuarioService: UsuarioService
    ) {

     }

     getBooks() {
      
      const url = `${ urlAPI }/Book`;
      return this.HttpClient.get<Book[]>( url, this.UsuarioService.headers ).pipe(delay(500));
    }

    getBook(id:number) {
      
      const url = `${ urlAPI }/Book/${id}`;
      return this.HttpClient.get<Book[]>( url, this.UsuarioService.headers );
    }

    
    getBookAuthor(id:number) {
      
      const url = `${ urlAPI }/Book/Author/${id}`;
      return this.HttpClient.get<Author[]>( url, this.UsuarioService.headers );
    }


    createBook(data:Book) {

       const url = `${ urlAPI }/Book`;

      return this.HttpClient.post<ResponseAPI>( url,data, this.UsuarioService.headers);
    }


    
    updateBook(id:number,data:Book) {
      const url = `${ urlAPI }/Book/${id}`;
      return this.HttpClient.put<ResponseAPI>( url,data, this.UsuarioService.headers);
    }
    
    deleteBook(id:number) {
      const url = `${ urlAPI }/Book/${id}`;
      return this.HttpClient.delete<ResponseAPI>( url, this.UsuarioService.headers);
    }


    getReporteExcel() {
      
      const url = `${ urlAPI }/Book/Report`;
      return this.HttpClient.get<ReporteExcel[]>( url, this.UsuarioService.headers );
    }

}
