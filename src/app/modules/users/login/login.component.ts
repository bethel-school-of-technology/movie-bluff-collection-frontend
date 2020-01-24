import { RouterModule } from '@angular/router';
// import { Component, OnInit } from '@angular/core';
// import { User } from '../../../models/users/user';
// import { UserService } from './../../../user.service';
// import { Router } from '@angular/router';
// // import { movieService } from './../../../movie.service.client';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
// //   user: User = new User();
// //   constructor(private userService: UserService, private router: Router) {}

// //   login(): void {
// //     this.userService.loginUser(this.user).subscribe(() => {
// //       // this.movieService.getUserMovies().subscribe(() => { // ?
// //         // user logged in
// //         this.userService.loggedIn = true;
// //         // send to the search page?
// //         this.router.navigate(['/userMovies']);
// //         this.router.navigate(['/search']);
// //         this.router.navigate(['/watched-list']);
// //       });
// //     });
// //   }

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
        if (status === '200') { this.router.navigate(['/search-movies']); }
       // how do you get the status for it to work?);

      })
      .catch((error) => {
        console.log('Error: ', error);
        this.error = 'Sorry wrong password';
      });
  }

  ngOnInit() {}

  }

