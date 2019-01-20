import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'http://localhost:3000/api/'
  constructor(private http:HttpClient) { }

  register(user){
    return this.http.post<any>(`${this.url}register`, user);
  }

  login(user){
    return this.http.post<any>(`${this.url}login`, user);
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }


  getToken(){
    return localStorage.getItem('token');
  }

}
