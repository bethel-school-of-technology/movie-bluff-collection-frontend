import { MoviesOwnedService } from './services/movies-owned.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesOwnedComponent } from './movies-owned/movies-owned.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesOwnedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MoviesOwnedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
