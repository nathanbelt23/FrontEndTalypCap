import { EventEmitter } from '@angular/core';
import { Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalImageService {


  public ocultarModal: boolean=true;
  
  public  tipo='cover';

  public  id:string="";
  public  img:string="";

  @Output()  eventImage:EventEmitter<string> = new EventEmitter()

  constructor(


  ) { 

  }



public  abrirModalGenerico( id:string, img:string, tipo='cover')
{
  this.id=id;  this.img= img;
  this.ocultarModal= false;
  this.tipo=  tipo;
}

public  cerrarModal()
{
  this.eventImage.emit(this.img);
  this.ocultarModal= true;
  
}

}