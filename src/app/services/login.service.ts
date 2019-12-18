import { Injectable } from '@angular/core';

import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  login: Login[] = [
    {

      email: 'johnsmith@gmail.com',
      password: 'password'
    }
  ];
    constructor() { }
}
