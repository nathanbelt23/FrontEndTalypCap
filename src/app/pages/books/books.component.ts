
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { BookService } from 'src/app/services/book.service';
import { Book, ResponseAPI, Author, AuthorLnk } from '../../models/model';
import Swal from 'sweetalert2';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})


export class BooksComponen implements OnInit {

  form: FormGroup;
  Authors:Author []=[];
  id: number = 0;


  constructor(private BookService: BookService,
    private FormBuilder: FormBuilder,
    private ActivatedRoute: ActivatedRoute,
    private  Router:Router,
    private primengConfig: PrimeNGConfig
  ) {

    this.id = this.ActivatedRoute.snapshot.params.id;

        
    this.form = this.FormBuilder.group(
      {

        title: ['', [Validators.required]],
        description: ['', [Validators.required]],
        pageCount: ['', [Validators.required]],
        excerpt: ['', [Validators.required]],
        publishDate:  new FormControl({ value: new Date(), disabled: false }, Validators.required)

      }

      );
      if(this.id>0)
      {
          this.loadBook();
      }
        
    this.loadAuthor();
    

  }
  loadAuthor() {
    
    this.BookService.getBookAuthor(this.id).subscribe(
      p=>{

              this.Authors=p;
      }

    );

  }
  loadBook() {
    this.BookService.getBook(this.id).subscribe(p=>{

          if(p.length==0)
          {
            this.Router.navigateByUrl('/dashboard/Activities');
            
          }
          else
          {

            console.log(p[0].publishDate.toString().substring(0,10));
            this.getControl("publishDate").setValue((p[0].publishDate.toString().substring(0,10)));
            this.getControl("description").setValue(p[0].description);
            this.getControl("title").setValue(p[0].title);
            this.getControl("pageCount").setValue(p[0].pageCount);
            this.getControl("excerpt").setValue(p[0].excerpt);
            

          }
          

    });

   
  }



  es: any;

  ngOnInit(): void { 
    this.primengConfig.ripple = true;
    this.es = {
      firstDayOfWeek: 1,
      dayNames: [ "domingo","lunes","martes","miércoles","jueves","viernes","sábado" ],
      dayNamesShort: [ "dom","lun","mar","mié","jue","vie","sáb" ],
      dayNamesMin: [ "D","L","M","X","J","V","S" ],
      monthNames: [ "enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre" ],
      monthNamesShort: [ "ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic" ],
      today: 'Hoy',
      clear: 'Borrar'
  }

  let today = new Date();
  let month = today.getMonth();
  let year = today.getFullYear();
  let prevMonth = (month === 0) ? 11 : month -1;
  let prevYear = (prevMonth === 11) ? year - 1 : year;
  let nextMonth = (month === 11) ? 0 : month + 1;
  let nextYear = (nextMonth === 0) ? year + 1 : year;

  let invalidDate = new Date();
  invalidDate.setDate(today.getDate() - 1);


  }

  save() {
      let data= {}  as Book;
        data.bookID= this.id;
        data.publishDate= new Date(this.getControl("publishDate").value);
        data.title=this.getControl("title").value;
        data.pageCount=this.getControl("pageCount").value;
        data.description=this.getControl("description").value;
        data.excerpt=this.getControl("excerpt").value;

        data.authorLnk=[];
        this.Authors.forEach(element => {
          if(element.seleccionado)
          {
          
            var  authorLnk= {}  as AuthorLnk; 
            authorLnk.authorID= element.authorID;
            authorLnk.bookID= this.id;
            data.authorLnk.push(authorLnk)
          }
        });


        
if (this.id == 0) {
      this.BookService.createBook(data).
        subscribe(p => this.showResult(p));
    }
    else {

      this.BookService.updateBook(this.id,data).
      subscribe(p => this.showResult(p));
    }

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
        this.Router.navigateByUrl('/dashboard/Books');
    }
  
  }


  getControl(control: string) {
    return this.form.controls[control];

  }


  getControlValid(control: string) {
    return this.form.controls[control].invalid && this.form.controls[control].touched;

  }

  
}  