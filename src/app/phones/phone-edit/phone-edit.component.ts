import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DataService } from './../../shared/services/data.service';
import { Phone } from './../../shared/model/phone';
import { MessagesService } from './../../shared/services/messages.service';
@Component({
  selector: 'app-phone-edit',
  templateUrl: './phone-edit.component.html',
  styleUrls: ['./phone-edit.component.sass']
})
export class PhoneEditComponent implements OnInit {
  idPhoneEdit: number;
  phone: Phone;
  public editInProgress = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
    private msgService: MessagesService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe( (params: ParamMap) => {
      this.idPhoneEdit = +params.get('id')
      this.dataService.getSinglePhone(this.idPhoneEdit).subscribe( data => {
        this.phone = data;
        this.editInProgress = true;
      })
    })  
  }

  upDatePhone() {
    this.editInProgress = false;
    console.log(this.phone);
    this.dataService.upDateDataPhone(this.phone).subscribe( 
      () => {
        this.msgService.setMessage({
          type: 'success',
          body: 'Пользователь успешно отредактирован.'
        });
        setTimeout( () =>{ this.router.navigate(['/phones'])}, 3000)
    
      }      
    )
    

  }

}



