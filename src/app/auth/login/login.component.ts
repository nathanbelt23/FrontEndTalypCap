import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UsuarioService } from '../../services/usuario-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  frmLogin = this.formBuilder.group(
    {
      email: ['desarrollador@gmail.com', [Validators.required, Validators.minLength(3)]],
      password: ['Colombia2021.', [Validators.required, Validators.minLength(3)]],
      recordar: [false]
    }
  );

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private UsuarioService: UsuarioService

  ) {

    if (localStorage.getItem("usuario")) {
      localStorage.removeItem("usuario");
    }

    if (localStorage.getItem("token")) {
      localStorage.removeItem("token");
    }


  }

  ngOnInit(): void {
    let email = localStorage.getItem("email")
    if (email) {

      this.frmLogin.controls["email"].setValue(email);
      this.frmLogin.controls["recordar"].setValue(true);
    }

  }

  public login() {
    if (this.frmLogin.valid) {
      this.UsuarioService.login(this.getValueControl("email"), this.getValueControl("password"))
        .subscribe(p => {

          this.router.navigateByUrl('');
        }

          , (err: any) => {
            console.log(err);

            Swal.fire(
              {
                icon: 'error'
                , text: "Ingreso no valido",
                timer: 1500

              }

            );

          }
        );

    }



  }

  public getValueControl(control: string) {
    return this.frmLogin.controls[control].value;

  }

}
