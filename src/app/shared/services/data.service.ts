import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, of, from, throwError} from 'rxjs';
import {catchError, map, pluck, retry, tap} from 'rxjs/operators';

import { Phone } from './../model/phone';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  phonesData: Phone[];

  constructor( 
    private http: HttpClient
  ) {}

  getPhonesList(){
    if( !this.phonesData){
      return this.http.get('https://gist.githubusercontent.com/nntndfrk/661cbb5e3c005a09078e1b8f41ee9aa4/raw/d9b60d6f8f3cad794ffc8bfe727a99672e7378b5/phones')
      .pipe(  
          tap( (data: Phone[]) => {
             this.phonesData = data;
          })
      )
    } else {
      return of(this.phonesData);
    }
  }

  createPhone(phone: Phone) {
    return of(this.phonesData.push(phone));
  }

  getSinglePhone(id) {
    const singlePhone = this.phonesData.filter( (phone) => { 
      return phone['id'] == id
     })
    return from(singlePhone);
  }

  upDateDataPhone(upPhone) {
    this.phonesData.forEach( (phone) => { 
        if(phone.id === upPhone.id){
          phone.name = upPhone.name;
          phone.description = upPhone.description;
        } 
    })
    return of(true)
  }

}
