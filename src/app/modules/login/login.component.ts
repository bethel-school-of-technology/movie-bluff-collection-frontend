import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { MovieServiceClient } from 'src/app/services/movie.service.client';
import { User } from '../../models/users/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  user: User;


  constructor(private http: HttpClient, private movieService: MovieServiceClient) {}

  login(form: NgForm) {
    if (form.invalid) {
      return;
    }
    return this.http.get<User>('http://localhost:3001/user/login');

  }

  ngOnInit() {}

  }
