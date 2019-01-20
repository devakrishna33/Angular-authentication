import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-companion',
  templateUrl: './companion.component.html',
  styleUrls: ['./companion.component.css']
})
export class CompanionComponent implements OnInit {

  companions=[];

  constructor(private doctorService:DoctorService) { }

  ngOnInit() {
    this.doctorService.getCompanions()
    .subscribe(
      res => {
        this.companions = res;
      },
      err => {
        console.log(err);
      }
    )
  }

}
