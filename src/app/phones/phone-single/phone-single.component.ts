import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { DataService } from './../../shared/services/data.service';

@Component({
  selector: 'app-phone-single',
  templateUrl: './phone-single.component.html',
  styleUrls: ['./phone-single.component.sass']
})
export class PhoneSingleComponent implements OnInit {
  singlePhone: {};
  idPhone: number;
  constructor(
    private router: Router,
    private activateRouter: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.activateRouter.paramMap.subscribe( (params: ParamMap) => {
      const id = +params.get('id');
       this.idPhone = id;    
      this.dataService.getSinglePhone(id).subscribe( singlePhone => {
        this.singlePhone = singlePhone;
      })
    })
  }

  editBtn(){
     this.router.navigate([`/phones/${this.idPhone}/edit`])
  }

  deleteBtn(){
    
  }

}
