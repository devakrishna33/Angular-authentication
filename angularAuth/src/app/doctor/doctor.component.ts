import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  doctors = [];
  constructor(private doctorService:DoctorService) { }

  ngOnInit() {
    this.doctorService.getDoctors()
    .subscribe(
      res => {
        this.doctors = res;
      },
      err => {
        console.log(err);
      }
    )
  }

}
