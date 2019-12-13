import { MoviesOwnedComponent } from './movies-owned/movies-owned.component';
import { MoviesOwned } from './models/movies-owned';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'movies-owned', component: MoviesOwnedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
