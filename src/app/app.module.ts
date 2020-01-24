import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import {
  MatToolbarModule,
  MatInputModule,
  MatExpansionModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatCheckboxModule,
  MatProgressSpinnerModule,
  MatTabsModule,
  MatSidenavModule
} from '@angular/material';
// import {FlexLayoutModule} from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/users/login/login.component';
import { SignupComponent } from './modules/users/signup/signup.component';
import { HomepageComponent } from './modules/movies/homepage/homepage.component';
import { AdminComponent } from './modules/users/admin/admin.component';
import { MovieServiceClient } from './services/movie.service.client';
import { WatchedListComponent } from './modules/movies/watched-list/watched-list.component';
import { OwnedListComponent } from './modules/movies/owned-list/owned-list.component';
import { WishListComponent } from './modules/movies/wish-list/wish-list.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SearchMoviesComponent } from './modules/movies/search-movies/search-movies.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    AdminComponent,
    WatchedListComponent,
    OwnedListComponent,
    WishListComponent,
    HomepageComponent,
    SearchMoviesComponent,
  ],
  imports: [
    BrowserModule,
    // HttpModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatExpansionModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatSidenavModule
  ],
  providers: [MovieServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
