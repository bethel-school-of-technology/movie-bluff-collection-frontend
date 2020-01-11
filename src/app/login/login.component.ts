import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { LoginService } from '../login/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: User;
  loginService: LoginService;


  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    ) { }

  loginForm: FormGroup;

  ngOnInit() {}

  login(form: NgForm, user: User): Observable<User> {
    if (form.invalid) {
      return;
    }
    console.log(form.value.email);
    form.resetForm();

    if (status === '200' && form.valid) {
      this.loginService.login(user).subscribe();
    }
  }
}
