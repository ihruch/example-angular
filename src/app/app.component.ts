import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  links: object[] = [
    {
      path: '/phones',
      label: 'Каталог телефонов',
      active: 'button-active',
     
    },
    {
      path: '/about',
      label: 'о нас',
      active: 'button-active',
     
    }
  ];
  constructor( 
    private authService: AuthService,
    private router: Router
    ){}

  get isLoggedIn() {
    return this.authService.isLoggedIn();
  }
  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
