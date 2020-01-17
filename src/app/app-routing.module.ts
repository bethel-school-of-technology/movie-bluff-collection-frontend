import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import {WatchedListComponent} from './modules/watched-list/watched-list.component';
import {OwnedListComponent} from './modules/owned-list/owned-list.component';
import {WishListComponent} from './modules/wish-list/wish-list.component';
import {SignUpComponent} from './modules/sign-up/sign-up.component';
import {LoginComponent} from './modules/login/login.component';
import { HomepageComponent } from './modules/homepage/homepage.component';

const routes: Routes = [
  {
    path: 'watched-list',
    component: WatchedListComponent
  },
  {
    path: 'owned-list',
    component: OwnedListComponent
  },
  { path: 'wish-list',
    component: WishListComponent
  },
  { path: 'sign-up',
    component: SignUpComponent
  },
  { path: 'login',
    component: LoginComponent
  },
  { path: 'home',
    component: HomepageComponent
  },
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
