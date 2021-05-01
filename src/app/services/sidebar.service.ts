import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      titulo: 'Dashboard',
      icono: 'mdi mdi-gauge',
      submenu: [

        
        
        { titulo: 'Main', url: '/' },
        { titulo: 'Activities', url: 'Activities' },
        { titulo: 'Authors', url: 'Authors' },
        { titulo: 'Books', url: 'Books' },
        { titulo: 'Excel', url: 'Report' },
        


 /*        { titulo: 'Gráficas', url: 'grafica1' },
        { titulo: 'rxjs', url: 'rxjs' },
        { titulo: 'Promesas', url: 'promesas' },
        { titulo: 'ProgressBar', url: 'progress' }, */
      ]
    },
  ];

  constructor() { }
}
