import { Component, OnInit } from '@angular/core';

import { SettingsService } from '../services/settings.service';
import { UsuarioService } from '../services/usuario-service.service';
import { Router } from '@angular/router';

declare function customInitFunctions();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  constructor( private settingsService: SettingsService ,
    public usuarioService: UsuarioService, private Router: Router
    
    ) { 

     
      if (localStorage.getItem("usuario")==null)
      {
          this.Router.navigateByUrl('/login');

      }
    else
      if (this.usuarioService.usuario.nombreCompleto=="")
      {
        if (localStorage.getItem("usuario")) {
          let strUsuario: string = localStorage.getItem("usuario")?.toString() || '';
          this.usuarioService.usuario = JSON.parse(strUsuario);

        }
     }

    }

    ngOnInit(): void {
    customInitFunctions();
  }

}
