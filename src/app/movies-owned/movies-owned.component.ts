import { MoviesOwned } from './../models/movies-owned';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-owned',
  templateUrl: './movies-owned.component.html',
  styleUrls: ['./movies-owned.component.css']
})
export class MoviesOwnedComponent implements OnInit {
  MoviesOwned = ['Testing movie'];

  constructor() { }

  ngOnInit() {
  }

}
