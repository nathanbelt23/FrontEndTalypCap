import { Component, OnInit } from '@angular/core';
import { Author, ResponseAPI } from '../../models/model';

import { AuthorService } from '../../services/author.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-author',
  templateUrl: './list-author.component.html',
  styleUrls: ['./list-author.component.css']
})
export class ListAuthorComponent implements OnInit {

  booCargando: boolean=false;

  public Authors: Author[]=[];
  constructor(private AuthorService:AuthorService) { }


  ngOnInit(): void {
    this.loadAuthor();
  }

  loadAuthor()
  {

    this.booCargando=true;
    this.AuthorService.getAuthors()
    .subscribe(p=>{
        this.Authors= p;
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
    this.AuthorService.deleteAuthor(id)
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
       this.loadAuthor();
    }
  
  }

}
