import { Component, OnInit } from '@angular/core';
import { MovieServiceClient } from 'src/app/services/movie.service.client';

@Component({
  selector: 'app-watched-list',
  templateUrl: './watched-list.component.html',
  styleUrls: ['./watched-list.component.css']
})
export class WatchedListComponent implements OnInit {
  title: String;
  result: Object;
  searchMovie(title: String) {
    this.movieService.searchMovieByTitle(title)
    .subscribe( (result) =>  {
      this.result = result;
      console.log(result);
    });
  }
  constructor(private movieService: MovieServiceClient) { }

  ngOnInit() {
  }
}
