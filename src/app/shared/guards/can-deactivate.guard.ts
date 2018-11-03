import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { MessagesService } from './../services/messages.service';
import { PhoneEditComponent } from './../../phones/phone-create/phone-create.component';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanActivate {

  constructor( private msgService: MessagesService) {}
  
  canDeactivate(component: PhoneEditComponent): Observable<boolean>{
    
    if(component.editInProgress){
      this.msgService.setMessage({
        type: 'warning',
        body: 'Вы точно хочете покинуть страницу, не сохранив изменения?',
        action: true
      })
      return this.msgService.getSubmit();
    }
    return of(true);

  }
}
