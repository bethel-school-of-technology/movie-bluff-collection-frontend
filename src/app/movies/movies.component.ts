import { Component, OnInit, OnDestroy} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, OnDestroy {
  private moviesRoute = 'http://localhost:3000/movies';
  public movies: Movie[];
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private http: HttpClient, private dataService: DataService) { }

  getMovies() {
    this.http.get<Movie[]>(this.moviesRoute).subscribe(movies => {
      this.movies = movies;
      console.log('Movies', this.movies);
    });
    // this.dataService.sendGetRequest().pipe(takeUntil(this.destroy$)).subscribe((data: any[]) => {
    //   console.log(data);
    //   this.movies = data;
    // });
  }
  ngOnInit() {
    this.getMovies();
    }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}

