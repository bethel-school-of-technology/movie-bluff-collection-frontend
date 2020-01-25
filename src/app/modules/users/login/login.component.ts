

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { UserService } from 'src/app/services/user.service';
import { User } from '../../../models/users/user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  user: User;
  public error: string;


  constructor(private http: HttpClient, private userService: UserService, private router: Router) {}

  login(form: NgForm) {
    if (form.invalid) {
      return;
    }

    fetch('http://localhost:3001/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form.value),
      credentials: 'include'
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success', data);
        this.router.navigate(['/search-movies']);

      })
      .catch((error) => {
        console.log('Error: ', error);
        this.error = 'Sorry wrong password';
      });
  }

  ngOnInit() {}

  }

