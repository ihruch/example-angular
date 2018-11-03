import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-phone-item',
  templateUrl: './phone-item.component.html',
  styleUrls: ['./phone-item.component.sass']
})
export class PhoneItemComponent implements OnInit {
  @Input() phone: {};
  constructor(private router: Router) { }

  ngOnInit() {
  }

  showSingleCart(){
    this.router.navigate( ['/phones', this.phone['id'] );
  }
}
