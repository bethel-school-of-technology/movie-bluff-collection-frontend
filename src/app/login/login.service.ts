import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { User } from '../user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private users: User[] = [];
  private usersUpdated = new Subject<User[]>();

getUsers() {
  return [...this.users];
}

// addUser(email: string, password: string) {
//   const user: User = {id, email};
//   this.users.push(user);
// }

}
