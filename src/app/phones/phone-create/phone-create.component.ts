import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormBuilder,
  FormGroup,
  FormControl
} from '@angular/forms';
import { DataService } from './../../shared/services/data.service';
import { MessagesService } from './../../shared/services/messages.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-phone-create',
  templateUrl: './phone-create.component.html',
  styleUrls: ['./phone-create.component.sass']
})
export class PhoneCreateComponent implements OnInit {
  createForm: FormGroup;
  public editInProgress = false;

  constructor( 
    private fb: FormBuilder,
    private dataService: DataService,
    private msgService: MessagesService,
    private router: Router

    ) { }

  ngOnInit() {
    this.formBuild();
  }
  formBuild() {
    this.createForm = this.fb.group({
      urlImg: ['https://img.mvideo.ru/Pdb/30031761b.jpg', [
        Validators.required,
      ]],
      nameProduct: ['Nokia',[
          Validators.required,
      ]],
      descProduct: ['Description cellphoe ',[
        Validators.required,
      ]]
    });

    this.createForm.valueChanges.subscribe( x => {
      console.log(x);
      this.editInProgress = true;    
    });
  }
  
  createPhone() {
    this.editInProgress = false;  
     
    const phone = {
      id:  this.dataService.phonesData.length+1,
      name: this.createForm.get('nameProduct').value,
      photo: this.createForm.get('urlImg').value,
      description: this.createForm.get('descProduct').value,
      qty:1
    }
    
    this.dataService.createPhone(phone).subscribe( data => {
      console.log(data);
      console.log(this.dataService.phonesData);

      this.msgService.setMessage({
        type: 'success',
        body: 'Вы удачно добавили новый товар'
      })
      setTimeout(() => {
        this.router.navigate(['/phones']);
      }, 3000);


    })

    
  }

}
