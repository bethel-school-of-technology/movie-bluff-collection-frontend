import { Component, OnInit } from '@angular/core';
import { MovieServiceClient } from 'src/app/services/movie.service.client';
import { HttpClient } from '@angular/common/http';

import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Movie } from '../../models/movies/movie';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {
  apiRoot = 'http://localhost:3001/users';
  title: string;
  result: object;
  movie: Movie[];

  searchMovie(title: string) {
    this.movieService.searchMovieByTitle(title)
    .subscribe( (result) =>  {
      this.result = result;
      console.log(result);
    });
  }
  constructor(private movieService: MovieServiceClient, private http: Http) { }

  addWatched() {
    console.log('button pushed');
    const url = `${this.apiRoot}/watched-movies`;
    this.http.post(url, this.movie).subscribe( res => console.log(res.json()));
}

addWish() {
  console.log('wish');
  const url = `${this.apiRoot}/wish-list`;
  this.http.post(url, this.movie).subscribe( res => console.log(res.json()));
}

addOwned() {
  console.log('owned');
  const url = `${this.apiRoot}/owned-movies`;
  this.http.post(url, this.movie).subscribe(res => console.log(res.json()));
}

  ngOnInit() {
  }

}
