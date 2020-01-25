import { Component, OnInit } from '@angular/core';
import { MovieServiceClient } from 'src/app/services/movie.service.client';

@Component({
  selector: 'app-owned-list',
  templateUrl: './owned-list.component.html',
  styleUrls: ['./owned-list.component.css']
})
export class OwnedListComponent implements OnInit {
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
