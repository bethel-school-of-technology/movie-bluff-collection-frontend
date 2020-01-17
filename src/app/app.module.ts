import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MatToolbarModule,
      MatInputModule,
      MatExpansionModule,
      MatIconModule,
      MatCardModule,
      MatButtonModule,
      MatCheckboxModule,
      MatProgressSpinnerModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MovieServiceClient } from './services/movie.service.client';
import { WatchedListComponent } from './modules/watched-list/watched-list.component';
import { OwnedListComponent } from './modules/owned-list/owned-list.component';
import { WishListComponent } from './modules/wish-list/wish-list.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SignUpComponent } from './modules/sign-up/sign-up.component';
import { LoginComponent } from './modules/login/login.component';
import { HeaderComponent } from './modules/header/header.component';
import { HomepageComponent } from './modules/homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    WatchedListComponent,
    OwnedListComponent,
    WishListComponent,
    SignUpComponent,
    LoginComponent,
    HeaderComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
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
    MatProgressSpinnerModule
  ],
  providers: [MovieServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
