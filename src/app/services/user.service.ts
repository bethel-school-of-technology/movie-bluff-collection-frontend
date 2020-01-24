import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/users/user';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private  usersUrl = 'http://localhost:3001/users/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  options = { withCredentials: true };


  loggedIn = false;

  signup(user: User): Observable<string> {
    console.log(user);
    return this.http.post<string>(this.usersUrl + 'signup', user, this.options);
  }

  login(user: User): Observable<string> {
    return this.http.post<string>(this.usersUrl + 'login', user, this.options);
  }

  admin(): Observable<User> {
    return this.http.get<User>(this.usersUrl + 'admin', this.options);
  }

  logout(): Observable<string> {
    return this.http.get<string>(this.usersUrl + 'logout', this.options);
  }

  validateToken(): Observable<boolean> {
    return this.http.get<boolean>(this.usersUrl + 'validateToken', this.options);
  }
}
