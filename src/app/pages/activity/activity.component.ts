import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivitiesService } from '../../services/activities.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ResponseAPI } from 'src/app/models/model';
import Swal from 'sweetalert2';
import { timer } from 'rxjs';
import { PrimeNGConfig } from 'primeng/api';
import { Calendar } from 'primeng/calendar';
import { Activity } from '../../models/model';
import { delay } from 'rxjs/operators';



@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  form: FormGroup;
  id: number = 0;
  
  constructor(private ActivitiesService: ActivitiesService,
    private FormBuilder: FormBuilder,
    private ActivatedRoute: ActivatedRoute,
    private  Router:Router,
    private primengConfig: PrimeNGConfig
  ) {

    this.id = this.ActivatedRoute.snapshot.params.id;

    
    this.form = this.FormBuilder.group(
      {

        title: ['', [Validators.required]],
        dueDate:  new FormControl({ value: new Date(), disabled: false }, Validators.required),
        completed: [],
      }

      );
      if(this.id>0)
      {
          this.loadActivity();
  
      }
      

    

  }
  loadActivity() {
    this.ActivitiesService.getActivity(this.id).subscribe(p=>{

          if(p.length==0)
          {
            this.Router.navigateByUrl('/dashboard/Activities');
            
          }
          else
          {
            this.getControl("dueDate").setValue((p[0].dueDate.toString().substring(0,10)));
            this.getControl("completed").setValue(p[0].completed);
            this.getControl("title").setValue(p[0].title);
            
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

     
      let data= {}  as Activity;

        data.dueDate= new Date(this.getControl("dueDate").value);
        data.title=this.getControl("title").value;
        data.actividadID= this.id;
      
      if(!this.getControl("completed").value)
      {
       
        data.completed=false;
      }else
      {
        data.completed=true;
      }

   
    if (this.id == 0) {
   
      this.ActivitiesService.createActivity(data).
        subscribe(p => this.showResult(p));
    }
    else {

      this.ActivitiesService.updateActivity(this.id,data).
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
        this.Router.navigateByUrl('/dashboard/Activities');
    }
  
  }


  getControl(control: string) {
    return this.form.controls[control];

  }


  getControlValid(control: string) {
    return this.form.controls[control].invalid && this.form.controls[control].touched;

  }

}
