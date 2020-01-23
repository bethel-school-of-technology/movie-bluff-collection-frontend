// import { Component, OnInit } from '@angular/core';
// import { UserService } from './services/user.service';


// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })

// export class AppComponent implements OnInit {
//   constructor(private userService: UserService) {}
//   title = 'Movie Buff Collection'; // do we need this?
//   ngOnInit() {
//     this.userService.validateToken().subscribe(response => {
//       console.log(response);
//       this.userService.loggedIn = response;
//     });
//   }

// }


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Movie Buff Collection';
}
