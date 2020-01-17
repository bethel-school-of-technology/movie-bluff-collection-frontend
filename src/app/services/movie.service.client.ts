import { Injectable } from '@angular/core';
import {Http, Response } from '@angular/http';
import {HttpModule} from '@angular/http';
import {Observable, Subject} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable ()
export class MovieServiceClient {
    searchMovieByTitle(title: String) {
        const url = 'http://www.omdbapi.com/?s=' + title + '&apikey=59216712';
        return this.http.get(url)
            .map((response: Response) => {
                return response.json();
            });
    }
    constructor(private http: Http) {}

    addWatched() {

    };

    addWish() {

    };

    addOwned() {

    };
}
