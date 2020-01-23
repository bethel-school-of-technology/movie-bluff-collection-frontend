import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/users/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  options = { withCredentials: true };

  url = 'http://localhost:3001/users/';

  loggedIn = false;

  signup(user: User): Observable<string> {
    console.log(user);
    return this.http.post<string>(this.url + 'signup', user, this.options);
  }

  login(user: User): Observable<string> {
    return this.http.post<string>(this.url + 'login', user, this.options);
  }

  admin(): Observable<User> {
    return this.http.get<User>(this.url + 'admin', this.options);
  }

//   getWatchedMovies(): Observable<User> {
//     return this.http.get<User>(this.url + "profile", this.options);
//   }

  logout(): Observable<string> {
    return this.http.get<string>(this.url + 'logout', this.options);
  }

  validateToken(): Observable<boolean> {
    return this.http.get<boolean>(this.url + 'validateToken', this.options);
  }
}
