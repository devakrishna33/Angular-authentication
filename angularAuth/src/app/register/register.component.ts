import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userData = {}

  constructor(private authService: AuthService, private router:Router) { }

  ngOnInit() {
  }

  registerUser(){
    this.authService.register(this.userData)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['companion']);
      },
      err => {
        console.log(err);
      }
    )
  }

}
