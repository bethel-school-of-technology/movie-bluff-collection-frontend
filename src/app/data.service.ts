import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Movie } from './movie';

// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type':  'application/json',
//     'Authorization': 'my-auth-token'
//   })
// };
// httpOptions.headers =
//   httpOptions.headers.set('Authorization', 'my-new-auth-token');

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private wishListsUrl = 'http://localhost:3001/wish-list';
  private ownedMoviesUrl = 'http://localhost:3001/owned-movies';
  private watchedMoviesUrl = 'http://localhost:3001/watched-movies:';


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.wishListsUrl),
      this.http.get<Movie[]>(this.ownedMoviesUrl),
      this.http.get<Movie[]>(this.watchedMoviesUrl)
        .pipe(
          tap(_ => console.log('fetched movies')),
          catchError(this.handleError<Movie[]>('getMovies', []))
        );
  }

  getMovieNo404<Data>(imdbId: string): Observable<Movie> {
    const url = `${this.moviesUrl}/?id=${imdbId}`;
    return this.http.get<Movie[]>(url)
      .pipe(
        map(movies => movies[0]),
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          console.log(`${outcome} movie imdbId=${imdbId}`);
        }),
        catchError(this.handleError<Movie>(`getMovie imdbId=${imdbId}`))
      );
  }

  getMovie(imdbId: string): Observable<Movie> {
    const url = `${this.moviesUrl}/${imdbId}`;
    return this.http.get<Movie>(url).pipe(
      tap(_ => console.log(`fetched movie imdbId=${imdbId}`)),
      catchError(this.handleError<Movie>(`getMovie imdbId=${imdbId}`))
    );
  }

  searchMovies(term: string): Observable<Movie[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Movie[]>(`${this.moviesUrl}/?name=${term}`).pipe(
      tap(_ => console.log(`found movies matching "${term}"`)),
      catchError(this.handleError<Movie[]>('searchMovies', []))
    );
  }


  addMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.moviesUrl, movie, this.httpOptions).pipe(
      tap((newMovie: Movie) => console.log(`added movie w/ imdbId=${newMovie.imdbId}`)),
      catchError(this.handleError<Movie>('addMovie'))
    );
  }

  deleteMovie(movie: Movie | string): Observable<Movie> {
    const imdbId = typeof movie === 'string' ? movie : movie.imdbId;
    const url = `${this.moviesUrl}/${imdbId}`;

    return this.http.delete<Movie>(url, this.httpOptions).pipe(
      tap(_ => console.log(`deleted movie id=${imdbId}`)),
      catchError(this.handleError<Movie>('deleteMovie'))
    );
  }

  updateMovie(movie: Movie): Observable<any> {
    return this.http.put(this.moviesUrl, movie, this.httpOptions).pipe(
      tap(_ => console.log(`updated movie imdbId=${movie.imdbId}`)),
      catchError(this.handleError<any>('updateMovie'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      return of(result as T);
    };
  }



}
