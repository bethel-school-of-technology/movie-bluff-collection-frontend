import { Component, OnInit } from '@angular/core';
import { MovieServiceClient } from 'src/app/services/movie.service.client';
import { Http } from '@angular/http';

@Component({
  selector: 'app-search-movies-list',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.css']
})
export class SearchMoviesComponent implements OnInit {
  apiRoot = 'http://localhost:3001'
  title: string;
  result: object;
  movie: Movie[]; 

  constructor(private movieService: MovieServiceClient, private http: Http) { }
  
  searchMovie(title: string) {
    this.movieService.searchMovieByTitle(title)
    .subscribe( (result) =>  {
      this.result = result;
      console.log(result);
    });
  }
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
