import { Injectable } from '@angular/core';
import { UsuarioService } from './usuario-service.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Activity, ResponseAPI } from '../models/model';
const urlAPI= environment.urlAPI;
@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  constructor(
    private HttpClient:HttpClient
    ,private UsuarioService: UsuarioService
    ) {

     }

     getActivities() {
      
      const url = `${ urlAPI }/Activity`;
      return this.HttpClient.get<Activity[]>( url, this.UsuarioService.headers );
    }

    getActivity(id:number) {
      
      const url = `${ urlAPI }/Activity/${id}`;
      return this.HttpClient.get<Activity[]>( url, this.UsuarioService.headers );
    }


    createActivity(data:Activity) {

       const url = `${ urlAPI }/Activity`;

      return this.HttpClient.post<ResponseAPI>( url,data, this.UsuarioService.headers);
    }


    
    updateActivity(id:number,data:Activity) {
      const url = `${ urlAPI }/Activity/${id}`;
      return this.HttpClient.put<ResponseAPI>( url,data, this.UsuarioService.headers);
    }
    
    deleteActivity(id:number) {
      const url = `${ urlAPI }/Activity/${id}`;
      return this.HttpClient.delete<ResponseAPI>( url, this.UsuarioService.headers);
    }



}
