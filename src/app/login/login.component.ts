import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { AuthService } from '../auth.service';
=======
>>>>>>> 5b86c58681ce3e88e2bafa281b9be84e75745e42

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

<<<<<<< HEAD
  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder ) { }

  loginForm: FormGroup;
  isSubmitted = false;

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get formControls() { return this.loginForm.controls; }

  login() {
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.authService.login(this.loginForm.value);
    this.router.navigateByUrl('/admin');
  }
=======
  constructor() { }

  ngOnInit() {
  }

>>>>>>> 5b86c58681ce3e88e2bafa281b9be84e75745e42
}
