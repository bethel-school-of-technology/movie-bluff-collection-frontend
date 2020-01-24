import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { MovieServiceClient } from 'src/app/services/movie.service.client';
import { Movie } from 'src/app/models/movies/movie';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/users/user';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-search-movies-list',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.css']
})
export class SearchMoviesComponent implements OnInit {
  apiRoot = 'http://localhost:3001';
  title: string;
  result: object;
  movie = new Movie;
  user: User;
  allowNull: false;
  // MatPaginator Inputs
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  // MatPaginator Output
  pageEvent: PageEvent;

 data = {}

  constructor(private http: HttpClient, private movieService: MovieServiceClient) { }
 
  
  searchMovie(title: string) {
    this.movieService.searchMovieByTitle(title)
      .subscribe((result) => {
        this.result = result;
        console.log(result);
      });
  }

  addWatched(movie) {
    console.log('watched');
    console.log('Id: ' + movie)
    let data = {
      imdbId: movie,
      ownedList: '',
      watchedList: true,
      wishList: '',
    };    // return this.http.get<Movie>(this.apiRoot + 'watched-movies');
    fetch('http://localhost:3001/watched-movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      credentials: 'include'
    })
      .then((response) => response.json())
      .then(() => {
        console.log('Success');
      })
      .catch((error) => {
        console.log('Error ', error);
      });

    // const url = `${this.apiRoot}/watched-movies`;
    // this.http.post(url, this.movie).subscribe( res => console.log(res.json()));
  }

  addWish(imdbId) {
    console.log('wish');
    // const url = `${this.apiRoot}/wish-list`;
    // this.http.post(url, this.movie).subscribe( res => console.log(res.json()));
  }

  addOwned(imdbId) {
    console.log('owned');
    // const url = `${this.apiRoot}/owned-movies`;
    // this.http.post(url, this.movie).subscribe(res => console.log(res.json()));
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  ngOnInit() {
  }
}