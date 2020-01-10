import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: User[] = [];
  @Output() dataPath: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    ) { }

  loginForm: FormGroup;
  isSubmitted = false;

  ngOnInit() {
    this.http.get<User[]>('http://localhost:3100/users').subscribe(users => {
      this.users = users;
    });
  }

  login(form: NgForm, user: User) {
    if (form.invalid) {
      return;
    }
    console.log(form.value.email);

    form.resetForm();
    return this.http.get<User>('http://localhost:3100/users/login');
  }
}
