import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {retry, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'https://reqres.in/api';
  loggedIn = false;

  constructor(private http: HttpClient) { 
    this.loggedIn = !!localStorage.getItem('auth_token');
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  login(email: string, password: string){
    return this.http.post(`${this.url}/login`, {email, password}).pipe(
      retry(2),
      tap( res => {
        if (res['token']) {
          localStorage.setItem('auth_token', res['token']);
          this.loggedIn = true;
        }
      })
    )
  }
  
  logout() {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
  }
}

