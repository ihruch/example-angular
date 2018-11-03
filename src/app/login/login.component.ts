import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormBuilder,
  FormGroup,
  FormControl
} from '@angular/forms';

import { AuthService } from './../shared/services/auth.service';
import { Router } from '@angular/router';
import { MessagesService } from './../shared/services/messages.service'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  logForm: FormGroup;
  emailPattern = '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$';

  formErrors = {
    emailField: '',
    passField: '',
  };

  validationMessages = {
    emailField: {
      required: 'Поле email должно быть заполенено',
      pattern: 'Некорректно введе email'
    },
    passField: {
      required: 'Поле email должно быть заполенено',
      minlength: `Пароль слишком коротки. Мин. длинна 5  символа`,
      maxlength: 'Пароль слишком длинный. Макс длинна 10 символов'
    }
  };
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private messagesService: MessagesService
    ){ }

  ngOnInit() {
    this.formBuild();

  }

  formBuild() {
    this.logForm = this.fb.group({
      emailField: ['admin@gmail.com', [
        Validators.required,
        Validators.pattern(this.emailPattern)
      ]],
      passField: ['admin',[
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(10)
      ]]
    });
    this.logForm.valueChanges.subscribe( x => {
      this.changesValueField();
      console.log(this.logForm.valid);
    });
  }

  changesValueField(){
   
    for (const item in this.formErrors) {
      this.formErrors[item] = '';
      const control = this.logForm.get(item);

      if (control && control.dirty && !control.valid) {
        const message = this.validationMessages[item];
        for (const key in control.errors) {
          console.log('control.error', control.errors);
          this.formErrors[item] += message[key] + ' ';
        }
      }
    }
  }

  sendData() {
    console.log(this.logForm.value);
    this.authService.login(this.logForm.value.emailField, this.logForm.value.passField)
      .subscribe(
        () => { 
          this.messagesService.setMessage({
            type: 'success',
            body: 'Вы удачно вошли в систему!'
          });
          setTimeout( () => {this.router.navigate(['/phones'])}, 3000)
          
        },

        (err) => { 
          console.log(err)
          this.messagesService.setMessage({
            type: 'warning',
            body: err.error.error
          });
      }
    )

  }
}
