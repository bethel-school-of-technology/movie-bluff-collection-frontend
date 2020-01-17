import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  constructor(private http: HttpClient, private movieService: MovieServiceClient) { }

  addUser(form: NgForm, user: User): Observable<User> {
    if (form.invalid) {
      return;
    }
    return this.http.post<User>('http://localhost:3100', user);
  }

  ngOnInit() {}

}
