import { Injectable, EventEmitter } from '@angular/core';
import { LoginDTO } from '../Models/login-dto.model';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { RegisterDto } from '../Models/register-dto.model';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../Models/user.model';
import { ResponseModel } from '../Models/response-model.model';
import { environment } from 'src/environments/environment';



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
  baseURL = environment.apiUrl + 'auth/';
  userToken: any;
  decodedToken: any;
  jwtHelper = new JwtHelperService();

  constructor(public http: HttpClient) { }

  register(user: User): Observable<User> {
    return this.http.post<User>(this.baseURL + 'register', user, httpOptions).pipe();
  }

  login(user?: User) {
    const loginCred = typeof user.Email === 'undefined' ? this.formDataLogin : user;
    return this.http.post(this.baseURL + 'login', loginCred, httpOptions).pipe(map((response: HttpResponse<any>) => {
      const userResponse = Object.entries(response);

      if (userResponse) {
        localStorage.setItem('token', JSON.stringify(userResponse[0][1]));
        this.userToken = JSON.stringify(userResponse[0][1]);
        this.decodedToken = this.jwtHelper.decodeToken(this.userToken);
        console.log(this.decodedToken);
        return this.userToken;
      }
    }), catchError(this.handleError));
  }

  loginModal() {
    return  this.http.post(this.baseURL + 'login', this.formDataLogin, httpOptions).pipe(map((response: HttpResponse<any>) => {
      console.log(response);
      const userResponse = Object.entries(response);
      if (userResponse) {
        localStorage.setItem('token', JSON.stringify(userResponse[0][1]));
        this.userToken = JSON.stringify(userResponse[0][1]);
        console.log(this.decodedToken);
        return this.userToken;
      }
      // if (response.state === 1) {
      //   localStorage.setItem('token', JSON.stringify(response.data));
      //   this.userToken = JSON.stringify(response.data);
      //   return this.userToken;
      // } else {
      //   return response;
      // }
    }));
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return this.jwtHelper.isTokenExpired(token);
  }

  private handleError(error: any) {
    const applicationError = error.headers.get('Application-Error');
    if (applicationError) {
      return throwError(applicationError);
    }
    const serverError = error;
    let modelStateErrors = '';
    if (serverError) {
      for ( const key in serverError.error) {
        if (serverError.error[key]) {
          modelStateErrors += 'catch error' + serverError.error[key] + '\n';
        }
      }
    }
    return throwError( modelStateErrors || 'Server error');
  }
}
