import { TestBed } from '@angular/core/testing';

import { MoviesOwnedService } from './movies-owned.service';

describe('MoviesOwnedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoviesOwnedService = TestBed.get(MoviesOwnedService);
    expect(service).toBeTruthy();
  });
});
