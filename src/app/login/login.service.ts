import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Subject, Observable, throwError } from 'rxjs';

import { User } from '../user.model';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private users: User;
  private usersUpdated = new Subject<User[]>();

  constructor(private http: HttpClient) { }

 // POST: add new user to database
  addUser(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:3100/users/id', user)
      .pipe(
        catchError(this.handleError)
      );
}

  // GET: get user from database
  login(user: User): Observable<User> {
    if (status === '202') {
    return this.http.post<User>('http://localhost:3100/users/id', user)
      .pipe(
        catchError(this.handleError)
      );
  }
}

  // Error Handling
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log('an error occurred', error.error.message);
    } else {
      console.log(`${error.status}` + `${error.error}`);
    }
    return throwError(
      'Something went wrong'
    );
  }
}
