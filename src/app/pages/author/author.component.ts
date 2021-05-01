import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validator, Validators, FormGroup } from '@angular/forms';
import { AuthorService } from '../../services/author.service';
import { Author, ResponseAPI } from '../../models/model';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  form: FormGroup;
  id = 0;
  constructor(private FormBuilder: FormBuilder,
    private AuthorService: AuthorService,
    private Router: Router,
    private ActivatedRoute: ActivatedRoute
  ) {

    this.id = ActivatedRoute.snapshot.params.id;

    this.form = this.FormBuilder.group(
      {
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]]

      }

    );

    if (this.id > 0) {
      this.loadAuthor();
    }

  }
  loadAuthor() {
    this.AuthorService.getAuthor(this.id).subscribe(
      p => {

        if(p.length==0)
        {
          this.Router.navigateByUrl('/dashboard/Authors');
        }
        else
        {

          this.form.reset(p[0]);
        }

        
      }

    );
  }

  ngOnInit(): void {
  }


  getControl(control: string) {
    return this.form.controls[control];

  }

  save() {
    if (this.id == 0) {

      this.AuthorService.createAuthor(this.form.value).
        subscribe(p => this.showResult(p));
    }
    else {

      this.AuthorService.updateAuthor(this.id, this.form.value).
        subscribe(p => this.showResult(p));
    }


  }

  getControlValid(control: string) {
    return this.form.controls[control].invalid && this.form.controls[control].touched;

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
      this.Router.navigateByUrl('/dashboard/Authors');
    }

  }

}
