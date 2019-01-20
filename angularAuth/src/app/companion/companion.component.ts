import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-companion',
  templateUrl: './companion.component.html',
  styleUrls: ['./companion.component.css']
})
export class CompanionComponent implements OnInit {

  companions=[];

  constructor(private doctorService:DoctorService, private router:Router) { }

  ngOnInit() {
    this.doctorService.getCompanions()
    .subscribe(
      res => {
        this.companions = res;
      },
      err => {
        if( err instanceof HttpErrorResponse ){
          if(err.status == 401){
            this.router.navigate(['/login']);
            return;
          }
          if(err.status == 500){
            alert('Bad request');
            return;
          }
        }
      }
    )
  }

}
