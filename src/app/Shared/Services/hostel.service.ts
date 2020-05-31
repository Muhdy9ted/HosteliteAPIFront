import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hostel } from '../Models/hostel.model';
import { environment } from 'src/environments/environment';
import { tokenGetter } from 'src/app/app.module';

// const token =  JSON.parse(localStorage.getItem('token'));
// const httpOptions = {
//   headers: new HttpHeaders({
//     Authorization: 'Bearer ' + token
//   })
// };

@Injectable({
  providedIn: 'root'
})
export class HostelService {

  baseUrl = environment.apiUrl ;

  constructor(private http: HttpClient) { }

  getHostels(): Observable<Hostel[]> {
    return this.http.get<Hostel[]>(this.baseUrl + 'hostels');
  }

  getHostel(id): Observable<Hostel> {
    return this.http.get<Hostel>(this.baseUrl + 'hostels/' + id);
  }
}
