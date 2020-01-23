import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '../modules/users/login/login.component';
import { SignupComponent } from '../modules/users/signup/signup.component';
import { AdminComponent } from '../modules/users/admin/admin.component';
import { WatchedListComponent } from '../modules/movies/watched-list/watched-list.component';
import { OwnedListComponent } from '../modules/movies/owned-list/owned-list.component';
import { WishListComponent } from '../modules/movies/wish-list/wish-list.component';
import { HomepageComponent } from '../modules/movies/homepage/homepage.component';
import { SearchMoviesComponent } from './../modules/movies/search-movies/search-movies.component';

const routes: Routes = [

  {
    path: '', redirectTo: '/home',
    pathMatch: 'full'
  },

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'search-movies',
    component: SearchMoviesComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },

  {
    path: 'watched-list',
    component: WatchedListComponent
  },
  {
    path: 'owned-list',
    component: OwnedListComponent
  },
  {
    path: 'wish-list',
    component: WishListComponent
  },
  {
    path: 'home',
    component: HomepageComponent
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
