import { Component, OnInit } from '@angular/core';
import { MessagesService } from './../shared/services/messages.service';
import { Message } from './../shared/model/message';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.sass']
})
export class AlertsComponent implements OnInit {
  isShow: boolean = false
  message: Message;
  
  constructor( 
    private messagesService: MessagesService
    ) { }

  ngOnInit() {
    this.messagesService.getMessage().subscribe( 
      (msg: Message) => {
        this.message = msg;
        this.isShow = true;
        if (!msg.action) {
          setTimeout(() => this.isShow = false, 3000);
        }

      }
    )
  }

  confirmBtn() {
    this.isShow = false;
    this.messagesService.submit();
  }

  close() {
    this.isShow = false;
    this.messagesService.submit(false);
  }

}
