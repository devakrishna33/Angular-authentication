import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  url = 'http://localhost:3000/api'
  constructor(private http:HttpClient) { }

  getDoctors(){
    return this.http.get(`${this.url}/doctors`);
  }

  getCompanions(){
    return this.http.get(`${this.url}/companions`);
  }
}
