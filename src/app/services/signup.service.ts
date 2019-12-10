import { Injectable } from '@angular/core';

import { Signup } from '../models/signup';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  signup: Signup[] = [
    {
      id: 0,
      name: 'John Smith',
      email: 'johnsmith@gmail.com',
      password: 'password'
    }
  ];

  constructor() { }
}
