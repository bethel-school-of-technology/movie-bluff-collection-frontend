import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';

import { MovieServiceClient } from 'src/app/services/movie.service.client';
import { User } from '../../models/users/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {
  user: User[];
  apiRoot = 'http://localhost:3001/users';


  constructor(private http: HttpClient, private movieService: MovieServiceClient) { }

  addUser(form: NgForm, user: User): Observable<User> {
    const url = `${this.apiRoot}/post`;
    const data = { firstName: '', lastName: '', email: '', password: '' };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token'
      })
    };

    if (form.invalid) {
      return;
    }
    // Using fetch() to handle POST
    fetch('https://localhost:3001/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success', data);
      })
      .catch((error) => {
        console.log('Error: ', error);
      });

    // Using hero method to POST
    // return this.http.post<User>(this.apiRoot, user, httpOptions)
    // .pipe(
    // catchError(this.handleError)
    // )

    // Using Http.headers() to POST
    // this.http.post<User>(url, user).subscribe(res => console.log(res.json()));
  }

  ngOnInit() { }

}
