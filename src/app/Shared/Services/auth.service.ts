import { Injectable, EventEmitter } from '@angular/core';
import { LoginDTO } from '../Models/login-dto.model';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { RegisterDto } from '../Models/register-dto.model';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../Models/user.model';



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

  register(user: User): Observable<User> {
    return this.http.post<User>(this.baseURL + '/register', user, httpOptions).pipe(catchError(this.handleError));
  }

  login(user?: User) {
    const loginCred = typeof user.email === 'undefined' ? this.formDataLogin : user;
    return this.http.post(this.baseURL + '/login', loginCred, httpOptions).pipe(map((response: HttpResponse<any>) => {
      const userResponse = Object.entries(response);

      if (userResponse) {
        localStorage.setItem('token', JSON.stringify(userResponse[0][1]));
        this.userToken = JSON.stringify(userResponse[0][1]);
        console.log(this.decodedToken);
        return this.userToken;
      }
    }), catchError(this.handleError));
  }

  loginModal() {
    return this.http.post(this.baseURL + '/login', this.formDataLogin, httpOptions).pipe(map((response: HttpResponse<any>) => {
      const userResponse = Object.entries(response);
      if (userResponse) {
        localStorage.setItem('token', JSON.stringify(userResponse[0][1]));
        this.userToken = JSON.stringify(userResponse[0][1]);
        console.log(this.decodedToken);
        return this.userToken;
      }
    }), catchError(this.handleError));
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return this.helper.isTokenExpired(token);
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
          modelStateErrors += serverError.error[key] + '\n';
        }
      }
    }
    return throwError( modelStateErrors || 'Server error');
  }

}
