import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { BookService } from '../../services/book.service';
import Swal from 'sweetalert2';

import { ResponseAPI } from 'src/app/models/model';
import { Book } from '../../models/model';
import { ModalImageService } from '../../services/modal-image.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit, OnDestroy {


  booCargando: boolean=false;
  eventManagerUsuario:Subscription;
  public Books: Book[]=[];
  constructor(private BookService:BookService
    , private modalImageService:ModalImageService
    , private router: Router,
    private  ngZone:NgZone
    ) { 

      this.eventManagerUsuario=this.modalImageService.eventImage.subscribe(
        (p:any)=>
        {
         console.log("eventImage");
         this.Books=[];
         this.loadBook();
         
      
       
        }
  
    );


    }
  ngOnDestroy(): void {
    this.eventManagerUsuario.unsubscribe();
  }


  ngOnInit(): void {
    this.loadBook();
  }

  loadBook()
  {

    this.booCargando=true;
    this.BookService.getBooks()
    .subscribe(p=>{
        this.Books= p;
        console.warn(p);
        this.booCargando= false;
    });

  }

  delete(id:number)
  {

    Swal.fire(
      {
        title:'Are you sure?',
        text:"You won't be able to revert this!",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }
  ).then((result)=>{
  
    if(result.isConfirmed==true)
    {

    this.booCargando=true;
    this.BookService.deleteBook(id)
    .subscribe(p=>{
      this.showResult(p);
    });
  }
  });

  }


  showResult(p: ResponseAPI) {


    Swal.fire(
      {
        icon: p.ok ? 'success' : 'error',
        text: p.message,
        timer: 2000
      }
    );

    if (p.ok) {
       this.loadBook();
    }
  
  }
  public abrirModaleImage(id:string)
  {
    this.modalImageService.abrirModalGenerico(id, id);

  }
}
