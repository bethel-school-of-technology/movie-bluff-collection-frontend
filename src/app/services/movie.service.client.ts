import { Injectable } from '@angular/core';
// import { Http, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Observable, Subject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
// import { Movie } from '../models/movies/movie';

@Injectable()

export class MovieServiceClient {

    constructor(private http: HttpClient) { }

    options = { withCredentials: true };

    url = 'http://localhost:3001/';

    loggedIn = false;

    searchMovieByTitle(title: string) {
        const url = 'http://www.omdbapi.com/?s=' + title + '&apikey=59216712';
        return this.http.get(url)
            .map((response: Response) => {
                return response;
            });
    }
    // httpOptions = {
    //     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    // };

    // watchedMovies(): Observable<Movie> {
    //     return this.http.get<Movie>(this.url + 'watched-movies', this.options);
    // }
    // ownedMovies(): Observable<Movie> {
    //     return this.http.get<Movie>(this.url + 'owned-movies', this.options);
    // }
    // wishList(): Observable<Movie> {
    //     return this.http.get<Movie>(this.url + 'wish-list', this.options);
    // }

//     watchedMovies(movie: Movie): Observable<string> {
//         return this.http.post<string>(this.url + 'watched-movies', movie, this.options);
//       }
//       ownedMovies(movie: Movie): Observable<string> {
//         return this.http.post<string>(this.url + 'owned-movies', movies, this.options);
//       }
// }


// configUrl = 'assets/config.json';

// getMovie(); {
//     return this.http.get(this.configUrl);
// }
// showConfig() {
//     this.configService.getConfig()
//         .subscribe((data: Config) => this.config = {
//             heroesUrl: data['heroesUrl'],
//             textfile: data['textfile']
//         });
}
