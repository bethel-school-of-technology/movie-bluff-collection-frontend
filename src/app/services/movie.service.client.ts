import { Injectable } from "@angular/core";
import {Http, Response } from "@angular/http";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {HttpModule} from "@angular/http";
import {Observable, Subject} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Movie} from '../movie';

@Injectable ()
export class MovieServiceClient {
    searchMovieByTitle(title: String) {
        const url = 'http://www.omdbapi.com/?s=' + title + '&apikey=59216712';
        return this.http.get(url)
            .map((response: Response) => {
                return response.json();
            });
    }
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };

    constructor (private http: Http) {}
}
       

