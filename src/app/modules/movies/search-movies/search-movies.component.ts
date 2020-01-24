import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { MovieServiceClient } from 'src/app/services/movie.service.client';
import { Movie } from 'src/app/models/movies/movie';
import { HttpClientModule, HttpClient } from '@angular/common/http';
<<<<<<< HEAD
=======
import { User } from '../../../models/users/user';

>>>>>>> 740d0f3e28d3314976bf02b03f534464b17fc7f6

@Component({
  selector: 'app-search-movies-list',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.css']
})
export class SearchMoviesComponent implements OnInit {
  apiRoot = 'http://localhost:3001';
  title: string;
  result: object;
  movie: Movie;
  user: User;
  allowNull: false;
  data = {

    imdbId: 'string',
    userId: 'number',
    ownedList: '',
    watchedList: '',
    wishList: '',
  };

  constructor(private http: HttpClient, private movieService: MovieServiceClient) { }

  searchMovie(title: string) {
    this.movieService.searchMovieByTitle(title)
      .subscribe((result) => {
        this.result = result;
        console.log(result);
      });
  }
<<<<<<< HEAD

  addWatched(imdbId) {
    console.log('watched');

    fetch('http://localhost:3001/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.parse(this.movie.imdbId)
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success', data);
    })
    .catch((error) => {
      console.log('Error ', error);
    });

    this.movie.watchedList = true;
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
=======
>>>>>>> 740d0f3e28d3314976bf02b03f534464b17fc7f6

  addWatched(title, data) {
    console.log('watched');

    fetch('http://localhost:3001/watched-movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data, title),
      credentials: 'include'
    });
    // .subscribe(data => this.data = data);


    data.watchedList = true;
    console.log (data, title);
    // return (this.movie.value.WatchedListComponent);
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

  ngOnInit() {
  }
}