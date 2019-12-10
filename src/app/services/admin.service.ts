import { Injectable } from '@angular/core';

import { Admin } from '../models/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  admin: Admin[] = [
    {
      id: 0,
      email: 'johnsmith@gmail.com',
      password: 'password'
    }
  ];
    constructor() { }
}
