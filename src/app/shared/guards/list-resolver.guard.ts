import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { DataService } from './../services/data.service';

@Injectable({
  providedIn: 'root'
})
export class ListResolverGuard implements Resolve<any> {

  constructor( private phonesService: DataService) {}

  resolve() {
    return this.phonesService.getPhonesList();
  }
}





