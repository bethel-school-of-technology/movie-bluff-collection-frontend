import { Component, OnInit, Output } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { AuthService } from '../auth.service';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LoginService } from '../login/login.service';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  users: User;
  loginService: LoginService;
  constructor(private http: HttpClient, private authService: AuthService,
              private router: Router, private formBuilder: FormBuilder) { }

  signUpForm: FormGroup;

  ngOnInit() {}

  addUser(form: NgForm, user: User): Observable<User> {
    if (form.invalid) {
      return;
    }
    console.log(form.value.email);
    form.resetForm();

    this.loginService.addUser(user).subscribe();
  }
}
