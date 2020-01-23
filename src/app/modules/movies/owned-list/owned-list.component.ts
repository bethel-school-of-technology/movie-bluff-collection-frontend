import { Component, OnInit } from '@angular/core';
import { MovieServiceClient } from 'src/app/services/movie.service.client';

@Component({
  selector: 'app-owned-list',
  templateUrl: './owned-list.component.html',
  styleUrls: ['./owned-list.component.css']
})
export class OwnedListComponent implements OnInit {
  title: string;
  result: object;
  searchMovie(title: string) {
    this.movieService.searchMovieByTitle(title)
      .subscribe((result) => {
        this.result = result;
        console.log(result);
      });

    fetch('http://localhost:3001/owned-movies', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include'
    });
  }



  constructor(private movieService: MovieServiceClient) { }


  ngOnInit() {
    //   }
    //   this.courses$ = this.http
    //   .request(
    //       "GET",
    //       "/courses.json",
    //       {
    //           responseType:"json",
    //           params
    //       })
    //   .do(console.log)
    //   .map(data => _.values(data));
  }
}
