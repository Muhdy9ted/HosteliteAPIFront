import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Models/user.model';
import { map } from 'rxjs/operators';


// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json'
//   })
// };

const token =  JSON.parse(localStorage.getItem('token'));
const httpOptions = {
  headers: new HttpHeaders({
    Authorization: 'Bearer ' + token
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = environment.apiUrl;


  constructor(public http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + 'users', httpOptions);
  }

  getUser(id): Observable<User> {
    return this.http.get<User>(this.baseUrl + 'users/' + id, httpOptions);
  }
}
