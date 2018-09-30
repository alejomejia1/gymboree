import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RestProvider {

  apiUrl = 'http://sing.com.co/colina/api/alumnos/view/';
  apiUrl2 = 'http://sing.com.co/desarrollo/api/reservas/view/';
  apiUrl3 = 'http://sing.com.co/colina/api/alumnos/view/';
  apiKey = '?apiKey=9tMS1A8G5QY4N84';

  constructor(private http: HttpClient) {
    console.log('Hello RestServiceProvider Provider');
  }


  getAlumno(id: any) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + id + this.apiKey).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  getReserva(id: any) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl2 + id + this.apiKey).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  getAlumno(id: any) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl3 + id + this.apiKey).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }


}
