import { Injectable, EventEmitter } from '@angular/core';
import { LoginDTO } from '../Models/login-dto.model';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { RegisterDto } from '../Models/register-dto.model';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  formDataRegister: RegisterDto = new RegisterDto();
  formDataLogin: LoginDTO = new LoginDTO();
  baseURL = 'http://localhost:50099/api/auth';
  userToken: any;
  decodedToken: any;
  helper = new JwtHelperService();

  constructor(private http: HttpClient) { }

  register() {
    return this.http.post(this.baseURL + '/register', this.formDataRegister, httpOptions).pipe(catchError(this.handleError));
  }

  private handleError(error: any) {
    const applicationError = error.HttpHeaders.get('Application-error');
    if (applicationError) {
      return throwError(applicationError);
    }
    const serverError = error.json();
    let modelStateErrors = '';
    if (serverError) {
      for ( const key in serverError) {
        if (serverError[key]) {
          modelStateErrors += serverError[key] + '\n';
        }
      }
    }
    return throwError( modelStateErrors || 'Server error');
  }

  login() {
    return this.http.post(this.baseURL + '/login', this.formDataLogin, httpOptions).pipe(map((response: HttpResponse<any>) => {
      const userResponse = Object.entries(response);

      if (userResponse) {
        localStorage.setItem('token', JSON.stringify(userResponse[0][1]));
        this.userToken = JSON.stringify(userResponse[0][1]);
        console.log(this.decodedToken);
        return this.userToken;
      }
    } ));
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return this.helper.isTokenExpired(token);
  }
}
