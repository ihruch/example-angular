import { Component, OnInit } from '@angular/core';
import { DataService } from './../../shared/services/data.service';
import { Phone } from './../../shared/model/phone';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.sass']
})
export class PhoneListComponent implements OnInit {
  list: Phone[];
  constructor(
    private dataService: DataService,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe( data => {
      console.log('DATA', data);
      this.list = data.phones;
    })
    // this.dataService.getPhonesList().subscribe( (list: Phone[]) => {
    //   console.log('DATA', list);
    //   this.list = list;
    // }); 
  }

}
