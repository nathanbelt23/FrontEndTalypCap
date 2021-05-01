import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from '../../services/activities.service';
import { Activity, ResponseAPI } from '../../models/model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-activity',
  templateUrl: './list-activity.component.html',
  styleUrls: ['./list-activity.component.css']
})
export class ListActivityComponent implements OnInit {

  booCargando: boolean=false;

  public activities: Activity[]=[];
  constructor(private ActivitiesService:ActivitiesService) { }
  date1: Date;

  ngOnInit(): void {
    this.loadActivities();
  }

  loadActivities()
  {

    this.booCargando=true;
    this.ActivitiesService.getActivities()
    .subscribe(p=>{
        this.activities= p;
        console.log(p);
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
    this.ActivitiesService.deleteActivity(id)
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
       this.loadActivities();
    }
  
  }

}
