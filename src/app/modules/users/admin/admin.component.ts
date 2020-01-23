import { User } from '../../../models/users/user';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
//   // user: User = new User();

//   constructor(private userService: UserService, private router: Router) { }

//   admin(): void {
//     this.userService.admin(this.user).subscribe(() => {
//       // this.userService.getUserMovies().subscribe(() => {
//       // user logged in
//       this.userService.loggedIn = true;
//       this.router.navigate(['/admin']);
//     });
//   }
// }


// <script>
// function onDelete() {
//     $.ajax({
//         url: '/users/{{UserId}}/delete',
//         method: 'DELETE', complete: () => window.location = "/posts"
//     })
// }
// <button class="delete" title="delete post" (click)="onDelete(post)">Delete</button>
// </div>

ngOnInit() {
  // find the profile for the current user based on their token
  // this.userService.getProfile().subscribe(user => (this.user = user));
}
// }
//     this.userService.admin().subscribe(
//       data => {
//         this.content = data;
//       },
//       err => {
//         this.content = JSON.parse(err.error).message;
//       }
//     );
//   }
}
