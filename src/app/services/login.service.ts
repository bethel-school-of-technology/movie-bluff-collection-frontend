import { Injectable } from '@angular/core';

import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  login: Login[] = [
    {
      id: 0,
      email: 'johnsmith@gmail.com',
      password: 'password'
    }
  ];
    constructor() { }
}
