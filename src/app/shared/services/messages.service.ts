import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Message } from './../model/message'

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  private messages$ = new Subject<Message>();
  private submit$ = new Subject<boolean>();

  constructor() { }

  setMessage(msg: Message) {
    this.messages$.next(msg);
  }
  getMessage() {
    return this.messages$.asObservable();
  }

  submit(confirmation = true) {
    this.submit$.next(confirmation);
  }
  getSubmit() {
    return this.submit$.asObservable();
  }
}





