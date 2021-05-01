import { Injectable } from '@angular/core';
import { HttpClient,  } from '@angular/common/http';
import { UsuarioLogin } from '../models/model';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs/operators';

 const urlAPI= environment.urlAPI;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public usuario={}  as UsuarioLogin;

  constructor(private HttpClient:HttpClient) { }



public login (email:string,password:string  )
{

  let url = `${urlAPI}/usuario/login`;
  let parameters={
    email,
    password

  };

  return  this.HttpClient.post<UsuarioLogin>(url, parameters)
  .pipe(tap( (p:UsuarioLogin) => {
     
        localStorage.setItem("usuario", JSON.stringify(p));
        this.usuario=p; 
        this.guardarLocalStorage(p.token);

      }
      ));
  ;

  
}
//---Funciones  de token--//
get token(): string {
  return localStorage.getItem('token') || '';
}
get headers() {
  return {
    headers: {
      'Authorization': `Bearer ${this.token}`
    }
  }
}



guardarLocalStorage( token: string, ) {
  localStorage.setItem('token', token );
}


//---Fin funciones  de token--//


}
