import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';

import { UserService } from '../../../services/user.service';
import { User } from '../../../models/users/user';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  user: User[];
  // apiRoot = 'http://localhost:3001/users';


  constructor(private http: HttpClient, private userService: UserService, private router: Router) { }

  addUser(form: NgForm, user: User): Observable<User> {
    const url = `${this.userService}/post`;
    const data = {
      firstName: form.value.firstName, lastName: form.value.lastName,
      email: form.value.email, password: form.value.password
    };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    if (form.invalid) {
      return;
    }
    // Using fetch() to handle POST
    fetch('http://localhost:3001/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success', data);
      })
      .catch((error) => {
        console.log('Error: ', error);
      });
      // .map((response: Response) => {
      //   if (response.status < 200 || response.status >= 300) {
      //     throw new Error("Email already exists");
      //   }

      //   else {
      //     //successfull logic here
      //   })
    this.router.navigate(['/login']);

  }

  ngOnInit() { }

}
