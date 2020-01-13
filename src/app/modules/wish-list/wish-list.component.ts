import { Component, OnInit } from '@angular/core';
import { MovieServiceClient } from 'src/app/services/movie.service.client';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {
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
