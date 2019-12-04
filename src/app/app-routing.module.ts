import { NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';
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
  exports: [RouterModule]
})
export class AppRoutingModule { }
