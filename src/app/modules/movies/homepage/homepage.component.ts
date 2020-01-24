import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  title = 'Movie Buff Collection';

  constructor(private userService: UserService, private router: Router) { }
  logout() {
    this.userService.logout().subscribe(response => {
      this.userService.loggedIn = false;
      console.log('logging out');
      this.router.navigate(['/home']);
    });
    return false;
  }

  ngOnInit() {
  }

}
