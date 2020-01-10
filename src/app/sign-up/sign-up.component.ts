import { Component, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  users: User[] = [];
  @Output() dataPath: string;

  constructor(private http: HttpClient, private authService: AuthService,
              private router: Router, private formBuilder: FormBuilder) { }

  signUpForm: FormGroup;
  isSubmitted = false;

  ngOnInit() {
    this.http.get<User[]>('http://localhost:3100/users').subscribe(users => {
      this.users = users;
    });
  }

  addUser(form: NgForm, user: User): Observable<User> {
    if (form.invalid) {
      return;
    }
    console.log(form.value.email);

    form.resetForm();
    return this.http.post<User>('http://localhost:3100/users/signup', user);
  }

}
