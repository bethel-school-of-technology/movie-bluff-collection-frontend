import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { }

  signUpForm: FormGroup;
  isSubmitted = false;

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  get formControls() { return this.signUpForm.controls; }

  submit() {
    console.log('It is working');
    this.isSubmitted = true;
    if (this.signUpForm.invalid) {
      return;
    }
    this.router.navigateByUrl('/movies');
    this.authService.login(this.signUpForm.value);
  }
}
