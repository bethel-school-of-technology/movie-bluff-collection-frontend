import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD

import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AdminComponent } from './admin/admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'homepage', component: HomepageComponent},
  { path: 'movies', component: MoviesComponent},
  { path: '', redirectTo: '/homepage', pathMatch: 'full'},
  // { path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
=======
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
{path: 'signup', component: SignupComponent},
{path: 'login', component: LoginComponent},
{path: '', redirectTo: '', pathMatch: 'full'},
{path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
>>>>>>> 5b86c58681ce3e88e2bafa281b9be84e75745e42
  exports: [RouterModule]
})
export class AppRoutingModule {}
