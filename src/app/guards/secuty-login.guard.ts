import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../services/usuario-service.service';

@Injectable({
  providedIn: 'root'
})
export class SecutyLoginGuard implements CanActivate {

  constructor( private usuarioService: UsuarioService,
    private router: Router) {}



  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {
     console.log('Can activate');
     if(localStorage.getItem("token"))
     {
      return  localStorage.getItem("token").length>0;
     }
     else
     {
        this.router.navigateByUrl('/login');

     }
      
  }
  
}
