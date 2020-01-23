// import { Component, OnInit } from '@angular/core';
// import { User } from '../../../models/users/user';
// import { UserService } from './../../../user.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-signup',
//   templateUrl: './signup.component.html',
//   styleUrls: ['./signup.component.css']
// })
// export class SignupComponent implements OnInit {
//   user: User;
//   //  = new User();

//   constructor(private userService: UserService, private router: Router) {}

//   signup(): void {
//     this.userService.signup(this.user).subscribe(() => {
//       // user registered, redirect to the login page
//       this.router.navigate(['/login']);
//     });
//   }
//   ngOnInit() {
//   }

// }
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';

import { MovieServiceClient } from 'src/app/services/movie.service.client';
import { User } from '../../../models/users/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  user: User[];
  apiRoot = 'http://localhost:3001/users';


  constructor(private http: HttpClient, private movieService: MovieServiceClient) { }

  addUser(form: NgForm, user: User): Observable<User> {
    const url = `${this.apiRoot}/post`;
    // console.log()
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
